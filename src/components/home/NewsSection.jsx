import { useTranslation } from "react-i18next";
import { Calendar, ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

export default function NewsSection() {
  const { t } = useTranslation();
  const news = t("news.list", { returnObjects: true }) || [];

  return (
    <section className="section-y bg-slate-50 dark:bg-navy-900/40">
      <div className="container-page">
        <SectionHeading eyebrow={t("home.newsTitle")} title={t("home.newsTitle")} subtitle={t("home.newsSubtitle")} />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {news.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} className="card flex flex-col gap-4 p-7">
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-400">
                <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                {item.date}
              </span>
              <h3 className="font-heading text-lg font-semibold leading-snug text-navy-900 dark:text-white">{item.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{item.excerpt}</p>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-navy-800 hover:text-gold-600 dark:text-slate-200 dark:hover:text-gold-400"
              >
                {t("common.readMore")}
                <ArrowRight className="h-4 w-4 rtl-flip" aria-hidden="true" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
