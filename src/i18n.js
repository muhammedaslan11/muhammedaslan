import i18n from "i18next";
import { Translation, initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

// const resources = {
//   tr: {
//     translation: {
//       welcome: "Hoşgeldin Ulan!",
//     },
//   },
//   en: {
//     translation: {
//       welcome: "Welcome Ulan!",
//     },
//   },
// };

i18n.use(initReactI18next).use(Backend).init({
  lng: "en",
});

export default i18n;
