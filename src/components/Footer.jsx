import { useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";
import { goldAccent, InstagramIcon, TwitterIcon, LinkedinIcon, ArrowUpIcon } from "./Icons";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-neutral-800">
      {/* Wave SVG divider */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full overflow-hidden leading-[0]" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[60px] block"
        >
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
            fill="#0A0A0A"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              CodeInn&apos; <span style={{ color: goldAccent }}>Tech</span>
            </h3>
            <p className="text-neutral-400">Digital Craftsmanship, Delivered.</p>
            <p className="text-neutral-400">
              Empowering businesses with modern digital solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a
                  href="mailto:codeinntech.studio@gmail.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  codeinntech.studio@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+923114680774" className="hover:text-white transition-colors duration-300">
                  03114680774
                </a>
              </li>
              <li>Gujranwala, Pakistan</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4 mb-6">
              {[
                { href: "https://www.instagram.com/codeinn_tech/", icon: <InstagramIcon />, label: "Instagram" },
                { href: "https://x.com/CodeInnTech", icon: <TwitterIcon />, label: "Twitter" },
                { href: "https://www.linkedin.com/in/codeinn-tech-81b54838b/", icon: <LinkedinIcon />, label: "LinkedIn" },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:scale-125 transition-all duration-300 focus-visible:outline focus-visible:outline-2 rounded"
                  style={{ outlineColor: goldAccent }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = goldAccent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Newsletter signup */}
            <div>
              <p className="text-neutral-400 text-sm mb-2">Stay updated:</p>
              {subscribed ? (
                <p className="text-sm font-semibold" style={{ color: goldAccent }}>
                  ✓ Thanks for subscribing!
                </p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    aria-label="Newsletter email"
                    className="flex-1 bg-neutral-900 border border-neutral-700 rounded-md px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#C0A062] transition-colors min-w-0"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 rounded-md text-sm font-semibold text-black transition-all duration-300 hover:brightness-110 flex-shrink-0 min-h-[44px]"
                    style={{ backgroundColor: goldAccent }}
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="text-center text-neutral-500 border-t border-neutral-800 pt-8">
          <p>Copyright © 2025 CodeInn&apos; Tech. All Rights Reserved.</p>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 w-11 h-11 rounded-full flex items-center justify-center text-black shadow-lg transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 z-40 ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{ backgroundColor: goldAccent, outlineColor: goldAccent }}
        aria-label="Back to top"
      >
        <ArrowUpIcon />
      </button>
    </footer>
  );
};

export default Footer;
