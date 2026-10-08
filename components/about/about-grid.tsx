import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "./scroll-reveal";

type AboutGridItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type AboutGridProps = {
  title: string;
  items: AboutGridItem[];
  variant: "interest" | "skills";
};

function InterestSection({ title, items }: AboutGridProps) {
  return (
    <div className="relative w-full">
      <div
        className="pointer-events-none absolute left-0 top-[110px] z-0 hidden h-[400px] overflow-hidden xl:block"
        style={{ width: "calc((100vw - 1120px) / 2 + 24px)" }}
        aria-hidden="true"
      >
        <ScrollReveal
          direction="left"
          clipReveal="left-to-right"
          className="absolute left-0 top-0 h-[clamp(100px,calc(58vw_-_644px),400px)] w-[clamp(100px,calc(58vw_-_644px),400px)]"
        >
          <Image
            src="/images/arrows/vector3.png"
            alt=""
            aria-hidden="true"
            fill
            sizes="400px"
            className="-scale-y-100 object-contain"
          />
        </ScrollReveal>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1120px] px-6 max-sm:px-[18px]">
        <header className="mb-8 flex items-end justify-between gap-6 md:mb-12">
          <div>
            <p className="mb-2 text-[18px] font-bold uppercase tracking-[.18em] text-primary">
              AREAS I’M CURIOUS ABOUT
            </p>
            <h2 className="text-[clamp(34px,5vw,48px)] font-bold leading-tight tracking-[-.04em] text-ink">
              {title}
            </h2>
          </div>
          <ScrollReveal
            direction="right"
            clipReveal="right-to-left"
            className="relative ml-auto hidden h-[clamp(48px,8vw,85px)] w-[clamp(48px,8vw,85px)] shrink-0 md:block xl:hidden"
          >
            <Image
              src="/images/arrows/vector2.png"
              alt=""
              aria-hidden="true"
              fill
              sizes="85px"
              className="object-contain"
            />
          </ScrollReveal>
        </header>

        <div className="-mt-5 mb-3 flex justify-start pl-3 md:hidden">
          <ScrollReveal
            direction="left"
            clipReveal="left-to-right"
            className="relative h-[72px] w-[72px]"
          >
            <Image
              src="/images/arrows/vector1.png"
              alt=""
              aria-hidden="true"
              fill
              sizes="72px"
              className="object-contain"
            />
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <ScrollReveal
                key={item.title}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index === 0 ? 0 : index === 1 ? 100 : 200}
                className="h-full"
              >
                <article className="group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-[1.75rem] border border-primary/10 bg-white p-7 shadow-[0_14px_36px_-32px_rgba(1,21,62,0.5)] transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_20px_44px_-28px_rgba(1,21,62,0.4)] motion-reduce:transition-none">
                  <div className="mb-8 flex items-start justify-between">
                    <span className="grid size-[62px] place-items-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon size={30} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <span className="text-[34px] font-bold leading-none tracking-[-.06em] text-primary/15">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-[25px] font-bold leading-snug tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[21px] leading-7 text-muted">
                    {item.description}
                  </p>
                  <span className="mt-auto pt-7">
                    <span className="block h-1 w-10 rounded-full bg-primary/25 transition-all duration-300 group-hover:w-16 group-hover:bg-primary" />
                  </span>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function SkillsSection({ title, items }: AboutGridProps) {
  return (
    <div className="mx-auto grid w-full max-w-[1120px] gap-9 px-6 max-sm:px-[18px] md:grid-cols-[0.72fr_1.28fr] md:gap-14">
      <ScrollReveal direction="left" className="self-start md:sticky md:top-28">
        <p className="mb-2 text-[18px] font-bold uppercase tracking-[.18em] text-primary">
          SKILLS & STRENGTHS
        </p>
        <h2 className="text-[clamp(34px,5vw,48px)] font-bold leading-tight tracking-[-.04em] text-ink">
          {title}
        </h2>
        <div className="mt-6 h-1 w-16 rounded-full bg-primary/30" aria-hidden="true" />
      </ScrollReveal>

      <div className="rounded-[1.75rem] border border-line bg-white px-6 shadow-[0_18px_48px_-40px_rgba(1,21,62,0.5)] md:px-8">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <ScrollReveal
              key={item.title}
              direction="right"
              delay={index === 0 ? 0 : index === 1 ? 100 : 200}
            >
              <article className="grid grid-cols-[54px_1fr] items-start gap-4 border-b border-line py-6 last:border-b-0 md:grid-cols-[64px_1fr] md:gap-5 md:py-7">
                <span className="grid size-[54px] place-items-center rounded-2xl bg-ink text-white md:size-16">
                  <Icon size={27} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <div className="mb-1 flex items-baseline justify-between gap-3">
                    <h3 className="text-[24px] font-bold leading-snug text-ink">
                      {item.title}
                    </h3>
                    <span className="shrink-0 text-[18px] font-bold tracking-[.12em] text-primary/35">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="text-[21px] leading-7 text-muted">
                    {item.description}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}

export default function AboutGrid({ title, items, variant }: AboutGridProps) {
  if (variant === "interest") {
    return <InterestSection title={title} items={items} variant={variant} />;
  }

  return <SkillsSection title={title} items={items} variant={variant} />;
}
