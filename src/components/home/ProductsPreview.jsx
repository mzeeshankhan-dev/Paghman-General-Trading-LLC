import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import ProductCard from "../products/ProductCard";
import { productImages } from "../../data/images";

export default function ProductsPreview() {
  const { t } = useTranslation();
  const categories = t("products.categories", { returnObjects: true }) || [];

  return (
    <section className="section-y bg-slate-50 dark:bg-navy-900/40">
      <div className="container-page">
        <SectionHeading eyebrow={t("products.eyebrow")} title={t("home.productsTitle")} subtitle={t("home.productsSubtitle")} />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <ProductCard
              key={category.id}
              title={category.title}
              desc={category.desc}
              image={productImages[category.id]}
              delay={index * 0.08}
            />
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Link to="/products" className="btn-outline-navy">
            {t("common.seeAll")}
            <ArrowRight className="h-4 w-4 rtl-flip" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
