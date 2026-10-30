"use client";

import Image from "next/image";
import Link from "next/link";
import { liveProjects } from "@/data/live-projects";
import ProjectMetrics, { useProjectStats, type Stats } from "./ProjectMetrics";

export default function LiveProjects({ initialStats }: { initialStats: Stats }) {
  const stats = useProjectStats(initialStats);
  return <div className="live-project-grid">
    {liveProjects.map((project, index) => <article className={`live-project-card accent-${project.accent}`} key={project.slug}>
      <Link href={`/projects/${project.slug}`} className="project-preview" aria-label={`Explore ${project.name}`}>
        <div className="preview-bar"><span /><span /><span /><span className="preview-domain">{new URL(project.url).hostname}</span><span className="preview-arrow">↗</span></div>
        <Image src={project.image} alt={`${project.name} landing page`} width={1280} height={720} priority className="preview-image" />
      </Link>
      <div className="live-project-body">
        <div className="project-kicker"><span>0{index + 1} / STUDENT TOOLS</span><span className="project-live"><i />Live project</span></div>
        <h3><Link href={`/projects/${project.slug}`}>{project.name}<span aria-hidden="true">↗</span></Link></h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">{project.stack.slice(0, 4).map(tag => <span key={tag}>{tag}</span>)}</div>
        <ProjectMetrics stats={stats[project.slug]} />
        <div className="project-card-actions"><Link href={`/projects/${project.slug}`}>Explore project <span aria-hidden="true">→</span></Link><a href={project.url} target="_blank" rel="noopener noreferrer">Visit website ↗</a></div>
      </div>
    </article>)}
  </div>;
}
