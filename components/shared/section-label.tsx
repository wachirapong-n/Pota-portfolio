import type { ReactNode } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import ScrollReveal from "@/components/about/scroll-reveal";

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
  revealOnScroll?: boolean;
};

export default function SectionLabel({
  children,
  className = "",
  revealOnScroll = false,
}: SectionLabelProps) {
  return (
    <div className={`flex w-fit items-center gap-2 ${className}`}>
      <p className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-xl font-bold tracking-[.16em] text-primary shadow-sm">
        <Sparkles className="shrink-0" size={18} aria-hidden="true" />
        <span className="leading-none">{children}</span>
      </p>
      {revealOnScroll ? (
        <ScrollReveal
          direction="left"
          clipReveal="left-to-right"
          className="h-[85px] w-[85px] shrink-0"
        >
          <Image
            src="/images/arrows/vector3.png"
            alt=""
            aria-hidden="true"
            width={85}
            height={85}
            className="h-full w-full rotate-[30deg] -scale-y-100 object-contain"
          />
        </ScrollReveal>
      ) : (
        <Image
          src="/images/arrows/vector3.png"
          alt=""
          aria-hidden="true"
          width={85}
          height={85}
          className="shrink-0 rotate-[30deg] -scale-y-100 animate-arrow-reveal object-contain motion-reduce:animate-none"
        />
      )}
    </div>
  );
}
