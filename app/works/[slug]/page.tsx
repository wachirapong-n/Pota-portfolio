import type { Metadata } from "next";
import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BriefcaseBusiness,
  ExternalLink,
  Image as ImageIcon,
  Layers3,
  Lightbulb,
  Play,
  Shapes,
  Tag,
  Wrench,
  ZoomIn,
} from "lucide-react";
import { projects } from "@/data/projects";

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
      className={`rounded-md border border-line bg-white p-5 md:p-6 ${className}`}
    >
      <h2 className="mb-4 flex items-center gap-2.5 text-base font-bold text-ink">
        <Icon size={18} aria-hidden="true" className="shrink-0 text-primary" />
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
  const imageAvailable = project.image
    ? isPublicAssetAvailable(project.image)
    : false;
  const videoAvailable = project.video
    ? Boolean(youtubeEmbed || isPublicAssetAvailable(project.video))
    : false;
  const extraImages = (project.gallery ?? [])
    .filter(isPublicAssetAvailable)
    .slice(0, 3);

  return (
    <>
      <section className="bg-mist py-[76px] max-md:pt-[54px]">
        <div className={container}>
          <Link
            href="/works"
            className="mb-9 inline-flex items-center gap-2 text-[13px] text-slate-600 transition-colors hover:text-primary"
          >
            <ArrowLeft size={14} aria-hidden="true" /> กลับไปหน้าผลงาน
          </Link>
          <div className="text-[11px] font-bold uppercase tracking-[.16em] text-primary">
            {project.category}
          </div>
          <h1 className="mt-3 mb-4 text-[clamp(40px,6vw,62px)] font-bold tracking-[-.05em]">
            {project.number} | {project.title}
          </h1>
          <p className="max-w-[600px] text-[15px] leading-7 text-muted">
            {project.description}
          </p>
        </div>
      </section>

      {/* SECTION 2: A–E project layout */}
      <section className={`${container} py-10 md:py-[52px]`}>
        <div className="grid grid-cols-1 gap-4 md:min-h-[720px] md:grid-cols-6 md:grid-rows-6">
          {/* A — Main image or video */}
          <div className="relative col-span-1 grid min-h-[320px] place-items-center overflow-hidden rounded-md bg-slate-100 md:col-span-4 md:row-span-5 md:min-h-0">
            {youtubeEmbed ? (
              <iframe
                src={youtubeEmbed}
                title={`วิดีโอผลงาน ${project.title}`}
                className="absolute inset-0 size-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : project.video && videoAvailable ? (
              <video
                className="absolute inset-0 size-full bg-black object-contain"
                src={project.video}
                poster={imageAvailable ? project.image : undefined}
                controls
                preload="metadata"
                aria-label={`วิดีโอผลงาน ${project.title}`}
              >
                เบราว์เซอร์นี้ไม่รองรับวิดีโอ
              </video>
            ) : project.image && imageAvailable ? (
              <Image
                src={project.image}
                alt={`ภาพผลงาน ${project.title}`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-contain"
              />
            ) : (
              <div className="flex flex-col items-center gap-3 px-6 text-center text-slate-500">
                <ImageIcon size={32} aria-hidden="true" />
                <span className="text-sm">ยังไม่มีภาพหรือวิดีโอผลงาน</span>
              </div>
            )}
          </div>

          {/* B — Project details */}
          <DetailCard
            icon={Layers3}
            title="รายละเอียดผลงาน"
            className="md:col-span-2 md:row-span-2"
          >
            <dl className="grid gap-3 text-[13px] leading-5">
              <div className="flex items-start gap-2.5">
                <Tag
                  size={15}
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
                  size={15}
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
              <div className="flex items-start gap-2.5">
                <Shapes
                  size={15}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-slate-500"
                />
                <div>
                  <dt className="font-semibold text-ink">รูปแบบ</dt>
                  <dd className="mt-0.5 text-muted">
                    {project.projectType || "ยังไม่ได้ระบุ"}
                  </dd>
                </div>
              </div>
            </dl>
          </DetailCard>

          {/* C — My role */}
          <DetailCard
            icon={BriefcaseBusiness}
            title="บทบาทของฉัน"
            className="md:col-span-2 md:row-span-2"
          >
            <p className="m-0 text-[13px] leading-6 text-muted">
              {project.role}
            </p>
          </DetailCard>

          {/* D — What I learned */}
          <DetailCard
            icon={Lightbulb}
            title="สิ่งที่ได้เรียนรู้"
            className="md:col-span-2 md:row-span-2"
          >
            <p className="m-0 text-[13px] leading-6 text-muted">
              {project.learning}
            </p>
          </DetailCard>

          {/* E — Open full image or video link */}
          <div className="flex items-center rounded-md border border-line bg-mist p-5 md:col-span-4 md:row-span-1 md:px-6">
            {project.video && videoAvailable ? (
              <a
                href={project.video}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                {youtubeEmbed ? (
                  <Play size={17} aria-hidden="true" />
                ) : (
                  <ExternalLink size={17} aria-hidden="true" />
                )}
                {youtubeEmbed ? "ลิงก์วิดีโอ YouTube" : "เปิดวิดีโอผลงาน"}
              </a>
            ) : project.image && imageAvailable ? (
              <a
                href={project.image}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                <ZoomIn size={18} aria-hidden="true" /> กดดูรูปภาพเต็ม
              </a>
            ) : (
              <span className="text-sm text-muted">
                ยังไม่มีไฟล์ภาพหรือวิดีโอเพิ่มเติม
              </span>
            )}
          </div>
        </div>

        {extraImages.length > 0 && (
          <section className="mt-12">
            <h2 className="mb-5 flex items-center gap-2.5 text-xl font-bold tracking-tight text-ink">
              <ImageIcon
                size={20}
                aria-hidden="true"
                className="text-primary"
              />
              ภาพตัวอย่างเพิ่มเติม
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {extraImages.map((image, index) => (
                <a
                  key={`${image}-${index}`}
                  href={image}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`เปิดภาพตัวอย่าง ${index + 1} แบบเต็มขนาด`}
                  className="group relative aspect-[4/3] overflow-hidden rounded-md border border-line bg-slate-100"
                >
                  <Image
                    src={image}
                    alt={`${project.title} ภาพตัวอย่าง ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <span className="absolute right-3 bottom-3 grid size-9 place-items-center rounded-full bg-white/90 text-primary shadow-sm">
                    <ZoomIn size={17} />
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}
      </section>
    </>
  );
}
