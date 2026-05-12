import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";

import { Download, ArrowRight, Sparkles } from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const roles = [
  "Frontend Developer",
  "React.js Developer",
  "UI/UX Designer",
  "Creative Web Designer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const canvasRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          80,
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          40,
        );
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.6 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.alpha})`;
        ctx.fill();
      });

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0,212,255,${
              0.08 * (1 - dist / 120)
            })`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050A14] via-[#050A14]/95 to-[#0A1628]" />

      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#C9A84C]/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#00D4FF]/8 rounded-full blur-[120px]" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/5 backdrop-blur-sm">
            <Sparkles
              size={14}
              className="text-[#C9A84C] animate-pulse"
            />

            <span className="text-xs font-semibold tracking-widest text-[#C9A84C] uppercase">
              Available for hire
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <p className="text-gray-400 text-lg font-medium tracking-wide">
              Hello, I'm
            </p>

            <h1 className="text-5xl lg:text-7xl font-black leading-none tracking-tight">
              <span className="block text-white">Khushal</span>

              <span className="block bg-gradient-to-r from-[#C9A84C] via-[#E8D48E] to-[#C9A84C] bg-clip-text text-transparent bg-[length:200%] animate-[shimmer_3s_linear_infinite]">
                Bhaliya
              </span>
            </h1>

            <div className="flex items-center gap-3 pt-2">
              <div className="h-0.5 w-8 bg-gradient-to-r from-[#C9A84C] to-transparent" />

              <p className="text-xl font-bold text-[#00D4FF] min-h-[1.75rem]">
                {displayed}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
            Passionate frontend developer focused on creating modern,
            responsive, and high-performance websites using React.js,
            Tailwind CSS, and JavaScript.
          </p>

          {/* Stats */}
          <div className="flex gap-8">
            {[
              ["5+", "Projects"],
              ["1+", "Years Exp."],
              ["8+", "Clients"],
            ].map(([num, label]) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-black text-[#C9A84C]">
                  {num}
                </p>

                <p className="text-xs text-gray-500 font-medium tracking-wide">
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#C9A84C] to-[#E8D48E] text-[#050A14] font-bold text-sm tracking-wide hover:shadow-[0_0_40px_rgba(201,168,76,0.5)] hover:scale-105 transition-all duration-300"
            >
              View Work

              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <a
              href="/resume.pdf"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white font-bold text-sm tracking-wide hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/5 transition-all duration-300 backdrop-blur-sm"
            >
              <Download
                size={16}
                className="group-hover:-translate-y-0.5 transition-transform"
              />

              Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://github.com/khushal1818"
              className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#C9A84C] hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/5 transition-all duration-300"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/khushal-bhaliya-506107308?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00D4FF] hover:border-[#00D4FF]/50 hover:bg-[#00D4FF]/5 transition-all duration-300"
            >
              <FaLinkedin size={18} />
            </a>

            {/* <a
              href="#"
              className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-pink-400 hover:border-pink-400/50 hover:bg-pink-400/5 transition-all duration-300"
            >
              <FaInstagram size={18} />
            </a> */}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Rotating Rings */}
            <div
              className="absolute inset-0 rounded-full border border-[#C9A84C]/20 animate-[spin_20s_linear_infinite]"
              style={{ margin: "-20px" }}
            />

            <div
              className="absolute inset-0 rounded-full border border-dashed border-[#00D4FF]/15 animate-[spin_15s_linear_infinite_reverse]"
              style={{ margin: "-40px" }}
            />

            {/* Glow */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/20 to-[#00D4FF]/10 rounded-full blur-3xl"
              style={{ margin: "-30px" }}
            />

            {/* Avatar */}
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#C9A84C]/40 shadow-[0_0_60px_rgba(201,168,76,0.3)]">
              <img
                src={logo}
                alt="Khushal"
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050A14]/40 via-transparent to-transparent" />
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-[#0A1628] border border-[#C9A84C]/30 shadow-xl backdrop-blur-sm animate-[float_3s_ease-in-out_infinite]">
              <p className="text-xs font-bold text-[#C9A84C]">
                ⚡ React Expert
              </p>
            </div>

            <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-[#0A1628] border border-[#00D4FF]/30 shadow-xl backdrop-blur-sm animate-[float_3s_ease-in-out_infinite_1.5s]">
              <p className="text-xs font-bold text-[#00D4FF]">
                🎨 UI/UX Pro
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <p className="text-xs text-gray-600 tracking-widest uppercase">
          Scroll
        </p>

        <div className="w-px h-12 bg-gradient-to-b from-[#C9A84C]/50 to-transparent" />
      </div>

      <style>{`
        @keyframes shimmer {
          0%,100% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
        }

        @keyframes float {
          0%,100% { transform: translateY(0) }
          50% { transform: translateY(-10px) }
        }
      `}</style>
    </section>
  );
}