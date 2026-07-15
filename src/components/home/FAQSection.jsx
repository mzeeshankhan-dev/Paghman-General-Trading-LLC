import { useTranslation } from "react-i18next";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Accordion from "../ui/Accordion";

export default function FAQSection() {
  const { t } = useTranslation();
  const faqs = t("faq.list", { returnObjects: true }) || [];

  return (
    <section className="section-y">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow={t("nav.contact")} title={t("home.faqTitle")} subtitle={t("home.faqSubtitle")} align="start" />
        <Reveal direction="left">
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </section>
  );
}
