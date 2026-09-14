import { languageContext } from "@/providers/languageContext";
import { useContext } from "react";

function useLanguage() {
  const context = useContext(languageContext);

  if (!context)
    throw new Error("useLanguage must be used within a language provider");
  return context;
}

export default useLanguage;
