"use client";
import type { ProjectSlug } from "@/data/live-projects";
import ProjectMetrics, { useProjectStats, type Stats } from "./ProjectMetrics";
export default function ProjectDetailMetrics({ slug, initialStats }: { slug: ProjectSlug; initialStats: Stats }) {
  const stats = useProjectStats(initialStats);
  return <ProjectMetrics stats={stats[slug]} />;
}
