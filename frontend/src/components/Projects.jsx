import { useEffect, useRef, useState } from "react";
import { ExternalLink, Star, GitFork } from "lucide-react";

import acImage from "../assets/ac.jpeg";
import tvImage from "../assets/tv.jpeg";
import { FaGithub } from "react-icons/fa";

const categories = ["All"];

const projects = [
  {
    title: "Online Air Conditioner Shopping System",
    description:
      "An e-commerce web application built using PHP and MySQL where customers can explore and purchase air conditioners through a simple and user-friendly interface.",
    image: acImage,
    tags: ["PHP", "E-Commerce"],
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    color: "#C9A84C",
    stars: 45,
    forks: 12,
    github: "https://github.com/khushal1818/AirWell-AC-PHP",
    live: "#",
    featured: true,
  },

  {
    title: "Online Television Shopping System",
    description:
      "A modern television e-commerce platform developed with Django and SQLite that allows customers to browse, search, and purchase TV products online.",
    image: tvImage,
    tags: ["Django", "E-Commerce"],
    tech: ["Django", "SQLite", "Python", "Bootstrap"],
    color: "#00D4FF",
    stars: 38,
    forks: 10,
    github: "https://github.com/khushal1818/TeleMart-TV-Django",
    live: "#",
    featured: true,
  },
];

export default function Projects() {
  const ref = useRef(null);

  const [visible, setVisible] = useState(false);
  const [activeTag, setActiveTag] = useState("All");
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );

    if (ref.current) obs.observe(ref.current);

    return () => obs.disconnect();
  }, []);

  const filtered =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050A14] via-[#06111F] to-[#050A14]" />

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-[#C9A84C]/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[#C9A84C] text-sm font-bold tracking-[0.3em] uppercase mb-3">
            My Work
          </p>

          <h2 className="text-4xl lg:text-6xl font-black text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#C9A84C] to-[#E8D48E] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent rounded-full" />

          <p className="mt-5 text-gray-500 max-w-xl mx-auto">
            A showcase of projects that reflect my passion for building
            impactful, scalable, and beautiful applications.
          </p>
        </div>

        {/* Filter */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-200 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTag(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTag === cat
                  ? "bg-gradient-to-r from-[#C9A84C] to-[#E8D48E] text-[#050A14] shadow-[0_0_20px_rgba(201,168,76,0.4)]"
                  : "border border-white/10 text-gray-500 hover:text-white hover:border-white/30 bg-white/3"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl overflow-hidden border bg-[#0A1628]/80 backdrop-blur-sm transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } hover:scale-[1.03] hover:shadow-2xl`}
              style={{
                borderColor:
                  hovered === i
                    ? `${project.color}40`
                    : "rgba(255,255,255,0.06)",

                transitionDelay: `${i * 80}ms`,

                boxShadow:
                  hovered === i ? `0 20px 60px ${project.color}15` : undefined,
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* IMAGE */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Featured */}
                {project.featured && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold bg-[#C9A84C] text-[#050A14] z-10">
                    ⭐ Featured
                  </div>
                )}

                {/* Hover Links */}
                <div className="absolute inset-0 bg-[#050A14]/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-[#050A14] hover:scale-110 transition-all z-20 relative cursor-pointer"
                    style={{ background: project.color }}
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-black text-white group-hover:text-[#C9A84C] transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-3 text-gray-600 text-xs">
                    <span className="flex items-center gap-1">
                      <Star size={12} />
                      {project.stars}
                    </span>

                    <span className="flex items-center gap-1">
                      <GitFork size={12} />
                      {project.forks}
                    </span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md font-medium"
                      style={{
                        background: `${project.color}15`,
                        color: project.color,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
