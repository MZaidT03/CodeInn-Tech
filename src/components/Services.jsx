import AnimatedSection from "./AnimatedSection";
import {
  CodeIcon,
  SmartphoneIcon,
  FigmaIcon,
  DotNetIcon,
  WindowsAppIcon,
  AiIcon,
  SettingsIcon,
} from "./Icons";

const services = [
  {
    icon: <CodeIcon />,
    title: "Website Development",
    description:
      "Responsive, SEO-friendly websites built for speed, conversions, and long-term growth.",
    benefits: ["Modern UI", "Fast performance", "SEO-ready structure"],
    technologies: "React, Vite, Tailwind CSS",
    cta: "Start Your Website",
  },
  {
    icon: <SmartphoneIcon />,
    title: "Mobile App Development",
    description:
      "A mobile app development company in Pakistan delivering React Native app development Pakistan businesses trust for smooth UX and scalable architecture.",
    benefits: ["Native-like UX", "App store readiness", "Secure data handling"],
    technologies: "React Native, Expo",
    cta: "Build a Mobile App",
  },
  {
    icon: <DotNetIcon />,
    title: "Custom Software Development",
    description:
      "Custom software development in Pakistan for operations, dashboards, and business automation.",
    benefits: ["Process automation", "Scalable APIs", "Reliable integrations"],
    technologies: ".NET Core, Node.js, Supabase",
    cta: "Request Custom Software",
  },
  {
    icon: <FigmaIcon />,
    title: "UI/UX Design",
    description:
      "UI/UX design services in Pakistan focused on usability, engagement, and conversions.",
    benefits: ["Wireframes & prototypes", "Conversion-focused layouts", "Design systems"],
    technologies: "Figma, Design Systems",
    cta: "Improve UX",
  },
  {
    icon: <AiIcon />,
    title: "SEO Services",
    description:
      "SEO services in Pakistan including technical audits, on-page optimization, and content guidance.",
    benefits: ["Technical SEO", "Keyword strategy", "Performance tuning"],
    technologies: "Google Search Console, Analytics",
    cta: "Boost Rankings",
  },
  {
    icon: <WindowsAppIcon />,
    title: "E-commerce Development",
    description:
      "Ecommerce website development in Pakistan with secure, conversion-focused online stores.",
    benefits: ["Product management", "Payment integration", "Order automation"],
    technologies: "Custom storefronts, Shopify-ready",
    cta: "Launch Your Store",
  },
  {
    icon: <SettingsIcon />,
    title: "Business Automation",
    description:
      "Automate repetitive workflows and centralize data for smarter decision-making.",
    benefits: ["Workflow automation", "CRM/ERP integration", "Real-time reporting"],
    technologies: "APIs, Integrations, Cloud tools",
    cta: "Automate Operations",
  },
];

const Services = () => (
  <section id="services" className="py-20">
    <div className="container mx-auto px-6">
      <AnimatedSection customClassName="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Services for Modern Businesses</h2>
        <p className="text-neutral-400 mt-2">
          We are a website development company in Pakistan providing complete digital solutions.
        </p>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {services.map((service, index) => (
          <AnimatedSection
            key={service.title}
            delay={index * 100}
            customClassName="glass-card p-8 rounded-xl text-left w-full max-w-sm hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="inline-block p-4 rounded-full mb-4 icon-glow-wrapper transition-all duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-neutral-400 mb-4">{service.description}</p>
            <ul className="text-sm text-neutral-300 space-y-2 mb-4">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C0A062]" aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-5">
              Technologies: <span className="text-neutral-300">{service.technologies}</span>
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center text-sm font-semibold px-4 py-2 rounded-md border transition duration-300 hover:bg-[#C0A062] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ borderColor: "#C0A062", color: "#C0A062", outlineColor: "#C0A062" }}
            >
              {service.cta}
            </a>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
