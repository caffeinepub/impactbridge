import { Button } from "@/components/ui/button";
import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";

export type Page =
  | "home"
  | "about"
  | "impact"
  | "how-it-works"
  | "for-companies"
  | "case-studies"
  | "contact";

interface LayoutProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  children: React.ReactNode;
}

const NAV_LINKS: { label: string; page: Page }[] = [
  { label: "About Us", page: "about" },
  { label: "Our Impact", page: "impact" },
  { label: "How It Works", page: "how-it-works" },
  { label: "For Companies", page: "for-companies" },
  { label: "Case Studies", page: "case-studies" },
  { label: "Contact", page: "contact" },
];

export default function Layout({
  currentPage,
  onNavigate,
  children,
}: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border shadow-xs">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNav("home")}
            data-ocid="nav.link"
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-full bg-teal-700 flex items-center justify-center">
              <Leaf className="w-4 h-4 text-white" />
            </div>
            <span className="font-display text-xl font-semibold text-teal-800">
              Impact<span className="text-earth-500">Bridge</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.page}
                onClick={() => handleNav(link.page)}
                data-ocid="nav.link"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentPage === link.page
                    ? "bg-teal-50 text-teal-700"
                    : "text-foreground/70 hover:text-teal-700 hover:bg-teal-50"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => handleNav("contact")}
              data-ocid="nav.primary_button"
              className="ml-2 bg-teal-700 hover:bg-teal-800 text-white"
              size="sm"
            >
              Partner With Us
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-foreground/70"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-ocid="nav.toggle"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.page}
                onClick={() => handleNav(link.page)}
                data-ocid="nav.link"
                className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md ${
                  currentPage === link.page
                    ? "bg-teal-50 text-teal-700"
                    : "text-foreground/70 hover:text-teal-700"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => handleNav("contact")}
              data-ocid="nav.primary_button"
              className="w-full mt-2 bg-teal-700 hover:bg-teal-800 text-white"
            >
              Partner With Us
            </Button>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-teal-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-white" />
                </div>
                <span className="font-display text-xl font-semibold">
                  Impact<span className="text-earth-300">Bridge</span>
                </span>
              </div>
              <p className="text-teal-200 text-sm leading-relaxed max-w-xs">
                Connecting companies with real, measurable social change — with
                full transparency, monitoring, and accountability.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-teal-400 mb-3">
                Navigate
              </h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.page}>
                    <button
                      type="button"
                      onClick={() => handleNav(link.page)}
                      data-ocid="nav.link"
                      className="text-teal-200 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-teal-400 mb-3">
                Contact
              </h4>
              <ul className="space-y-2 text-teal-200 text-sm">
                <li>hello@impacto.in</li>
                <li>+91 98765 43210</li>
                <li>New Delhi, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-teal-800 mt-10 pt-6 text-center text-teal-400 text-xs">
            © {new Date().getFullYear()} Impacto. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
