import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CounterCard from "@/components/CounterCard";
import aboutTeamImg from "@/assets/about-team.jpg";

const About = () => {
  return (
    <div className="overflow-hidden pt-20">
      {/* Hero */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-accent text-sm uppercase tracking-[0.3em] font-medium mb-3">About Us</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-accent">Nasra GeoSyn</span>
            </h1>
            <p className="text-primary-foreground/70 text-xl max-w-3xl leading-relaxed">
              Since 1993, NGS has been a trusted partner for infrastructure projects across Saudi Arabia and the GCC. With over 30 years of expertise, we deliver engineering-driven solutions for Stormwater Management, Geosynthetics, and Tunnel systems.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <img src={aboutTeamImg} alt="NGS engineering team" className="rounded-lg w-full" />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 gold-underline inline-block">
              Our Story
            </h2>
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed mb-6">
              NGS is dedicated to transforming Saudi Arabia's infrastructure with smart, reliable, and environmentally responsible solutions. Our focus is on creating long-term value for communities by integrating sustainability, efficiency, and global best practices into every project.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At the heart of our work is a commitment to sustainable urban development, offering comprehensive systems in stormwater management, geosynthetics, bridges, tunnels, and fire protection.
            </p>
            <ul className="space-y-3">
              {["Stormwater & Soakaway Systems (SuDS)", "Bridges & Tunnel Waterproofing", "Geosynthetics & Soil Stabilization", "Fire Protection & Safety Systems"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          <CounterCard end={341} label="Projects Completed" />
          <CounterCard end={302} label="Happy Customers" />
          <CounterCard end={152} label="Qualified Engineers" />
          <CounterCard end={30} label="Years Experience" />
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 gold-underline inline-block">
              Our Vision & Core Values
            </h2>
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-3xl">
              To be the premier partner in the Saudi Arabian market for Water Management, Traffic Systems, and Geo-Products. We are committed to delivering advanced technologies and sustainable solutions through deep market understanding.
            </p>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-3xl">
              We are dedicated to excellence. We prioritize creative approaches, superior technical advice, and flawless execution to build lasting trust with our clients and partners.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-accent text-sm uppercase tracking-[0.3em] font-medium mb-3">Excellence</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 gold-underline inline-block">
              Committed to Excellence & Compliance
            </h2>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "ISO 9001", subtitle: "Quality Management", desc: "Ensures consistent quality, customer satisfaction, and continuous improvement." },
              { title: "ISO 14001", subtitle: "Environmental Management (EMS)", desc: "Demonstrates our commitment to environmental responsibility and sustainability." },
              { title: "ISO 45001", subtitle: "Occupational Health & Safety (OHSMS)", desc: "Prioritizes safety, risk reduction, and employee wellbeing at every level." },
            ].map((cert, i) => (
              <AnimatedSection key={cert.title} delay={i * 0.1}>
                <div className="bg-background p-8 rounded-lg border border-border hover:border-accent transition-colors">
                  <span className="text-accent font-heading text-3xl font-bold">{cert.title}</span>
                  <h3 className="font-heading text-lg font-semibold text-foreground mt-3 mb-3">{cert.subtitle}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{cert.desc}</p>
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
            Ready to <span className="text-accent">Partner</span> with Us?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded hover:bg-gold-light transition-colors"
          >
            Get In Touch <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default About;
