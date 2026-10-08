import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/works/project-card";
import ScrollReveal from "@/components/about/scroll-reveal";
import SectionLabel from "@/components/shared/section-label";

export const metadata: Metadata = {
  title: "Works",
  description: "Editable sample project entries for the portfolio.",
};
const container = "mx-auto w-full max-w-[1120px] px-6 max-sm:px-[18px]";

export default function WorksPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-mist py-[76px] max-md:py-[58px]">
        <div
          className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/70 blur-3xl"
          aria-hidden="true"
        />
        <div className={`${container} relative`}>
          <ScrollReveal direction="left">
            <SectionLabel className="mb-5">SELECTED WORK</SectionLabel>
            <h1 className="mt-3 mb-4 text-[clamp(40px,6vw,62px)] font-bold leading-tight tracking-[-.05em]">
              My <span className="mt-1  text-primary"> Work</span>
            </h1>
            <p className="max-w-[650px] text-[22px] leading-8 text-muted md:text-2xl">
              รวบรวมผลงานที่ได้เรียนรู้และสร้างสรรค์ตลอดการศึกษาเพื่อพัฒนาทักษะและต่อยอดสู่อนาคต
            </p>
          </ScrollReveal>
        </div>
      </section>
      <section className="py-[55px] pb-[100px] max-md:pb-[72px]">
        <div
          className={`${container} grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4`}
        >
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.slug}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index % 3 === 0 ? 0 : index % 3 === 1 ? 100 : 200}
              className="h-full"
            >
              <ProjectCard
                project={project}
                index={index}
                showNumber
                showDescription={false}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
