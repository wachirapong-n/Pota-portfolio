import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

const links = [{ href: "/", label: "Home" }, { href: "/about", label: "About" }, { href: "/works", label: "Works" }, { href: "/contact", label: "Contact" }];

export function Footer() {
  return <footer className="bg-ink py-12 text-white">
    <div className="mx-auto w-full max-w-[1120px] px-6 max-sm:px-[18px]">
      <div className="flex flex-wrap justify-between gap-9 pb-9">
        <div className="max-w-[330px]"><div className="text-lg font-bold">{profile.name}</div><p className="mt-2 text-[13px] leading-7 text-slate-300">Computer science student building useful, thoughtful digital experiences.</p></div>
        <nav aria-label="Footer navigation" className="flex flex-wrap items-start gap-6">{links.map(link => <Link key={link.href} href={link.href} className="text-[13px] text-slate-200 transition-colors hover:text-white">{link.label}</Link>)}</nav>
        <div className="flex gap-5">{profile.socials.map(social => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={`${social.label} (opens in new tab)`} className="flex items-center gap-1 text-[13px] text-slate-200 transition-colors hover:text-white">{social.label}<ArrowUpRight size={13}/></a>)}</div>
      </div>
      <div className="flex flex-wrap justify-between gap-2 border-t border-slate-600 pt-5 text-[11px] text-slate-400"><span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span><span>Designed with intention.</span></div>
    </div>
  </footer>;
}
