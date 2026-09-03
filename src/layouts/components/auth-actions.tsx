import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
const AuthActions = () => {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="default"
        size="sm"
        onClick={() => alert("Logout")}
        className="md:h-9 md:px-2.5 md:gap-1.5 md:rounded-lg md:text-sm md:[&_svg:not([class*='size-'])]:size-4"
      >
        <LogOut />
        <span className="hidden sm:inline">Logout</span>
      </Button>
    </div>
  );
};

export default AuthActions;
