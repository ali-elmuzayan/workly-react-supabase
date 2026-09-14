import useLanguage from "@/hooks/useLanguage";
import { messages } from "@/i18n";
import { IntlProvider } from "react-intl";

const IntlWrapper = ({ children }: { children: React.ReactNode }) => {
  const { locale } = useLanguage();
  return (
    <IntlProvider
      locale={locale}
      messages={messages[locale as keyof typeof messages]}
    >
      {children}
    </IntlProvider>
  );
};

export default IntlWrapper;
