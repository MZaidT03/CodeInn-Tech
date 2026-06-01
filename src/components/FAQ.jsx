import AnimatedSection from "./AnimatedSection";
import { goldAccent } from "./Icons";

const faqs = [
  {
    question: "What services does CodeInn Tech offer?",
    answer:
      "We offer website development, mobile app development, UI/UX design, SEO services, e-commerce development, and custom software solutions.",
  },
  {
    question: "Do you work with clients outside Gujranwala?",
    answer:
      "Yes. We serve Pakistan-wide clients and collaborate remotely with clear timelines and weekly updates.",
  },
  {
    question: "Can you redesign or improve an existing website?",
    answer:
      "Absolutely. We modernize design, improve performance, add SEO, and optimize conversions for existing sites.",
  },
  {
    question: "What is the typical project timeline?",
    answer:
      "Most business websites take 2 to 6 weeks. Mobile apps and custom software vary based on scope and features.",
  },
  {
    question: "How do we start a project with CodeInn Tech?",
    answer:
      "Share your requirements through the contact form. We will schedule a free consultation and provide a proposal.",
  },
];

const FAQ = () => (
  <section id="faq" className="py-20">
    <div className="container mx-auto px-6">
      <AnimatedSection customClassName="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
        <p className="text-neutral-400 mt-2">
          Quick answers to help you plan your next software project.
        </p>
      </AnimatedSection>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <AnimatedSection
            key={faq.question}
            delay={index * 120}
            customClassName="glass-card rounded-xl p-6 border border-neutral-800"
          >
            <details className="group">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-white font-semibold">
                {faq.question}
                <span
                  className="text-lg transition-transform duration-300 group-open:rotate-45"
                  style={{ color: goldAccent }}
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="text-neutral-400 mt-3">{faq.answer}</p>
            </details>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;
