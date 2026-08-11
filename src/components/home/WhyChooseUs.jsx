import { useTranslation } from "react-i18next";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { whyUsIcons } from "../../data/icons";

export default function WhyChooseUs() {
  const { t } = useTranslation();
  const items = t("whyUs.list", { returnObjects: true }) || [];

  return (
    <section className="section-y bg-gray-200 text-black dark:bg-navy-900/40">
      <div className="container-page">
        <SectionHeading eyebrow={t("nav.about")} title={t("home.whyUsTitle")} subtitle={t("home.whyUsSubtitle")} />

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = whyUsIcons[index];
            return (
              <Reveal key={item.title} delay={index * 0.06} className="flex flex-col gap-4 bg-white/80 p-8 transition-colors hover:bg-gray-300 dark:bg-navy-900/40 dark:text-white">
                {Icon && (
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/15 text-gold-400">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                )}
                <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-black/60 dark:text-white/60">{item.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
