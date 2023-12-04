import "server-only";
export enum Lang {
  en = "en",
  es = "es",
}

const dictionaries = {
  en: () => import("./en").then((module) => module.default),
  es: () => import("./es").then((module) => module.default),
} as const;

export const getDictionary = (lang: Lang) => {
  if (!dictionaries[lang]) {
    return dictionaries[Lang.en]();
  }
  return dictionaries[lang]();
};
