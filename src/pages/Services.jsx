import { useTranslation } from "react-i18next";
import Seo from "../components/ui/Seo";
import PageHeader from "../components/ui/PageHeader";
import ServiceCard from "../components/services/ServiceCard";
import { serviceIcons } from "../data/icons";
import CTASection from "../components/home/CTASection";

export default function Services() {
  const { t } = useTranslation();
  const services = t("services.list", { returnObjects: true }) || [];

  return (
    <>
      <Seo title={t("nav.services")} description={t("services.subtitle")} />
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

      <CTASection />
    </>
  );
}
