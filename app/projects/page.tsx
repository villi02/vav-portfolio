import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import LiveProjects from "@/components/LiveProjects";
import type { Stats } from "@/components/ProjectMetrics";
import { archivedProjects } from "@/data/project-archive";
import { getFallbackStats } from "@/lib/project-stats";
import "./projects.css";

export const metadata: Metadata = { title: "Projects | VAV", description: "Independent student tools, experiments, and selected projects by Vilhjalmur Arnar Vilhjalmsson." };
export default function ProjectsPage() {
  return <div className="projects-page">
    <header className="projects-intro">
      <div className="section-eyebrow"><span />SELECTED WORK</div>
      <h1>Ideas, built<br /><span>for the real world.</span></h1>
      <p>A collection of things I’ve built — from tools for everyday student life to experiments in code, data, and AI.</p>
      <a href="#live-projects" className="intro-link">Explore the projects <span aria-hidden="true">↓</span></a>
      <div className="intro-decoration" aria-hidden="true">&lt;/&gt;</div>
    </header>
    <section id="live-projects" aria-labelledby="live-heading">
      <div className="section-heading"><div><span className="section-eyebrow">BUILT TO BE USED</span><h2 id="live-heading">Out in the world<span className="section-count">02</span></h2></div><p>Two independent tools for NTNU students.</p></div>
      <LiveProjects initialStats={getFallbackStats() as Stats} />
      <p className="metrics-explainer">Visitors are measured by Google Analytics. Saved schedules are a measure of usage, not unique people. Counts marked “+” are rounded-down snapshots.</p>
    </section>
    <section className="project-archive" aria-labelledby="archive-heading">
      <div className="section-heading"><div><span className="section-eyebrow">MORE EXPLORATIONS</span><h2 id="archive-heading">The project archive<span className="section-count">{archivedProjects.length}</span></h2></div><p>Coursework, collaborations, and side projects.</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{archivedProjects.map(project => <ProjectCard key={project.title} {...project} />)}</div>
    </section>
  </div>;
}
