# Projects page and counters

The demo is on branch `codex/live-projects-demo`, at `/projects`. The featured cards link to `/projects/ntnu-utveksling` and `/projects/ntnu-timeplan`. Existing projects remain in the archive. Nothing has been deployed or pushed, and the private project repositories are not linked.

## Content

Edit `data/live-projects.ts` to change descriptions, dates, stack, URLs, or images. Leave `context`, `contextNote`, `ai`, and `aiNote` empty until ready: the corresponding sections are omitted entirely. Development dates are inferred from local commit history and should be reviewed before publication. The current public exchange application matches the newer React/Vite implementation, rather than the initial Next.js prototype.

The images in `public/projects/ntnu-{utveksling,timeplan}.jpg` are screenshots of the public landing pages, captured 14 October 2026. No private source files, repository links, database rows, or credentials are included in the public project content.

## Verified fallback snapshot

Read on 14 October 2026:

| Project | Source measure | Observed | Displayed fallback |
| --- | --- | ---: | ---: |
| NTNU Utveksling | GA4 Total users, 1 January 2025–13 October 2026 | 1,423 | 1,400+ |
| NTNU Timeplan | GA4 Total users, same period | 426 | 400+ |
| NTNU Timeplan | Exact count of saved schedule rows in deployed Supabase | 178 | 150+ |

These are different measurements. A saved timetable is not a unique person, and no separate account/user count is claimed for Utveksling. GA totals reflect the property's reporting identity, consent, and tracking coverage. They are not page views or people online right now. Do not sum daily unique users to calculate the lifetime total.

Public snapshots live in `data/project-fallbacks.mjs`. Update the values and `recordedAt` after checking a newer reading; no background job modifies source files. Rounding is downward: below 100 in tens, 100–999 in fifties, and larger counts to two significant digits (e.g. 6,476 → 6,400; 12,543 → 12,000). Fallback and stale values carry '+'. A missing/unverified value displays an em dash, never an invented zero.

## How automatic updates work

The browser calls `/api/project-stats` on load and every minute. That server route fetches:

- GA4 `totalUsers` using one date range from the configured start date through today, without dimensions.
- Supabase's `schedules` row count using a HEAD request and `Prefer: count=exact`, so no rows are downloaded.

Successful counts are cached independently for 15 minutes per running server process. Concurrent requests share work. A failed source retains its last good value, rounded down, or uses the checked-in snapshot if there is no previous reading. Failed sources retry after one minute; fetches have five-second timeouts. An unavailable API leaves the rendered snapshot visible. The public endpoint is cacheable for 60 seconds and returns only counts, status, and timestamps.

The in-memory cache does not survive restarts or span serverless workers. The hardcoded snapshot is the persistent safety net. For very high traffic or a strict global request budget, move the cache to a shared store or a scheduled aggregation service. GA reporting has its own processing delay, so 'auto-updated' is more accurate than 'realtime'.

## Enable live visitors

The demo's ignored `.env.local` has the numeric property IDs and verified Timeplan connection. It deliberately has no Google private key. A browser login cannot act as persistent server authentication.

1. Enable the Google Analytics Data API in a Google Cloud project.
2. Create a dedicated service account and grant its email **Viewer** access to only the two relevant GA4 properties.
3. Add `GA_CLIENT_EMAIL` and `GA_PRIVATE_KEY` to `.env.local` for development, and to the hosting provider's server environment for deployment. The private key supports escaped `\n` line breaks. Never put it in a `NEXT_PUBLIC_` variable or a committed file.
4. Set `UTVEKSLING_GA_PROPERTY_ID`, `TIMEPLAN_GA_PROPERTY_ID`, and both `*_GA_START_DATE` values. These are numeric property IDs, not `G-...` measurement IDs. The verified reporting start is `2025-01-01` for both. Keep the detail page's reporting-period text consistent if this changes.
5. Restart the server, then inspect `/api/project-stats`. A successful source returns `status: "live"`; the UI says 'Auto-updated'. Check the displayed totals against the same GA4 date range.

Use `.env.projects.example` as a template. No new permissions or Google credentials have been created by this change.

## Database connection

Set `TIMEPLAN_SUPABASE_URL` and `TIMEPLAN_SUPABASE_KEY` only in the server environment. The deployed app currently uses a publishable key with access allowed by its existing RLS policy; the local repository's old database URLs did not resolve. The query counts all schedule rows, including empty/test timetables. Filtering those would change the definition and should be an explicit decision.

For stronger isolation, provide a dedicated read-only aggregate endpoint in the Timeplan backend and adapt `schedules()` to call it. Do not grant broader database permissions just for a counter. RLS-filtered counts can look valid while being incomplete: verify any replacement key against the database's actual total.

## Verification

- Counter tests: `node --test tests/projectStats.test.mjs`
- Existing tests: `npm test`
- Demo: `npm run dev -- --hostname 127.0.0.1 --port 3000`
- Production build: currently blocked by pre-existing missing `@azure/openai` and `dotenv` imports in `pages/api/Search.ts`. The projects implementation adds no dependencies.

References: [GA4 API quickstart](https://developers.google.com/analytics/devguides/reporting/data/v1/quickstart), [GA4 metrics](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema), [service account authentication](https://developers.google.com/identity/protocols/oauth2/service-account), [Supabase exact counts](https://supabase.com/docs/reference/javascript/select).
