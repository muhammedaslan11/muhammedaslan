import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";
import _en from "../public/locales/en/translation.json";
import _tr from "../public/locales/tr/translation.json";

const resources = {
  en: {
    translation: _en,
  },
  tr: {
    translation: _tr,
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
