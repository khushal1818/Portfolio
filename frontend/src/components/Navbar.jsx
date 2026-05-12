import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050A14]/90 backdrop-blur-xl border-b border-[#C9A84C]/20 shadow-[0_8px_32px_rgba(201,168,76,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#C9A84C] to-[#E8D48E] flex items-center justify-center shadow-[0_0_20px_rgba(201,168,76,0.4)] group-hover:shadow-[0_0_30px_rgba(201,168,76,0.7)] transition-all duration-300">
              <Code2 size={18} className="text-[#050A14]" />
            </div>
            <span className="text-xl font-black tracking-tight">
              <span className="text-white">Khushal</span>
              {/* <span className="text-[#C9A84C]">.dev</span> */}
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setActive(link.label)}
                  className={`relative px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 rounded-lg group ${
                    active === link.label
                      ? "text-[#C9A84C]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#C9A84C] to-[#00D4FF] rounded-full transition-all duration-300 ${
                      active === link.label ? "w-6" : "w-0 group-hover:w-6"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C9A84C] to-[#E8D48E] text-[#050A14] text-sm font-bold tracking-wide hover:shadow-[0_0_25px_rgba(201,168,76,0.5)] hover:scale-105 transition-all duration-300"
          >
            Hire Me
          </a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2 rounded-lg border border-white/10 hover:border-[#C9A84C]/50 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#050A14]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 transition-all duration-500 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => {
              setActive(link.label);
              setMenuOpen(false);
            }}
            className="text-3xl font-black tracking-tight text-gray-400 hover:text-[#C9A84C] transition-all duration-300"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-4 px-8 py-3 rounded-xl bg-gradient-to-r from-[#C9A84C] to-[#E8D48E] text-[#050A14] text-lg font-bold"
        >
          Hire Me
        </a>
      </div>
    </>
  );
}
