"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/profile";

const links = [{ href: "/", label: "Home" }, { href: "/about", label: "About" }, { href: "/works", label: "Works" }, { href: "/contact", label: "Contact" }];
export function Navbar() {
  const path = usePathname(); const [open, setOpen] = useState(false);
  return <header style={{ borderBottom: "1px solid var(--line)", background: "rgba(255,255,255,.96)", position: "sticky", top: 0, zIndex: 20, backdropFilter: "blur(10px)" }}>
    <div className="shell" style={{ height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <Link href="/" aria-label={`${profile.name} home`} style={{ display: "flex", alignItems: "center", gap: 11, fontWeight: 700 }}><span style={{ width: 34, height: 34, background: "var(--ink)", color: "white", display: "grid", placeItems: "center", fontSize: 12, letterSpacing: ".06em" }}>{profile.initials}</span><span>{profile.name}</span></Link>
      <nav aria-label="Main navigation" className="desktop-nav" style={{ display: "flex", gap: 34 }}>{links.map(l => <Link key={l.href} href={l.href} aria-current={path === l.href || (l.href !== "/" && path.startsWith(l.href)) ? "page" : undefined} className={`nav-link ${(path === l.href || (l.href !== "/" && path.startsWith(l.href))) ? "active" : ""}`}>{l.label}</Link>)}</nav>
      <button className="mobile-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)} style={{ display: "none", border: 0, background: "none", padding: 8 }}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav aria-label="Mobile navigation" className="mobile-nav shell" style={{ paddingBottom: 18, display: "grid", gap: 16 }}>{links.map(l => <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={`nav-link ${path === l.href ? "active" : ""}`}>{l.label}</Link>)}</nav>}
    
  </header>;
}
