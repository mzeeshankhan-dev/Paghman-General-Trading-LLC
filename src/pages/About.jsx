import { useTranslation } from "react-i18next";
import { Target, Eye, CheckCircle2 } from "lucide-react";
import Seo from "../components/ui/Seo";
import PageHeader from "../components/ui/PageHeader";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Counter from "../components/ui/Counter";
import GetQuote from "../components/ui/GetQuote";
import aboutImg from "../assets/images/about-img.webp"

export default function About() {
  const { t } = useTranslation();
  const values = t("about.values", { returnObjects: true }) || [];
  const timeline = t("about.timeline", { returnObjects: true }) || [];
  const stats = t("hero.stats", { returnObjects: true }) || [];

  return (
    <>
      <Seo title={t("nav.about")} description={t("about.intro")} />
      <PageHeader title={t("about.title")} subtitle={t("about.intro")} />

      <section className="py-6">
        <div className="container-page grid items-center justify-between gap-6 min-[850px]:grid-cols-[40%_55%]">
          <Reveal direction="left" className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 dark:text-white">{t("about.storyTitle")}</h2>
            <p className="text-base leading-relaxed text-slate-500 dark:text-slate-400">{t("about.story")}</p>
          </Reveal>
          <Reveal direction="right" className="overflow-hidden rounded-3xl bg-navy-500">
            <img src={aboutImg} alt="paghman trading company" loading="lazy" className="h-80 w-full object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-gray-200  dark:bg-navy-900/40">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <Reveal className="card flex flex-col gap-4 p-9">
            <div className="flex gap-4 items-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500 text-navy-900">
                <Target className="h-6 w-6 " aria-hidden="true" />
              </span>
              <h3 className="font-heading text-xl font-bold text-navy-900 dark:text-white">{t("about.missionTitle")}</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{t("about.mission")}</p>
          </Reveal>
          <Reveal delay={0.1} className="card flex flex-col gap-4 p-9">
            <div className="flex gap-4 items-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500 text-navy-900">
                <Eye className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="font-heading text-xl font-bold text-navy-900 dark:text-white">{t("about.visionTitle")}</h3>
            </div>
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

      <section className="section-y bg-gray-200  dark:bg-navy-900/40">
        <div className="container-page grid gap-6 min-[900px]:grid-cols-[40%_55%]">
          <Reveal className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 dark:text-white">Why Choose PAGHMAN?</h2>
            <p className="text-base leading-relaxed text-slate-500 dark:text-slate-400 "> Nam eligendi, ex quod cupiditate possimus sapiente eum accusamus inventore eaque laudantium perspiciatis nisi corporis vitae dicta fuga dolore sed autem maxime!</p>

            <div className="flex gap-4 items-center">
              <span >
                <CheckCircle2 className="h-8 w-8 text-gold-500" aria-hidden="true" />
              </span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing.</p>
            </div>

            <div className="flex gap-4 items-center">
              <span >
                <CheckCircle2 className="h-8 w-8 text-gold-500" aria-hidden="true" />
              </span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
            </div>

            <div className="flex gap-4 items-center">
              <span >
                <CheckCircle2 className="h-8 w-8 text-gold-500" aria-hidden="true" />
              </span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing eli</p>
            </div>

            <div className="flex gap-4 items-center">
              <span >
                <CheckCircle2 className="h-8 w-8 text-gold-500" aria-hidden="true" />
              </span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing el</p>
            </div>
          
          </Reveal>
          <Reveal className="bg-amber-600 rounded-3xl [clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]">
            <h1>right side</h1>
          </Reveal>
        </div>
      </section>

      {/* <section className="section-y bg-navy-900 text-white">
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
      </section> */}


      <GetQuote/>

    </>
  );
}
