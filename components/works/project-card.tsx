import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import Image from "next/image";

const previewColors = ["bg-slate-100", "bg-slate-200/70", "bg-slate-100"];

export function ProjectCard({
  project,
  index = 0,
  showNumber = false,
}: {
  project: Project;
  index?: number;
  showNumber?: boolean;
}) {
  return (
    <Link
      href={`/works/${project.slug}`}
      className="group block h-full overflow-hidden rounded-2xl border border-line bg-white text-ink transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_40px_-28px_rgba(1,21,62,0.35)]"
    >
      <div
        aria-label={`${project.title} project preview placeholder`}
        className={`relative grid aspect-[1.62] place-items-center overflow-hidden ${previewColors[index % previewColors.length]}`}
      >
        <Image
          fill
          className="object-cover"
          src={project.coverImage || project.image || "/images/profile.jpg"}
          alt={project.title}
          sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw"
        />
      </div>
      <div className={`relative p-5 pb-[22px] ${showNumber ? "pt-8" : ""}`}>
        {showNumber && (
          <span className="absolute left-5 top-0 z-20 -translate-y-1/2 rounded-full border-2 border-white bg-ink px-3 py-1 text-sm font-bold tracking-[.12em] text-white shadow-sm">
            {project.number}
          </span>
        )}
        <div className="text-[14px] font-bold uppercase tracking-[.14em] text-primary">
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
        <p className="mt-2 mb-4 text-[15px] leading-6 text-muted line-clamp-3">
          {project.description}
        </p>
      </div>
    </Link>
  );
}
