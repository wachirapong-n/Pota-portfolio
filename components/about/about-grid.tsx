import Image from "next/image";
import { AboutCard } from "./about-card";
import ScrollReveal from "./scroll-reveal";

type AboutGridProps = {
  title: string;
  items: GridItem[];
};

type GridItem = {
  image: string;
  title: string;
  description: string;
};

export default function AboutGrid({ title, items }: AboutGridProps) {
  return (
    <AboutCard title={title}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {items.map((item, index) => (
          <ScrollReveal
            className="h-full"
            direction={index % 2 === 0 ? "left" : "right"}
            delay={index === 0 ? 0 : index === 1 ? 100 : 200}
            key={`${item.title}-${index}`}
          >
            <article className="group flex h-full flex-col items-center gap-4 rounded-2xl border border-line/80 bg-white px-5 py-7 text-center transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_40px_-28px_rgba(1,21,62,0.35)]">
              <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-mist ring-4 ring-mist transition group-hover:ring-primary/10">
                <Image
                  className="object-cover"
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="80px"
                />
              </div>
              <h3 className="text-2xl font-bold text-ink">{item.title}</h3>
              <p className="leading-7 text-muted">{item.description}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </AboutCard>
  );
}
