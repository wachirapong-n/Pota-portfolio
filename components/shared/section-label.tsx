import type { ReactNode } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex w-fit items-center gap-2 ${className}`}>
      <p className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-xl font-bold tracking-[.16em] text-primary shadow-sm">
        <Sparkles className="shrink-0" size={18} aria-hidden="true" />
        <span className="leading-none">{children}</span>
      </p>
      <Image
        src="/images/arrows/vector3.png"
        alt=""
        aria-hidden="true"
        width={85}
        height={85}
        className="shrink-0 rotate-[30deg] -scale-y-100 animate-arrow-reveal object-contain motion-reduce:animate-none"
      />
    </div>
  );
}
