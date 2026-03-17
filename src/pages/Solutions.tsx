import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Mountain, BrickWall, Shield, Flame, TrafficCone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import stormwaterImg from "@/assets/solutions-stormwater.jpg";
import geosyntheticsImg from "@/assets/solutions-geosynthetics.jpg";
import bridgesImg from "@/assets/solutions-bridges.jpg";
import waterproofingImg from "@/assets/solutions-waterproofing.jpg";

const solutions = [
  {
    title: "Stormwater & Soakaway Systems",
    description: "Sustainable urban drainage solutions (SuDS) designed for Saudi Arabia's unique climate challenges. Our stormwater management systems handle flash floods, reduce runoff, and support environmental compliance with durable, high-performance engineering.",
    image: stormwaterImg,
    icon: Droplets,
  },
  {
    title: "Geosynthetics & Soil Stabilization",
    description: "High-performance geotechnical products for ground reinforcement and stabilization. We provide geotextiles, geogrids, geocells, and geocomposites engineered for the harshest desert conditions.",
    image: geosyntheticsImg,
    icon: Mountain,
  },
  {
    title: "Bridges & Tunnels Solutions",
    description: "Complete engineering systems for bridge and tunnel infrastructure projects. From expansion joints to waterproofing membranes, we deliver integrated solutions for long-lasting structural integrity.",
    image: bridgesImg,
    icon: BrickWall,
  },
  {
    title: "Waterproofing & Geomembranes",
    description: "Industrial-grade waterproofing solutions for reservoirs, tunnels, foundations, and underground structures. Our HDPE geomembranes ensure complete water containment and environmental protection.",
    image: waterproofingImg,
    icon: Shield,
  },
];

const additionalServices = [
  { title: "Traffic Management & Road Safety", icon: TrafficCone, desc: "Comprehensive traffic control and road safety systems for urban and highway infrastructure." },
  { title: "Fire Protection & Safety Systems", icon: Flame, desc: "Advanced fire suppression and protection solutions for tunnels, buildings, and industrial facilities." },
  { title: "Geohazard Mitigation", icon: Mountain, desc: "Engineering solutions to protect infrastructure from rockfalls, landslides, and soil erosion." },
];

const Solutions = () => {
  return (
    <div className="overflow-hidden pt-20">
      {/* Hero */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-accent text-sm uppercase tracking-[0.3em] font-medium mb-3">What We Do</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-accent">Solutions</span>
            </h1>
            <p className="text-primary-foreground/70 text-xl max-w-3xl leading-relaxed">
              We deliver high-performance engineering systems for Saudi Arabia's infrastructure. From stormwater management to ground stabilization, our solutions are designed for durability and environmental compliance.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Solutions */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto space-y-24">
          {solutions.map((solution, index) => (
            <AnimatedSection key={solution.title}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
                <div className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <solution.icon className="text-accent mb-4" size={36} />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {solution.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 gold-underline inline-block">
              Additional Services
            </h2>
          </AnimatedSection>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 0.1}>
                <div className="bg-background p-8 rounded-lg border border-border hover:border-accent transition-colors">
                  <svc.icon className="text-accent mb-4" size={32} />
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{svc.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
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
            Need a <span className="text-accent">Custom Solution?</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10">
            Our engineering team is ready to design tailored infrastructure solutions for your project requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded hover:bg-gold-light transition-colors"
          >
            Contact Our Team <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Solutions;
