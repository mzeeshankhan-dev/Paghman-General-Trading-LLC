import { useTranslation } from "react-i18next";
import PageHeader from "../components/ui/PageHeader";
import ServiceCard from "../components/services/ServiceCard";
import { serviceIcons } from "../data/icons";
import CTASection from "../components/home/CTASection";
import GetQuote from "../components/ui/GetQuote";
import { ProcessIcon } from "../data/icons";
import { ArrowRight } from "lucide-react";
import processImg from "../assets/images/workingProcessImg.png"

export default function Services() {
  const { t } = useTranslation();
  const services = t("services.list", { returnObjects: true }) || [];
  const workingProcess = t("workingProcess.list", { returnObjects: true }) || [];


  return (
    <>
      <PageHeader eyebrow={t("services.eyebrow")} title={t("services.title")} subtitle={t("services.subtitle")} />

      <section className="section-y">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              icon={serviceIcons[service.id]}
              title={service.title}
              desc={service.desc}
              delay={index * 0.08}
            />
          ))}
        </div>
      </section>

      <section className="section-y bg-gray-200 dark:bg-navy-900">

        <div className="container-page grid grid-cols-[60%_40%]">

          <div className="left flex flex-col gap-8">
            <div className="l-title">
              <h2 className="text-3xl font-bold text-navy-900 dark:text-white">{t("workingProcess.title")}</h2>
              <p className=" mt-2">{t("workingProcess.subtitle")}</p>
            </div>
            <div className="process flex flex-wrap gap-1">
              {workingProcess.map((item, idx) => {
                const Icon = ProcessIcon[idx];
                return (
                  <div key={idx} className="relative processCard max-w-33 text-center flex flex-col gap-1 items-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-600 text-gold-300 dark:bg-navy-500/40 dark:text-gold-300">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="text-sm font-semibold text-navy-900 dark:text-white">{idx + 1}. {t(item.title)}</h3>
                    <p>{t(item.desc)}</p>
                    {idx !== workingProcess.length - 1 && (
                      <ArrowRight size={32} className="absolute top-2 -right-4 text-navy-400" />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="right relative">
            <img src={processImg} alt="cargo connection map" className="w-full h-full object-cover" />
          </div>

        </div>

      </section>

      <GetQuote />
    </>
  );
}
