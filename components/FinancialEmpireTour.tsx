"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { financialEmpire as game } from "@/data/financial-empire";

export default function FinancialEmpireTour() {
  const [step, setStep] = useState(0);
  const current = game.tour[step];
  return <div className="game-tour">
    <nav className="tour-steps" aria-label="Tour chapters">
      {game.tour.map((chapter, index) => <button key={chapter.label} type="button" aria-current={step === index ? "step" : undefined} aria-controls="tour-chapter" onClick={() => setStep(index)}><span>0{index + 1}</span>{chapter.label}</button>)}
    </nav>
    <div id="tour-chapter" className="tour-chapter">
      <figure>
        <Image src={current.image} alt={current.alt} width={1440} height={900} sizes="(max-width: 767px) 100vw, 850px" priority={step === 0} />
        <figcaption>{current.capture} · Fictional game data</figcaption>
      </figure>
      <div className="tour-copy" aria-live="polite" aria-atomic="true">
        <span className="section-eyebrow">CHAPTER 0{step + 1} / 04</span>
        <h2>{current.title}</h2>
        <p>{current.description}</p>
        <blockquote><span>THE DECISION</span>{current.decision}</blockquote>
      </div>
    </div>
    <div className="tour-controls">
      <button type="button" disabled={step === 0} onClick={() => setStep(step - 1)}>← Previous</button>
      <span>{step + 1} of {game.tour.length}</span>
      {step < game.tour.length - 1
        ? <button type="button" onClick={() => setStep(step + 1)}>Next chapter →</button>
        : <Link href="/projects/financial-empire">Back to project ↗</Link>}
    </div>
  </div>;
}
