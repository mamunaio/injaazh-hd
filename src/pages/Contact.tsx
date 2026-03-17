import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useToast } from "@/hooks/use-toast";
import { useLang } from "@/contexts/LangContext";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLang();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: t("contact.sent"), description: t("contact.sentDesc") });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="overflow-hidden pt-20">
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-accent text-sm uppercase tracking-[0.3em] font-medium mb-3">{t("contact.tag")}</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              {t("contact.title")} <span className="text-accent">{t("contact.titleHighlight")}</span>
            </h1>
            <p className="text-primary-foreground/70 text-xl max-w-3xl leading-relaxed">
              {t("contact.desc")}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-8 gold-underline inline-block">
              {t("contact.getInTouch")}
            </h2>
            <div className="mt-10 space-y-8">
              <a href="mailto:info@ngeosyn.com" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Mail className="text-accent" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t("contact.email")}</p>
                  <p className="text-muted-foreground">info@ngeosyn.com</p>
                </div>
              </a>
              <a href="tel:00966580183376" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Phone className="text-accent" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t("contact.phone")}</p>
                  <p className="text-muted-foreground">+966 58 018 3376</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-accent" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t("contact.location")}</p>
                  <p className="text-muted-foreground">{t("contact.saudiArabia")}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg border border-border space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t("contact.name")}</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder={t("contact.namePlaceholder")}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t("contact.email")}</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder={t("contact.emailPlaceholder")}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t("contact.phone")}</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder={t("contact.phonePlaceholder")}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t("contact.message")}</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder={t("contact.messagePlaceholder")}
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded hover:bg-gold-light transition-colors"
              >
                {t("contact.send")} <Send size={18} />
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
