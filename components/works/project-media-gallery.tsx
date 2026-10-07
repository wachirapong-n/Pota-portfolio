"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Play,
  X,
  ZoomIn,
} from "lucide-react";
import ScrollReveal from "@/components/about/scroll-reveal";

type ProjectMediaGalleryProps = {
  title: string;
  images: string[];
  youtubeEmbed: string | null;
  video?: string;
};

export default function ProjectMediaGallery({
  title,
  images,
  youtubeEmbed,
  video,
}: ProjectMediaGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrevious = useCallback(() => {
    setCurrentIndex((index) => (index - 1 + images.length) % images.length);
    setLightboxIndex((index) =>
      index === null ? null : (index - 1 + images.length) % images.length,
    );
  }, [images.length]);
  const showNext = useCallback(() => {
    setCurrentIndex((index) => (index + 1) % images.length);
    setLightboxIndex((index) =>
      index === null ? null : (index + 1) % images.length,
    );
  }, [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft" && images.length > 1) showPrevious();
      if (event.key === "ArrowRight" && images.length > 1) showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeLightbox, images.length, lightboxIndex, showNext, showPrevious]);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const hasImages = images.length > 0;

  return (
    <>
      <ScrollReveal
        direction="left"
        className="col-span-1 h-full md:col-span-4 md:row-span-5 md:col-start-1 md:row-start-1"
      >
      <div className="relative grid h-full min-h-[320px] place-items-center overflow-hidden rounded-2xl border border-line bg-slate-100 md:min-h-0">
        {youtubeEmbed ? (
          <iframe
            src={youtubeEmbed}
            title={`วิดีโอผลงาน ${title}`}
            className="absolute inset-0 size-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : video && !hasImages ? (
          <video
            className="absolute inset-0 size-full bg-black object-contain"
            src={video}
            controls
            preload="metadata"
            aria-label={`วิดีโอผลงาน ${title}`}
          >
            เบราว์เซอร์นี้ไม่รองรับวิดีโอ
          </video>
        ) : hasImages ? (
          <>
            <button
              type="button"
              onClick={() => openLightbox(currentIndex)}
              aria-label={`เปิดภาพ ${currentIndex + 1} จาก ${images.length} แบบเต็มจอ`}
              className="absolute inset-0 cursor-zoom-in focus-visible:z-10 focus-visible:rounded-2xl"
            >
              <Image
                src={images[currentIndex]}
                alt={`${title} ภาพที่ ${currentIndex + 1}`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover"
              />
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="ดูภาพก่อนหน้า"
                  className="absolute left-3 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white/90 text-ink shadow-lg transition hover:scale-105 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <ChevronLeft size={22} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="ดูภาพถัดไป"
                  className="absolute right-3 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white/90 text-ink shadow-lg transition hover:scale-105 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <ChevronRight size={22} aria-hidden="true" />
                </button>
                <span className="pointer-events-none absolute right-4 bottom-4 rounded-full bg-ink/85 px-3 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                  {currentIndex + 1} / {images.length}
                </span>
              </>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center gap-3 px-6 text-center text-slate-500">
            <Play size={32} aria-hidden="true" />
            <span className="text-sm">ยังไม่มีภาพหรือวิดีโอผลงาน</span>
          </div>
        )}
      </div>
      </ScrollReveal>

      <ScrollReveal
        direction="left"
        delay={100}
        className="md:col-span-4 md:row-span-1 md:col-start-1 md:row-start-6"
      >
      <div className="flex h-full items-center rounded-2xl border border-line bg-mist p-5 md:px-6">
        {hasImages ? (
          <button
            type="button"
            onClick={() => openLightbox(currentIndex)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-ink"
          >
            <ZoomIn size={18} aria-hidden="true" /> กดดูรูปภาพเต็ม
          </button>
        ) : video ? (
          <a
            href={video}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:text-ink hover:underline"
          >
            {youtubeEmbed ? (
              <Play size={17} aria-hidden="true" />
            ) : (
              <ExternalLink size={17} aria-hidden="true" />
            )}
            {youtubeEmbed ? "ลิงก์วิดีโอ YouTube" : "เปิดวิดีโอผลงาน"}
          </a>
        ) : (
          <span className="text-sm text-muted">
            ยังไม่มีไฟล์ภาพหรือวิดีโอเพิ่มเติม
          </span>
        )}
      </div>
      </ScrollReveal>

      {lightboxIndex !== null && hasImages && (
        <div
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeLightbox();
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`ภาพ ${lightboxIndex + 1} จาก ${images.length}: ${title}`}
            className="relative flex h-full w-full max-w-[1500px] flex-col items-center justify-center"
          >
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="ปิดภาพเต็มจอ"
              className="absolute right-0 top-0 z-20 grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X size={23} aria-hidden="true" />
            </button>
            <div className="relative min-h-0 w-full flex-1">
              <Image
                src={images[lightboxIndex]}
                alt={`${title} ภาพที่ ${lightboxIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="ดูภาพก่อนหน้า"
                  className="absolute left-0 top-1/2 z-20 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-3 sm:size-14"
                >
                  <ChevronLeft size={28} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="ดูภาพถัดไป"
                  className="absolute right-0 top-1/2 z-20 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-3 sm:size-14"
                >
                  <ChevronRight size={28} aria-hidden="true" />
                </button>
                <p
                  className="pb-2 pt-4 text-sm text-white/80"
                  aria-live="polite"
                >
                  {lightboxIndex + 1} / {images.length}
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
