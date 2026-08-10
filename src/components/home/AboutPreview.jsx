import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "../ui/Reveal";
import aboutImage from "../../assets/images/about-Img.webp"

export default function AboutPreview() {
  const { t } = useTranslation();
  const values = t("about.values", { returnObjects: true }) || [];

  return (
    <section className="section-y">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <Reveal direction="right" className="relative">
          <div className="overflow-hidden rounded-3xl">
            <img src={aboutImage} alt="Team at Al Mawarid General Trading" loading="lazy" className="h-105 w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -start-s-6 hidden rounded-2xl bg-gold-500 px-6 py-5 text-navy-900 shadow-xl sm:block">
            <p className="font-heading text-3xl font-bold">25+</p>
            <p className="text-xs font-semibold uppercase tracking-wider">{t("hero.stats.0.label")}</p>
          </div>
        </Reveal>

        <Reveal direction="left" className="flex flex-col gap-5">
          <span className="eyebrow w-fit">{t("about.eyebrow")}</span>
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 dark:text-white sm:text-4xl">{t("home.aboutTitle")}</h2>
          <p className="text-base leading-relaxed text-slate-500 dark:text-slate-400">{t("home.aboutText")}</p>

          <ul className="mt-2 grid gap-3 sm:grid-cols-2">
            {values.map((value) => (
              <li key={value.title} className="flex items-start gap-2.5 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" />
                <span className="font-medium text-navy-800 dark:text-slate-200">{value.title}</span>
              </li>
            ))}
          </ul>

          <Link to="/about" className="btn-outline-navy mt-4 w-fit">
            {t("common.learnMore")}
            <ArrowRight className="h-4 w-4 rtl-flip" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
