import { useState } from "react";
import { Link } from "react-router";
import { Sparkles, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full sticky top-0 z-50 py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card h-16 flex items-center justify-between pl-4 pr-2 sm:pl-6 sm:pr-4">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2.5 group no-underline">
            <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
              <Sparkles className="w-5 h-5" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-base font-semibold tracking-tight">
                PlanMe
              </span>
              <span className="hidden sm:inline text-[11px] text-muted-foreground -mt-0.5">
                Note AI
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm font-medium no-underline text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Link to="/login">Log in</Link>
            </Button>
            <Button size="sm" className="flex text-gray-200">
              <Link to="/signup">
                Get started <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary/60 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="mt-2 glass-card px-4 py-4 flex flex-col gap-2 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium no-underline text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-border/60 mt-2 pt-2 flex flex-col gap-2">
              <Button variant="ghost" size="sm" className="w-full">
                <Link to="/login">Log in</Link>
              </Button>
              <Button size="sm" className="w-full">
                <Link to="/signup">Get started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
