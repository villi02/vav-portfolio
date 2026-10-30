import type { Metadata } from "next";
import Link from "next/link";
import FinancialEmpireTour from "@/components/FinancialEmpireTour";
import "../../projects.css";
import "../game.css";

export const metadata: Metadata = {
  title: "Financial Empire — Guided Preview | VAV",
  description: "A four-chapter screenshot tour of Financial Empire’s office, research, people, and fund management prototype.",
};

export default function FinancialEmpireDemoPage() {
  return <div className="projects-page game-page">
    <Link href="/projects/financial-empire" className="back-link">← Financial Empire</Link>
    <header className="detail-header tour-header"><span className="section-eyebrow">FINANCIAL EMPIRE / GUIDED PREVIEW</span><h1>Inside the firm.</h1><p>Four chapters from a game in the making.</p><p className="tour-disclaimer">An interactive screenshot tour of development builds. Gameplay is not running in your browser.</p></header>
    <FinancialEmpireTour />
  </div>;
}
