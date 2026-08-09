import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import ServiceCard from "../services/ServiceCard";
import { serviceIcons } from "../../data/icons";

export default function ServicesPreview() {
  const { t } = useTranslation();
  const services = t("services.list", { returnObjects: true }) || [];

  return (
    <section className="section-y bg-gray-200">
      <div className="container-page">
        <SectionHeading eyebrow={t("services.eyebrow")} title={t("home.servicesTitle")} subtitle={t("home.servicesSubtitle")} />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

        <Reveal className="mt-10 flex justify-center">
          <Link to="/services" className="btn-outline-navy">
            {t("common.seeAll")}
            <ArrowRight className="h-4 w-4 rtl-flip" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
