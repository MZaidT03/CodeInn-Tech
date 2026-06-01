import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { goldAccent, CheckIcon } from "./Icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleBlur = (e) =>
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));

  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const fieldValid = {
    name: formData.name.trim().length >= 2,
    email: isValidEmail(formData.email),
    phone: !formData.phone || formData.phone.replace(/\D/g, "").length >= 7,
    message: formData.message.trim().length >= 10,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("https://formspree.io/f/xvgwlvkp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTouched({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const FieldIndicator = ({ fieldName, optional = false }) => {
    if (!touched[fieldName]) return null;
    if (optional && !formData[fieldName]) return null;
    return fieldValid[fieldName] ? (
      <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <polyline points="20 6 9 17 4 12" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ) : (
      <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  };

  const inputClass = (fieldName) =>
    `w-full bg-transparent border-b-2 pt-5 pb-2 px-0 text-white focus:outline-none transition-all duration-300 peer placeholder-transparent ${
      touched[fieldName] && !fieldValid[fieldName]
        ? "border-red-500"
        : "border-neutral-700 focus:border-[#C0A062]"
    }`;

  if (status === "success") {
    return (
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection customClassName="max-w-2xl mx-auto text-center">
            <div className="glass-card p-12 rounded-xl">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full flex items-center justify-center success-check-anim" style={{ backgroundColor: `${goldAccent}20`, border: `2px solid ${goldAccent}` }}>
                  <CheckIcon />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Message Sent!</h2>
              <p className="text-neutral-400 mb-6">Thanks! We&apos;ll get back to you soon.</p>
              <button
                onClick={() => setStatus("")}
                className="text-sm font-semibold hover:underline"
                style={{ color: goldAccent }}
              >
                Send another message →
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection customClassName="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">
            Let&apos;s Build Something Great with CodeInn Tech
          </h2>
          <p className="text-neutral-400 mt-2">
            Tell us about your idea. We&apos;re a software house in Gujranwala serving clients across Pakistan.
          </p>
        </AnimatedSection>

        <AnimatedSection customClassName="max-w-5xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-8">
          <div className="glass-card p-8 rounded-xl flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Contact Details</h3>
              <p className="text-neutral-400">
                Reach out for a free consultation or to request a project estimate.
              </p>
            </div>
            <div className="space-y-4 text-neutral-300">
              <div>
                <p className="text-sm uppercase tracking-widest text-neutral-500">Email</p>
                <a
                  href="mailto:codeinntech.studio@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  codeinntech.studio@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-neutral-500">Phone / WhatsApp</p>
                <a href="tel:+923114680774" className="hover:text-white transition-colors">
                  +92 311 4680774
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-neutral-500">Location</p>
                <address className="not-italic text-neutral-300">
                  Gujranwala, Punjab, Pakistan
                </address>
              </div>
            </div>
            <div className="mt-auto">
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-5 py-2 rounded-md text-black font-semibold transition duration-300 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ backgroundColor: goldAccent, outlineColor: goldAccent }}
              >
                View Portfolio
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="glass-card p-8 rounded-xl space-y-8"
            noValidate
          >
            {/* Name field with floating label */}
            <div className="relative">
              <label
                htmlFor="name"
                className="absolute left-0 top-4 text-neutral-400 text-sm transition-all duration-300 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
                style={{ color: touched.name && formData.name ? goldAccent : undefined }}
              >
                Your Name *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder=" "
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputClass("name")}
              />
              <div
                className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                style={{
                  width: touched.name && formData.name ? "100%" : "0%",
                  backgroundColor: goldAccent,
                  transform: "scaleX(1)",
                  transformOrigin: "center",
                }}
                aria-hidden="true"
              />
              <FieldIndicator fieldName="name" />
            </div>

            {/* Email field */}
            <div className="relative">
              <label
                htmlFor="email"
                className="absolute left-0 top-4 text-neutral-400 text-sm transition-all duration-300 pointer-events-none peer-focus:-top-2 peer-focus:text-xs peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
                style={{ color: touched.email && formData.email ? goldAccent : undefined }}
              >
                Your Email *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder=" "
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputClass("email")}
              />
              <div
                className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                style={{
                  width: touched.email && formData.email ? "100%" : "0%",
                  backgroundColor: goldAccent,
                  transformOrigin: "center",
                }}
                aria-hidden="true"
              />
              <FieldIndicator fieldName="email" />
            </div>

            {/* Phone field */}
            <div className="relative">
              <label
                htmlFor="phone"
                className="absolute left-0 top-4 text-neutral-400 text-sm transition-all duration-300 pointer-events-none peer-focus:-top-2 peer-focus:text-xs peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
                style={{ color: touched.phone && formData.phone ? goldAccent : undefined }}
              >
                Your Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder=" "
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputClass("phone")}
              />
              <div
                className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                style={{
                  width: touched.phone && formData.phone ? "100%" : "0%",
                  backgroundColor: goldAccent,
                  transformOrigin: "center",
                }}
                aria-hidden="true"
              />
              <FieldIndicator fieldName="phone" optional />
            </div>

            {/* Message field */}
            <div className="relative">
              <label
                htmlFor="message"
                className="absolute left-0 top-4 text-neutral-400 text-sm transition-all duration-300 pointer-events-none peer-focus:-top-2 peer-focus:text-xs peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
                style={{ color: touched.message && formData.message ? goldAccent : undefined }}
              >
                Tell us about your project... *
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder=" "
                required
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full bg-transparent border-b-2 pt-5 pb-2 px-0 text-white focus:outline-none transition-all duration-300 peer placeholder-transparent resize-none ${
                  touched.message && !fieldValid.message
                    ? "border-red-500"
                    : "border-neutral-700 focus:border-[#C0A062]"
                }`}
              />
              <div
                className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                style={{
                  width: touched.message && formData.message ? "100%" : "0%",
                  backgroundColor: goldAccent,
                  transformOrigin: "center",
                }}
                aria-hidden="true"
              />
            </div>

            {status === "error" && (
              <p className="text-center text-red-400 text-sm" role="status">
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full text-black font-bold px-8 py-3 rounded-md hover:brightness-110 transition duration-300 transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 min-h-[44px]"
              style={{ backgroundColor: goldAccent, outlineColor: goldAccent }}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
