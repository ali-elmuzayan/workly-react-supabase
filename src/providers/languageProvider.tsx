import { defaultLocale, type Locale } from "@/i18n";
import React, { useEffect, useState } from "react";
import { languageContext } from "./languageContext";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  const isRTL = locale === "ar";

  const toggleLanguage = () => {
    setLocale((locale) => (locale === "en" ? "ar" : "en"));
  };

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = locale;
  }, [locale, isRTL]);

  return (
    <languageContext.Provider
      value={{ locale, setLocale, isRTL, toggleLanguage }}
    >
      {children}
    </languageContext.Provider>
  );
}
