import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/works/project-card";
export const metadata: Metadata = { title: "Works", description: "Editable sample project entries for the portfolio." };
export default function WorksPage() { return <><section className="page-top"><div className="shell"><div className="eyebrow">Sample project entries · replace before publishing</div><h1>Work in progress.<br/>Ideas made real.</h1><p className="muted" style={{ maxWidth: 590, margin: 0 }}>These editable case study examples show the intended layout. Replace them with your own project details, screenshots, and links.</p></div></section><section className="section" style={{ paddingTop: 55 }}><div className="shell works-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>{projects.map((p,i)=><ProjectCard key={p.slug} project={p} index={i}/>)}</div></section></>; }
