import Link from "next/link";
import { ArrowRight, User, Layers3, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/works/project-card";
import Image from "next/image";

const paths = [
  {
    title: "เกี่ยวกับฉัน",
    description:
      "แนะนำตัว ประวัติการศึกษา ความสนใจ ทักษะ และเป้าหมาย",
    href: "/about",
    cta: "ดูเพิ่มเติม",
    number: "01",
    icon: User,
  },
  {
    title: "ผลงาน",
    description:
      "ผลงานทั้ง 8 ชิ้น จากการเรียนรู้ในรายวิชา 100235",
    href: "/works",
    cta: "ดูผลงาน",
    number: "02",
    icon: Layers3,
  },
  {
    title: "ติดต่อ",
    description:
      "ส่งข้อความถึงฉัน ผ่านแบบฟอร์มได้ที่นี่",
    href: "/contact",
    cta: "ติดต่อฉัน",
    number: "03",
    icon: Mail,
  },
];

const container = "mx-auto w-full max-w-[1120px] px-6 max-sm:px-[18px]";
const eyebrow = "text-[11px] font-bold uppercase tracking-[.16em] text-primary";
const title = "mt-3 text-[clamp(30px,4vw,42px)] font-bold tracking-[-.04em]";

export default function Home() {
  return (
    <>
      <section className="border-b border-line bg-mist">
        <div
          className={`${container} grid min-h-[570px] grid-cols-[1.15fr_.85fr] items-center gap-[60px] py-[76px] max-md:grid-cols-1 max-md:gap-9 max-md:py-14`}
        >
          <div>
            <h1 className="mt-6 text-[clamp(44px,7vw,76px)] font-bold leading-[1.04] tracking-[-.055em]">
              E-Portfolio
              <br />
              <span className="text-primary">{profile.name}</span>
            </h1>

            <p className="mt-4 max-w-[540px] text-[18px] leading-7 text-muted">
              {profile.bio}
            </p>

            <p className="mt-2 max-w-[540px] text-[18px] leading-7 text-muted">
              {profile.bio2}
            </p>
            <div className="p-4 max-w-[520px] border-2 border-slate-300 rounded-xl mb-2 mt-8">
              <p className="text-[20px] leading-6 text-muted">
                &ldquo;{profile.objective}&rdquo;
              </p>
            </div>
            {/* <div className="flex flex-wrap gap-3">
              <Link
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-primary px-5 text-sm font-semibold text-white transition hover:bg-primary/90 motion-reduce:transition-none"
                href="/works"
              >
                Explore my work <ArrowRight size={16} />
              </Link>
              <Link
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-slate-300 px-5 text-sm font-semibold text-ink transition hover:border-ink motion-reduce:transition-none"
                href="/contact"
              >
                Let’s connect <ArrowUpRight size={15} />
              </Link>
            </div> */}
          </div>
          <div
            aria-label={`Profile placeholder for ${profile.name}`}
            role="img"
            className="relative grid h-[380px] w-full max-w-[360px] justify-self-end place-items-center bg-slate-200 max-md:h-[290px] max-md:max-w-none max-md:justify-self-start rounded-xl"
          >
            <Image
              src="/images/profile.jpg"
              alt="Profile image"
              fill
              className="object-cover rounded-xl scale-x-[-1]"
            />
          </div>
        </div>
      </section>

      <section className="py-[100px] max-md:py-[72px]">
        <div className={container}>
          <div className="mb-9 flex items-end justify-between gap-6 max-sm:items-start">
            <div>
              {/* <div className={eyebrow}>A little more about me</div> */}
              <h2 className={title}>เลือกดูเรื่องที่สนใจได้เลย</h2>
            </div>
            {/* <span className="mb-1 flex items-center gap-1.5 text-xs text-muted max-sm:hidden">
              Explore the portfolio <ArrowDownRight size={15} />
            </span> */}
          </div>
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
                <Link
                  key={href}
                  href={href}
                  className="group flex min-h-[230px] flex-col rounded-md border border-line p-6 text-ink transition duration-200 hover:-translate-y-1 hover:border-slate-400 motion-reduce:transition-none"
                >
                  <div className="flex justify-between text-slate-400">
                    <span className="text-[10px] font-bold uppercase tracking-[.16em]">
                      /{number}
                    </span>
                    <Icon
                      size={19}
                      className="text-primary"
                      strokeWidth={1.6}
                    />
                  </div>
                  <h3 className="mt-7 mb-2 text-[22px] font-semibold tracking-tight">
                    {cardTitle}
                  </h3>
                  <p className="mb-5 text-[13px] leading-6 text-muted">
                    {description}
                  </p>
                  <span className="mt-auto flex items-center gap-2 text-xs font-bold text-primary">
                    {cta}
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                    />
                  </span>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="bg-mist py-[76px]">
        <div className={container}>
          <div className="mb-7 flex items-end justify-between gap-5">
            <div>
              <div className={eyebrow}>Sample project previews</div>
              <h2 className={`${title} mb-0`}>Selected work</h2>
            </div>
            <Link
              href="/works"
              className="mb-1 flex items-center gap-2 text-[13px] font-bold text-primary"
            >
              All projects <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
