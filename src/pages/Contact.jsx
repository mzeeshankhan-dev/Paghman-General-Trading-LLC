import { useTranslation } from "react-i18next";
import { MapPin, Mail, Phone, Clock, MessageCircle } from "lucide-react";
import Seo from "../components/ui/Seo";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import ContactForm from "../components/contact/ContactForm";
import GetQuote from "../components/ui/GetQuote";

export default function Contact() {
  const { t } = useTranslation();

  const infoCards = [
    { icon: MapPin, title: t("contact.info.addressTitle"), value: t("contact.info.address") },
    { icon: Phone, title: t("contact.info.phoneTitle"), value: t("contact.info.phone"), href: `tel:${t("contact.info.phone")}` },
    { icon: Mail, title: t("contact.info.emailTitle"), value: t("contact.info.email"), href: `mailto:${t("contact.info.email")}` },
    { icon: Clock, title: t("contact.info.hoursTitle"), value: t("contact.info.hours") },
  ];

  return (
    <>
      <Seo title={t("nav.contact")} description={t("contact.subtitle")} />
      <PageHeader eyebrow={t("contact.eyebrow")} title={t("contact.title")} subtitle={t("contact.subtitle")} />

      <section className="section-y">
        <div className="container-page flex flex-col gap-8">
          <div className="flex flex-col gap-8">
            <div className="grid gap-4 grid-cols-1 min-[460px]:grid-cols-2  min-[950px]:grid-cols-4  text-center">
              {infoCards.map((card) => (
                <Reveal key={card.title} className="card flex flex-col gap-3 p-6 items-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-800 text-gold-400">
                    <card.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-sm font-semibold text-navy-900 dark:text-white">{card.title}</h3>
                  {card.href ? (
                    <a href={card.href} className="text-sm text-slate-500 hover:text-gold-600 dark:text-slate-400">
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-500 dark:text-slate-400">{card.value}</p>
                  )}
                </Reveal>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 min-[800px]:grid-cols-2 gap-8">

            <Reveal direction="left">
              <ContactForm />
            </Reveal>

            <div className="location-map card flex flex-col gap-8 bg-white shadow-sm p-4 lg:p-7">
              <Reveal className="overflow-hidden">
                <div className="relative flex h-64 items-center justify-center bg-slate-100 dark:bg-navy-900" role="img" aria-label="Map showing Paghman office location in Dubai">
                  <div className="absolute inset-0">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.779699817454!2d55.340086774024044!3d25.176915432524527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f67c008cf3085%3A0x34b429a2e3db300!2sPAGHMAN%20GENERAL%20TRADING%20LLC%20WARE%20HOUSE!5e0!3m2!1sen!2s!4v1787417318536!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                      title="Office Location"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className=" text-2xl font-bold">{t("contact.info.locationH")}</h3>
                  <p>{t("contact.info.locationDesc")}</p>
                </div>

              </Reveal>
              <Reveal>
                <a
                  href="https://wa.me/971500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {t("contact.whatsapp")}
                </a>
              </Reveal>
            </div>

          </div>
        </div>
      </section>
      <GetQuote bgColor="bg-white" />
    </>
  );
}
