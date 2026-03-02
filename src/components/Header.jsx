import { useState, useEffect } from "react";
import { goldAccent } from "./Icons";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Work" },
  { href: "#team", label: "Team" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["about", "services", "portfolio", "team", "contact"];
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
      );
      observer.observe(el);
      observers.push({ observer, el });
    });

    return () => observers.forEach(({ observer, el }) => observer.unobserve(el));
  }, []);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-xl py-0 shadow-lg shadow-black/50"
          : "bg-black/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white">
          CodeInn&apos; <span style={{ color: goldAccent }}>Tech</span>
        </a>

        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`transition duration-300 relative pb-1 ${
                  isActive ? "text-white" : "text-neutral-300 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 h-0.5 rounded transition-all duration-300"
                  style={{
                    backgroundColor: goldAccent,
                    width: isActive ? "100%" : "0%",
                  }}
                />
              </a>
            );
          })}
          <a
            href="#contact"
            className="text-black font-semibold px-4 py-2 rounded-md hover:brightness-110 transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ backgroundColor: goldAccent, outlineColor: goldAccent }}
          >
            Get a Quote
          </a>
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white w-11 h-11 flex items-center justify-center rounded-md focus-visible:outline focus-visible:outline-2"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          style={{ outlineColor: goldAccent }}
        >
          <div className="relative w-6 h-5 flex flex-col justify-between">
            <span
              className={`block h-0.5 bg-white rounded transition-all duration-300 origin-center ${
                isMenuOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white rounded transition-all duration-300 ${
                isMenuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white rounded transition-all duration-300 origin-center ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-black/95 backdrop-blur-xl`}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={handleLinkClick}
            className="block py-3 px-6 text-neutral-300 hover:text-white hover:bg-neutral-900 transition duration-200"
            style={{
              transitionDelay: isMenuOpen ? `${i * 50}ms` : "0ms",
              transform: isMenuOpen ? "translateX(0)" : "translateX(-10px)",
              opacity: isMenuOpen ? 1 : 0,
              transition: `transform 300ms ease ${i * 50}ms, opacity 300ms ease ${i * 50}ms, background-color 200ms`,
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={handleLinkClick}
          className="block py-3 px-6 font-semibold transition duration-200 hover:brightness-110"
          style={{
            color: goldAccent,
            transitionDelay: isMenuOpen ? `${navLinks.length * 50}ms` : "0ms",
          }}
        >
          Get a Quote
        </a>
      </div>
    </header>
  );
};

export default Header;
