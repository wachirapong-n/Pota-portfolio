import type { LucideIcon } from "lucide-react";
import { AboutCard } from "./about-card";
import ScrollReveal from "./scroll-reveal";

type AboutGridProps = {
  title: string;
  items: GridItem[];
};

type GridItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function AboutGrid({ title, items }: AboutGridProps) {
  return (
    <AboutCard title={title}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <ScrollReveal
              className="h-full"
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index === 0 ? 0 : index === 1 ? 100 : 200}
              key={`${item.title}-${index}`}
            >
              <article className="group flex h-full flex-col items-center gap-4 rounded-2xl border border-line/80 bg-white px-5 py-7 text-center transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_40px_-28px_rgba(1,21,62,0.35)]">
                <div className="grid h-24 w-24 place-items-center rounded-2xl border border-primary/10 bg-primary/5 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/15">
                  <Icon size={38} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-ink">{item.title}</h3>
                <p className="leading-7 text-muted">{item.description}</p>
              </article>
            </ScrollReveal>
          );
        })}
      </div>
    </AboutCard>
  );
}
