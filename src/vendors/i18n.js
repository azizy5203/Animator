import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ar from "@/locales/ar.json";
import en from "@/locales/en.json";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "ar",
    resources: {
      ar: {
        translation: ar,
      },
      en: {
        translation: en,
      },
    },
    debug: true, // Useful for debugging
    interpolation: {
      escapeValue: false, // React already escapes values, so this isn't necessary
    },
  });

export default i18next;
