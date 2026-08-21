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
                <div className="relative flex h-64 items-center justify-center bg-slate-100 dark:bg-navy-900" role="img" aria-label="Map showing Al Mawarid office location in Dubai">
                  <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(45deg, var(--color-navy-200) 25%, transparent 25%), linear-gradient(-45deg, var(--color-navy-200) 25%, transparent 25%)", backgroundSize: "24px 24px" }} />
                  <div className="relative flex flex-col items-center gap-2 text-navy-500 dark:text-slate-400">
                    <MapPin className="h-8 w-8 text-gold-500" aria-hidden="true" />
                    <p className="text-sm font-medium">Sheikh Zayed Road, Dubai, UAE</p>
                    <p className="text-xs">Interactive map placeholder — embed Google Maps here</p>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className=" text-2xl font-bold">Our Location</h3>
                  <p>Visit our head office or get in touch with our team for personalized assistance.</p>
                </div>

                  <a className=" font-semibold bg-gray-100 rounded-xl px-5 py-2 mt-5 flex items-center justify-center gap-3npmru dark:bg-navy-700"
                  href="">
                    <MapPin className="h-8 w-8 text-navy-900 dark:text-white" aria-hidden="true" />
                    View on Map
                  </a>

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
