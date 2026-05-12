import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Frontend Development",
    color: "#C9A84C",
    skills: [
      { name: "HTML5", level: 95, icon: "🌐" },
      { name: "CSS3", level: 92, icon: "🎨" },
      { name: "JavaScript", level: 90, icon: "⚡" },
      { name: "React.js", level: 88, icon: "⚛️" },
      { name: "Tailwind CSS", level: 94, icon: "💨" },
    ],
  },

  {
    title: "Backend Development",
    color: "#00D4FF",
    skills: [
      { name: "Node.js", level: 80, icon: "🟢" },
      { name: "Express.js", level: 76, icon: "🚀" },
      { name: "PHP", level: 85, icon: "🐘" },
      { name: "Python", level: 82, icon: "🐍" },
      { name: "Django", level: 74, icon: "🔥" },
    ],
  },

  {
    title: "Database & Tools",
    color: "#FF6B9D",
    skills: [
      { name: "MySQL", level: 86, icon: "🗄️" },
      { name: "MongoDB", level: 75, icon: "🍃" },
      { name: "SQLite", level: 80, icon: "💾" },
      { name: "Git & GitHub", level: 90, icon: "🐙" },
      { name: "VS Code", level: 95, icon: "💻" },
    ],
  },
];

const techBubbles = [
  "React.js",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "PHP",
  "Python",
  "Django",
  "MySQL",
  "MongoDB",
  "GitHub",
  "Vite",
];

function SkillBar({ name, level, color, icon, visible, delay }) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setAnimated(true), delay);
      return () => clearTimeout(timer);
    }
  }, [visible, delay]);

  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{icon}</span>

          <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-all duration-300">
            {name}
          </span>
        </div>

        <span
          className="text-sm font-bold"
          style={{ color: color }}
        >
          {level}%
        </span>
      </div>

      <div className="h-2 rounded-full bg-[#0F1E35] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out relative"
          style={{
            width: animated ? `${level}%` : "0%",
            background: `linear-gradient(90deg, ${color}80, ${color})`,
          }}
        >
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
            style={{
              background: color,
              boxShadow: `0 0 10px ${color}`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050A14] via-[#06111F] to-[#050A14]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#C9A84C]/5 rounded-full blur-[150px]" />

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
            My Expertise
          </p>

          <h2 className="text-4xl lg:text-6xl font-black text-white">
            Technical{" "}
            <span className="bg-gradient-to-r from-[#C9A84C] to-[#E8D48E] bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent rounded-full" />

          <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
            Technologies and tools I use to create modern,
            scalable, and high-performance web applications.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, ci) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-[#0A1628]/70 border backdrop-blur-sm hover:scale-[1.02] transition-all duration-500"
              style={{
                borderColor: `${category.color}20`,
                opacity: visible ? 1 : 0,
                transform: visible
                  ? "translateY(0px)"
                  : "translateY(40px)",
                transitionDelay: `${ci * 120}ms`,
              }}
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${category.color}15`,
                  }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      background: category.color,
                      boxShadow: `0 0 10px ${category.color}`,
                    }}
                  />
                </div>

                <div>
                  <h3 className="text-lg font-black text-white">
                    {category.title}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {category.skills.length} Skills
                  </p>
                </div>
              </div>

              {/* Skill Bars */}
              <div className="space-y-5">
                {category.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    color={category.color}
                    visible={visible}
                    delay={ci * 150 + si * 100}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Bubbles */}
        <div
          className={`transition-all duration-700 delay-500 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-center text-xs text-gray-600 tracking-[0.3em] uppercase font-bold mb-6">
            Additional Technologies
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {techBubbles.map((tech, i) => (
              <span
                key={tech}
                className="px-5 py-2 rounded-full text-sm font-semibold border border-white/10 bg-white/[0.03] text-gray-400 hover:text-[#C9A84C] hover:border-[#C9A84C]/40 hover:bg-[#C9A84C]/5 transition-all duration-300"
                style={{
                  transitionDelay: `${i * 40}ms`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}