import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "en" | "ar";

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<string, Record<Lang, string>> = {
  // Nav
  "nav.home": { en: "Home", ar: "الرئيسية" },
  "nav.about": { en: "About", ar: "من نحن" },
  "nav.solutions": { en: "Solutions", ar: "الحلول" },
  "nav.contact": { en: "Contact", ar: "تواصل معنا" },

  // Hero
  "hero.tag": { en: "Nasra GeoSyn — Since 1993", ar: "نصرة جيوسين — منذ ١٩٩٣" },
  "hero.title1": { en: "Geosynthetics &", ar: "الجيوسنثتيكس و" },
  "hero.title2": { en: "Stormwater", ar: "إدارة مياه" },
  "hero.title3": { en: "Management Solutions", ar: "الأمطار" },
  "hero.desc": {
    en: "Your Construction Partner in SuDS, Water Management, Tunnels, Bridges, Geosynthetics, and Fire Protection across Saudi Arabia.",
    ar: "شريككم في البناء لأنظمة الصرف المستدام، إدارة المياه، الأنفاق، الجسور، الجيوسنثتيكس، والحماية من الحريق في المملكة العربية السعودية.",
  },
  "hero.learnMore": { en: "Learn More", ar: "اعرف المزيد" },
  "hero.contactUs": { en: "Contact Us", ar: "تواصل معنا" },

  // Solutions section
  "solutions.tag": { en: "Our Solutions", ar: "حلولنا" },
  "solutions.title": { en: "Engineering Excellence", ar: "التميز الهندسي" },
  "solutions.desc": {
    en: "We deliver high-performance engineering systems for Saudi Arabia's infrastructure. From stormwater management to ground stabilization, our solutions are designed for durability and environmental compliance.",
    ar: "نقدم أنظمة هندسية عالية الأداء للبنية التحتية في المملكة العربية السعودية. من إدارة مياه الأمطار إلى تثبيت التربة، صُممت حلولنا لتحقيق المتانة والامتثال البيئي.",
  },
  "solutions.viewAll": { en: "View All Solutions", ar: "عرض جميع الحلول" },

  // Solution cards
  "sol.stormwater.title": { en: "Stormwater & Soakaway Systems", ar: "أنظمة مياه الأمطار والتصريف" },
  "sol.stormwater.desc": {
    en: "Sustainable urban drainage solutions designed for Saudi Arabia's unique climate challenges.",
    ar: "حلول تصريف حضرية مستدامة مصممة لتحديات المناخ الفريدة في المملكة العربية السعودية.",
  },
  "sol.stormwater.long": {
    en: "Sustainable urban drainage solutions (SuDS) designed for Saudi Arabia's unique climate challenges. Our stormwater management systems handle flash floods, reduce runoff, and support environmental compliance with durable, high-performance engineering.",
    ar: "حلول تصريف حضرية مستدامة مصممة لتحديات المناخ الفريدة في المملكة. تتعامل أنظمتنا مع الفيضانات المفاجئة وتقلل الجريان السطحي وتدعم الامتثال البيئي بهندسة عالية الأداء.",
  },
  "sol.geo.title": { en: "Geosynthetics & Soil Stabilization", ar: "الجيوسنثتيكس وتثبيت التربة" },
  "sol.geo.desc": {
    en: "High-performance geotechnical products for ground reinforcement and stabilization.",
    ar: "منتجات جيوتقنية عالية الأداء لتعزيز وتثبيت الأرض.",
  },
  "sol.geo.long": {
    en: "High-performance geotechnical products for ground reinforcement and stabilization. We provide geotextiles, geogrids, geocells, and geocomposites engineered for the harshest desert conditions.",
    ar: "منتجات جيوتقنية عالية الأداء لتعزيز وتثبيت الأرض. نوفر المنسوجات الأرضية والشبكات الأرضية والخلايا الأرضية المركبة المصممة لأقسى الظروف الصحراوية.",
  },
  "sol.bridges.title": { en: "Bridges & Tunnels Solutions", ar: "حلول الجسور والأنفاق" },
  "sol.bridges.desc": {
    en: "Complete engineering systems for bridge and tunnel infrastructure projects.",
    ar: "أنظمة هندسية متكاملة لمشاريع البنية التحتية للجسور والأنفاق.",
  },
  "sol.bridges.long": {
    en: "Complete engineering systems for bridge and tunnel infrastructure projects. From expansion joints to waterproofing membranes, we deliver integrated solutions for long-lasting structural integrity.",
    ar: "أنظمة هندسية متكاملة لمشاريع الجسور والأنفاق. من فواصل التمدد إلى أغشية العزل المائي، نقدم حلولاً متكاملة للسلامة الهيكلية طويلة الأمد.",
  },
  "sol.waterproofing.title": { en: "Waterproofing & Geomembranes", ar: "العزل المائي والأغشية الأرضية" },
  "sol.waterproofing.desc": {
    en: "Industrial-grade waterproofing solutions for reservoirs, tunnels, and foundations.",
    ar: "حلول عزل مائي صناعية للخزانات والأنفاق والأساسات.",
  },
  "sol.waterproofing.long": {
    en: "Industrial-grade waterproofing solutions for reservoirs, tunnels, foundations, and underground structures. Our HDPE geomembranes ensure complete water containment and environmental protection.",
    ar: "حلول عزل مائي صناعية للخزانات والأنفاق والأساسات والهياكل تحت الأرض. تضمن أغشية HDPE الأرضية احتواء المياه بالكامل والحماية البيئية.",
  },

  // About section
  "about.tag": { en: "About Us", ar: "من نحن" },
  "about.title": { en: "About", ar: "عن" },
  "about.ngs": { en: "Nasra GeoSyn", ar: "نصرة جيوسين" },
  "about.heroDesc": {
    en: "Since 1993, NGS has been a trusted partner for infrastructure projects across Saudi Arabia and the GCC. With over 30 years of expertise, we deliver engineering-driven solutions for Stormwater Management, Geosynthetics, and Tunnel systems.",
    ar: "منذ عام ١٩٩٣، كانت نصرة جيوسين شريكاً موثوقاً لمشاريع البنية التحتية في المملكة العربية السعودية ودول الخليج. مع أكثر من ٣٠ عاماً من الخبرة، نقدم حلولاً هندسية لإدارة مياه الأمطار والجيوسنثتيكس وأنظمة الأنفاق.",
  },
  "about.vision2030.pre": { en: "Engineering Resilient Infrastructure for", ar: "هندسة بنية تحتية مرنة لـ" },
  "about.vision2030": { en: "Saudi Vision 2030", ar: "رؤية السعودية ٢٠٣٠" },
  "about.desc": {
    en: "Since 1993, Nasra GeoSyn (NGS) has been a trusted partner for infrastructure projects across Saudi Arabia and the GCC. With over 30 years of expertise, we deliver engineering-driven solutions tailored to the region's unique environmental challenges.",
    ar: "منذ عام ١٩٩٣، كانت نصرة جيوسين شريكاً موثوقاً لمشاريع البنية التحتية في المملكة العربية السعودية ودول الخليج. مع أكثر من ٣٠ عاماً من الخبرة، نقدم حلولاً هندسية مصممة لتحديات المنطقة البيئية الفريدة.",
  },
  "about.story": { en: "Our Story", ar: "قصتنا" },
  "about.storyP1": {
    en: "NGS is dedicated to transforming Saudi Arabia's infrastructure with smart, reliable, and environmentally responsible solutions. Our focus is on creating long-term value for communities by integrating sustainability, efficiency, and global best practices into every project.",
    ar: "تلتزم نصرة جيوسين بتحويل البنية التحتية في المملكة العربية السعودية بحلول ذكية وموثوقة ومسؤولة بيئياً. تركيزنا على خلق قيمة طويلة الأمد للمجتمعات من خلال دمج الاستدامة والكفاءة وأفضل الممارسات العالمية في كل مشروع.",
  },
  "about.storyP2": {
    en: "At the heart of our work is a commitment to sustainable urban development, offering comprehensive systems in stormwater management, geosynthetics, bridges, tunnels, and fire protection.",
    ar: "في صميم عملنا التزام بالتنمية الحضرية المستدامة، حيث نقدم أنظمة شاملة في إدارة مياه الأمطار والجيوسنثتيكس والجسور والأنفاق والحماية من الحريق.",
  },

  // Services list
  "svc.suds": { en: "Stormwater & Soakaway Systems (SuDS)", ar: "أنظمة مياه الأمطار والتصريف المستدام" },
  "svc.bridges": { en: "Bridges & Tunnel Waterproofing", ar: "عزل الجسور والأنفاق" },
  "svc.geo": { en: "Geosynthetics & Soil Stabilization", ar: "الجيوسنثتيكس وتثبيت التربة" },
  "svc.fire": { en: "Fire Protection & Safety Systems", ar: "أنظمة الحماية من الحريق والسلامة" },

  // Stats
  "stat.projects": { en: "Projects Completed", ar: "مشاريع مكتملة" },
  "stat.customers": { en: "Happy Customers", ar: "عملاء سعداء" },
  "stat.engineers": { en: "Qualified Engineers", ar: "مهندسون مؤهلون" },
  "stat.years": { en: "Years Experience", ar: "سنوات خبرة" },

  // Vision
  "vision.tag": { en: "Company Vision", ar: "رؤية الشركة" },
  "vision.title": { en: "Our Vision & Core Values", ar: "رؤيتنا وقيمنا الأساسية" },
  "vision.desc": {
    en: "To be the premier partner in the Saudi Arabian market for Water Management, Traffic Systems, and Geo-Products. We are committed to delivering advanced technologies and sustainable solutions through deep market understanding.",
    ar: "أن نكون الشريك الرائد في السوق السعودي لإدارة المياه وأنظمة المرور والمنتجات الأرضية. نلتزم بتقديم تقنيات متقدمة وحلول مستدامة من خلال فهم عميق للسوق.",
  },
  "vision.desc2": {
    en: "We are dedicated to excellence. We prioritize creative approaches, superior technical advice, and flawless execution to build lasting trust with our clients and partners.",
    ar: "نحن ملتزمون بالتميز. نعطي الأولوية للأساليب الإبداعية والمشورة التقنية المتفوقة والتنفيذ المثالي لبناء ثقة دائمة مع عملائنا وشركائنا.",
  },

  // Certifications
  "cert.tag": { en: "Excellence", ar: "التميز" },
  "cert.title": { en: "Committed to Excellence & Compliance", ar: "ملتزمون بالتميز والامتثال" },
  "cert.iso9001.sub": { en: "Quality Management", ar: "إدارة الجودة" },
  "cert.iso9001.desc": {
    en: "Ensures consistent quality, customer satisfaction, and continuous improvement.",
    ar: "يضمن الجودة المتسقة ورضا العملاء والتحسين المستمر.",
  },
  "cert.iso14001.sub": { en: "Environmental Management", ar: "الإدارة البيئية" },
  "cert.iso14001.ems": { en: "Environmental Management (EMS)", ar: "الإدارة البيئية (EMS)" },
  "cert.iso14001.desc": {
    en: "Demonstrates our commitment to environmental responsibility and sustainability.",
    ar: "يُظهر التزامنا بالمسؤولية البيئية والاستدامة.",
  },
  "cert.iso45001.sub": { en: "Health & Safety", ar: "الصحة والسلامة" },
  "cert.iso45001.ohsms": { en: "Occupational Health & Safety (OHSMS)", ar: "الصحة والسلامة المهنية (OHSMS)" },
  "cert.iso45001.desc": {
    en: "Prioritizes safety, risk reduction, and employee wellbeing at every level.",
    ar: "يعطي الأولوية للسلامة وتقليل المخاطر ورفاهية الموظفين على كل المستويات.",
  },

  // CTA
  "cta.upcoming": { en: "Have an", ar: "هل لديك" },
  "cta.project": { en: "Upcoming Project?", ar: "مشروع قادم؟" },
  "cta.desc": {
    en: "Let's build something remarkable. We deliver innovative and sustainable infrastructure solutions tailored for the Saudi market.",
    ar: "لنبنِ شيئاً مميزاً. نقدم حلول بنية تحتية مبتكرة ومستدامة مصممة للسوق السعودي.",
  },
  "cta.getInTouch": { en: "Get In Touch", ar: "تواصل معنا" },
  "cta.partner": { en: "Ready to", ar: "مستعد لـ" },
  "cta.partnerHighlight": { en: "Partner", ar: "الشراكة" },
  "cta.partnerEnd": { en: "with Us?", ar: "معنا؟" },
  "cta.custom": { en: "Need a", ar: "تحتاج" },
  "cta.customHighlight": { en: "Custom Solution?", ar: "حلاً مخصصاً؟" },
  "cta.customDesc": {
    en: "Our engineering team is ready to design tailored infrastructure solutions for your project requirements.",
    ar: "فريقنا الهندسي جاهز لتصميم حلول بنية تحتية مخصصة لمتطلبات مشروعك.",
  },
  "cta.contactTeam": { en: "Contact Our Team", ar: "تواصل مع فريقنا" },

  // HSE
  "hse.tag": { en: "Company Policy", ar: "سياسة الشركة" },
  "hse.title": { en: "Health, Safety & Environment", ar: "الصحة والسلامة والبيئة" },
  "hse.desc": {
    en: "At Nasra GeoSyn (NGS), safety is our priority. We are committed to protecting the health and well-being of our employees, partners, and the communities we serve. Our operations are designed to minimize environmental impact, ensuring a safer workplace and a greener future.",
    ar: "في نصرة جيوسين، السلامة أولويتنا. نلتزم بحماية صحة ورفاهية موظفينا وشركائنا والمجتمعات التي نخدمها. صُممت عملياتنا لتقليل التأثير البيئي، مما يضمن مكان عمل أكثر أماناً ومستقبلاً أكثر اخضراراً.",
  },

  // Solutions page
  "solPage.tag": { en: "What We Do", ar: "ما نقدمه" },
  "solPage.title": { en: "Our", ar: "حلولنا" },
  "solPage.titleHighlight": { en: "Solutions", ar: "" },
  "solPage.additional": { en: "Additional Services", ar: "خدمات إضافية" },
  "solPage.traffic.title": { en: "Traffic Management & Road Safety", ar: "إدارة المرور وسلامة الطرق" },
  "solPage.traffic.desc": {
    en: "Comprehensive traffic control and road safety systems for urban and highway infrastructure.",
    ar: "أنظمة شاملة للتحكم في المرور وسلامة الطرق للبنية التحتية الحضرية والطرق السريعة.",
  },
  "solPage.fire.title": { en: "Fire Protection & Safety Systems", ar: "أنظمة الحماية من الحريق والسلامة" },
  "solPage.fire.desc": {
    en: "Advanced fire suppression and protection solutions for tunnels, buildings, and industrial facilities.",
    ar: "حلول متقدمة لإخماد الحرائق والحماية للأنفاق والمباني والمنشآت الصناعية.",
  },
  "solPage.geohazard.title": { en: "Geohazard Mitigation", ar: "تخفيف المخاطر الأرضية" },
  "solPage.geohazard.desc": {
    en: "Engineering solutions to protect infrastructure from rockfalls, landslides, and soil erosion.",
    ar: "حلول هندسية لحماية البنية التحتية من سقوط الصخور والانهيارات الأرضية وتآكل التربة.",
  },

  // Contact page
  "contact.tag": { en: "Get In Touch", ar: "تواصل معنا" },
  "contact.title": { en: "Contact", ar: "تواصل" },
  "contact.titleHighlight": { en: "Us", ar: "معنا" },
  "contact.desc": {
    en: "Have a question or need assistance? We're here to help with your infrastructure and engineering needs.",
    ar: "لديك سؤال أو تحتاج مساعدة؟ نحن هنا للمساعدة في احتياجاتك الهندسية والبنية التحتية.",
  },
  "contact.getInTouch": { en: "Get In Touch", ar: "تواصل معنا" },
  "contact.email": { en: "Email", ar: "البريد الإلكتروني" },
  "contact.phone": { en: "Phone", ar: "الهاتف" },
  "contact.location": { en: "Location", ar: "الموقع" },
  "contact.saudiArabia": { en: "Saudi Arabia", ar: "المملكة العربية السعودية" },
  "contact.name": { en: "Name", ar: "الاسم" },
  "contact.namePlaceholder": { en: "Your Name", ar: "اسمك" },
  "contact.emailPlaceholder": { en: "your@email.com", ar: "بريدك@الالكتروني.com" },
  "contact.phonePlaceholder": { en: "+966 XX XXX XXXX", ar: "+٩٦٦ XX XXX XXXX" },
  "contact.message": { en: "Message", ar: "الرسالة" },
  "contact.messagePlaceholder": { en: "Tell us about your project...", ar: "أخبرنا عن مشروعك..." },
  "contact.send": { en: "Send Message", ar: "إرسال الرسالة" },
  "contact.sent": { en: "Message Sent", ar: "تم إرسال الرسالة" },
  "contact.sentDesc": { en: "Thank you! We'll get back to you shortly.", ar: "شكراً! سنعود إليك قريباً." },

  // Footer
  "footer.tagline": { en: "Engineering Resilient Infrastructure for Saudi Vision 2030.", ar: "هندسة بنية تحتية مرنة لرؤية السعودية ٢٠٣٠." },
  "footer.quickLinks": { en: "Quick Links", ar: "روابط سريعة" },
  "footer.solutions": { en: "Solutions", ar: "الحلول" },
  "footer.contact": { en: "Contact", ar: "تواصل" },
  "footer.rights": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  "footer.stormwater": { en: "Stormwater & Soakaway Systems", ar: "أنظمة مياه الأمطار والتصريف" },
  "footer.geo": { en: "Geosynthetics & Soil Stabilization", ar: "الجيوسنثتيكس وتثبيت التربة" },
  "footer.bridges": { en: "Bridges & Tunnels", ar: "الجسور والأنفاق" },
  "footer.waterproofing": { en: "Waterproofing & Geomembranes", ar: "العزل المائي والأغشية الأرضية" },
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("ngs-lang");
    return (saved === "ar" ? "ar" : "en") as Lang;
  });

  const isRTL = lang === "ar";

  useEffect(() => {
    localStorage.setItem("ngs-lang", lang);
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang, isRTL]);

  const toggleLang = () => setLang((prev) => (prev === "en" ? "ar" : "en"));

  const t = (key: string): string => {
    return translations[key]?.[lang] || key;
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang, t, isRTL }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
};
