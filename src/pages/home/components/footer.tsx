import { Sparkles } from "lucide-react";
import { Link } from "react-router";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="px-4 py-10 border-t border-border/60">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 no-underline group">
          <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-primary text-primary-foreground transition-transform group-hover:scale-105">
            <Sparkles className="w-4 h-4" />
          </span>
          <span className="font-semibold tracking-tight">PlanMe</span>
        </a>

        {/* Links */}
        <nav className="flex items-center gap-5 flex-wrap justify-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground no-underline transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/login"
            className="text-sm text-muted-foreground hover:text-foreground no-underline transition-colors"
          >
            Sign in
          </Link>
        </nav>

        {/* Social */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/ali-elmuzayan"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground no-underline transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground no-underline transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-8">
        © {new Date().getFullYear()} PlanMe · Note AI. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
