import en from "./lang/en.json";
import de from "./lang/de.json";

export const DEFAULT_LOCALE = "en";

export const translations: { [key: string]: Record<string, string> } = {
  en,
  de,
};

export const selectMessages = (locale: string): Record<string, string> =>
  translations[locale ?? DEFAULT_LOCALE];
