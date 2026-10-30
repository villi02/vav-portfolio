// Server-only implementation: imported by the API route, never by a client component.
import { createSign } from "node:crypto";
import { projectFallbacks } from "../data/project-fallbacks.mjs";

export function roundDown(value) {
  if (value === null || value === 0) return value;
  const step = value < 100 ? 10 : value < 1000 ? 50 : 10 ** (Math.floor(Math.log10(value)) - 1);
  return Math.floor(value / step) * step;
}

export function parseCount(value) {
  if (typeof value !== "number" && (typeof value !== "string" || !/^\d+$/.test(value))) return null;
  const number = Number(value);
  return Number.isSafeInteger(number) && number >= 0 ? number : null;
}

const prefixes = { "ntnu-utveksling": "UTVEKSLING", "ntnu-timeplan": "TIMEPLAN" };
const ttl = 15 * 60 * 1000;

export function getFallbackStats(env = process.env) {
  const metric = (prefix, kind) => ({ value: roundDown(parseCount(env[`${prefix}_FALLBACK_${kind}`] ?? projectFallbacks[prefix]?.[kind])), updatedAt: projectFallbacks[prefix]?.recordedAt ?? null, status: "fallback" });
  return Object.fromEntries(Object.entries(prefixes).map(([slug, prefix]) => [slug, { visitors: metric(prefix, "VISITORS"), schedules: slug === "ntnu-timeplan" ? metric(prefix, "SCHEDULES") : null }]));
}

// Factory isolates state for tests; requests share one instance in each server process.
export function createStatsService({ env = process.env, fetcher = fetch, now = Date.now } = {}) {
  const cache = new Map();
  let token;
  let tokenRequest;

  async function accessToken() {
    if (token?.expires > now()) return token.value;
    if (tokenRequest) return tokenRequest;
    tokenRequest = (async () => {
      const email = env.GA_CLIENT_EMAIL;
      const key = env.GA_PRIVATE_KEY?.replace(/\\n/g, "\n");
      if (!email || !key) throw new Error("Analytics is not configured");
      const issued = Math.floor(now() / 1000);
      const encode = (v) => Buffer.from(JSON.stringify(v)).toString("base64url");
      const body = `${encode({ alg: "RS256", typ: "JWT" })}.${encode({ iss: email, scope: "https://www.googleapis.com/auth/analytics.readonly", aud: "https://oauth2.googleapis.com/token", iat: issued, exp: issued + 3600 })}`;
      const signature = createSign("RSA-SHA256").update(body).sign(key, "base64url");
      const response = await fetcher("https://oauth2.googleapis.com/token", {
        method: "POST", cache: "no-store", signal: AbortSignal.timeout(5000),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: `${body}.${signature}` }),
      });
      if (!response.ok) throw new Error("Analytics authentication failed");
      const data = await response.json();
      if (typeof data.access_token !== "string" || !data.access_token) throw new Error("Invalid token");
      token = { value: data.access_token, expires: now() + 50 * 60 * 1000 };
      return token.value;
    })();
    try { return await tokenRequest; } finally { tokenRequest = undefined; }
  }

  async function visitors(prefix) {
    const property = env[`${prefix}_GA_PROPERTY_ID`];
    const startDate = env[`${prefix}_GA_START_DATE`];
    if (!/^\d+$/.test(property || "") || !/^\d{4}-\d{2}-\d{2}$/.test(startDate || "")) throw new Error("Analytics is not configured");
    const response = await fetcher(`https://analyticsdata.googleapis.com/v1beta/properties/${property}:runReport`, {
      method: "POST", cache: "no-store", signal: AbortSignal.timeout(5000),
      headers: { Authorization: `Bearer ${await accessToken()}`, "Content-Type": "application/json" },
      body: JSON.stringify({ dateRanges: [{ startDate, endDate: "today" }], metrics: [{ name: "totalUsers" }] }),
    });
    if (!response.ok) throw new Error("Analytics request failed");
    const data = await response.json();
    // A valid empty report means zero; malformed payloads must use the fallback.
    const raw = data.rows?.[0]?.metricValues?.[0]?.value;
    const value = data.rowCount === 0 && data.metricHeaders?.[0]?.name === "totalUsers" ? 0 : parseCount(raw);
    if (value === null) throw new Error("Invalid visitor count");
    return value;
  }

  async function schedules() {
    const url = env.TIMEPLAN_SUPABASE_URL;
    const key = env.TIMEPLAN_SUPABASE_KEY;
    if (!url || !key) throw new Error("Schedules are not configured");
    const base = new URL(url);
    if (base.protocol !== "https:") throw new Error("HTTPS required");
    const response = await fetcher(new URL("/rest/v1/schedules?select=id", base), {
      method: "HEAD", cache: "no-store", signal: AbortSignal.timeout(5000),
      headers: { apikey: key, ...(key.startsWith("eyJ") ? { Authorization: `Bearer ${key}` } : {}), Prefer: "count=exact" },
    });
    if (!response.ok) throw new Error("Schedule count failed");
    const range = response.headers.get("content-range");
    const value = range?.includes("/") ? parseCount(range.split("/")[1]) : null;
    if (value === null) throw new Error("Invalid schedule count");
    return value;
  }

  async function metric(key, prefix, kind, source) {
    let entry = cache.get(key);
    if (!entry) { entry = { retryAt: 0 }; cache.set(key, entry); }
    if (entry.pending) return entry.pending;
    if (entry.retryAt > now()) return entry.result;
    entry.pending = (async () => {
      try {
        const value = await source();
        entry.lastGood = { value, updatedAt: new Date(now()).toISOString() };
        entry.result = { ...entry.lastGood, status: "live" };
        entry.retryAt = now() + ttl;
      } catch {
        // Never return upstream errors, tokens, database URLs, or row data.
        entry.result = entry.lastGood
          ? { ...entry.lastGood, value: roundDown(entry.lastGood.value), status: "stale" }
          : { value: roundDown(parseCount(env[`${prefix}_FALLBACK_${kind}`] ?? projectFallbacks[prefix]?.[kind])), updatedAt: projectFallbacks[prefix]?.recordedAt ?? null, status: "fallback" };
        entry.retryAt = now() + 60_000;
      }
      return entry.result;
    })();
    try { return await entry.pending; } finally { entry.pending = undefined; }
  }

  return async function getStats() {
    const entries = await Promise.all(Object.entries(prefixes).map(async ([slug, prefix]) => {
      const [visitorCount, scheduleCount] = await Promise.all([
        metric(`${slug}:visitors`, prefix, "VISITORS", () => visitors(prefix)),
        slug === "ntnu-timeplan" ? metric(`${slug}:schedules`, prefix, "SCHEDULES", schedules) : Promise.resolve(null),
      ]);
      return [slug, { visitors: visitorCount, schedules: scheduleCount }];
    }));
    return Object.fromEntries(entries);
  };
}

export const getProjectStats = createStatsService();
