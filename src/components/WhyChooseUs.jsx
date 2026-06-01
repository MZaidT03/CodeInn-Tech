import AnimatedSection from "./AnimatedSection";
import { goldAccent } from "./Icons";

const reasons = [
  {
    title: "Local expertise with Pakistan-wide reach",
    description:
      "Based in Gujranwala, we understand local business needs and deliver software solutions for clients across Pakistan.",
  },
  {
    title: "Full-service software house",
    description:
      "From strategy and UI/UX design to development, QA, and launch, we handle every stage in-house.",
  },
  {
    title: "Performance and SEO-first builds",
    description:
      "We prioritize fast load times, clean code, and SEO best practices so your site ranks and converts.",
  },
  {
    title: "Transparent collaboration",
    description:
      "Clear timelines, frequent updates, and a dedicated team ensure your project stays on track.",
  },
];

const WhyChooseUs = () => (
  <section id="why-choose-us" className="py-20">
    <div className="container mx-auto px-6">
      <AnimatedSection customClassName="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Why Choose CodeInn Tech</h2>
        <p className="text-neutral-400 mt-2">
          A reliable software company in Gujranwala and software house in Pakistan focused on results, quality, and long-term partnerships.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reasons.map((reason, index) => (
          <AnimatedSection
            key={reason.title}
            delay={index * 120}
            customClassName="glass-card p-8 rounded-xl border border-neutral-800 hover:border-[#C0A062] transition-all duration-300"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4"
              style={{ backgroundColor: `${goldAccent}20`, color: goldAccent }}
            >
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{reason.title}</h3>
            <p className="text-neutral-400">{reason.description}</p>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection customClassName="text-center mt-12">
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-3 rounded-md text-black font-semibold transition duration-300 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ backgroundColor: goldAccent, outlineColor: goldAccent }}
        >
          Get Free Consultation
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default WhyChooseUs;
