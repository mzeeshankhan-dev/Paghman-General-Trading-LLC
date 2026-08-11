import { useTranslation } from "react-i18next";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { industryIcons } from "../../data/icons";
import { ArrowRight } from "lucide-react";

export default function IndustriesPreview() {
  const { t } = useTranslation();
  const items = t("industries.list", { returnObjects: true }) || [];

  return (
    <section className="section-y bg-gray-200 dark:bg-navy-900/40">
      <div className="container-page">
        <SectionHeading title={t("home.industriesTitle")} />

        <div className="mt-12 grid gap-5 sm:grid-cols-3 lg:grid-cols-4 min-[700px]:overflow-x-visible max-[699px]:overflow-x-auto max-[699px]:overflow-y-hidden max-[699px]:flex scrollbar-none w-full ">
          {items.map((item, index) => {
            const Icon = industryIcons[index];
            return (
              <Reveal key={item.title} delay={index * 0.05} className=" relative flex flex-col items-center gap-3 p-5 text-center min-w-50 h-full:">
                {Icon && (
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-50 text-gold-600 dark:bg-gold-500/10 dark:text-gold-300">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                )}
                <h3 className="text-sm font-semibold text-navy-900 dark:text-white">{item.title}</h3>
                <p>{item.desc}</p>
                {index !== items.length - 1 && (
                  <ArrowRight size={32} className="absolute right-0 top-[13%] text-gold-600 " />
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
