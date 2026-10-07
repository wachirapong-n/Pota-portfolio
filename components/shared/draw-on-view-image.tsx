"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";

type DrawOnViewImageProps = Omit<ImageProps, "alt" | "className"> & {
  alt: string;
  className?: string;
  revealDirection: "left-to-right" | "right-to-left";
};

export default function DrawOnViewImage({
  alt,
  className = "",
  revealDirection,
  ...imageProps
}: DrawOnViewImageProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);
  const animationClass =
    revealDirection === "left-to-right"
      ? "animate-arrow-reveal"
      : "animate-arrow-reveal-reverse";
  const hiddenClass =
    revealDirection === "left-to-right"
      ? "[clip-path:inset(0_100%_0_0)]"
      : "[clip-path:inset(0_0_0_100%)]";
  const hasClassSizing = /(?:^|\s)(?:w-|h-|size-)/.test(className);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={containerRef}
      className={`relative block ${className}`}
      style={
        hasClassSizing || imageProps.fill
          ? undefined
          : { width: imageProps.width, height: imageProps.height }
      }
    >
      <Image
        {...imageProps}
        alt={alt}
        className={`absolute inset-0 h-full w-full object-contain ${isInView ? animationClass : hiddenClass} motion-reduce:animate-none`}
      />
    </span>
  );
}
