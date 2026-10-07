import Link from "next/link";
import { ArrowRight, User, Layers3, Mail, Heart } from "lucide-react";
import { profile } from "@/data/profile";
import { previewProjects, projects } from "@/data/projects";
import { ProjectCard } from "@/components/works/project-card";
import Image from "next/image";
import ScrollReveal from "@/components/about/scroll-reveal";
import SectionLabel from "@/components/shared/section-label";

const paths = [
  {
    title: "เกี่ยวกับฉัน",
    description: "แนะนำตัว ประวัติการศึกษา ความสนใจ ทักษะ และเป้าหมาย",
    href: "/about",
    cta: "ดูเพิ่มเติม",
    number: "01",
    icon: User,
  },
  {
    title: "ผลงาน",
    description: "ผลงานทั้ง 8 ชิ้น จากการเรียนรู้ในรายวิชา 100235",
    href: "/works",
    cta: "ดูผลงาน",
    number: "02",
    icon: Layers3,
  },
  {
    title: "ติดต่อ",
    description: "ส่งข้อความถึงฉัน ผ่านแบบฟอร์มได้ที่นี่",
    href: "/contact",
    cta: "ติดต่อฉัน",
    number: "03",
    icon: Mail,
  },
];

const container = "mx-auto w-full max-w-[1120px] px-6 max-sm:px-[18px]";
const eyebrow = "text-[20px] font-bold uppercase tracking-[.16em] text-primary";
const title = "mt-3 text-[clamp(30px,4vw,42px)] font-bold tracking-[-.04em]";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-mist">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/70 blur-3xl"
          aria-hidden="true"
        />
        <div
          className={`${container} relative grid min-h-[570px] grid-cols-[1.15fr_.85fr] items-center gap-[60px] py-[76px] max-md:grid-cols-1 max-md:gap-12 max-md:py-14`}
        >
          <ScrollReveal direction="left">
            <SectionLabel>WELCOME</SectionLabel>
            <h1 className="mt-6 text-[clamp(42px,7vw,76px)] font-bold leading-[1.1] tracking-[-.055em]">
              E-Portfolio
              <br />
              <span className="text-primary">{profile.name}</span>
            </h1>

            <p className="mt-5 max-w-[560px] text-[22px] leading-8 text-muted md:text-2xl">
              {profile.bio}
            </p>

            <p className="mt-3 max-w-[560px] text-[22px] leading-8 text-muted md:text-2xl">
              {profile.bio2}
            </p>
            <div className="mt-8 flex max-w-[560px] items-center gap-3 rounded-2xl border border-primary/10 bg-white/80 p-5 shadow-sm">
              <span className="mt-0.5 grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Heart size={30} aria-hidden="true" />
              </span>
              <p className="flex-1 text-center text-[22px] leading-7 text-ink md:text-2xl">
                &ldquo;{profile.objective}&rdquo;
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal
            direction="right"
            delay={100}
            className="mx-auto w-full max-w-[430px] md:justify-self-end"
          >
            <div className="relative">
              <div
                className="absolute -bottom-4 -left-4 h-full w-full rounded-[2rem] border-2 border-primary/15"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/4.35] overflow-hidden rounded-[2rem] bg-white p-2 shadow-[0_18px_55px_-30px_rgba(1,21,62,0.45)] scale-x-[-1]">
                <Image
                  src="/images/profile.jpg"
                  alt={`ภาพแนะนำตัวของ ${profile.name}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 85vw, 360px"
                  className="rounded-[1.6rem] object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-[100px] max-md:py-[72px]">
        <div className={container}>
          <ScrollReveal
            direction="left"
            className="mb-9 flex items-end justify-between gap-6 max-sm:items-start"
          >
            <div>
              <p className={eyebrow}>EXPLORE MY PORTFOLIO</p>
              <h2 className={title}>เลือกดูเรื่องที่สนใจ</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
            {paths.map(
              ({
                title: cardTitle,
                description,
                href,
                cta,
                number,
                icon: Icon,
              }) => (
                <ScrollReveal
                  key={href}
                  direction={
                    number === "02" ? "up" : number === "01" ? "left" : "right"
                  }
                  delay={number === "01" ? 0 : number === "02" ? 100 : 200}
                  className="h-full"
                >
                  <Link
                    href={href}
                    className="group relative flex min-h-[250px] h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-6 text-ink transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_40px_-28px_rgba(1,21,62,0.35)] motion-reduce:transition-none"
                  >
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[20px] font-bold uppercase tracking-[.16em]">
                        /{number}
                      </span>
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-6 mb-2 text-[24px] font-bold tracking-tight">
                      {cardTitle}
                    </h3>
                    <p className="mb-5 text-[22px] leading-7 text-muted">
                      {description}
                    </p>
                    <span className="mt-auto flex items-center gap-2 text-[22px] font-bold text-primary">
                      {cta}
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                      />
                    </span>
                  </Link>
                </ScrollReveal>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="bg-mist py-[76px]">
        <div className={container}>
          <ScrollReveal
            direction="right"
            className="mb-7 flex items-end justify-between gap-5"
          >
            <div>
              <p className={eyebrow}>MY WORKS</p>
              <h2 className={`${title} mb-0`}>ผลงานของฉัน</h2>
            </div>
            <Link
              href="/works"
              className="mb-1 flex items-center gap-2 text-[21px] font-bold text-primary"
            >
              ดูผลงานทั้งหมด <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
          <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
            {previewProjects.slice(0, 3).map((project, index) => (
              <ScrollReveal
                key={project.slug}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index === 0 ? 0 : index === 1 ? 100 : 200}
              >
                <ProjectCard project={project} index={index} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
