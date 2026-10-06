import type { Metadata } from "next";
import { BriefcaseBusiness } from "lucide-react";
import { profile } from "@/data/profile";
import { skillGroups } from "@/data/skills";
import { experiences } from "@/data/experience";

export const metadata: Metadata = { title: "About" };
const container = "mx-auto w-full max-w-[1120px] px-6 max-sm:px-[18px]";
const eyebrow = "text-[11px] font-bold uppercase tracking-[.16em] text-primary";
const title = "mt-3 mb-3 text-[clamp(30px,4vw,42px)] font-bold tracking-[-.04em]";

export default function AboutPage() {
  return <>
    <section className="bg-mist py-[76px] max-md:pt-[54px]"><div className={container}><div className={eyebrow}>A little context</div><h1 className="mt-3 mb-4 text-[clamp(40px,6vw,62px)] font-bold tracking-[-.05em]">About me</h1><p className="max-w-[590px] text-[15px] leading-7 text-muted">The person behind the projects: what I’m learning, what I care about, and where I hope to go next.</p></div></section>

    <section className="py-[100px] max-md:py-[72px]"><div className={`${container} grid grid-cols-[.8fr_1.2fr] gap-[72px] max-md:grid-cols-1 max-md:gap-4`}>
      <div><div className={eyebrow}>Introduction</div><h2 className={title}>Curious by nature.<br/>Developer by practice.</h2></div>
      <div><p className="mt-0 text-base leading-7 text-muted">{profile.bio}</p><p className="leading-7 text-muted">I’m currently studying {profile.education.faculty.toLowerCase()} at {profile.education.institution}. I’m especially interested in {profile.interests.join(", ").toLowerCase()}, and I’m working toward a career where I can help shape products from early ideas through polished, accessible interfaces.</p><p className="leading-7 text-muted">My goal is to join a thoughtful team, contribute with curiosity and care, and keep building the technical judgment that comes from solving real problems.</p><div className="mt-6 flex flex-wrap gap-2">{profile.interests.map(interest => <span key={interest} className="rounded-sm bg-slate-100 px-2.5 py-1.5 text-xs font-semibold text-slate-600">{interest}</span>)}</div></div>
    </div></section>

    <section className="bg-mist py-[82px]"><div className={container}><div className={eyebrow}>Learning path</div><h2 className={title}>Education</h2>
      <div className="relative mt-8 max-w-[720px] border-l border-slate-300 pl-7"><span className="absolute -left-1.5 top-1.5 size-3 rounded-full bg-primary"/><div className="flex flex-wrap justify-between gap-5">
        <div><div className="text-[19px] font-bold">{profile.education.institution}</div><div className="mt-1.5 text-sm text-muted">{profile.education.faculty}</div><div className="mt-2 text-[13px] leading-6 text-muted">{profile.education.note}</div></div>
        <div className="text-left text-xs font-bold text-primary sm:text-right">{profile.education.period}<div className="mt-1.5 font-normal text-muted">{profile.education.location}</div></div>
      </div></div>
    </div></section>

    <section className="py-[100px] max-md:py-[72px]"><div className={container}><div className={eyebrow}>What I’m learning</div><h2 className={title}>Skills & tools</h2><p className="mt-0 max-w-[540px] text-[13px] leading-6 text-muted">Starter content: review these example skills and keep only the tools you can confidently discuss.</p>
      <div className="mt-9 grid grid-cols-4 gap-7 max-md:grid-cols-2 max-md:gap-y-7">
        {skillGroups.map(group => <div key={group.name}><h3 className="mb-4 flex items-center gap-2.5 text-[13px] font-bold"><span className="size-1.5 rounded-full bg-primary"/>{group.name}</h3><div className="grid gap-2.5">{group.skills.map(skill => <div key={skill} className="border-b border-line pb-2.5 text-[13px] text-slate-600">{skill}</div>)}</div></div>)}
      </div>
    </div></section>

    <section className="bg-mist py-[82px]"><div className={container}><div className={eyebrow}>Where I’ve contributed</div><h2 className={title}>Experience</h2>
      <div className="mt-7 grid gap-6">{experiences.map((experience, index) => <article key={`${experience.organization}-${index}`} className="grid grid-cols-[190px_1fr] gap-[26px] border-t border-line pt-6 max-sm:grid-cols-1 max-sm:gap-2">
        <div className="text-xs font-bold text-primary">{experience.date}</div>
        <div><div className="flex items-center gap-2"><BriefcaseBusiness size={16} className="text-primary"/><h3 className="m-0 text-lg font-semibold">{experience.role}</h3></div><div className="mt-1.5 text-[13px] text-muted">{experience.organization}</div><p className="text-[13px] leading-6 text-muted">{experience.description}</p><ul className="list-disc pl-5 text-[13px] leading-6 text-muted">{experience.responsibilities.map(item => <li key={item} className="mb-1">{item}</li>)}</ul><div className="flex flex-wrap gap-2">{experience.technologies.map(technology => <span className="rounded-sm bg-white px-2 py-1.5 text-[11px] font-semibold text-slate-600" key={technology}>{technology}</span>)}</div></div>
      </article>)}</div>
    </div></section>
  </>;
}
