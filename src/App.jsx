import React, { useState, useEffect, useRef } from "react";

// --- SVG Icons as Components (No changes here) ---
const CodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#14b8a6"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-code"
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);
const SmartphoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#14b8a6"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-smartphone"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12.01" y2="18"></line>
  </svg>
);
const FigmaIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#14b8a6"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-figma"
  >
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
  </svg>
);
const SettingsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#14b8a6"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-settings"
  >
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-instagram"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="feather feather-twitter"
  >
    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.799-1.56 2.46-2.548l-.047-.02z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-linkedin"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// --- Reusable Animated Component (No changes here) ---
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
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
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

// --- Section Components (No changes to Header, Hero, About, etc.) ---
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLinkClick = () => setIsMenuOpen(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white">
          CodeInn’ <span className="text-teal-500">Tech</span>
        </a>
        <nav className="hidden md:flex space-x-8">
          <a
            href="#about"
            className="text-slate-300 hover:text-teal-500 transition duration-300"
          >
            About
          </a>
          <a
            href="#services"
            className="text-slate-300 hover:text-teal-500 transition duration-300"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="text-slate-300 hover:text-teal-500 transition duration-300"
          >
            Work
          </a>
          <a
            href="#contact"
            className="bg-teal-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-teal-600 transition duration-300"
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
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <a
          href="#about"
          onClick={handleLinkClick}
          className="block py-2 px-6 text-slate-300 hover:bg-slate-800"
        >
          About
        </a>
        <a
          href="#services"
          onClick={handleLinkClick}
          className="block py-2 px-6 text-slate-300 hover:bg-slate-800"
        >
          Services
        </a>
        <a
          href="#portfolio"
          onClick={handleLinkClick}
          className="block py-2 px-6 text-slate-300 hover:bg-slate-800"
        >
          Work
        </a>
        <a
          href="#contact"
          onClick={handleLinkClick}
          className="block py-2 px-6 text-slate-300 hover:bg-slate-800"
        >
          Get a Quote
        </a>
      </div>
    </header>
  );
};
const Hero = () => (
  <section id="home" className="hero-bg pt-32 pb-20 md:pt-48 md:pb-32">
    <div className="container mx-auto px-6 text-center">
      <AnimatedSection>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          Build Your Digital Presence with
          <span className="text-teal-500">CodeInn’ Tech</span>
        </h1>
      </AnimatedSection>
      <AnimatedSection delay={200}>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
          Professional Web & App Development for Businesses, Startups, and
          Entrepreneurs in Gujranwala and beyond.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={400}>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#contact"
            className="bg-teal-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-teal-600 transition duration-300 transform hover:scale-105"
          >
            Get a Quote
          </a>
          <a
            href="#portfolio"
            className="border-2 border-teal-500 text-teal-500 font-semibold px-8 py-3 rounded-lg hover:bg-teal-500 hover:text-white transition duration-300 transform hover:scale-105"
          >
            View Work
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);
const About = () => (
  <section id="about" className="py-20 bg-slate-900">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <img
            src="https://placehold.co/600x600/0f172a/14b8a6?text=MZT"
            alt="Muhammad Zaid Tahir"
            className="rounded-lg shadow-2xl w-full max-w-sm mx-auto"
          />
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
          <p className="text-lg text-slate-300 mb-6">
            Hi, I'm
            <span className="font-semibold text-teal-500">
              Muhammad Zaid Tahir
            </span>
            , the founder and lead developer at CodeInn’ Tech. Based in
            Gujranwala, Pakistan, I specialize in crafting high-performance
            websites and mobile applications using cutting-edge technologies.
          </p>
          <p className="text-slate-300 mb-6">
            My expertise lies in
            <span className="font-semibold text-white">
              React.js, React Native, Supabase,
            </span>
            and <span className="font-semibold text-white">Tailwind CSS</span>.
            I am passionate about turning complex problems into elegant,
            user-friendly digital solutions.
          </p>
          <div className="bg-slate-800 p-6 rounded-lg border-l-4 border-teal-500">
            <p className="text-xl italic text-slate-200">
              “Our mission is to empower local and global businesses with modern
              digital solutions that drive growth and success.”
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);
const Services = () => (
  <section id="services" className="py-20">
    <div className="container mx-auto px-6">
      <AnimatedSection customClassName="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Our Services</h2>
        <p className="text-slate-400 mt-2">
          We offer a range of services to bring your ideas to life.
        </p>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <AnimatedSection customClassName="bg-slate-800 p-8 rounded-lg shadow-lg text-center hover:-translate-y-2 transition-transform duration-300">
          <div className="bg-teal-500/10 inline-block p-4 rounded-full mb-4">
            <CodeIcon />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Web Development</h3>
          <p className="text-slate-400">
            Building fast, responsive, and scalable websites with React.js,
            Tailwind CSS, and Supabase.
          </p>
        </AnimatedSection>
        <AnimatedSection
          delay={150}
          customClassName="bg-slate-800 p-8 rounded-lg shadow-lg text-center hover:-translate-y-2 transition-transform duration-300"
        >
          <div className="bg-teal-500/10 inline-block p-4 rounded-full mb-4">
            <SmartphoneIcon />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            Mobile App Development
          </h3>
          <p className="text-slate-400">
            Cross-platform mobile apps for iOS and Android using React Native
            and Expo for rapid delivery.
          </p>
        </AnimatedSection>
        <AnimatedSection
          delay={300}
          customClassName="bg-slate-800 p-8 rounded-lg shadow-lg text-center hover:-translate-y-2 transition-transform duration-300"
        >
          <div className="bg-teal-500/10 inline-block p-4 rounded-full mb-4">
            <FigmaIcon />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">UI/UX Design</h3>
          <p className="text-slate-400">
            Designing intuitive and beautiful user interfaces that provide a
            seamless user experience.
          </p>
        </AnimatedSection>
        <AnimatedSection
          delay={450}
          customClassName="bg-slate-800 p-8 rounded-lg shadow-lg text-center hover:-translate-y-2 transition-transform duration-300"
        >
          <div className="bg-teal-500/10 inline-block p-4 rounded-full mb-4">
            <SettingsIcon />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            Maintenance & Support
          </h3>
          <p className="text-slate-400">
            Ongoing support, updates, and maintenance to keep your applications
            running smoothly.
          </p>
        </AnimatedSection>
      </div>
    </div>
  </section>
);
const Portfolio = () => (
  <section id="portfolio" className="py-20 bg-slate-900">
    <div className="container mx-auto px-6">
      <AnimatedSection customClassName="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Our Work</h2>
        <p className="text-slate-400 mt-2">
          A selection of our featured projects.
        </p>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 gap-8">
        <AnimatedSection customClassName="bg-slate-800 rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://placehold.co/600x400/0f172a/14b8a6?text=Construction+App"
            alt="Construction Management Web App"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              Construction Management Web App
            </h3>
            <p className="text-slate-400 mb-4">
              A comprehensive web application for managing construction
              projects, built with React and Supabase.
            </p>
            <span className="inline-block bg-teal-500/20 text-teal-400 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded-full">
              React
            </span>
            <span className="inline-block bg-teal-500/20 text-teal-400 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded-full">
              Supabase
            </span>
          </div>
        </AnimatedSection>
        <AnimatedSection
          delay={200}
          customClassName="bg-slate-800 rounded-lg shadow-lg overflow-hidden"
        >
          <img
            src="https://placehold.co/600x400/0f172a/14b8a6?text=SmartTask"
            alt="SmartTask To-Do App"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              SmartTask To-Do App
            </h3>
            <p className="text-slate-400 mb-4">
              A sleek and intuitive to-do list mobile app for iOS and Android,
              powered by React Native and Firebase.
            </p>
            <span className="inline-block bg-teal-500/20 text-teal-400 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded-full">
              React Native
            </span>
            <span className="inline-block bg-teal-500/20 text-teal-400 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded-full">
              Firebase
            </span>
          </div>
        </AnimatedSection>
        <AnimatedSection customClassName="bg-slate-800 rounded-lg shadow-lg overflow-hidden border-2 border-dashed border-slate-700 flex items-center justify-center">
          <div className="text-center p-6">
            <h3 className="text-xl font-bold text-slate-400">
              New Project Coming Soon
            </h3>
            <p className="text-slate-500">
              Stay tuned for our next exciting launch.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection
          delay={200}
          customClassName="bg-slate-800 rounded-lg shadow-lg overflow-hidden border-2 border-dashed border-slate-700 flex items-center justify-center"
        >
          <div className="text-center p-6">
            <h3 className="text-xl font-bold text-slate-400">
              Another Project in the Works
            </h3>
            <p className="text-slate-500">We're building something amazing.</p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);
const Testimonials = () => (
  <section id="testimonials" className="py-20">
    <div className="container mx-auto px-6">
      <AnimatedSection customClassName="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">What Our Clients Say</h2>
        <p className="text-slate-400 mt-2">
          Trusted by local businesses in Gujranwala.
        </p>
      </AnimatedSection>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        <AnimatedSection customClassName="bg-slate-800 p-8 rounded-lg shadow-lg">
          <p className="text-slate-300 italic mb-6">
            "CodeInn’ Tech delivered a fantastic website for our restaurant.
            It's fast, looks great on mobile, and has boosted our online orders
            significantly. Highly recommended!"
          </p>
          <div>
            <p className="font-bold text-white">Ali Hassan</p>
            <p className="text-sm text-teal-500">Owner, GRW Eatery</p>
          </div>
        </AnimatedSection>
        <AnimatedSection
          delay={200}
          customClassName="bg-slate-800 p-8 rounded-lg shadow-lg"
        >
          <p className="text-slate-300 italic mb-6">
            "Working with Zaid was a breeze. He understood our vision for a
            startup app and brought it to life with great skill. The final
            product exceeded our expectations."
          </p>
          <div>
            <p className="font-bold text-white">Fatima Jilani</p>
            <p className="text-sm text-teal-500">Founder, LocalCart</p>
          </div>
        </AnimatedSection>
        <AnimatedSection
          delay={400}
          customClassName="bg-slate-800 p-8 rounded-lg shadow-lg"
        >
          <p className="text-slate-300 italic mb-6">
            "Professional, reliable, and technically proficient. Zaid provided
            excellent support throughout the development process of our
            business's internal tool."
          </p>
          <div>
            <p className="font-bold text-white">Usman Butt</p>
            <p className="text-sm text-teal-500">Manager, Chenab Fabrics</p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

// --- UPDATED Contact Component ---
const Contact = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // State for submission status
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formspreeEndpoint = "https://formspree.io/f/xvgwlvkp";

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <AnimatedSection customClassName="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">
            Let’s Build Something Great!
          </h2>
          <p className="text-slate-400 mt-2">
            Have a project in mind? Fill out the form below to get a free quote.
          </p>
        </AnimatedSection>
        <AnimatedSection customClassName="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Tell us about your project..."
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              ></textarea>
            </div>

            {/* Submission Status Messages */}
            {status === "success" && (
              <p className="text-center text-green-400">
                Thanks for your message! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-red-400">
                Something went wrong. Please try again.
              </p>
            )}

            <div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-teal-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-teal-600 transition duration-300 transform hover:scale-105 disabled:bg-slate-600 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 border-t border-slate-800">
    <div className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            CodeInn’ <span className="text-teal-500">Tech</span>
          </h3>
          <p className="text-slate-400">
            Empowering businesses with modern digital solutions.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Info
          </h3>
          <ul className="space-y-2 text-slate-400">
            <li>
              <a
                href="mailto:muhammadzaidtahir90@gmail.com"
                className="hover:text-teal-500"
              >
                codeinntech.studio@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+923114680774" className="hover:text-teal-500">
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
              className="text-slate-400 hover:text-teal-500 transition duration-300"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://x.com/CodeInnTech"
              className="text-slate-400 hover:text-teal-500 transition duration-300"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/codeinn-tech-81b54838b/"
              className="text-slate-400 hover:text-teal-500 transition duration-300"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-slate-500 mt-12 border-t border-slate-800 pt-8">
        <p>Copyright © 2025 CodeInn’ Tech. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <>
      <style jsx global>{`
        body {
          font-family: "Inter", sans-serif;
          background-color: #0f172a;
          color: #e2e8f0;
        }
        .hero-bg {
          background-image: radial-gradient(
              circle at top right,
              rgba(20, 184, 166, 0.1),
              transparent 40%
            ),
            radial-gradient(
              circle at bottom left,
              rgba(20, 184, 166, 0.1),
              transparent 40%
            );
        }
      `}</style>
      <div className="antialiased">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
