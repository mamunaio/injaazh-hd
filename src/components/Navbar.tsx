import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/contexts/LangContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, toggleLang, lang } = useLang();

  const navLinks = [
    { label: t("nav.home"), path: "/" },
    { label: t("nav.about"), path: "/about" },
    { label: t("nav.solutions"), path: "/solutions" },
    { label: t("nav.contact"), path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-2xl font-bold text-primary-foreground tracking-wider">
            N<span className="text-accent">G</span>S
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                location.pathname === link.path
                  ? "text-accent"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground border border-primary-foreground/20 rounded hover:border-accent transition-colors"
          >
            <Globe size={16} />
            {lang === "en" ? "عربي" : "EN"}
          </button>
          <a
            href="mailto:info@ngeosyn.com"
            className="inline-flex items-center px-6 py-2.5 text-sm font-semibold tracking-wide bg-accent text-accent-foreground rounded hover:bg-gold-light transition-colors"
          >
            INFO@NGEOSYN.COM
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-primary-foreground/70 border border-primary-foreground/20 rounded"
          >
            <Globe size={14} />
            {lang === "en" ? "عربي" : "EN"}
          </button>
          <button
            className="text-primary-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-primary-foreground/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium tracking-wide ${
                    location.pathname === link.path
                      ? "text-accent"
                      : "text-primary-foreground/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="mailto:info@ngeosyn.com"
                className="mt-2 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold bg-accent text-accent-foreground rounded"
              >
                INFO@NGEOSYN.COM
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
