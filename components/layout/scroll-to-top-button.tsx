"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 320);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "auto"
            : "smooth",
        })
      }
      aria-label="กลับไปด้านบน"
      title="กลับไปด้านบน"
      className="fixed bottom-5 right-5 z-40 grid size-14 animate-fade-in-up place-items-center rounded-full bg-primary text-white shadow-lg shadow-primary/25 transition duration-200 hover:-translate-y-1 hover:bg-ink hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 motion-reduce:animate-none motion-reduce:transition-none sm:bottom-7 sm:right-7"
    >
      <ArrowUp size={26} aria-hidden="true" />
    </button>
  );
}
