import React, { useState, useEffect, useRef } from "react";

// --- SVG Icons as Components (Stroke colors updated to Gold) ---
const goldAccent = "#C0A062";

const CodeIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke={goldAccent}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);
const SmartphoneIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke={goldAccent}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12.01" y2="18"></line>
  </svg>
);
const FigmaIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke={goldAccent}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
  </svg>
);
const SettingsIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke={goldAccent}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);
const DotNetIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke={goldAccent}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 8L8 16"
      stroke={goldAccent}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 16H8V8"
      stroke={goldAccent}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const WindowsAppIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke={goldAccent}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 5V19H21V5H3Z" />
    <path d="M3 12H21" />
    <path d="M12 5V19" />
  </svg>
);
const AiIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L9 9H15L12 2Z"
      stroke={goldAccent}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 12L9 15V9L2 12Z"
      stroke={goldAccent}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 12L15 9V15L22 12Z"
      stroke={goldAccent}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 22L15 15H9L12 22Z"
      stroke={goldAccent}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="12"
      cy="12"
      r="3"
      stroke={goldAccent}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const InstagramIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
const TwitterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.799-1.56 2.46-2.548l-.047-.02z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// --- Reusable Animated Component (No changes) ---
const AnimatedSection = ({ children, customClassName, delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      } ${customClassName || ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- UPDATED Header ---
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLinkClick = () => setIsMenuOpen(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-neutral-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white">
          CodeInn’ <span style={{ color: goldAccent }}>Tech</span>
        </a>
        <nav className="hidden md:flex space-x-8 items-center">
          <a
            href="#about"
            className="text-neutral-300 hover:text-white transition duration-300"
          >
            About
          </a>
          <a
            href="#services"
            className="text-neutral-300 hover:text-white transition duration-300"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="text-neutral-300 hover:text-white transition duration-300"
          >
            Work
          </a>
          <a
            href="#team"
            className="text-neutral-300 hover:text-white transition duration-300"
          >
            Team
          </a>
          <a
            href="#contact"
            style={{ backgroundColor: goldAccent }}
            className="text-black font-semibold px-4 py-2 rounded-md hover:brightness-110 transition duration-300"
          >
            Get a Quote
          </a>
        </nav>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-black/90 backdrop-blur-sm`}
      >
        <a
          href="#about"
          onClick={handleLinkClick}
          className="block py-3 px-6 text-neutral-300 hover:bg-neutral-900"
        >
          About
        </a>
        <a
          href="#services"
          onClick={handleLinkClick}
          className="block py-3 px-6 text-neutral-300 hover:bg-neutral-900"
        >
          Services
        </a>
        <a
          href="#portfolio"
          onClick={handleLinkClick}
          className="block py-3 px-6 text-neutral-300 hover:bg-neutral-900"
        >
          Work
        </a>
        <a
          href="#team"
          onClick={handleLinkClick}
          className="block py-3 px-6 text-neutral-300 hover:bg-neutral-900"
        >
          Team
        </a>
        <a
          href="#contact"
          onClick={handleLinkClick}
          className="block py-3 px-6 text-neutral-300 hover:bg-neutral-900"
        >
          Get a Quote
        </a>
      </div>
    </header>
  );
};

// --- UPDATED Hero ---
const Hero = () => (
  <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32">
    <div className="container mx-auto px-6 text-center">
      <AnimatedSection>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          Digital Craftsmanship by{" "}
          <span style={{ color: goldAccent }}>CodeInn’ Tech</span>
        </h1>
      </AnimatedSection>
      <AnimatedSection delay={200}>
        <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto mb-8">
          Delivering high-end web, mobile, and AI solutions with precision and
          professionalism.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={400}>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#contact"
            style={{ backgroundColor: goldAccent }}
            className="text-black font-bold px-8 py-3 rounded-md hover:brightness-110 transition duration-300 transform hover:scale-105"
          >
            Get a Quote
          </a>
          <a
            href="#portfolio"
            style={{ borderColor: goldAccent, color: goldAccent }}
            className="border-2 font-bold px-8 py-3 rounded-md hover:bg-[#C0A062] hover:text-black transition duration-300 transform hover:scale-105"
          >
            View Work
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

// --- UPDATED About ---
const About = () => (
  <section id="about" className="py-20 bg-[#0A0A0A]">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <img
            src={`https://placehold.co/600x600/000000/${goldAccent.substring(
              1
            )}?text=MZT`}
            alt="Muhammad Zaid Tahir"
            className="rounded-lg shadow-2xl w-full max-w-sm mx-auto"
          />
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
          <p className="text-lg text-neutral-300 mb-6">
            Hi, I'm{" "}
            <span className="font-semibold" style={{ color: goldAccent }}>
              Muhammad Zaid Tahir
            </span>
            , the founder and lead developer at CodeInn’ Tech. Based in
            Gujranwala, Pakistan, I specialize in crafting high-performance
            websites and mobile applications using cutting-edge technologies.
          </p>
          <p className="text-neutral-400 mb-6">
            My expertise lies in{" "}
            <span className="font-semibold text-neutral-200">
              React.js, React Native, Supabase,
            </span>{" "}
            and{" "}
            <span className="font-semibold text-neutral-200">Tailwind CSS</span>
            . I am passionate about turning complex problems into elegant,
            user-friendly digital solutions.
          </p>
          <div
            className="bg-[#121212] p-6 rounded-lg"
            style={{ borderLeft: `4px solid ${goldAccent}` }}
          >
            <p className="text-xl italic text-neutral-200">
              “Our mission is to empower local and global businesses with modern
              digital solutions that drive growth and success.”
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

// --- UPDATED Services ---
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
        {[
          {
            icon: <CodeIcon />,
            title: "Web Development",
            description:
              "Building fast, responsive, and scalable websites with React.js, Tailwind CSS, and Supabase.",
          },
          {
            icon: <SmartphoneIcon />,
            title: "Mobile App Development",
            description:
              "Cross-platform mobile apps for iOS and Android using React Native and Expo for rapid delivery.",
          },
          {
            icon: <FigmaIcon />,
            title: "UI/UX Design",
            description:
              "Designing intuitive and beautiful user interfaces that provide a seamless user experience.",
          },
          {
            icon: <DotNetIcon />,
            title: ".NET Core Development",
            description:
              "Robust and scalable backend solutions, APIs, and web applications using the .NET Core framework.",
          },
          {
            icon: <WindowsAppIcon />,
            title: "Windows App (C#)",
            description:
              "Custom desktop applications for Windows with C#, tailored to your specific business needs.",
          },
          {
            icon: <AiIcon />,
            title: "AI & Automation",
            description:
              "Integrating artificial intelligence and automation to create smarter applications and streamline workflows.",
          },
          {
            icon: <SettingsIcon />,
            title: "Maintenance & Support",
            description:
              "Ongoing support, updates, and maintenance to keep your applications running smoothly.",
          },
        ].map((service, index) => (
          <AnimatedSection
            key={service.title}
            delay={index * 100}
            customClassName="bg-[#121212] p-8 rounded-lg text-center w-full max-w-sm border border-neutral-800 hover:border-[#C0A062] hover:-translate-y-2 transition-all duration-300"
          >
            <div className="bg-neutral-800/50 inline-block p-4 rounded-full mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-neutral-400">{service.description}</p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

const Portfolio = () => {
  // Define the list of projects
  const projects = [
    {
      name: "WheelDeals - Used Car Marketplace",
      description:
        "A comprehensive online marketplace for buying and selling used cars. Features advanced search filters, user profiles, and secure messaging. (Currently in development, not hosted).",
      tags: ["React", "Node.js", "Firebase", "Tailwind CSS"],
    },
    {
      name: "Construction Management Web App",
      description:
        "A complete web application for managing construction projects, tracking budgets, scheduling tasks, and coordinating teams, all built on a scalable Supabase backend.",
      tags: ["React", "Supabase", "JavaScript"],
    },
    {
      name: "SmartTask To-Do App",
      description:
        "A sleek and intuitive to-do list mobile app for iOS and Android. Powered by React Native, it features real-time data sync with Firebase for seamless collaboration.",
      tags: ["React Native", "Firebase", "Expo"],
    },
    {
      name: "AI-Powered Financial Forecaster",
      description:
        "A backend application using .NET Core and machine learning models to analyze market data, predict stock trends, and provide investment insights via a secure API.",
      tags: [".NET Core", "C#", "Python", "ML"],
    },
    {
      name: "E-Commerce Logistics Dashboard",
      description:
        "A custom C# desktop application for a local business to manage inventory, track shipments, and visualize complex sales data in real-time.",
      tags: ["C#", "WPF", "SQL Server"],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <AnimatedSection customClassName="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Our Work</h2>
          <p className="text-neutral-400 mt-2">
            A selection of our featured projects.
          </p>
        </AnimatedSection>

        {/* New List-Based Layout. 
          We use flex-col and max-w-4xl to create a clean, centered list.
        */}
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.name}
              delay={index * 150}
              customClassName="bg-[#121212] rounded-lg border border-neutral-800 hover:border-[#C0A062] transition-colors duration-300"
            >
              <div className="p-6">
                <h3
                  className="text-2xl font-bold text-white mb-2"
                  style={{ color: goldAccent }}
                >
                  {project.name}
                </h3>
                <p className="text-neutral-400 mb-4">{project.description}</p>

                {/* Project Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-neutral-800 text-neutral-300 text-sm font-semibold px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section id="testimonials" className="py-20">
    <div className="container mx-auto px-6">
      <AnimatedSection customClassName="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">What Our Clients Say</h2>
        <p className="text-neutral-400 mt-2">
          Trusted by local businesses in Gujranwala.
        </p>
      </AnimatedSection>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        <AnimatedSection customClassName="bg-[#121212] p-8 rounded-lg border border-neutral-800">
          <p className="text-neutral-300 italic mb-6">
            "CodeInn’ Tech delivered a fantastic website for our restaurant.
            It's fast, looks great on mobile, and has boosted our online orders
            significantly. Highly recommended!"
          </p>
          <div>
            <p className="font-bold text-white">Ali Hassan</p>
            <p className="text-sm" style={{ color: goldAccent }}>
              Owner, GRW Eatery
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection
          delay={200}
          customClassName="bg-[#121212] p-8 rounded-lg border border-neutral-800"
        >
          <p className="text-neutral-300 italic mb-6">
            "Working with CodeInn' was a breeze. They understood our vision for
            a startup app and brought it to life with great skill. The final
            product exceeded our expectations."
          </p>
          <div>
            <p className="font-bold text-white">Fatima Jilani</p>
            <p className="text-sm" style={{ color: goldAccent }}>
              Founder, LocalCart
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection
          delay={400}
          customClassName="bg-[#121212] p-8 rounded-lg border border-neutral-800"
        >
          <p className="text-neutral-300 italic mb-6">
            "Professional, reliable, and technically proficient. CodeInn'
            provided excellent support throughout the development process of our
            business's internal tool."
          </p>
          <div>
            <p className="font-bold text-white">Usman Butt</p>
            <p className="text-sm" style={{ color: goldAccent }}>
              Manager, Chenab Fabrics
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Muhammad Zaid Tahir",
      role: "Founder & Lead Developer",
      imageUrl: `https://placehold.co/400x400/000000/${goldAccent.substring(
        1
      )}?text=MZT`,
      bio: "Zaid leads CodeInn’ Tech with a passion for turning complex problems into elegant, user-friendly digital solutions using React and React Native.",
      socials: [
        {
          name: "Instagram",
          href: "https://www.instagram.com/_zaid.t_/",
          icon: <InstagramIcon />,
        },
        {
          name: "Twitter",
          href: "https://x.com/_MZaidTahir_",
          icon: <TwitterIcon />,
        },
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/zaid-tahir-0b0933159/",
          icon: <LinkedinIcon />,
        },
      ],
      portfolio: "https://mzaidtahir.netlify.app/",
    },
    {
      id: 2,
      name: "Danish Imran",
      role: ".NET Core & Backend Engineer",
      imageUrl: `https://placehold.co/400x400/000000/${goldAccent.substring(
        1
      )}?text=DI`,
      bio: "Danish is a core member of CodeInn’ Tech, passionate about building scalable backend systems with .NET Core and ASP.NET MVC, using modern tools like Docker, Git, and SQL to deliver robust digital solutions.",
      socials: [
        {
          name: "Twitter",
          href: "https://x.com/_xteve",
          icon: <TwitterIcon />,
        },
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/danish-imran-380220310/",
          icon: <LinkedinIcon />,
        },
      ],
      portfolio: "https://danishimran.netlify.app/",
    },
    {
      id: 3,
      name: "Ammad Mehmood",
      role: "Full Stack Developer",
      imageUrl: `https://placehold.co/400x400/000000/${goldAccent.substring(
        1
      )}?text=AM`,
      bio: "Ammad Mehmood is a Full Stack Developer specializing in React, with expertise in AI and Automation to build smart and efficient web solutions.",
      socials: [
        { name: "Twitter", href: "#", icon: <TwitterIcon /> },
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/ammad-mahmood-a8322a254/",
          icon: <LinkedinIcon />,
        },
      ],
      portfolio: "https://portfolio-ammad.netlify.app/",
    },
  ];
  return (
    <section id="team" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <AnimatedSection customClassName="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Meet Our Team</h2>
          <p className="text-neutral-400 mt-2">
            The passionate individuals driving our success.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {teamMembers.map((member, index) => (
            <AnimatedSection
              key={member.id}
              delay={index * 150}
              customClassName="relative bg-[#121212] p-8 rounded-lg text-center w-full max-w-sm flex flex-col justify-between border border-neutral-800 hover:border-[#C0A062] hover:-translate-y-2 transition-all duration-300"
            >
              <div>
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6"
                  style={{ border: `4px solid ${goldAccent}` }}
                />
                <h3 className="text-2xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="font-semibold mb-4" style={{ color: goldAccent }}>
                  {member.role}
                </p>
                <p className="text-neutral-400 mb-6">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  {member.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-4 right-6">
                <a
                  href={member.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold hover:underline transition duration-300"
                  style={{ color: goldAccent }}
                >
                  Portfolio →
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- UPDATED Contact ---
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const handleChange = (e) =>
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("https://formspree.io/f/xvgwlvkp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection customClassName="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">
            Let’s Build Something Great!
          </h2>
          <p className="text-neutral-400 mt-2">
            Have a project in mind? Fill out the form below to get a free quote.
          </p>
        </AnimatedSection>
        <AnimatedSection customClassName="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-[#121212] p-8 rounded-lg border border-neutral-800"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#1C1C1C] border border-neutral-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#C0A062] transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#1C1C1C] border border-neutral-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#C0A062] transition"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-[#1C1C1C] border border-neutral-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#C0A062] transition"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your project..."
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[#1C1C1C] border border-neutral-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#C0A062] transition"
            ></textarea>
            {status === "success" && (
              <p className="text-center text-green-400">
                Thanks! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-red-400">
                Something went wrong. Please try again.
              </p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              style={{ backgroundColor: goldAccent }}
              className="w-full text-black font-bold px-8 py-3 rounded-md hover:brightness-110 transition duration-300 transform disabled:bg-neutral-600 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

// --- UPDATED Footer ---
const Footer = () => (
  <footer className="bg-[#0A0A0A] border-t border-neutral-800">
    <div className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            CodeInn’ <span style={{ color: goldAccent }}>Tech</span>
          </h3>
          <p className="text-neutral-400">Digital Craftsmanship, Delivered.</p>
          <p className="text-neutral-400">
            Empowering businesses with modern digital solutions.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Info
          </h3>
          <ul className="space-y-2 text-neutral-400">
            <li>
              <a
                href="mailto:muhammadzaidtahir90@gmail.com"
                className="hover:text-white"
              >
                codeinntech.studio@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+923114680774" className="hover:text-white">
                03114680774
              </a>
            </li>
            <li>Gujranwala, Pakistan</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://www.instagram.com/codeinn_tech/"
              className="text-neutral-400 hover:text-white transition duration-300"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://x.com/CodeInnTech"
              className="text-neutral-400 hover:text-white transition duration-300"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/codeinn-tech-81b54838b/"
              className="text-neutral-400 hover:text-white transition duration-300"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-neutral-500 mt-12 border-t border-neutral-800 pt-8">
        <p>Copyright © 2025 CodeInn’ Tech. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

// --- App Component (Main Layout) ---
export default function App() {
  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap");

        body {
          font-family: "Inter", sans-serif;
          background-color: #000000;
          color: #a3a3a3; /* Neutral 400 */
          scroll-behavior: smooth;
        }
      `}</style>
      <div className="antialiased">
        <Header />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <Testimonials />
          <About />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
