import { Button } from "@/components/ui/button";
import { Link, useLocation } from "@tanstack/react-router";
import { Flame, Menu, X } from "lucide-react";
import { useRef, useState } from "react";

const navLinks = [
  { label: "Dashboard", path: "/" },
  { label: "Heat Balance", path: "/heat-balance" },
  { label: "Mill Efficiency", path: "/mill-efficiency" },
  { label: "Kiln Throughput", path: "/kiln-throughput" },
  { label: "AFR Substitution", path: "/afr-substitution" },
  { label: "Energy Analyzer", path: "/energy-analyzer" },
  { label: "Clinker Quality", path: "/clinker-quality" },
  { label: "SPC", path: "/spc" },
  { label: "Compressed Air", path: "/compressed-air" },
  { label: "Ball Mill", path: "/ball-mill" },
  { label: "Raw Mix Design", path: "/raw-mix" },
  { label: "Kiln SHC", path: "/kiln-shc" },
  { label: "False Air", path: "/false-air" },
  { label: "Fan Efficiency", path: "/fan-efficiency" },
];

const desktopNavLinks = navLinks.slice(0, 6);
const moreNavLinks = navLinks.slice(6);

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Branding */}
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0"
            data-ocid="nav.home_link"
          >
            <div className="w-8 h-8 rounded-sm bg-accent flex items-center justify-center">
              <Flame className="w-4 h-4 text-accent-foreground" />
            </div>
            <div className="leading-none">
              <span className="font-display font-bold text-foreground tracking-tight text-sm">
                CementHub
              </span>
              <span className="block text-muted-foreground text-[10px] font-mono uppercase tracking-widest">
                Engineer Tools
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {desktopNavLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  data-ocid={`nav.${link.label.toLowerCase().replace(/ /g, "_")}_link`}
                  className={`px-3 py-1.5 rounded-sm text-xs font-medium transition-smooth ${
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            {/* More dropdown */}
            <div className="relative" ref={moreRef}>
              <button
                type="button"
                onClick={() => setMoreOpen((v) => !v)}
                data-ocid="nav.more_button"
                className={`px-3 py-1.5 rounded-sm text-xs font-medium transition-smooth flex items-center gap-1 ${
                  moreNavLinks.some((l) => l.path === location.pathname)
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
              >
                More ▾
              </button>
              {moreOpen && (
                <div
                  className="absolute right-0 top-full mt-1 w-48 bg-card border border-border rounded-sm shadow-lg z-50 py-1"
                  data-ocid="nav.more_dropdown"
                >
                  {moreNavLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setMoreOpen(false)}
                        data-ocid={`nav.${link.label.toLowerCase().replace(/ /g, "_")}_link`}
                        className={`block px-3 py-2 text-xs font-medium transition-smooth ${
                          isActive
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="nav.mobile_menu_toggle"
            type="button"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t border-border bg-card px-4 pb-4 max-h-[70vh] overflow-y-auto"
          data-ocid="nav.mobile_menu"
        >
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  data-ocid={`nav.mobile.${link.label.toLowerCase().replace(/ /g, "_")}_link`}
                  className={`px-3 py-2 rounded-sm text-sm font-medium transition-smooth ${
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
