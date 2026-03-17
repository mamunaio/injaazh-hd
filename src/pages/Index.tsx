import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Mountain, BrickWall, Shield } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CounterCard from "@/components/CounterCard";
import heroBg from "@/assets/hero-bg.jpg";
import stormwaterImg from "@/assets/solutions-stormwater.jpg";
import geosyntheticsImg from "@/assets/solutions-geosynthetics.jpg";
import bridgesImg from "@/assets/solutions-bridges.jpg";
import waterproofingImg from "@/assets/solutions-waterproofing.jpg";

const solutions = [
  {
    title: "Stormwater & Soakaway Systems",
    description: "Sustainable urban drainage solutions designed for Saudi Arabia's unique climate challenges.",
    image: stormwaterImg,
    icon: Droplets,
  },
  {
    title: "Geosynthetics & Soil Stabilization",
    description: "High-performance geotechnical products for ground reinforcement and stabilization.",
    image: geosyntheticsImg,
    icon: Mountain,
  },
  {
    title: "Bridges & Tunnels Solutions",
    description: "Complete engineering systems for bridge and tunnel infrastructure projects.",
    image: bridgesImg,
    icon: BrickWall,
  },
  {
    title: "Waterproofing & Geomembranes",
    description: "Industrial-grade waterproofing solutions for reservoirs, tunnels, and foundations.",
    image: waterproofingImg,
    icon: Shield,
  },
];

const Index = () => {
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
              Nasra GeoSyn — Since 1993
            </p>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6">
              Geosynthetics &{" "}
              <span className="text-accent">Stormwater</span>{" "}
              Management Solutions
            </h1>
            <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
              Your Construction Partner in SuDS, Water Management, Tunnels, Bridges, Geosynthetics, and Fire Protection across Saudi Arabia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded hover:bg-gold-light transition-colors"
              >
                Learn More <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-semibold rounded hover:border-accent hover:text-accent transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-accent text-sm uppercase tracking-[0.3em] font-medium mb-3">Our Solutions</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 gold-underline inline-block">
              Engineering Excellence
            </h2>
            <p className="mt-8 text-muted-foreground max-w-2xl text-lg leading-relaxed">
              We deliver high-performance engineering systems for Saudi Arabia's infrastructure. From stormwater management to ground stabilization, our solutions are designed for durability and environmental compliance.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <AnimatedSection key={solution.title} delay={index * 0.1}>
                <div className="group relative overflow-hidden rounded-lg aspect-[16/10] cursor-pointer">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <solution.icon className="text-accent mb-3" size={28} />
                    <h3 className="font-heading text-xl font-semibold text-primary-foreground mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-primary-foreground/60 text-sm leading-relaxed">
                      {solution.description}
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
              View All Solutions <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-accent text-sm uppercase tracking-[0.3em] font-medium mb-3">About Us</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Engineering Resilient Infrastructure for{" "}
                <span className="text-accent">Saudi Vision 2030</span>
              </h2>
              <p className="text-primary-foreground/70 text-lg leading-relaxed mb-6">
                Since 1993, Nasra GeoSyn (NGS) has been a trusted partner for infrastructure projects across Saudi Arabia and the GCC. With over 30 years of expertise, we deliver engineering-driven solutions tailored to the region's unique environmental challenges.
              </p>
              <ul className="space-y-3 mb-8">
                {["Stormwater & Soakaway Systems (SuDS)", "Bridges & Tunnel Waterproofing", "Geosynthetics & Soil Stabilization", "Fire Protection & Safety Systems"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-primary-foreground/80">
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded hover:bg-gold-light transition-colors"
              >
                Learn More <ArrowRight size={18} />
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <img
                  src={stormwaterImg}
                  alt="NGS infrastructure project"
                  className="rounded-lg w-full"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-accent rounded-lg" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-primary border-t border-primary-foreground/10">
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
            <p className="text-accent text-sm uppercase tracking-[0.3em] font-medium mb-3">Company Vision</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 gold-underline inline-block">
              Our Vision & Core Values
            </h2>
            <p className="mt-8 text-muted-foreground max-w-3xl text-lg leading-relaxed">
              To be the premier partner in the Saudi Arabian market for Water Management, Traffic Systems, and Geo-Products. We are committed to delivering advanced technologies and sustainable solutions through deep market understanding.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "ISO 9001", subtitle: "Quality Management", desc: "Ensures consistent quality, customer satisfaction, and continuous improvement." },
              { title: "ISO 14001", subtitle: "Environmental Management", desc: "Demonstrates our commitment to environmental responsibility and sustainability." },
              { title: "ISO 45001", subtitle: "Health & Safety", desc: "Prioritizes safety, risk reduction, and employee wellbeing at every level." },
            ].map((cert, i) => (
              <AnimatedSection key={cert.title} delay={i * 0.1}>
                <div className="bg-card p-8 rounded-lg border border-border hover:border-accent transition-colors group">
                  <span className="text-accent font-heading text-2xl font-bold">{cert.title}</span>
                  <h3 className="font-heading text-lg font-semibold text-foreground mt-2 mb-3">{cert.subtitle}</h3>
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
            Have an <span className="text-accent">Upcoming Project?</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10">
            Let's build something remarkable. We deliver innovative and sustainable infrastructure solutions tailored for the Saudi market.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded hover:bg-gold-light transition-colors"
            >
              Get In Touch <ArrowRight size={18} />
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
            <p className="text-accent text-sm uppercase tracking-[0.3em] font-medium mb-3">Company Policy</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 gold-underline inline-block">
              Health, Safety & Environment
            </h2>
            <p className="mt-8 text-muted-foreground max-w-3xl text-lg leading-relaxed">
              At Nasra GeoSyn (NGS), safety is our priority. We are committed to protecting the health and well-being of our employees, partners, and the communities we serve. Our operations are designed to minimize environmental impact, ensuring a safer workplace and a greener future.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
