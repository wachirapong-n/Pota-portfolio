import type { Metadata } from "next";
import { existsSync } from "node:fs";
import { join } from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BriefcaseBusiness,
  Layers3,
  Lightbulb,
  Tag,
  Wrench,
} from "lucide-react";
import { projects } from "@/data/projects";
import ProjectMediaGallery from "@/components/works/project-media-gallery";
import ScrollReveal from "@/components/about/scroll-reveal";
import SectionLabel from "@/components/shared/section-label";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project
    ? { title: project.title, description: project.description }
    : {};
}

const container = "mx-auto w-full max-w-[1120px] px-6 max-sm:px-[18px]";

function getYoutubeEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);
    const videoId = parsed.hostname.includes("youtu.be")
      ? parsed.pathname.slice(1)
      : (parsed.searchParams.get("v") ??
        parsed.pathname.match(/\/(?:embed|shorts|live)\/([^/?]+)/)?.[1]);
    return videoId ? `https://www.youtube-nocookie.com/embed/${videoId}` : null;
  } catch {
    return null;
  }
}

function isPublicAssetAvailable(assetPath: string) {
  if (/^https?:\/\//i.test(assetPath)) return true;
  return existsSync(
    join(process.cwd(), "public", assetPath.replace(/^\/+/, "")),
  );
}

function DetailCard({
  icon: Icon,
  title,
  children,
  className = "",
}: {
  icon: typeof Tag;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-2xl border border-line bg-white p-5 md:p-6 ${className}`}
    >
      <h2 className="mb-4 flex items-center gap-2.5 text-[22px] font-bold text-ink">
        <Icon size={22} aria-hidden="true" className="shrink-0 text-primary" />
        {title}
      </h2>
      {children}
    </section>
  );
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const youtubeEmbed = project.video ? getYoutubeEmbedUrl(project.video) : null;
  const galleryImages = [
    ...new Set(
      [project.image, ...(project.gallery ?? [])].filter(
        (image): image is string =>
          typeof image === "string" && isPublicAssetAvailable(image),
      ),
    ),
  ];
  const availableVideo =
    project.video && (youtubeEmbed || isPublicAssetAvailable(project.video))
      ? project.video
      : undefined;

  return (
    <>
      <section className="relative overflow-hidden bg-mist py-[76px] max-md:py-[54px]">
        <div
          className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/70 blur-3xl"
          aria-hidden="true"
        />
        <div className={`${container} relative`}>
          <ScrollReveal direction="left">
            <Link
              href="/works"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-[21px] font-medium text-slate-600 transition-colors hover:text-primary"
            >
              <ArrowLeft size={18} aria-hidden="true" /> กลับไปหน้าผลงาน
            </Link>
            <SectionLabel className="mb-4 uppercase tracking-[.14em]">
              {project.category}
            </SectionLabel>
            <h1 className="mb-4 max-w-[1080px] text-[clamp(36px,6vw,62px)] font-bold leading-tight tracking-[-.04em]">
              <span className="mr-3 text-primary">{project.number} | </span>
              {project.title}
            </h1>
            <p className="max-w-[880px] text-[22px] leading-8 text-muted md:text-2xl lg:text-xl">
              {project.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 2: A–E project layout */}
      <section className={`${container} py-10 md:py-[52px]`}>
        <div className="grid grid-cols-1 gap-4 md:min-h-[720px] md:grid-cols-6 md:grid-rows-6">
          {/* A and E — main carousel and full-screen action */}
          <ProjectMediaGallery
            title={project.title}
            images={galleryImages}
            youtubeEmbed={youtubeEmbed}
            video={availableVideo}
            linkURL={project.linkURL}
          />

          {/* B — Project details */}
          <ScrollReveal
            direction="right"
            className="md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-1"
          >
            <DetailCard
              icon={Layers3}
              title="รายละเอียดผลงาน"
              className="h-full"
            >
              <dl className="grid gap-3 text-[21px] leading-7">
                <div className="flex items-start gap-2.5">
                  <Tag
                    size={18}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-slate-500"
                  />
                  <div>
                    <dt className="font-semibold text-ink">ประเภท</dt>
                    <dd className="mt-0.5 text-muted">
                      {project.category || "ยังไม่ได้ระบุ"}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Wrench
                    size={18}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-slate-500"
                  />
                  <div>
                    <dt className="font-semibold text-ink">เครื่องมือที่ใช้</dt>
                    <dd className="mt-0.5 text-muted">
                      {project.tools.length
                        ? project.tools.join(", ")
                        : "ยังไม่ได้ระบุ"}
                    </dd>
                  </div>
                </div>
              </dl>
            </DetailCard>
          </ScrollReveal>

          {/* C — My role */}
          <ScrollReveal
            direction="right"
            delay={100}
            className="md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-3"
          >
            <DetailCard
              icon={BriefcaseBusiness}
              title="บทบาทของฉัน"
              className="h-full"
            >
              <p className="m-0 text-[21px] leading-7 text-muted">
                {project.role}
              </p>
            </DetailCard>
          </ScrollReveal>

          {/* D — What I learned */}
          <ScrollReveal
            direction="right"
            delay={200}
            className="md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-5"
          >
            <DetailCard
              icon={Lightbulb}
              title="สิ่งที่ได้เรียนรู้"
              className="h-full"
            >
              <p className="m-0 text-[21px] leading-7 text-muted">
                {project.learning}
              </p>
            </DetailCard>
          </ScrollReveal>

          {/* E — Open full image or video link */}
        </div>
      </section>
    </>
  );
}
