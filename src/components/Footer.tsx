import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useLang();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <span className="font-heading text-3xl font-bold tracking-wider">
              N<span className="text-accent">G</span>S
            </span>
            <p className="mt-4 text-sm text-primary-foreground/60 leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-accent">{t("footer.quickLinks")}</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{t("nav.home")}</Link>
              <Link to="/about" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{t("nav.about")}</Link>
              <Link to="/solutions" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{t("nav.solutions")}</Link>
              <Link to="/contact" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{t("nav.contact")}</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-accent">{t("footer.solutions")}</h4>
            <div className="flex flex-col gap-3">
              <span className="text-sm text-primary-foreground/60">{t("footer.stormwater")}</span>
              <span className="text-sm text-primary-foreground/60">{t("footer.geo")}</span>
              <span className="text-sm text-primary-foreground/60">{t("footer.bridges")}</span>
              <span className="text-sm text-primary-foreground/60">{t("footer.waterproofing")}</span>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-accent">{t("footer.contact")}</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:info@ngeosyn.com" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Mail size={14} /> info@ngeosyn.com
              </a>
              <a href="tel:00966580183376" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Phone size={14} /> +966 58 018 3376
              </a>
              <span className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <MapPin size={14} /> {t("contact.saudiArabia")}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Nasra GeoSyn (NGS). {t("footer.rights")}
          </p>
          <div className="flex items-center gap-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-accent transition-colors text-xs uppercase tracking-widest">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-accent transition-colors text-xs uppercase tracking-widest">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-accent transition-colors text-xs uppercase tracking-widest">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
