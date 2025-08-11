import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translationFiles = require.context("./i18n", false, /\.json$/);

const resources: any = {};

translationFiles.keys().forEach((fileName) => {
  const lang = fileName.replace("./", "").replace(".json", "");
  resources[lang] = {
    translation: translationFiles(fileName)
  };
});

const supportedLngs: string[] = translationFiles
  .keys()
  .map((fileName) => fileName.replace("./", "").replace(".json", ""));

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    supportedLngs,
    interpolation: {
      escapeValue: false // React is already guarded agains XSS injection
    }
  });

export default i18n;
