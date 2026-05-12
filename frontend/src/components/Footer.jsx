import { Code2, Heart, ArrowUp } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const footerLinks = {
  Navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],

  Services: [
    { label: "Frontend Dev", href: "#" },
    { label: "UI/UX Design", href: "#" },
    { label: "React Development", href: "#" },
    { label: "Backend APIs", href: "#" },
    { label: "Portfolio Design", href: "#" },
  ],
};

export default function Footer() {
  const scrollTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050A14] to-[#020710]" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />

      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#C9A84C]/5 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#00D4FF]/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* BRAND */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 w-fit group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#C9A84C] to-[#E8D48E] flex items-center justify-center shadow-[0_0_25px_rgba(201,168,76,0.35)]">
                <Code2 size={20} className="text-[#050A14]" />
              </div>

              <h2 className="text-2xl font-black tracking-tight">
                <span className="text-white">Khushal</span>
                <span className="text-[#C9A84C]"> Bhaliya</span>
              </h2>
            </a>

            <p className="mt-5 text-gray-400 leading-relaxed max-w-md text-sm">
              Passionate Full Stack Developer focused on building modern,
              responsive, and high-performance web applications with beautiful
              user experiences.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://github.com/khushal1818"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl border border-white/10 bg-[#0A1628]/80 flex items-center justify-center text-gray-400 hover:text-[#C9A84C] hover:border-[#C9A84C]/40 hover:scale-110 transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/khushal-bhaliya-506107308?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl border border-white/10 bg-[#0A1628]/80 flex items-center justify-center text-gray-400 hover:text-[#00D4FF] hover:border-[#00D4FF]/40 hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
            </div>

            {/* STATUS */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A8FF78]/10 border border-[#A8FF78]/20 mt-6">
              <span className="w-2 h-2 rounded-full bg-[#A8FF78] animate-pulse" />

              <span className="text-xs font-semibold text-[#A8FF78]">
                Available For Internship & Job Opportunities
              </span>
            </div>
          </div>

          {/* LINKS */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-bold text-lg mb-5">{title}</h3>

              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-500 hover:text-[#C9A84C] transition-all duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-[#C9A84C] transition-all duration-300" />

                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* BOTTOM */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 flex items-center gap-1">
            © {new Date().getFullYear()} Khushal Bhaliya • Made with
            <Heart
              size={14}
              className="text-red-500 fill-red-500 animate-pulse"
            />
            using React & Tailwind CSS
          </p>

          <button
            onClick={scrollTop}
            className="w-10 h-10 rounded-xl border border-white/10 bg-[#0A1628]/80 flex items-center justify-center text-gray-400 hover:text-[#C9A84C] hover:border-[#C9A84C]/40 hover:scale-110 transition-all duration-300"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
