import i18n from "i18next";
import { initReactI18next } from "react-i18next";
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

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
