import { useTranslation } from "react-i18next";
import { Target, Eye, CheckCircle2 } from "lucide-react";
import Seo from "../components/ui/Seo";
import PageHeader from "../components/ui/PageHeader";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Counter from "../components/ui/Counter";
// import { aboutStoryImage } from "../data/images";

export default function About() {
  const { t } = useTranslation();
  const values = t("about.values", { returnObjects: true }) || [];
  const timeline = t("about.timeline", { returnObjects: true }) || [];
  const stats = t("hero.stats", { returnObjects: true }) || [];

  return (
    <>
      <Seo title={t("nav.about")} description={t("about.intro")} />
      <PageHeader title={t("about.title")} subtitle={t("about.intro")} />

      <section className="section-y">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right" className="overflow-hidden rounded-3xl">
            <img src="" alt="Al Mawarid trading office" loading="lazy" className="h-105 w-full object-cover" />
          </Reveal>
          <Reveal direction="left" className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 dark:text-white">{t("about.storyTitle")}</h2>
            <p className="text-base leading-relaxed text-slate-500 dark:text-slate-400">{t("about.story")}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-slate-50 dark:bg-navy-900/40">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <Reveal className="card flex flex-col gap-4 p-9">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-gold-400">
              <Target className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="font-heading text-xl font-semibold text-navy-900 dark:text-white">{t("about.missionTitle")}</h3>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{t("about.mission")}</p>
          </Reveal>
          <Reveal delay={0.1} className="card flex flex-col gap-4 p-9">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500 text-navy-900">
              <Eye className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="font-heading text-xl font-semibold text-navy-900 dark:text-white">{t("about.visionTitle")}</h3>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{t("about.vision")}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading title={t("about.valuesTitle")} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.08} className="card flex flex-col gap-3 p-6 text-center items-center">
                <CheckCircle2 className="h-8 w-8 text-gold-500" aria-hidden="true" />
                <h3 className="font-heading text-base font-semibold text-navy-900 dark:text-white">{value.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{value.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-navy-900 text-white">
        <div className="container-page">
          <SectionHeading title={t("about.statsTitle")} light />
          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-4xl font-bold text-gold-400">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading title={t("about.timelineTitle")} />
          <div className="relative mt-14 flex flex-col gap-10 before:absolute before:start-[15px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-slate-200 dark:before:bg-navy-800 sm:before:start-1/2">
            {timeline.map((item, index) => (
              <Reveal
                key={item.year}
                delay={index * 0.08}
                direction={index % 2 === 0 ? "right" : "left"}
                className={`relative flex flex-col gap-2 ps-10 sm:w-1/2 sm:ps-0 ${
                  index % 2 === 0 ? "sm:pe-12 sm:text-end" : "sm:ps-12 sm:ms-auto"
                }`}
              >
                <span className="absolute start-0 top-1 h-3 w-3 rounded-full bg-gold-500 ring-4 ring-white dark:ring-navy-950 sm:start-[calc(50%-6px)]" aria-hidden="true" />
                <span className="w-fit rounded-full bg-navy-800 px-3 py-1 text-xs font-bold text-gold-400 dark:bg-gold-500/10">
                  {item.year}
                </span>
                <h3 className="font-heading text-lg font-semibold text-navy-900 dark:text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
