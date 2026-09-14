import { Link } from "react-router";
import { Sparkles } from "lucide-react";
import { FormattedMessage } from "react-intl";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-2.5 group no-underline"
      aria-label="PlanMe home"
    >
      <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
        <Sparkles className="w-5 h-5" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-base font-semibold tracking-tight">
          <FormattedMessage id="title" />
        </span>
        <span className="hidden sm:inline text-[11px] text-muted-foreground -mt-0.5">
          Note AI
        </span>
      </span>
    </Link>
  );
};

export default Logo;
