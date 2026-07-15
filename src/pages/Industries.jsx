import { useTranslation } from "react-i18next";
import Seo from "../components/ui/Seo";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import { industryIcons } from "../data/icons";
import { industryImages } from "../data/images";

export default function Industries() {
  const { t } = useTranslation();
  const industries = t("industries.list", { returnObjects: true }) || [];

  return (
    <>
      <Seo title={t("nav.industries")} description={t("industries.subtitle")} />
      <PageHeader eyebrow={t("industries.eyebrow")} title={t("industries.title")} subtitle={t("industries.subtitle")} />

      <section className="section-y">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((item, index) => {
            const Icon = industryIcons[index];
            return (
              <Reveal key={item.title} delay={index * 0.06} className="card group overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={industryImages[index]}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy-950/40" />
                  {Icon && (
                    <span className="absolute bottom-3 start-3 flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 text-navy-900">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-base font-semibold text-navy-900 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
