import { useState } from "react";
import { useTranslation } from "react-i18next";
import Seo from "../components/ui/Seo";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import ProductCard from "../components/products/ProductCard";
import { productImages } from "../data/images";

export default function Products() {
  const { t } = useTranslation();
  const categories = t("products.categories", { returnObjects: true }) || [];
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? categories : categories.filter((c) => c.id === active);

  return (
    <>
      <Seo title={t("nav.products")} description={t("products.subtitle")} />
      <PageHeader eyebrow={t("products.eyebrow")} title={t("products.title")} subtitle={t("products.subtitle")} />

      <section className="section-y">
        <div className="container-page">
          <Reveal className="mb-10 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => setActive("all")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                active === "all" ? "bg-navy-800 text-white dark:bg-gold-500 dark:text-navy-900" : "bg-slate-100 text-navy-700 dark:bg-navy-800 dark:text-slate-200"
              }`}
            >
              {t("common.all")}
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActive(category.id)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  active === category.id ? "bg-navy-800 text-white dark:bg-gold-500 dark:text-navy-900" : "bg-slate-100 text-navy-700 dark:bg-navy-800 dark:text-slate-200"
                }`}
              >
                {category.title}
              </button>
            ))}
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((category, index) => (
              <ProductCard
                key={category.id}
                title={category.title}
                desc={category.desc}
                image={productImages[category.id]}
                delay={index * 0.06}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
