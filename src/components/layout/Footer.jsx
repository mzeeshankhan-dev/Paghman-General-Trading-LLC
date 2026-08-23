import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Ship, Mail, Phone, MapPin, Send } from "lucide-react";
import footerImg from "../../assets/images/footerImg.webp"

// lucide-react no longer ships brand/social icons, so these are small inline SVGs.
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5H16l.5-3H13.5V8.3c0-.87.24-1.46 1.5-1.46H16.6V4.14C16.3 4.1 15.3 4 14.1 4c-2.4 0-4.1 1.47-4.1 4.17v2.33H7.5v3H10V21h3.5z" />
    </svg>
  );
}
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H4V20h2.94V8.5zM5.47 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4zM20 13.6c0-3-1.6-4.4-3.75-4.4-1.73 0-2.5.95-2.94 1.62V8.5H10.4c.04.85 0 11.5 0 11.5h2.9v-6.42c0-.34.03-.69.13-.94.28-.68.9-1.4 1.96-1.4 1.38 0 1.93 1.05 1.93 2.6V20H20v-6.4z" />
    </svg>
  );
}
function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.15 3h3.02l-6.6 7.54L22.5 21h-6.08l-4.76-6.23L6.2 21H3.17l7.06-8.07L2 3h6.23l4.3 5.7L18.15 3zm-1.06 16.17h1.67L7.05 4.74H5.26l11.83 14.43z" />
    </svg>
  );
}

const SOCIALS = [
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
  { icon: XIcon, label: "X (Twitter)", href: "#" },
];

export default function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const services = t("services.list", { returnObjects: true }) || [];

  function handleSubscribe(event) {
    event.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className=" text-white/70" style={{

      backgroundImage: `      linear-gradient(
        to right,
        rgba(7, 29, 54, 0.9),
        rgba(7, 29, 54, 0.4)
      ), url(${footerImg})`,
    }}>
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500 text-navy-900">
              <img src="logo2.png" alt="paghman logo" />
            </span>
            <span className="font-heading text-lg/tight font-bold text-white">Paghman <br /> <span className="text-gold-400 text-xs">General Trading </span></span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed">{t("footer.about")}</p>
          <div className="flex gap-3 pt-2">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">{t("footer.quickLinks")}</h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            {["home", "about", "services","gallery", "contact"].map((key) => (
              <li key={key}>
                <Link to={key === "home" ? "/" : `/${key}`} className="transition-colors hover:text-gold-400">
                  {t(`nav.${key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">{t("footer.ourServices")}</h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            {services.slice(0, 5).map((service) => (
              <li key={service.id}>
                <Link to="/services" className="transition-colors hover:text-gold-400">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul className="mt-6 flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
              {t("contact.info.address")}
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
              <a href={`mailto:${t("contact.info.email")}`} className="hover:text-gold-400">
                {t("contact.info.email")}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
              <a href={`tel:${t("contact.info.phone")}`} className="hover:text-gold-400">
                {t("contact.info.phone")}
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Paghman General Trading LLC. {t("footer.rights")}
          </p>
          <p className="text-white/80">Designed & Developed by <b> Muhammad Zeeshan Khan</b></p>
        </div>
      </div>
    </footer>
  );
}
