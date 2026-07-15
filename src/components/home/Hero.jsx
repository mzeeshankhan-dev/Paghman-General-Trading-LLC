import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { ArrowRight, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import Counter from "../ui/Counter";
import { heroSlides } from "../../data/images";
import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero() {
  const { t } = useTranslation();
  const stats = t("hero.stats", { returnObjects: true }) || [];

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-navy-950 text-white">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="absolute inset-0 h-full w-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <img
                src={slide.src}
                alt=""
                role="presentation"
                loading="eager"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/75 to-navy-950/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="container-page relative pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="eyebrow bg-white/10 text-gold-300">{t("hero.eyebrow")}</span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">{t("hero.subtitle")}</p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/products" className="btn-primary">
              {t("common.exploreProducts")}
              <ArrowRight className="h-4 w-4 rtl-flip" aria-hidden="true" />
            </Link>
            <Link to="/contact" className="btn-outline">
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              {t("common.contactUs")}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4 sm:gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-heading text-3xl font-bold text-gold-400 sm:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/60 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
