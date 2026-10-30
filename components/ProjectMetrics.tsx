"use client";

import { useEffect, useState } from "react";
import type { ProjectSlug } from "@/data/live-projects";

type Metric = { value: number | null; status: "live" | "stale" | "fallback"; updatedAt: string | null };
export type ProjectStats = { visitors: Metric; schedules: Metric | null };
export type Stats = Record<ProjectSlug, ProjectStats>;

export function useProjectStats(initial: Stats) {
  const [stats, setStats] = useState(initial);
  useEffect(() => {
    let request: AbortController | null = null;
    let stopped = false;
    const refresh = async () => {
      if (request) return;
      request = new AbortController();
      const timeout = setTimeout(() => request?.abort(), 12_000);
      try {
        const response = await fetch("/api/project-stats", { signal: request.signal });
        if (!response.ok) throw new Error("Unavailable");
        const next: Stats = await response.json();
        if (!next["ntnu-timeplan"]?.visitors || !next["ntnu-utveksling"]?.visitors) throw new Error("Invalid response");
        setStats(next);
      } catch {
        if (stopped) return;
        // The server-rendered snapshot stays visible even if the endpoint is offline.
        setStats(initial);
      } finally {
        clearTimeout(timeout);
        request = null;
      }
    };
    void refresh();
    const timer = setInterval(refresh, 60_000);
    return () => { stopped = true; request?.abort(); clearInterval(timer); };
  }, [initial]);
  return stats;
}

export default function ProjectMetrics({ stats }: { stats: ProjectStats }) {
  const metrics = [{ label: "Total visitors", metric: stats.visitors }, ...(stats.schedules ? [{ label: "Saved schedules", metric: stats.schedules }] : [])];
  return <div className="project-metrics" aria-label="Project usage">
    {metrics.map(({ label, metric }) => <div key={label}>
      <div className="metric-number">{metric.value === null ? "—" : `${metric.value.toLocaleString("en-GB")}${metric.status === "live" ? "" : "+"}`}</div>
      <div className="metric-label">{label}</div>
      <div className="metric-status" title={metric.updatedAt ? `Last recorded: ${new Date(metric.updatedAt).toISOString().slice(0, 10)}` : undefined}>
        <span className={`metric-dot ${metric.status === "live" ? "is-live" : ""}`} />
        {metric.value === null ? "Not available yet" : metric.status === "live" ? "Auto-updated" : "Last recorded"}
      </div>
    </div>)}
  </div>;
}
