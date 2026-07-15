import { useTranslation } from "react-i18next";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { industryIcons } from "../../data/icons";

export default function IndustriesPreview() {
  const { t } = useTranslation();
  const items = t("industries.list", { returnObjects: true }) || [];

  return (
    <section className="section-y bg-slate-50 dark:bg-navy-900/40">
      <div className="container-page">
        <SectionHeading eyebrow={t("industries.eyebrow")} title={t("home.industriesTitle")} subtitle={t("home.industriesSubtitle")} />

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = industryIcons[index];
            return (
              <Reveal key={item.title} delay={index * 0.05} className="card flex flex-col items-center gap-3 p-6 text-center">
                {Icon && (
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-50 text-gold-600 dark:bg-gold-500/10 dark:text-gold-300">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                )}
                <h3 className="text-sm font-semibold text-navy-900 dark:text-white">{item.title}</h3>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
