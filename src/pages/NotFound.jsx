import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Compass, ArrowRight } from "lucide-react";
import Seo from "../components/ui/Seo";
import Reveal from "../components/ui/Reveal";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <Seo title={t("notFound.title")} description={t("notFound.subtitle")} />
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-navy-950 px-6 text-center text-white">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 30%, var(--color-gold-500) 0%, transparent 45%), radial-gradient(circle at 75% 70%, var(--color-navy-400) 0%, transparent 45%)",
          }}
          aria-hidden="true"
        />
        <Reveal className="relative flex flex-col items-center gap-6">
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-gold-400">
            <Compass className="h-9 w-9" aria-hidden="true" />
          </span>
          <p className="font-heading text-8xl font-bold text-gold-500">404</p>
          <h1 className="text-3xl font-bold sm:text-4xl">{t("notFound.title")}</h1>
          <p className="max-w-md text-white/70">{t("notFound.subtitle")}</p>
          <Link to="/" className="btn-primary">
            {t("notFound.cta")}
            <ArrowRight className="h-4 w-4 rtl-flip" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
