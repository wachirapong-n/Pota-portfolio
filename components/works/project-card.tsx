import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import Image from "next/image";

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
        <Image
          fill
          className="object-cover"
          src="/images/profile.jpg"
          alt={project.title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
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
        <p className="mt-2 mb-4 text-[13px] leading-6 text-muted line-clamp-3">
          {project.description}
        </p>
      </div>
    </Link>
  );
}
