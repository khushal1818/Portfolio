import { useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  Award,
  Code2,
  BookOpen,
  Briefcase,
} from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    period: "2022 - 2025",
    title: "Bachelor of Computer Applications (BCA)",
    institution: "Saurashtra University",
    location: "Rajkot, Gujarat",
    color: "#C9A84C",
    badge: "Completed",
    highlights: [
      "Web Development",
      "Programming",
      "Database Management",
      "Software Engineering",
    ],
  },

  {
    icon: Code2,
    period: "2024 - Present",
    title: "Frontend & Full Stack Development",
    institution: "Self Learning & Real Projects",
    location: "Online Learning",
    color: "#00D4FF",
    badge: "Active",
    highlights: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
    ],
  },

  {
    icon: Briefcase,
    period: "2024",
    title: "E-Commerce Projects",
    institution: "Personal Development Projects",
    location: "Portfolio Work",
    color: "#FF6B9D",
    badge: "Projects",
    highlights: [
      "PHP & MySQL",
      "Django & SQLite",
      "Responsive Design",
      "UI/UX",
    ],
  },

  {
    icon: Award,
    period: "2023 - 2025",
    title: "Skills & Certifications",
    institution: "Development Journey",
    location: "Continuous Learning",
    color: "#7C4DFF",
    badge: "Learning",
    highlights: [
      "JavaScript",
      "React.js",
      "Python",
      "Git & GitHub",
    ],
  },
];

export default function Education() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) obs.observe(ref.current);

    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={ref}
      className="relative py-32 overflow-hidden bg-[#050A14]"
    >
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C9A84C]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00D4FF]/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[#C9A84C] text-sm font-bold tracking-[0.3em] uppercase mb-3">
            My Journey
          </p>

          <h2 className="text-4xl lg:text-6xl font-black text-white">
            Education &{" "}
            <span className="bg-gradient-to-r from-[#C9A84C] to-[#E8D48E] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent rounded-full" />

          <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
            My academic background, development journey, and practical
            experience in building modern web applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A84C]/40 via-[#00D4FF]/20 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {education.map((item, i) => {
              const Icon = item.icon;
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={item.title}
                  className={`relative grid lg:grid-cols-2 gap-8 items-center transition-all duration-700 ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {/* Center Dot */}
                  <div
                    className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full items-center justify-center"
                    style={{
                      background: `${item.color}15`,
                      border: `2px solid ${item.color}40`,
                      boxShadow: `0 0 25px ${item.color}40`,
                    }}
                  >
                    <Icon size={24} style={{ color: item.color }} />
                  </div>

                  {/* Card */}
                  <div
                    className={`${
                      isLeft ? "lg:col-start-1" : "lg:col-start-2"
                    }`}
                  >
                    <div
                      className="group relative p-7 rounded-3xl bg-[#0A1628]/80 border backdrop-blur-sm hover:scale-[1.02] transition-all duration-500 overflow-hidden"
                      style={{
                        borderColor: `${item.color}25`,
                      }}
                    >
                      {/* Glow */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at top left, ${item.color}10, transparent 70%)`,
                        }}
                      />

                      {/* Header */}
                      <div className="flex items-start gap-4 mb-5 relative z-10">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center"
                          style={{
                            background: `${item.color}15`,
                          }}
                        >
                          <Icon
                            size={26}
                            style={{
                              color: item.color,
                            }}
                          />
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span
                              className="text-xs font-bold px-3 py-1 rounded-full"
                              style={{
                                background: `${item.color}15`,
                                color: item.color,
                              }}
                            >
                              {item.period}
                            </span>

                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-gray-400">
                              {item.badge}
                            </span>
                          </div>

                          <h3 className="text-xl font-black text-white leading-tight">
                            {item.title}
                          </h3>

                          <p className="text-sm text-gray-400 mt-1">
                            {item.institution}
                          </p>

                          <p className="text-xs text-gray-600 mt-1">
                            {item.location}
                          </p>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 relative z-10">
                        {item.highlights.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 text-gray-400 border border-white/5 hover:border-white/10 hover:text-white transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty Side */}
                  {!isLeft && (
                    <div className="hidden lg:block lg:col-start-1" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}