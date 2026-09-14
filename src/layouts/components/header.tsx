import Logo from "@/components/logo";
import Nav from "./nav";
import { UserButton } from "@clerk/clerk-react";
import useLanguage from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
// import AuthActions from "./auth-actions";

const Header = () => {
  const { isRTL, toggleLanguage } = useLanguage();
  return (
    <header className="w-full sticky top-0 z-50 py-4 px-4 mb-4">
      <div className=" max-w-6xl mx-auto ">
        {/* glass card */}
        <div className="glass-card h-16 flex-between pl-4 pr-2 sm:pl-6 sm:pr-4">
          <Logo />
          <Nav />
          {/* <AuthActions /> */}
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={toggleLanguage}>
              {isRTL ? "En" : "عربي"}
            </Button>
            <UserButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
