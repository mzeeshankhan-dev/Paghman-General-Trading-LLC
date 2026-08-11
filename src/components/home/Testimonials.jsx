import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Testimonials() {
  const { t, i18n } = useTranslation();
  const testimonials = t("testimonials.list", { returnObjects: true }) || [];
  const isRtl = i18n.dir() === "rtl";

  return (
    <section className="section-y text-white">
      <div className="container-page">
        <SectionHeading eyebrow={t("nav.home")} title={t("home.testimonialsTitle")} subtitle={t("home.testimonialsSubtitle")}/>

        <div className="relative mt-12">
          <Swiper
            key={isRtl ? "rtl" : "ltr"}
            dir={isRtl ? "rtl" : "ltr"}
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop
            spaceBetween={24}
            slidesPerView={1}
            navigation={{ prevEl: ".testi-prev", nextEl: ".testi-next" }}
            pagination={{ clickable: true, el: ".testi-pagination" }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="pb-14!"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.name} className="h-auto">
                <figure className="flex h-full flex-col gap-5 rounded-2xl bg-gray-300 p-8 dark:bg-navy-900">
                  <Quote className="h-8 w-8 text-gold-400" aria-hidden="true" />
                  <blockquote className="flex-1 leading-relaxed text-black dark:text-white">&ldquo;{item.text}&rdquo;</blockquote>
                  <figcaption>
                    <p className="font-heading font-semibold text-black/90 dark:text-white">{item.name}</p>
                    <p className="text-xs text-black/50 dark:text-white/50">{item.role}</p>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="testi-pagination mt-2 flex justify-center gap-1.5 [&_.swiper-pagination-bullet]:h-2 [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet-active]:bg-gold-100" />

          <button
            type="button"
            className="testi-prev absolute top-[40%] -inset-s-4 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-gold-500 hover:text-navy-900 lg:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 rtl-flip" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="testi-next absolute top-[40%] -inset-e-4 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-gold-500 hover:text-navy-900 lg:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 rtl-flip" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
