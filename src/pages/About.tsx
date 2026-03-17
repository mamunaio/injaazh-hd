import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CounterCard from "@/components/CounterCard";
import { useLang } from "@/contexts/LangContext";
import aboutTeamImg from "@/assets/about-team.jpg";

const About = () => {
  const { t, isRTL } = useLang();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="overflow-hidden pt-20">
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-accent text-sm uppercase tracking-[0.3em] font-medium mb-3">{t("about.tag")}</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              {t("about.title")} <span className="text-accent">{t("about.ngs")}</span>
            </h1>
            <p className="text-primary-foreground/70 text-xl max-w-3xl leading-relaxed">
              {t("about.heroDesc")}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <img src={aboutTeamImg} alt="NGS engineering team" className="rounded-lg w-full" />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 gold-underline inline-block">
              {t("about.story")}
            </h2>
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed mb-6">
              {t("about.storyP1")}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {t("about.storyP2")}
            </p>
            <ul className="space-y-3">
              {["svc.suds", "svc.bridges", "svc.geo", "svc.fire"].map((key) => (
                <li key={key} className="flex items-center gap-3 text-foreground">
                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  {t(key)}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          <CounterCard end={341} label={t("stat.projects")} />
          <CounterCard end={302} label={t("stat.customers")} />
          <CounterCard end={152} label={t("stat.engineers")} />
          <CounterCard end={30} label={t("stat.years")} />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 gold-underline inline-block">
              {t("vision.title")}
            </h2>
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-3xl">
              {t("vision.desc")}
            </p>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-3xl">
              {t("vision.desc2")}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-accent text-sm uppercase tracking-[0.3em] font-medium mb-3">{t("cert.tag")}</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 gold-underline inline-block">
              {t("cert.title")}
            </h2>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "ISO 9001", subtitleKey: "cert.iso9001.sub", descKey: "cert.iso9001.desc" },
              { title: "ISO 14001", subtitleKey: "cert.iso14001.ems", descKey: "cert.iso14001.desc" },
              { title: "ISO 45001", subtitleKey: "cert.iso45001.ohsms", descKey: "cert.iso45001.desc" },
            ].map((cert, i) => (
              <AnimatedSection key={cert.title} delay={i * 0.1}>
                <div className="bg-background p-8 rounded-lg border border-border hover:border-accent transition-colors">
                  <span className="text-accent font-heading text-3xl font-bold">{cert.title}</span>
                  <h3 className="font-heading text-lg font-semibold text-foreground mt-3 mb-3">{t(cert.subtitleKey)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(cert.descKey)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            {t("cta.partner")} <span className="text-accent">{t("cta.partnerHighlight")}</span> {t("cta.partnerEnd")}
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded hover:bg-gold-light transition-colors"
          >
            {t("cta.getInTouch")} <Arrow size={18} />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default About;
