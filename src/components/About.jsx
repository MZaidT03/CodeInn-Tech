import { useState, useEffect, useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import { goldAccent } from "./Icons";

const stats = [
  { value: 50, suffix: "+", label: "Projects" },
  { value: 30, suffix: "+", label: "Clients" },
  { value: 3, suffix: "+", label: "Years" },
  { value: 7, suffix: "", label: "Services" },
];

const useCountUp = (target, duration = 1500, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
};

const StatCounter = ({ value, suffix, label, animate }) => {
  const count = useCountUp(value, 1500, animate);
  return (
    <div className="text-center">
      <div className="text-3xl font-extrabold" style={{ color: goldAccent }}>
        {animate ? count : 0}{suffix}
      </div>
      <div className="text-neutral-400 text-sm mt-1">{label}</div>
    </div>
  );
};

const About = () => {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    const el = statsRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            {/* Decorative frame around image */}
            <div className="relative w-full max-w-sm mx-auto">
              {/* Offset gold border box */}
              <div
                className="absolute inset-0 rounded-lg translate-x-4 translate-y-4"
                style={{ border: `2px solid ${goldAccent}`, borderRadius: "12px" }}
                aria-hidden="true"
              />
              {/* Floating dots */}
              <div
                className="absolute -top-3 -left-3 w-6 h-6 rounded-full opacity-60 float-anim"
                style={{ backgroundColor: goldAccent }}
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-3 -right-3 w-4 h-4 rounded-full opacity-40 float-anim"
                style={{ backgroundColor: goldAccent, animationDelay: "1s" }}
                aria-hidden="true"
              />
              <div
                className="absolute top-1/2 -right-5 w-3 h-3 rounded-full opacity-30 float-anim"
                style={{ backgroundColor: goldAccent, animationDelay: "0.5s" }}
                aria-hidden="true"
              />
              <img
                src={`https://placehold.co/600x600/000000/${goldAccent.substring(1)}?text=MZT`}
                alt="Muhammad Zaid Tahir"
                className="relative rounded-lg shadow-2xl w-full"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
            <p className="text-lg text-neutral-300 mb-6">
              Hi, I&apos;m{" "}
              <span className="font-semibold" style={{ color: goldAccent }}>
                Muhammad Zaid Tahir
              </span>
              , the founder and lead developer at CodeInn&apos; Tech. Based in
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
              className="bg-[#121212] p-6 rounded-lg mb-8"
              style={{ borderLeft: `4px solid ${goldAccent}` }}
            >
              <p className="text-xl italic text-neutral-200">
                &ldquo;Our mission is to empower local and global businesses with modern
                digital solutions that drive growth and success.&rdquo;
              </p>
            </div>

            {/* Stats counter row */}
            <div
              ref={statsRef}
              className="grid grid-cols-4 gap-4 glass-card rounded-xl p-4"
            >
              {stats.map((stat) => (
                <StatCounter key={stat.label} {...stat} animate={statsVisible} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
