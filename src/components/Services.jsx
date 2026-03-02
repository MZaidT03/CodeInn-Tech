import AnimatedSection from "./AnimatedSection";
import { CodeIcon, SmartphoneIcon, FigmaIcon, DotNetIcon, WindowsAppIcon, AiIcon, SettingsIcon } from "./Icons";

const services = [
  {
    icon: <CodeIcon />,
    title: "Web Development",
    description: "Building fast, responsive, and scalable websites with React.js, Tailwind CSS, and Supabase.",
    category: "Web",
  },
  {
    icon: <SmartphoneIcon />,
    title: "Mobile App Development",
    description: "Cross-platform mobile apps for iOS and Android using React Native and Expo for rapid delivery.",
    category: "Mobile",
  },
  {
    icon: <FigmaIcon />,
    title: "UI/UX Design",
    description: "Designing intuitive and beautiful user interfaces that provide a seamless user experience.",
    category: "Design",
  },
  {
    icon: <DotNetIcon />,
    title: ".NET Core Development",
    description: "Robust and scalable backend solutions, APIs, and web applications using the .NET Core framework.",
    category: "Backend",
  },
  {
    icon: <WindowsAppIcon />,
    title: "Windows App (C#)",
    description: "Custom desktop applications for Windows with C#, tailored to your specific business needs.",
    category: "Desktop",
  },
  {
    icon: <AiIcon />,
    title: "AI & Automation",
    description: "Integrating artificial intelligence and automation to create smarter applications and streamline workflows.",
    category: "AI",
  },
  {
    icon: <SettingsIcon />,
    title: "Maintenance & Support",
    description: "Ongoing support, updates, and maintenance to keep your applications running smoothly.",
    category: "Support",
  },
];

const Services = () => (
  <section id="services" className="py-20">
    <div className="container mx-auto px-6">
      <AnimatedSection customClassName="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Our Services</h2>
        <p className="text-neutral-400 mt-2">
          We offer a range of services to bring your ideas to life.
        </p>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {services.map((service, index) => (
          <AnimatedSection
            key={service.title}
            delay={index * 100}
            customClassName="glass-card p-8 rounded-xl text-center w-full max-w-sm hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="inline-block p-4 rounded-full mb-4 icon-glow-wrapper transition-all duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-neutral-400">{service.description}</p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
