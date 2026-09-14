import type { Locale } from "@/i18n";
import { createContext } from "react";

type LanguageContextType = {
  locale: string;
  setLocale: (locale: Locale) => void;
  isRTL: boolean;
  toggleLanguage: () => void;
};

export const languageContext = createContext<LanguageContextType | undefined>(
  undefined,
);
