"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  direction?: "left" | "right" | "up";
  delay?: 0 | 100 | 200;
  className?: string;
};

const delayClasses = {
  0: "delay-0",
  100: "delay-100",
  200: "delay-200",
};

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const initialPosition = {
    left: "-translate-x-8",
    right: "translate-x-8",
    up: "translate-y-6",
  }[direction];

  return (
    <div
      ref={elementRef}
      className={`${className} transform transition-all duration-700 ease-out ${delayClasses[delay]} motion-reduce:transform-none motion-reduce:transition-none ${
        isVisible
          ? "translate-x-0 translate-y-0 opacity-100"
          : `opacity-0 ${initialPosition}`
      }`}
    >
      {children}
    </div>
  );
}
