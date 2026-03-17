import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Droplets, Mountain, BrickWall, Shield, Flame, TrafficCone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useLang } from "@/contexts/LangContext";
import stormwaterImg from "@/assets/solutions-stormwater.jpg";
import geosyntheticsImg from "@/assets/solutions-geosynthetics.jpg";
import bridgesImg from "@/assets/solutions-bridges.jpg";
import waterproofingImg from "@/assets/solutions-waterproofing.jpg";

const Solutions = () => {
  const { t, isRTL } = useLang();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const solutions = [
    { titleKey: "sol.stormwater.title", descKey: "sol.stormwater.long", image: stormwaterImg, icon: Droplets },
    { titleKey: "sol.geo.title", descKey: "sol.geo.long", image: geosyntheticsImg, icon: Mountain },
    { titleKey: "sol.bridges.title", descKey: "sol.bridges.long", image: bridgesImg, icon: BrickWall },
    { titleKey: "sol.waterproofing.title", descKey: "sol.waterproofing.long", image: waterproofingImg, icon: Shield },
  ];

  const additionalServices = [
    { titleKey: "solPage.traffic.title", icon: TrafficCone, descKey: "solPage.traffic.desc" },
    { titleKey: "solPage.fire.title", icon: Flame, descKey: "solPage.fire.desc" },
    { titleKey: "solPage.geohazard.title", icon: Mountain, descKey: "solPage.geohazard.desc" },
  ];

  return (
    <div className="overflow-hidden pt-20">
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-accent text-sm uppercase tracking-[0.3em] font-medium mb-3">{t("solPage.tag")}</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              {t("solPage.title")} {t("solPage.titleHighlight") && <span className="text-accent">{t("solPage.titleHighlight")}</span>}
            </h1>
            <p className="text-primary-foreground/70 text-xl max-w-3xl leading-relaxed">
              {t("solutions.desc")}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto space-y-24">
          {solutions.map((solution, index) => (
            <AnimatedSection key={solution.titleKey}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
                <div className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={solution.image}
                      alt={t(solution.titleKey)}
                      className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:[direction:ltr]" : ""} style={isRTL && index % 2 === 1 ? { direction: "rtl" } : undefined}>
                  <solution.icon className="text-accent mb-4" size={36} />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {t(solution.titleKey)}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {t(solution.descKey)}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 gold-underline inline-block">
              {t("solPage.additional")}
            </h2>
          </AnimatedSection>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((svc, i) => (
              <AnimatedSection key={svc.titleKey} delay={i * 0.1}>
                <div className="bg-background p-8 rounded-lg border border-border hover:border-accent transition-colors">
                  <svc.icon className="text-accent mb-4" size={32} />
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{t(svc.titleKey)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(svc.descKey)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            {t("cta.custom")} <span className="text-accent">{t("cta.customHighlight")}</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10">
            {t("cta.customDesc")}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded hover:bg-gold-light transition-colors"
          >
            {t("cta.contactTeam")} <Arrow size={18} />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Solutions;
