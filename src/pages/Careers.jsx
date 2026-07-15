import { useTranslation } from "react-i18next";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import Seo from "../components/ui/Seo";
import PageHeader from "../components/ui/PageHeader";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import { careersImage } from "../data/images";

export default function Careers() {
  const { t } = useTranslation();
  const whyJoin = t("careers.whyJoin", { returnObjects: true }) || [];
  const jobs = t("careers.jobs", { returnObjects: true }) || [];

  return (
    <>
      <Seo title={t("nav.careers")} description={t("careers.subtitle")} />
      <PageHeader eyebrow={t("careers.eyebrow")} title={t("careers.title")} subtitle={t("careers.subtitle")} />

      <section className="section-y">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right" className="overflow-hidden rounded-3xl">
            <img src={careersImage} alt="Team collaborating at Al Mawarid" loading="lazy" className="h-[380px] w-full object-cover" />
          </Reveal>
          <Reveal direction="left" className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 dark:text-white">{t("careers.whyJoinTitle")}</h2>
            <div className="flex flex-col gap-5">
              {whyJoin.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700 dark:bg-gold-500/10 dark:text-gold-300">
                    <Briefcase className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy-900 dark:text-white">{item.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-slate-50 dark:bg-navy-900/40">
        <div className="container-page">
          <SectionHeading title={t("careers.openPositions")} align="start" />

          <div className="mt-10 flex flex-col gap-4">
            {jobs.map((job, index) => (
              <Reveal
                key={job.title}
                delay={index * 0.06}
                className="card flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center"
              >
                <div>
                  <h3 className="font-heading text-lg font-semibold text-navy-900 dark:text-white">{job.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="h-4 w-4 text-gold-500" aria-hidden="true" />
                      {job.dept}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-gold-500" aria-hidden="true" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-gold-500" aria-hidden="true" />
                      {job.type}
                    </span>
                  </div>
                </div>
                <a href="mailto:careers@almawaridtrading.com" className="btn-outline-navy shrink-0 !py-2.5">
                  {t("common.applyNow")}
                  <ArrowRight className="h-4 w-4 rtl-flip" aria-hidden="true" />
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex flex-col items-center gap-4 text-center">
            <p className="text-slate-500 dark:text-slate-400">{t("careers.noOpening")}</p>
            <a href="mailto:careers@almawaridtrading.com" className="btn-primary">
              {t("careers.sendCv")}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
