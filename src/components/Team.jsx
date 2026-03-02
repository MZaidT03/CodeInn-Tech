import AnimatedSection from "./AnimatedSection";
import { goldAccent, InstagramIcon, TwitterIcon, LinkedinIcon } from "./Icons";

const teamMembers = [
  {
    id: 1,
    name: "Muhammad Zaid Tahir",
    role: "Founder & Lead Developer",
    imageUrl: `https://placehold.co/400x400/000000/${goldAccent.substring(1)}?text=MZT`,
    bio: "Zaid leads CodeInn' Tech with a passion for turning complex problems into elegant, user-friendly digital solutions using React and React Native.",
    socials: [
      { name: "Instagram", href: "https://www.instagram.com/_zaid.t_/", icon: <InstagramIcon /> },
      { name: "Twitter", href: "https://x.com/_MZaidTahir_", icon: <TwitterIcon /> },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/zaid-tahir-0b0933159/", icon: <LinkedinIcon /> },
    ],
    portfolio: "https://mzaidtahir.netlify.app/",
  },
  {
    id: 2,
    name: "Danish Imran",
    role: ".NET Core & Backend Engineer",
    imageUrl: `https://placehold.co/400x400/000000/${goldAccent.substring(1)}?text=DI`,
    bio: "Danish is a core member of CodeInn' Tech, passionate about building scalable backend systems with .NET Core and ASP.NET MVC, using modern tools like Docker, Git, and SQL to deliver robust digital solutions.",
    socials: [
      { name: "Twitter", href: "https://x.com/_xteve", icon: <TwitterIcon /> },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/danish-imran-380220310/", icon: <LinkedinIcon /> },
    ],
    portfolio: "https://danishimran.netlify.app/",
  },
  {
    id: 3,
    name: "Ammad Mehmood",
    role: "Full Stack Developer",
    imageUrl: `https://placehold.co/400x400/000000/${goldAccent.substring(1)}?text=AM`,
    bio: "Ammad Mehmood is a Full Stack Developer specializing in React, with expertise in AI and Automation to build smart and efficient web solutions.",
    socials: [
      { name: "Twitter", href: "#", icon: <TwitterIcon /> },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/ammad-mahmood-a8322a254/", icon: <LinkedinIcon /> },
    ],
    portfolio: "https://portfolio-ammad.netlify.app/",
  },
];

const Team = () => (
  <section id="team" className="py-20 bg-[#0A0A0A]">
    <div className="container mx-auto px-6">
      <AnimatedSection customClassName="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Meet Our Team</h2>
        <p className="text-neutral-400 mt-2">
          The passionate individuals driving our success.
        </p>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {teamMembers.map((member, index) => (
          <AnimatedSection
            key={member.id}
            delay={index * 150}
            customClassName="relative glass-card rounded-xl text-center w-full max-w-sm overflow-hidden hover:-translate-y-2 transition-all duration-300 group"
          >
            {/* Shine sweep effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none team-card-shine" aria-hidden="true" />

            <div className="p-8 flex flex-col h-full">
              {/* Profile image with hover gradient overlay */}
              <div className="relative w-32 h-32 mx-auto mb-6 flex-shrink-0">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover"
                  style={{ border: `4px solid ${goldAccent}` }}
                />
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${goldAccent}40, transparent)` }}
                  aria-hidden="true"
                />
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
              <p className="font-semibold mb-4" style={{ color: goldAccent }}>{member.role}</p>
              <p className="text-neutral-400 mb-6 text-sm flex-1">{member.bio}</p>

              {/* Social icons - reveal on hover with scale + color */}
              <div className="flex justify-center space-x-4 mb-6">
                {member.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={`${member.name} on ${social.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:scale-125 transition-all duration-300 focus-visible:outline focus-visible:outline-2 rounded"
                    style={{ "--hover-color": goldAccent, outlineColor: goldAccent }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = goldAccent)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <a
                href={member.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold hover:underline transition duration-300 focus-visible:outline focus-visible:outline-2 rounded"
                style={{ color: goldAccent, outlineColor: goldAccent }}
              >
                Portfolio →
              </a>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
