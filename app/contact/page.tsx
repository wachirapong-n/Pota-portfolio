import type { Metadata } from "next";
import { ExternalLink, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { ContactForm } from "@/components/contact/contact-form";
import ScrollReveal from "@/components/about/scroll-reveal";
import DecoratedImage from "@/components/shared/decorated-image";
import SectionLabel from "@/components/shared/section-label";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the portfolio owner.",
};
const container = "mx-auto w-full max-w-[1120px] px-6 max-sm:px-[18px]";

export default function ContactPage() {
  return (
    <>
      <section className="bg-mist py-[76px] max-md:pt-[54px]">
        <div className={container}>
          <ScrollReveal direction="left">
            <SectionLabel className="mb-5 uppercase">Start a conversation</SectionLabel>
            <h1 className="mt-3 mb-4 text-[clamp(40px,6vw,62px)] font-bold tracking-[-.05em]">
              Contact <span className="mt-1  text-primary"> Me</span>
            </h1>
            <p className="max-w-[760px] text-[22px] leading-8 text-muted">
              หากมีคำถาม ข้อเสนอแนะ หรืออยากพูดคุยเกี่ยวกับผลงาน
              <br className="hidden sm:block" />
              สามารถส่งข้อความถึงฉันได้ผ่านทางแบบฟอร์มด้านล่าง
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-[100px] max-md:py-[72px]">
        <div
          className={`${container} grid grid-cols-[.8fr_1.2fr] gap-[78px] max-md:grid-cols-1 max-md:gap-12`}
        >
          <ScrollReveal
            direction="left"
            className="mx-auto w-full max-w-[360px] md:h-full md:max-w-none"
          >
            <DecoratedImage
              src="/images/contact.jpg"
              alt="ภาพประกอบหน้าติดต่อ"
              sizes="(max-width: 768px) 90vw, 360px"
              className="rotate-[-4.1deg] md:h-full"
              frameClassName="aspect-[4/4.4] md:aspect-auto md:h-full md:min-h-[760px]"
            />
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="mb-3 text-[20px] font-bold uppercase tracking-[.16em] text-primary">
              Send a note
            </div>
            <h2 className="mt-3 mb-6 text-[32px] font-bold tracking-tight">
              แบบฟอร์มติดต่อ
            </h2>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-mist py-[72px]">
        <div className={container}>
          <ScrollReveal direction="left">
            <div className="text-[20px] font-bold uppercase tracking-[.16em] text-primary">
              Find me
            </div>
            <h2 className="mt-3 mb-3 text-[clamp(30px,4vw,42px)] font-bold tracking-[-.04em]">
              Faculty location
            </h2>
            <a
              href={profile.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="mb-5 inline-flex items-center gap-2 font-semibold text-primary underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              <MapPin size={22} aria-hidden="true" />
              เปิดตำแหน่งใน Google Maps
              <ExternalLink size={20} aria-hidden="true" />
            </a>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={100}>
            <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-sm">
              <iframe
                title="แผนที่คณะศึกษาศาสตร์ มหาวิทยาลัยเชียงใหม่"
                src={profile.mapEmbed}
                width="100%"
                height="460"
                className="block h-[340px] w-full rounded-xl border-0 md:h-[460px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
