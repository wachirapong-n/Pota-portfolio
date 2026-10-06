import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Code2, Layers3, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/works/project-card";

const paths = [
  { title: "About me", description: "My background, education, interests, and the skills I’m developing.", href: "/about", cta: "Explore about", number: "01", icon: Code2 },
  { title: "Selected work", description: "A closer look at the projects and ideas I’ve brought to life.", href: "/works", cta: "View projects", number: "02", icon: Layers3 },
  { title: "Get in touch", description: "Have an opportunity, a question, or an idea to work on together?", href: "/contact", cta: "Contact me", number: "03", icon: Mail },
];
export default function Home() { return <>
  <section style={{ background: "var(--mist)", borderBottom: "1px solid var(--line)" }}><div className="shell home-hero" style={{ minHeight: 570, paddingBlock: 76, display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 60, alignItems: "center" }}>
    <div><div className="eyebrow" style={{ display: "flex", alignItems: "center", gap: 9 }}><span style={{ display: "inline-block", width: 23, height: 1, background: "var(--blue)" }}/>E-Portfolio <span style={{ color: "#94a3b8", fontWeight: 400, letterSpacing: ".04em" }}>· 2026</span></div>
      <h1 className="display" style={{ margin: "24px 0 16px" }}>Hello, I’m<br/><span style={{ color: "var(--blue)" }}>{profile.name}.</span></h1>
      <p style={{ fontSize: 16, fontWeight: 600, margin: "0 0 17px", color: "#334155" }}>{profile.role}</p>
      <p className="muted" style={{ maxWidth: 540, fontSize: 15, margin: 0 }}>{profile.bio}</p>
      <div style={{ borderLeft: "2px solid #a9bee8", paddingLeft: 16, margin: "24px 0 27px", maxWidth: 520 }}><div className="eyebrow" style={{ fontSize: 9 }}>What I’m working toward</div><p className="muted" style={{ margin: "7px 0 0", fontSize: 13 }}>{profile.objective}</p></div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}><Link className="btn btn-primary" href="/works">Explore my work <ArrowRight size={16}/></Link><Link className="btn btn-outline" href="/contact">Let’s connect <ArrowUpRight size={15}/></Link></div>
    </div>
    <div aria-label={`Profile placeholder for ${profile.name}`} role="img" className="home-portrait" style={{ height: 380, maxWidth: 360, justifySelf: "end", width: "100%", background: "#e1e8f0", position: "relative", display: "grid", placeItems: "center" }}><div style={{ position: "absolute", inset: 20, border: "1px solid #bdcad9" }}/><div style={{ width: 190, height: 190, borderRadius: "50%", background: "#cbd6e3", display: "grid", placeItems: "center", color: "#61758b", fontSize: 48, fontWeight: 700, letterSpacing: "-.06em" }}>{profile.initials}</div><div style={{ position: "absolute", bottom: 34, left: 34, background: "white", padding: "12px 15px", fontSize: 10, letterSpacing: ".12em", fontWeight: 700, color: "#52657b" }}>PROFILE PHOTO · REPLACE ME</div></div>
  </div></section>
  <section className="section"><div className="shell"><div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 24, marginBottom: 35 }}><div><div className="eyebrow">A little more about me</div><h2 className="section-title">Start wherever you like.</h2></div><span className="muted" style={{ fontSize: 12, display: "flex", gap: 6, alignItems: "center" }}>Explore the portfolio <ArrowDownRight size={15}/></span></div>
   <div className="home-paths" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>{paths.map(({ title, description, href, cta, number, icon: Icon })=><Link key={href} href={href} className="card" style={{ padding: "24px 22px", minHeight: 230, display: "flex", flexDirection: "column", color: "inherit" }}><div style={{ display: "flex", justifyContent: "space-between", color: "#8292a5" }}><span className="eyebrow" style={{ fontSize: 10 }}>/{number}</span><Icon size={19} color="var(--blue)" strokeWidth={1.6}/></div><h3 style={{ fontSize: 22, letterSpacing: "-.035em", margin: "29px 0 8px" }}>{title}</h3><p className="muted" style={{ fontSize: 13, margin: "0 0 20px" }}>{description}</p><span style={{ marginTop: "auto", fontSize: 12, fontWeight: 700, color: "var(--blue)", display: "flex", gap: 7, alignItems: "center" }}>{cta}<ArrowRight size={14}/></span></Link>)}</div>
  </div></section>
  <section style={{ background: "var(--mist)", paddingBlock: 76 }}><div className="shell"><div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 20, marginBottom: 28 }}><div><div className="eyebrow">A few things I’ve made</div><h2 className="section-title" style={{ marginBottom: 0 }}>Selected work</h2></div><Link href="/works" className="nav-link" style={{ display: "flex", gap: 8, alignItems: "center", fontWeight: 700 }}>All projects <ArrowRight size={14}/></Link></div><div className="project-preview-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>{projects.slice(0,3).map((p,i)=><ProjectCard key={p.slug} project={p} index={i}/>)}</div></div></section>
  
 </>; }
