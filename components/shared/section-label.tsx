import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";
import DrawOnViewImage from "@/components/shared/draw-on-view-image";

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
      <DrawOnViewImage
        src="/images/arrows/vector3.png"
        alt=""
        aria-hidden="true"
        width={85}
        height={85}
        revealDirection="left-to-right"
        className="shrink-0 rotate-[30deg] -scale-y-100 object-contain"
      />
    </div>
  );
}
