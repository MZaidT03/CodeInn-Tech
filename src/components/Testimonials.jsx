import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { goldAccent, ChevronLeftIcon, ChevronRightIcon } from "./Icons";

const testimonials = [
  {
    quote:
      "CodeInn' Tech delivered a fantastic website for our restaurant. It's fast, looks great on mobile, and has boosted our online orders significantly. Highly recommended!",
    name: "Ali Hassan",
    role: "Owner, GRW Eatery",
  },
  {
    quote:
      "Working with CodeInn' was a breeze. They understood our vision for a startup app and brought it to life with great skill. The final product exceeded our expectations.",
    name: "Fatima Jilani",
    role: "Founder, LocalCart",
  },
  {
    quote:
      "Professional, reliable, and technically proficient. CodeInn' provided excellent support throughout the development process of our business's internal tool.",
    name: "Usman Butt",
    role: "Manager, Chenab Fabrics",
  },
];

const StarRating = () => (
  <div className="flex gap-1 mb-4" aria-label="5 star rating">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={goldAccent} aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const count = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + count) % count);
  const next = () => setCurrent((c) => (c + 1) % count);

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection customClassName="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">What Our Clients Say</h2>
          <p className="text-neutral-400 mt-2">
            Trusted by local businesses in Gujranwala.
          </p>
        </AnimatedSection>

        {/* Desktop: 3-column grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection
              key={t.name}
              delay={i * 200}
              customClassName="glass-card p-8 rounded-xl relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl"
                style={{ background: `linear-gradient(to right, ${goldAccent}, transparent)` }}
                aria-hidden="true"
              />
              <div
                className="absolute top-4 right-4 text-7xl font-serif leading-none select-none"
                style={{ color: `${goldAccent}20` }}
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <StarRating />
              <p className="text-neutral-300 italic mb-6 relative z-10">{t.quote}</p>
              <div>
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-sm" style={{ color: goldAccent }}>{t.role}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile / Tablet: Carousel */}
        <AnimatedSection customClassName="lg:hidden">
          <div className="relative max-w-xl mx-auto">
            <div className="glass-card p-8 rounded-xl relative overflow-hidden">
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl"
                style={{ background: `linear-gradient(to right, ${goldAccent}, transparent)` }}
                aria-hidden="true"
              />
              <div
                className="absolute top-4 right-4 text-7xl font-serif leading-none select-none"
                style={{ color: `${goldAccent}20` }}
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <StarRating />
              <p className="text-neutral-300 italic mb-6 relative z-10 transition-all duration-300">
                {testimonials[current].quote}
              </p>
              <div>
                <p className="font-bold text-white">{testimonials[current].name}</p>
                <p className="text-sm" style={{ color: goldAccent }}>{testimonials[current].role}</p>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="flex items-center justify-center gap-6 mt-6">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border flex items-center justify-center text-neutral-400 hover:text-white hover:border-[#C0A062] transition-all duration-300 focus-visible:outline focus-visible:outline-2"
                aria-label="Previous testimonial"
                style={{ borderColor: "#404040", outlineColor: goldAccent }}
              >
                <ChevronLeftIcon />
              </button>

              {/* Dots */}
              <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    role="tab"
                    aria-selected={i === current}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === current ? "24px" : "8px",
                      height: "8px",
                      backgroundColor: i === current ? goldAccent : "#404040",
                    }}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-11 h-11 rounded-full border flex items-center justify-center text-neutral-400 hover:text-white hover:border-[#C0A062] transition-all duration-300 focus-visible:outline focus-visible:outline-2"
                aria-label="Next testimonial"
                style={{ borderColor: "#404040", outlineColor: goldAccent }}
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;
