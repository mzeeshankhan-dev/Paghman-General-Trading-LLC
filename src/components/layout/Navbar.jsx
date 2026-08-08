import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Moon, Sun, Globe, ChevronDown, Ship } from "lucide-react";
import { LANGUAGES, applyLanguage } from "../../i18n";

const NAV_ITEMS = [
  { key: "home", to: "/" },
  { key: "about", to: "/about" },
  { key: "products", to: "/products" },
  { key: "services", to: "/services" },
  { key: "gallery", to: "/gallery" },
  { key: "contact", to: "/contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-sm" : "bg-[#193e72]"
      }`}
    >
      <nav className="container-page flex h-20 items-center justify-between" aria-label="Main navigation">
        <NavLink to="/" className="flex items-center gap-2.5 shrink-0" aria-label="Al Mawarid General Trading LLC — Home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-800 text-gold-400 dark:bg-gold-500 dark:text-navy-900 overflow-hidden">
            <img className="h-full w-full"  src="./logo.png" alt="logo" />
          </span>
          <span className={`font-heading text-lg font-bold leading-tight ${scrolled ? "text-navy-900 dark:text-white" : "text-white"}`}>
            Paghman
            <span className="block text-[10px] font-medium uppercase tracking-[0.25em] text-gold-500">General Trading</span>
          </span>
        </NavLink>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-gold-500"
                      : scrolled
                      ? "text-navy-700 hover:text-gold-500 dark:text-slate-200"
                      : "text-white/90 hover:text-white"
                  }`
                }
              >
                {t(`nav.${item.key}`)}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <div className="relative" ref={langRef}>
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label="Change language"
              className={`flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-medium transition-colors ${
                scrolled
                  ? "border-slate-200 text-navy-700 hover:border-gold-400 dark:border-navy-700 dark:text-slate-200"
                  : "border-white/30 text-white hover:border-white"
              }`}
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
              {currentLang.code.toUpperCase()}
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${langOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.ul
                  role="listbox"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute inset-e-0 mt-2 w-40 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl dark:border-navy-700 dark:bg-navy-900"
                >
                  {LANGUAGES.map((lang) => (
                    <li key={lang.code}>
                      <button
                        role="option"
                        aria-selected={lang.code === currentLang.code}
                        type="button"
                        onClick={() => {
                          applyLanguage(lang.code);
                          setLangOpen(false);
                        }}
                        className={`flex w-full items-center justify-between px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-navy-800 ${
                          lang.code === currentLang.code ? "text-gold-600 font-semibold" : "text-navy-700 dark:text-slate-200"
                        }`}
                      >
                        {lang.label}
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
              scrolled
                ? "border-slate-200 text-navy-700 hover:border-gold-400 dark:border-navy-700 dark:text-slate-200"
                : "border-white/30 text-white hover:border-white"
            }`}
          >
            {theme === "dark" ? <Sun className="h-4.5 w-4.5" aria-hidden="true" /> : <Moon className="h-4.5 w-4.5" aria-hidden="true" />}
          </button>

          <NavLink to="/contact" className="btn-primary py-2.5! px-5! text-xs">
            {t("common.getQuote")}
          </NavLink>
        </div>

        <button
          type="button"
          className={`flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${
            scrolled ? "text-navy-900 dark:text-white" : "text-white"
          }`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-navy-900 lg:hidden"
          >
            <ul className="container-page flex flex-col gap-1 py-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.key}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-lg px-4 py-3 text-sm font-medium ${isActive ? "bg-white/10 text-gold-400" : "text-white/85"}`
                    }
                  >
                    {t(`nav.${item.key}`)}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="container-page flex items-center justify-between gap-3 border-t border-white/10 py-4">
              <div className="flex gap-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => applyLanguage(lang.code)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
                      lang.code === currentLang.code ? "border-gold-400 text-gold-400" : "border-white/30 text-white/80"
                    }`}
                  >
                    {lang.code.toUpperCase()}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
