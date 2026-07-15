import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import Reveal from "../ui/Reveal";

export default function ProductCard({ title, desc, image, delay = 0 }) {
  const { t } = useTranslation();
  return (
    <Reveal delay={delay} className="card group flex h-full flex-col overflow-hidden">
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-heading text-lg font-semibold text-navy-900 dark:text-white">{title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{desc}</p>
        <button
          type="button"
          className="mt-2 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-gold-600 transition-colors hover:text-gold-500 dark:text-gold-400"
        >
          {t("common.viewDetails")}
          <ArrowRight className="h-4 w-4 rtl-flip transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" aria-hidden="true" />
        </button>
      </div>
    </Reveal>
  );
}
