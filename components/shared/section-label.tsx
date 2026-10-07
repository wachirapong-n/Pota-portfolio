import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-xl font-bold tracking-[.16em] text-primary shadow-sm ${className}`}
    >
      <Sparkles className="shrink-0" size={18} aria-hidden="true" />
      <span className="leading-none">{children}</span>
    </p>
  );
}
