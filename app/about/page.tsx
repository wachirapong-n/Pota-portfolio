import Image from "next/image";
import { Heart, Sparkles, Target, UserRound } from "lucide-react";
import {
  aboutGoal,
  gridItemsInterested,
  gridItemsISkill,
  introductionData,
} from "@/data/introdcution";
import ScrollReveal from "@/components/about/scroll-reveal";
import AboutGrid from "@/components/about/about-grid";

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative bg-mist py-20 md:py-28">
        <div
          className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/70 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid w-full max-w-[1120px] items-center gap-12 px-6 md:grid-cols-[1fr_0.82fr] md:gap-16 max-sm:px-[18px]">
          <ScrollReveal direction="left">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-xl font-bold tracking-[0.16em] text-primary shadow-sm">
              <Sparkles size={15} aria-hidden="true" /> เกี่ยวกับฉัน
            </p>
            <h1 className="max-w-[650px] text-[clamp(38px,6vw,64px)] font-bold leading-[1.2] tracking-[-0.04em] text-ink">
              รู้จักตัวตน
              <span className="mt-1 block text-primary">และเส้นทางของฉัน</span>
            </h1>
            <p className="mt-6 max-w-[570px] text-[22px] leading-8 text-muted md:text-2xl lg:text-2xl">
              เรียนรู้ สร้างสรรค์ และประยุกต์ใช้เทคโนโลยี
              เพื่อพัฒนาการเรียนรู้ให้สนุกและมีความหมายยิ่งขึ้น
            </p>
          </ScrollReveal>

          <ScrollReveal
            direction="right"
            delay={100}
            className="mx-auto w-full max-w-[430px]"
          >
            <div className="relative">
              <div
                className="absolute -bottom-4 -left-4 h-full w-full rounded-[2rem] border-2 border-primary/15"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/4.4] overflow-hidden rounded-[2rem] bg-white p-2 shadow-[0_18px_55px_-30px_rgba(1,21,62,0.45)]">
                <Image
                  src="/images/introduce.jpg"
                  alt={`ภาพแนะนำตัวของ ${introductionData.name}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 430px"
                  className="rounded-[1.6rem] object-cover"
                />
              </div>
              <div
                className="absolute -right-4 top-8 grid h-14 w-14 place-items-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20"
                aria-hidden="true"
              >
                <Heart size={23} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1120px] px-6 max-sm:px-[18px]">
          <ScrollReveal direction="left" className="mb-10 md:mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
              แนะนำตัว
            </h2>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:gap-8">
            <ScrollReveal direction="left" delay={100}>
              <div className="h-full rounded-3xl bg-ink p-7 text-white md:p-9">
                <div className="mb-8 grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-white">
                  <UserRound size={22} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold leading-relaxed">
                  {introductionData.name}
                </h3>
                <p className="mt-2 text-white/70">{introductionData.faculty}</p>
                <div className="mt-8 h-px bg-white/15" />
                <dl className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <dt className="text-xl text-white/60">สาขาวิชา</dt>
                    <dd className="mt-1 font-semibold">
                      {introductionData.major}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xl text-white/60">รหัสนักศึกษา</dt>
                    <dd className="mt-1 font-semibold">
                      {introductionData.studentId}
                    </dd>
                  </div>
                </dl>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="flex h-full flex-col justify-center rounded-3xl border border-line bg-white p-7 md:p-9">
                <p className="text-2xl leading-9 text-muted">
                  {introductionData.description}
                </p>
                <div className="mt-7 flex items-start gap-3 rounded-2xl bg-mist p-5">
                  <span className="mt-0.5 text-primary">
                    <Sparkles size={19} aria-hidden="true" />
                  </span>
                  <p className="text-[22px] leading-7 text-ink">
                    เชื่อว่าการเรียนรู้ที่ดีเกิดขึ้นได้
                    เมื่อเนื้อหาและสื่อถูกออกแบบให้เข้าใจง่ายและเข้าถึงผู้เรียน
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-mist">
        <AboutGrid title="ความสนใจ" items={gridItemsInterested} />
      </section>
      <section className=" py-20 md:py-24">
        <AboutGrid title="ทักษะของฉัน" items={gridItemsISkill} />
      </section>
      <section className="py-20 md:py-28 bg-mist">
        <div className="mx-auto w-full max-w-[1120px] px-6 max-sm:px-[18px]">
          <ScrollReveal direction="left">
            <div className="relative overflow-hidden rounded-[2rem] bg-ink px-7 py-10 text-white md:px-14 md:py-14">
              <div
                className="absolute -right-10 -top-20 h-64 w-64 rounded-full border-[28px] border-white/5"
                aria-hidden="true"
              />
              <div className="relative max-w-[760px] ">
                <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[22px] font-semibold text-white/90">
                  <Target size={16} aria-hidden="true" /> เป้าหมายของฉัน
                </span>
                <h2 className="text-3xl font-bold leading-snug md:text-4xl">
                  เติบโตไปพร้อมกับการสร้างสรรค์สิ่งที่มีคุณค่า
                </h2>
                <p className="mt-5 text-[22px] leading-8 text-white/75 md:text-2xl">
                  {aboutGoal.goal}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
