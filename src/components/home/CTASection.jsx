import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall } from "lucide-react";
import Reveal from "../ui/Reveal";

export default function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="section-y">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-3xl bg-navy-900 px-8 py-16 text-center sm:px-16">
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 30%, var(--color-gold-500) 0%, transparent 40%), radial-gradient(circle at 85% 70%, var(--color-navy-400) 0%, transparent 45%)",
            }}
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-center gap-6">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">{t("home.ctaTitle")}</h2>
            <p className="max-w-xl text-white/70">{t("home.ctaSubtitle")}</p>
            <div className="mt-2 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                {t("common.contactUs")}
              </Link>
              <Link to="/products" className="btn-outline">
                {t("common.exploreProducts")}
                <ArrowRight className="h-4 w-4 rtl-flip" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
