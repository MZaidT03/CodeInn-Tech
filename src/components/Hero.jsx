import { useState, useEffect } from "react";
import { goldAccent, ChevronDownIcon } from "./Icons";
import AnimatedSection from "./AnimatedSection";

const taglines = [
  "Website Development",
  "Mobile App Development",
  "Custom Software",
  "UI/UX Design",
];

const Hero = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const target = taglines[currentTagline];
    let timeout;

    if (!isDeleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === target.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentTagline]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 hero-gradient" aria-hidden="true" />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-30" aria-hidden="true" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="floating-shape shape-1" />
        <div className="floating-shape shape-2" />
        <div className="floating-shape shape-3" />
        <div className="floating-shape shape-4" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center py-20">
        <AnimatedSection>
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border text-sm font-medium tracking-widest uppercase"
            style={{ borderColor: `${goldAccent}40`, color: goldAccent, backgroundColor: `${goldAccent}10` }}>
            Digital Craftsmanship
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            CodeInn Tech —{" "}
            <span className="gradient-text block md:inline">
              Software House in Gujranwala, Pakistan
            </span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="text-xl md:text-2xl font-semibold mb-6 h-8 flex items-center justify-center gap-2">
            <span className="text-neutral-400">We deliver </span>
            <span style={{ color: goldAccent }} className="min-w-[16ch] text-left">
              {displayed}
              <span className="typewriter-cursor" aria-hidden="true">|</span>
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
            We build modern websites, mobile apps, and custom software for businesses across Pakistan with a focus
            on performance, UX, and SEO.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#contact"
              className="text-black font-bold px-8 py-3 rounded-md hover:brightness-110 transition duration-300 transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ backgroundColor: goldAccent, outlineColor: goldAccent }}
            >
              Get Free Consultation
            </a>
            <a
              href="#services"
              className="border-2 font-bold px-8 py-3 rounded-md hover:bg-[#C0A062] hover:text-black transition duration-300 transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ borderColor: goldAccent, color: goldAccent, outlineColor: goldAccent }}
            >
              Explore Services
            </a>
          </div>
        </AnimatedSection>
      </div>

      {/* Scroll down indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-neutral-500 hover:text-neutral-300 transition-colors duration-300 bounce-anim"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDownIcon />
      </a>
    </section>
  );
};

export default Hero;
