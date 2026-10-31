import Image from "next/image";
import Link from "next/link";
import { financialEmpire as game } from "@/data/financial-empire";

export default function FinancialEmpireCard() {
  return <section className="game-section" aria-labelledby="game-heading">
    <div className="section-heading">
      <div><span className="section-eyebrow">WORK IN PROGRESS</span><h2 id="game-heading">Behind the build<span className="section-count">01</span></h2></div>
    </div>
    <article className="game-card">
      <Link className="game-card-image" href="/projects/financial-empire" aria-label="Explore Financial Empire">
        <Image src={game.tour[2].image} alt={game.tour[2].alt} width={1440} height={900} sizes="(max-width: 767px) 100vw, 650px" />
        <span className="game-image-note">IN-GAME DEVELOPMENT CAPTURE</span>
      </Link>
      <div className="game-card-copy">
        <span className="game-stage"><i aria-hidden="true" />Playable prototype</span>
        <h3><Link href="/projects/financial-empire">Financial Empire</Link></h3>
        <p>{game.description}</p>
        <div className="project-tags"><span>Management sim</span><span>Godot / C#</span><span>In development</span></div>
        <div className="game-actions"><Link href="/projects/financial-empire">Explore the project <span aria-hidden="true">↗</span></Link><Link href="/projects/financial-empire/demo">Take the tour <span aria-hidden="true">→</span></Link></div>
      </div>
    </article>
  </section>;
}
