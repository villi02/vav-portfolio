import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { financialEmpire as game } from "@/data/financial-empire";
import "../projects.css";
import "./game.css";

export const metadata: Metadata = {
  title: "Financial Empire | VAV",
  description: "A 3D hedge-fund management game in development. Explore the goal, core mechanics, and screenshots from the playable prototype.",
};

export default function FinancialEmpirePage() {
  return <div className="projects-page game-page">
    <Link href="/projects" className="back-link">← All projects</Link>
    <header className="detail-header">
      <span className="section-eyebrow">A FIRM OF YOUR OWN</span>
      <h1>{game.name}</h1>
      <p>{game.description}</p>
      <div className="game-header-actions"><Link href="/projects/financial-empire/demo" className="visit-button">Take the guided tour <span aria-hidden="true">→</span></Link><span className="game-stage"><i aria-hidden="true" />{game.stage}</span></div>
    </header>
    <figure className="detail-preview game-hero">
      <Image src={game.tour[2].image} alt={game.tour[2].alt} width={1440} height={900} sizes="(max-width: 1200px) 100vw, 1136px" priority />
      <figcaption>In-game capture · October 2026 development build · Visuals and balance are evolving.</figcaption>
    </figure>
    <div className="detail-grid">
      <div className="detail-story">
        <section><span className="section-eyebrow">THE INTENDED GOAL</span><h2>Build an institution that lasts.</h2><p>The ambition is a single-player management game where the organisation matters as much as the market. Start small, bring together talented people, and grow a firm that can outlive its first successful strategy. Office space, research, operating costs, and investor trust all shape the decisions you make.</p><p className="game-paragraph">Everything happens in fictional markets, with simulated money. The focus is running the business and understanding the consequences of your choices.</p></section>
        <section><span className="section-eyebrow">THE CORE LOOP</span><h2>People. Ideas. Capital. Repeat.</h2><div className="game-mechanics">{game.tour.map((chapter, index) => <article key={chapter.label}><span className="mechanic-number">0{index + 1}</span><div><h3>{chapter.label}</h3><p>{chapter.description}</p></div></article>)}</div></section>
        <section><span className="section-eyebrow">WHERE IT IS NOW</span><h2>A playable foundation.</h2><p>The current prototype has a sandbox with Garage and Boutique starts, office construction, hiring, strategy research and trading, and month-end accounting. Recent development has focused on the people in the office, their animations, and workplace amenities.</p><p className="game-paragraph">It is still in pre-production: systems, balance, and presentation are being refined. A broader campaign and a commercial desktop release are longer-term ambitions, with no release date announced.</p></section>
        <section><span className="section-eyebrow">THE STACK</span><h2>Built for a living simulation.</h2><p>Godot powers the 3D office and interface, with C# and .NET handling the simulation. A separate simulation layer supports repeatable scenarios and testing, while JSON defines game content.</p><div className="project-tags detail-tags">{game.stack.map(item => <span key={item}>{item}</span>)}</div></section>
        {game.context && <section><h2>Project context</h2><p>{game.context}</p></section>}
        {game.ai && <section><h2>AI use</h2><p>{game.ai}</p></section>}
      </div>
      <aside>
        <div className="detail-facts"><span className="section-eyebrow">PROJECT NOTES</span><dl><dt>Stage</dt><dd>{game.stage}</dd><dt>Development</dt><dd>{game.period}</dd><dt>Genre</dt><dd>3D management simulation</dd><dt>Platform goal</dt><dd>macOS & Windows</dd><dt>Preview available</dt><dd>Guided screenshot tour</dd></dl><p>Financial Empire is a working title. Screenshots show development builds, including earlier interfaces.</p></div>
        <div className="game-tour-invite"><span className="section-eyebrow">STEP INSIDE</span><h2>Four decisions.<br />One growing firm.</h2><p>Explore the prototype through annotated gameplay screenshots.</p><Link href="/projects/financial-empire/demo">Start the tour →</Link></div>
      </aside>
    </div>
    <section className="game-gallery" aria-labelledby="gallery-heading"><span className="section-eyebrow">FROM THE PROTOTYPE</span><h2 id="gallery-heading">A closer look</h2><div>{[game.tour[1], game.tour[3]].map(chapter => <figure key={chapter.image}><a href={chapter.image} target="_blank" rel="noreferrer" aria-label={`Open full-size screenshot: ${chapter.label}`}><Image src={chapter.image} alt={chapter.alt} width={1440} height={900} sizes="(max-width: 767px) 100vw, 550px" /></a><figcaption><strong>{chapter.label}</strong>{chapter.capture}</figcaption></figure>)}</div></section>
    <footer className="detail-bottom"><Link href="/projects">← Back to all projects</Link><Link href="/projects/financial-empire/demo">Explore the guided preview →</Link></footer>
  </div>;
}
