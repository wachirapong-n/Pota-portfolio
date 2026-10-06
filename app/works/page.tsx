import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/works/project-card";

export const metadata: Metadata = {
  title: "Works",
  description: "Editable sample project entries for the portfolio.",
};
const container = "mx-auto w-full max-w-[1120px] px-6 max-sm:px-[18px]";

export default function WorksPage() {
  return (
    <>
      <section className="bg-mist py-[76px] max-md:pt-[54px]">
        <div className={container}>
          <div className="text-[11px] font-bold uppercase tracking-[.16em] text-primary">
            Sample project entries · replace before publishing
          </div>
          <h1 className="mt-3 mb-4 text-[clamp(40px,6vw,62px)] font-bold leading-tight tracking-[-.05em]">
            Work in progress.
            <br />
            Ideas made real.
          </h1>
          <p className="max-w-[590px] text-[15px] leading-7 text-muted">
            These editable case study examples show the intended layout. Replace
            them with your own project details, screenshots, and links.
          </p>
        </div>
      </section>
      <section className="py-[55px] pb-[100px] max-md:pb-[72px]">
        <div
          className={`${container} grid grid-cols-3 gap-[18px] max-[850px]:grid-cols-2 max-[560px]:grid-cols-1`}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
