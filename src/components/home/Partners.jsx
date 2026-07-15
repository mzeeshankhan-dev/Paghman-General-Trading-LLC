import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { partnerLogos } from "../../data/images";
import "swiper/css";

export default function Partners() {
  const { t } = useTranslation();

  return (
    <section className="border-y border-slate-100 bg-white py-10 dark:border-navy-800 dark:bg-navy-950">
      <div className="container-page">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">{t("home.partnersTitle")}</p>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={4000}
          loop
          slidesPerView={3}
          spaceBetween={40}
          allowTouchMove={false}
          breakpoints={{
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {partnerLogos.map((logo) => (
            <SwiperSlide key={logo.id} className="flex items-center justify-center">
              <img
                src={logo.src}
                alt="Partner company logo"
                loading="lazy"
                className="h-10 w-auto grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
