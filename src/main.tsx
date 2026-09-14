import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { ClerkProvider } from "@clerk/clerk-react";
import { LanguageProvider } from "./providers/languageProvider.tsx";
import IntlWrapper from "./components/IntlWrapper.tsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <LanguageProvider>
        <IntlWrapper>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </IntlWrapper>
      </LanguageProvider>
    </ClerkProvider>
  </StrictMode>,
);
