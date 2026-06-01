import AnimatedSection from "./AnimatedSection";
import { goldAccent } from "./Icons";

const posts = [
  "How Much Does a Website Cost in Pakistan?",
  "Why Your Business Needs a Professional Website",
  "Mobile App Development for Small Businesses in Pakistan",
  "How SEO Helps Local Businesses Grow",
  "React Native vs Flutter for Mobile App Development",
];

const BlogPreview = () => (
  <section id="blog" className="py-20 bg-[#0A0A0A]">
    <div className="container mx-auto px-6">
      <AnimatedSection customClassName="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Insights & Resources</h2>
        <p className="text-neutral-400 mt-2">
          SEO-focused articles to help businesses in Pakistan grow online. (Blog launching soon.)
        </p>
      </AnimatedSection>

      <div className="max-w-3xl mx-auto space-y-4">
        {posts.map((title, index) => (
          <AnimatedSection
            key={title}
            delay={index * 100}
            customClassName="glass-card rounded-xl p-5 border border-neutral-800 flex items-center justify-between gap-4"
          >
            <span className="text-white font-semibold">{title}</span>
            <span className="text-sm font-semibold" style={{ color: goldAccent }}>
              Coming Soon
            </span>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection customClassName="text-center mt-10">
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-3 rounded-md text-black font-semibold transition duration-300 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ backgroundColor: goldAccent, outlineColor: goldAccent }}
        >
          Subscribe for Updates
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default BlogPreview;
