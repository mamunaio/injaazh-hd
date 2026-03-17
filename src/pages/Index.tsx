import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Droplets, Mountain, BrickWall, Shield } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CounterCard from "@/components/CounterCard";
import { useLang } from "@/contexts/LangContext";
import heroBg from "@/assets/hero-bg.jpg";
import stormwaterImg from "@/assets/solutions-stormwater.jpg";
import geosyntheticsImg from "@/assets/solutions-geosynthetics.jpg";
import bridgesImg from "@/assets/solutions-bridges.jpg";
import waterproofingImg from "@/assets/solutions-waterproofing.jpg";

const Index = () => {
  const { t, isRTL } = useLang();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const solutions = [
    { titleKey: "sol.stormwater.title", descKey: "sol.stormwater.desc", image: stormwaterImg, icon: Droplets },
    { titleKey: "sol.geo.title", descKey: "sol.geo.desc", image: geosyntheticsImg, icon: Mountain },
    { titleKey: "sol.bridges.title", descKey: "sol.bridges.desc", image: bridgesImg, icon: BrickWall },
    { titleKey: "sol.waterproofing.title", descKey: "sol.waterproofing.desc", image: waterproofingImg, icon: Shield },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Infrastructure project in Saudi Arabia" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="text-accent font-medium text-sm uppercase tracking-[0.3em] mb-6">
              {t("hero.tag")}
            </p>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6">
              {t("hero.title1")}{" "}
              <span className="text-accent">{t("hero.title2")}</span>{" "}
              {t("hero.title3")}
            </h1>
            <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
              {t("hero.desc")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded hover:bg-gold-light transition-colors"
              >
                {t("hero.learnMore")} <Arrow size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-semibold rounded hover:border-accent hover:text-accent transition-colors"
              >
                {t("hero.contactUs")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-accent text-sm uppercase tracking-[0.3em] font-medium mb-3">{t("solutions.tag")}</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 gold-underline inline-block">
              {t("solutions.title")}
            </h2>
            <p className="mt-8 text-muted-foreground max-w-2xl text-lg leading-relaxed">
              {t("solutions.desc")}
            </p>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <AnimatedSection key={solution.titleKey} delay={index * 0.1}>
                <div className="group relative overflow-hidden rounded-lg aspect-[16/10] cursor-pointer">
                  <img
                    src={solution.image}
                    alt={t(solution.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <solution.icon className="text-accent mb-3" size={28} />
                    <h3 className="font-heading text-xl font-semibold text-primary-foreground mb-2">
                      {t(solution.titleKey)}
                    </h3>
                    <p className="text-primary-foreground/60 text-sm leading-relaxed">
                      {t(solution.descKey)}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-4 transition-all"
            >
              {t("solutions.viewAll")} <Arrow size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-accent text-sm uppercase tracking-[0.3em] font-medium mb-3">{t("about.tag")}</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                {t("about.vision2030.pre")}{" "}
                <span className="text-accent">{t("about.vision2030")}</span>
              </h2>
              <p className="text-primary-foreground/70 text-lg leading-relaxed mb-6">
                {t("about.desc")}
              </p>
              <ul className="space-y-3 mb-8">
                {["svc.suds", "svc.bridges", "svc.geo", "svc.fire"].map((key) => (
                  <li key={key} className="flex items-center gap-3 text-primary-foreground/80">
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    {t(key)}
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded hover:bg-gold-light transition-colors"
              >
                {t("hero.learnMore")} <Arrow size={18} />
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <img
                  src={stormwaterImg}
                  alt="NGS infrastructure project"
                  className="rounded-lg w-full"
                />
                <div className="absolute -bottom-6 -left-6 rtl:-left-auto rtl:-right-6 w-32 h-32 border-2 border-accent rounded-lg" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-primary border-t border-primary-foreground/10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          <CounterCard end={341} label={t("stat.projects")} />
          <CounterCard end={302} label={t("stat.customers")} />
          <CounterCard end={152} label={t("stat.engineers")} />
          <CounterCard end={30} label={t("stat.years")} />
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-accent text-sm uppercase tracking-[0.3em] font-medium mb-3">{t("vision.tag")}</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 gold-underline inline-block">
              {t("vision.title")}
            </h2>
            <p className="mt-8 text-muted-foreground max-w-3xl text-lg leading-relaxed">
              {t("vision.desc")}
            </p>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "ISO 9001", subtitleKey: "cert.iso9001.sub", descKey: "cert.iso9001.desc" },
              { title: "ISO 14001", subtitleKey: "cert.iso14001.sub", descKey: "cert.iso14001.desc" },
              { title: "ISO 45001", subtitleKey: "cert.iso45001.sub", descKey: "cert.iso45001.desc" },
            ].map((cert, i) => (
              <AnimatedSection key={cert.title} delay={i * 0.1}>
                <div className="bg-card p-8 rounded-lg border border-border hover:border-accent transition-colors group">
                  <span className="text-accent font-heading text-2xl font-bold">{cert.title}</span>
                  <h3 className="font-heading text-lg font-semibold text-foreground mt-2 mb-3">{t(cert.subtitleKey)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(cert.descKey)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            {t("cta.upcoming")} <span className="text-accent">{t("cta.project")}</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10">
            {t("cta.desc")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded hover:bg-gold-light transition-colors"
            >
              {t("cta.getInTouch")} <Arrow size={18} />
            </Link>
            <a
              href="tel:00966580183376"
              className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-semibold rounded hover:border-accent transition-colors"
            >
              +966 58 018 3376
            </a>
          </div>
        </AnimatedSection>
      </section>

      {/* HSE Policy */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-accent text-sm uppercase tracking-[0.3em] font-medium mb-3">{t("hse.tag")}</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 gold-underline inline-block">
              {t("hse.title")}
            </h2>
            <p className="mt-8 text-muted-foreground max-w-3xl text-lg leading-relaxed">
              {t("hse.desc")}
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
