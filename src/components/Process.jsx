import AnimatedSection from "./AnimatedSection";
import { goldAccent } from "./Icons";

const steps = [
  {
    title: "Discovery & Requirements",
    description:
      "We learn about your business, goals, and target audience to define the right digital strategy.",
  },
  {
    title: "UI/UX Planning",
    description:
      "Our designers craft clean, modern interfaces and user flows optimized for conversion.",
  },
  {
    title: "Development & QA",
    description:
      "We build scalable, secure software and rigorously test it for performance and reliability.",
  },
  {
    title: "Launch & Support",
    description:
      "After launch, we provide monitoring, updates, and continuous improvements as you grow.",
  },
];

const Process = () => (
  <section id="process" className="py-20 bg-[#0A0A0A]">
    <div className="container mx-auto px-6">
      <AnimatedSection customClassName="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Our Process</h2>
        <p className="text-neutral-400 mt-2">
          A transparent, step-by-step approach to deliver reliable software solutions.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <AnimatedSection
            key={step.title}
            delay={index * 120}
            customClassName="glass-card p-8 rounded-xl border border-neutral-800 hover:border-[#C0A062] transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0"
                style={{ backgroundColor: `${goldAccent}20`, color: goldAccent }}
              >
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-neutral-400">{step.description}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
