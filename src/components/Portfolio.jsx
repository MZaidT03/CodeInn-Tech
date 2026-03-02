import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { goldAccent } from "./Icons";

const projects = [
  {
    name: "WheelDeals - Used Car Marketplace",
    description:
      "A comprehensive online marketplace for buying and selling used cars. Features advanced search filters, user profiles, and secure messaging. (Currently in development, not hosted).",
    tags: ["React", "Node.js", "Firebase", "Tailwind CSS"],
    category: "Web",
  },
  {
    name: "Construction Management Web App",
    description:
      "A complete web application for managing construction projects, tracking budgets, scheduling tasks, and coordinating teams, all built on a scalable Supabase backend.",
    tags: ["React", "Supabase", "JavaScript"],
    category: "Web",
  },
  {
    name: "SmartTask To-Do App",
    description:
      "A sleek and intuitive to-do list mobile app for iOS and Android. Powered by React Native, it features real-time data sync with Firebase for seamless collaboration.",
    tags: ["React Native", "Firebase", "Expo"],
    category: "Mobile",
  },
  {
    name: "AI-Powered Financial Forecaster",
    description:
      "A backend application using .NET Core and machine learning models to analyze market data, predict stock trends, and provide investment insights via a secure API.",
    tags: [".NET Core", "C#", "Python", "ML"],
    category: "Backend",
  },
  {
    name: "E-Commerce Logistics Dashboard",
    description:
      "A custom C# desktop application for a local business to manage inventory, track shipments, and visualize complex sales data in real-time.",
    tags: ["C#", "WPF", "SQL Server"],
    category: "Desktop",
  },
];

const filterCategories = ["All", "Web", "Mobile", "Backend", "Desktop"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <AnimatedSection customClassName="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Our Work</h2>
          <p className="text-neutral-400 mt-2">
            A selection of our featured projects.
          </p>
        </AnimatedSection>

        {/* Filter tabs */}
        <AnimatedSection customClassName="flex flex-wrap justify-center gap-2 mb-10">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={
                activeFilter === cat
                  ? { backgroundColor: goldAccent, color: "#000", borderColor: goldAccent, outlineColor: goldAccent }
                  : { backgroundColor: "transparent", color: "#a3a3a3", borderColor: "#404040", outlineColor: goldAccent }
              }
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {filtered.map((project, index) => (
            <AnimatedSection
              key={project.name}
              delay={index * 100}
              customClassName="group glass-card rounded-xl border border-neutral-800 hover:border-[#C0A062] transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 relative">
                {/* Gradient left-border accent on hover */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to bottom, ${goldAccent}, transparent)` }}
                  aria-hidden="true"
                />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ color: goldAccent }}
                    >
                      {project.name}
                    </h3>
                    <p className="text-neutral-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block text-sm font-semibold px-3 py-1 rounded-full transition-colors duration-300"
                          style={{ backgroundColor: `${goldAccent}15`, color: goldAccent, border: `1px solid ${goldAccent}30` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Hover overlay arrow */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 mt-1 flex-shrink-0">
                    <span
                      className="flex items-center justify-center w-10 h-10 rounded-full border-2 text-lg font-bold"
                      style={{ borderColor: goldAccent, color: goldAccent }}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
