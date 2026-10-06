import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

const previewColors = ["bg-slate-100", "bg-slate-200/70", "bg-slate-100"];

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <Link
      href={`/works/${project.slug}`}
      className="group block overflow-hidden rounded-md border border-line bg-white text-ink transition duration-200 hover:-translate-y-1 hover:border-slate-400"
    >
      <div
        aria-label={`${project.title} project preview placeholder`}
        className={`relative grid aspect-[1.62] place-items-center overflow-hidden ${previewColors[index % previewColors.length]}`}
      >
        <span className="absolute inset-[14%_13%] grid place-items-center border border-slate-300 bg-gradient-to-br from-white to-slate-50 shadow-xl shadow-slate-900/5 transition-transform duration-300 group-hover:scale-[1.02]">
          <span className="text-center text-xs font-bold tracking-[.16em] text-slate-600">
            {project.title.toUpperCase()}
          </span>
        </span>
        <span className="absolute left-4 top-4 text-[10px] font-bold tracking-[.12em] text-slate-600">
          {project.image ? "Preview" : "No preview"}
        </span>
      </div>
      <div className="p-5 pb-[22px]">
        <div className="text-[10px] font-bold uppercase tracking-[.14em] text-primary">
          {project.category}
        </div>
        <div className="mt-2 flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight">
            {project.title}
          </h2>
          <ArrowUpRight
            size={18}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
        <p className="mt-2 mb-4 text-[13px] leading-6 text-muted">
          {project.description}
        </p>
        {/* <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              className="rounded-sm bg-slate-100 px-2 py-1.5 text-[11px] font-semibold text-slate-600"
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div> */}
      </div>
    </Link>
  );
}
