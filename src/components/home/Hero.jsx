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
    <section className="relative flex min-h-screen items-center text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-screen w-screen object-cover"
      >
        <source src="/Hero-video.mp4" type="video/mp4" />
      </video>

      <div className="container-page pt-24 relative flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl lg:max-w-3xl text-center"
        >
          <span className="eyebrow mx-auto bg-white/10 text-gold-300">{t("hero.eyebrow")}</span>
          <h1 className="mt-7 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-center">
            {t("hero.title")}
          </h1>
          <p className=" text-center mt-6 text-xl leading-relaxed text-white/90">{t("hero.subtitle")}</p>

          <div className="mt-9 flex flex-wrap gap-4 justify-center">
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

      </div>
      <div className="absolute -bottom-13 w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className=" max-w-[70%] flex justify-between gap-8 px-5 py-5 rounded-3xl bg-[#102549]"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-heading text-7xl font-bold text-gold-400 sm:text-4xl">
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
