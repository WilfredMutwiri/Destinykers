import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Process", path: "/process" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Destinykers Technologies"
              className="h-11 w-11 object-cover rounded-full border border-white/30"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-white">Destinykers Technologies</p>
              <p className="text-xs text-slate-300">Engineering Reliable Digital Solutions</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors rounded-full",
                  location.pathname === link.path
                    ? "text-white bg-white/10"
                    : "text-slate-200 hover:text-white hover:bg-white/5"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Button asChild className="rounded-full px-6 gradient-bg text-white hover:opacity-90">
              <Link to="/contact">Book Strategy Call</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 rounded-md text-slate-100 hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium transition-colors rounded-lg",
                    location.pathname === link.path
                      ? "text-white bg-white/10"
                      : "text-slate-200 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-1">
                <Button asChild className="w-full gradient-bg rounded-full text-white">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Book Strategy Call
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
