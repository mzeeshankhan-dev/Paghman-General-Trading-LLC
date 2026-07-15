import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import fa from "./locales/fa.json";
import ur from "./locales/ur.json";

const STORAGE_KEY = "trading-corp-lang";

const savedLang = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fa: { translation: fa },
    ur: { translation: ur },
  },
  lng: savedLang || "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export const LANGUAGES = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "fa", label: "فارسی", dir: "rtl" },
  { code: "ur", label: "اردو", dir: "rtl" },
];

export function applyLanguage(code) {
  const lang = LANGUAGES.find((l) => l.code === code) || LANGUAGES[0];
  i18n.changeLanguage(lang.code);
  document.documentElement.lang = lang.code;
  document.documentElement.dir = lang.dir;
  document.documentElement.classList.toggle("font-urdu", lang.code === "ur");
  document.documentElement.classList.toggle("font-arabic", lang.code === "fa");
  localStorage.setItem(STORAGE_KEY, lang.code);
}

export default i18n;
