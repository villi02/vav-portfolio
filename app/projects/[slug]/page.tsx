import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { liveProjects } from "@/data/live-projects";
import { getFallbackStats } from "@/lib/project-stats";
import ProjectDetailMetrics from "@/components/ProjectDetailMetrics";
import type { Stats } from "@/components/ProjectMetrics";
import "../projects.css";

export function generateStaticParams() { return liveProjects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = liveProjects.find(project => project.slug === slug);
  return { title: project ? `${project.name} | VAV Projects` : "Project not found", description: project?.description };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = liveProjects.find(project => project.slug === slug);
  if (!project) notFound();
  return <article className={`projects-page project-detail accent-${project.accent}`}>
    <Link href="/projects" className="back-link">← All projects</Link>
    <header className="detail-header"><span className="section-eyebrow">{project.eyebrow}</span><h1>{project.name}</h1><p>{project.description}</p><a className="visit-button" href={project.url} target="_blank" rel="noopener noreferrer">Visit website <span aria-hidden="true">↗</span></a></header>
    <figure className="detail-preview"><Image src={project.image} alt={`${project.name} landing page`} width={1280} height={720} priority /><figcaption>{project.imageNote}</figcaption></figure>
    <div className="detail-grid"><div className="detail-story">
      <section><span className="section-eyebrow">THE IDEA</span><h2>A little less friction.</h2><p>{project.story}</p></section>
      <section><h2>What you can do</h2><ul className="feature-list">{project.features.map(feature => <li key={feature}><span aria-hidden="true">↗</span>{feature}</li>)}</ul></section>
      <section><span className="section-eyebrow">UNDER THE HOOD</span><h2>The stack</h2><p>{project.architecture}</p><div className="project-tags detail-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></section>
      {project.context && <section><h2>{project.context}</h2><p>{project.contextNote}</p></section>}
      {project.ai && <section><h2>AI in the process</h2><h3>{project.ai}</h3><p>{project.aiNote}</p></section>}
    </div><aside className="detail-aside">
      <div className="detail-facts"><span className="section-eyebrow">PROJECT NOTES</span><dl><dt>Development</dt><dd>{project.period}</dd></dl><p>{project.periodNote}</p><dl><dt>Source code</dt><dd>Private repository</dd></dl></div>
      <div className="detail-facts"><span className="section-eyebrow">IN USE</span><ProjectDetailMetrics slug={project.slug} initialStats={getFallbackStats() as Stats} /><p>Visitors: Google Analytics total users since January 2025. Analytics can take time to process recent activity.{project.slug === "ntnu-timeplan" ? " Saved schedules count stored timetables, not unique people." : ""} “+” denotes a rounded-down snapshot.</p></div>
    </aside></div>
    <div className="detail-bottom"><p>More ideas, more experiments.</p><Link href="/projects">Back to all projects →</Link></div>
  </article>;
}
