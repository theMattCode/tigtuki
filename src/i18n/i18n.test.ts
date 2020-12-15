import { DEFAULT_LOCALE, translations } from "./i18n";

it("all translation files has all keys", () => {
  const referenceTranslations = translations[DEFAULT_LOCALE];
  Object.keys(translations)
    .filter((languageKey) => languageKey !== DEFAULT_LOCALE)
    .forEach((languageKey) => {
      expect(Object.keys(translations[languageKey]).sort()).toEqual(
        Object.keys(referenceTranslations).sort()
      );
    });
});
