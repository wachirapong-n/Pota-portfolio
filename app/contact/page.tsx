import type { Metadata } from "next";
import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { profile } from "@/data/profile";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with the portfolio owner." };
const container = "mx-auto w-full max-w-[1120px] px-6 max-sm:px-[18px]";
const details: { icon: LucideIcon; label: string; value: string; href?: string }[] = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: MapPin, label: "Location", value: profile.location },
];

export default function ContactPage() {
  return <>
    <section className="bg-mist py-[76px] max-md:pt-[54px]"><div className={container}><div className="text-[14px] font-bold uppercase tracking-[.16em] text-primary">Start a conversation</div><h1 className="mt-3 mb-4 text-[clamp(40px,6vw,62px)] font-bold tracking-[-.05em]">Let’s connect.</h1><p className="max-w-[560px] text-[16px] leading-7 text-muted">I’m open to internship opportunities, thoughtful collaborations, and conversations about building for the web.</p></div></section>

    <section className="py-[100px] max-md:py-[72px]"><div className={`${container} grid grid-cols-[.8fr_1.2fr] gap-[78px] max-md:grid-cols-1 max-md:gap-12`}>
      <div><div className="text-[14px] font-bold uppercase tracking-[.16em] text-primary">Contact details</div><h2 className="mt-3 mb-3 text-[32px] font-bold tracking-tight">Reach out directly.</h2><p className="mb-7 text-[15px] leading-6 text-muted">The links below are editable examples. Replace them with your current contact information.</p>
        <div className="grid gap-5">{details.map(({ icon: Icon, label, value, href }) => <div key={label} className="flex items-center gap-3"><span className="grid size-[38px] shrink-0 place-items-center bg-mist text-primary"><Icon size={17}/></span><div><div className="mb-1 text-[14px] text-muted">{label}</div>{href ? <a href={href} className="text-[15px] font-semibold hover:text-primary">{value}</a> : <span className="text-[15px] font-semibold">{value}</span>}</div></div>)}</div>
        <div className="mt-7 flex flex-wrap gap-5">{profile.socials.map(social => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[15px] text-slate-600 hover:text-primary">{social.label === "GitHub" ? <Github size={15}/> : <Linkedin size={15}/>} {social.label}<ArrowUpRight size={12}/></a>)}</div>
      </div>
      <div><div className="text-[14px] font-bold uppercase tracking-[.16em] text-primary">Send a note</div><h2 className="mt-3 mb-6 text-[32px] font-bold tracking-tight">What’s on your mind?</h2><ContactForm/></div>
    </div></section>

    <section className="bg-mist py-[72px]"><div className={container}><div className="text-[14px] font-bold uppercase tracking-[.16em] text-primary">Find me</div><h2 className="mt-3 mb-3 text-[clamp(30px,4vw,42px)] font-bold tracking-[-.04em]">Faculty location</h2><p className="text-[15px] leading-6 text-muted">Map embed placeholder — update the location in <code className="rounded bg-white px-1.5 py-0.5">data/profile.ts</code> to match your university.</p><div className="mt-6 border border-line bg-white p-2"><iframe title="Map showing the editable university location" src={profile.mapEmbed} width="100%" height="340" className="block w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div></div></section>
  </>;
}
