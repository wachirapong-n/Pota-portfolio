import type { Metadata } from "next";
import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { profile } from "@/data/profile";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with the portfolio owner." };

const details: { icon: LucideIcon; label: string; value: string; href?: string }[] = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: MapPin, label: "Location", value: profile.location },
];

export default function ContactPage() {
  return <>
    <section className="page-top"><div className="shell"><div className="eyebrow">Start a conversation</div><h1>Let’s connect.</h1><p className="muted" style={{ maxWidth: 560, margin: 0 }}>I’m open to internship opportunities, thoughtful collaborations, and conversations about building for the web.</p></div></section>
    <section className="section"><div className="shell contact-grid" style={{ display: "grid", gridTemplateColumns: ".8fr 1.2fr", gap: 78 }}>
      <div><div className="eyebrow">Contact details</div><h2 className="section-title" style={{ fontSize: 30 }}>Reach out directly.</h2><p className="muted" style={{ fontSize: 13, marginBottom: 26 }}>The links below are editable examples. Replace them with your current contact information.</p>
        <div style={{ display: "grid", gap: 20 }}>{details.map(({ icon: Icon, label, value, href }) => <div key={label} style={{ display: "flex", gap: 13, alignItems: "center" }}><span style={{ width: 38, height: 38, background: "var(--mist)", display: "grid", placeItems: "center", color: "var(--blue)" }}><Icon size={17}/></span><div><div style={{ color: "var(--muted)", fontSize: 10, marginBottom: 4 }}>{label}</div>{href ? <a href={href} style={{ fontSize: 13, fontWeight: 600 }}>{value}</a> : <span style={{ fontSize: 13, fontWeight: 600 }}>{value}</span>}</div></div>)}</div>
        <div style={{ display: "flex", gap: 18, marginTop: 28 }}>{profile.socials.map(s => <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="nav-link" style={{ display: "flex", alignItems: "center", gap: 5 }}>{s.label === "GitHub" ? <Github size={15}/> : <Linkedin size={15}/>} {s.label}<ArrowUpRight size={12}/></a>)}</div>
      </div>
      <div><div className="eyebrow">Send a note</div><h2 className="section-title" style={{ fontSize: 30, marginBottom: 22 }}>What’s on your mind?</h2><ContactForm/></div>
    </div></section>
    <section style={{ background: "var(--mist)", paddingBlock: 72 }}><div className="shell"><div className="eyebrow">Find me</div><h2 className="section-title">Faculty location</h2><p className="muted" style={{ marginTop: 0, fontSize: 13 }}>Map embed placeholder — update the location in <code>data/profile.ts</code> to match your university.</p><div style={{ border: "1px solid var(--line)", background: "white", padding: 8, marginTop: 22 }}><iframe title="Map showing the editable university location" src={profile.mapEmbed} width="100%" height="340" style={{ border: 0, display: "block" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div></div></section>
    
  </>;
}
