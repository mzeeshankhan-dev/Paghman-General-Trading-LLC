import { useTranslation } from "react-i18next";
import Seo from "../components/ui/Seo";
import Hero from "../components/home/Hero";
import ProductsPreview from "../components/home/ProductsPreview";
import AboutPreview from "../components/home/AboutPreview";
import ServicesPreview from "../components/home/ServicesPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import IndustriesPreview from "../components/home/IndustriesPreview";
import Testimonials from "../components/home/Testimonials";
import FAQSection from "../components/home/FAQSection";
import NewsSection from "../components/home/NewsSection";
import CTASection from "../components/home/CTASection";
import FreightCalculator from "../components/home/FreightCalculator";
import CargoNetworkSVG from "../components/home/CargoNetworkSVG";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Seo title={t("nav.home")} description={t("hero.subtitle")} />
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <IndustriesPreview />
      <FreightCalculator />
      <WhyChooseUs />
      <Testimonials />
      <CargoNetworkSVG />
      <CTASection />

      {/* <FAQSection /> */}
      {/* <NewsSection /> */}
      {/* <ProductsPreview /> */}
    </>
  );
}
