// import { useEffect, useRef, useState } from "react";
// import profile from "../assets/logo.png";
// import { MapPin, Mail, Phone, Calendar } from "lucide-react";

// import { FaGithub, FaLinkedinIn } from "react-icons/fa";
// const info = [
//   { icon: MapPin, label: "Location", value: "Ahmedabad, India" },
//   { icon: Mail, label: "Email", value: "khushal@gmail.com" },
//   { icon: Phone, label: "Phone", value: "+91 00000 00000" },
//   { icon: Calendar, label: "Freelance", value: "Available" },
// ];

// export default function About() {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => {
//         if (e.isIntersecting) setVisible(true);
//       },
//       { threshold: 0.2 },
//     );

//     if (ref.current) obs.observe(ref.current);

//     return () => obs.disconnect();
//   }, []);

//   return (
//     <section id="about" ref={ref} className="relative py-32 overflow-hidden">
//       {/* Background */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-[#C9A84C]/5 rounded-full blur-[100px]" />
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#00D4FF]/5 rounded-full blur-[100px]" />

//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <div
//           className={`text-center mb-20 transition-all duration-700 ${
//             visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <p className="text-[#C9A84C] text-sm font-bold tracking-[0.3em] uppercase mb-3">
//             Get To Know Me
//           </p>

//           <h2 className="text-4xl lg:text-6xl font-black text-white">
//             About{" "}
//             <span className="bg-gradient-to-r from-[#C9A84C] to-[#E8D48E] bg-clip-text text-transparent">
//               Me
//             </span>
//           </h2>

//           <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent rounded-full" />
//         </div>

//         <div className="grid lg:grid-cols-2 gap-16 items-start">
//           {/* LEFT SIDE */}
//           <div
//             className={`transition-all duration-700 delay-100 ${
//               visible
//                 ? "opacity-100 translate-x-0"
//                 : "opacity-0 -translate-x-16"
//             }`}
//           >
//             {/* Image Card */}
//             <div className="relative mb-10">
//               <div className="absolute -inset-1 bg-gradient-to-br from-[#C9A84C]/40 to-[#00D4FF]/20 rounded-2xl blur-sm" />

//               <div className="relative h-[420px] rounded-2xl bg-gradient-to-br from-[#0A1628] to-[#0F2040] border border-white/10 overflow-hidden">
//                 {/* Pattern */}
//                 <div
//                   className="absolute inset-0 opacity-5"
//                   style={{
//                     backgroundImage:
//                       "repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)",
//                     backgroundSize: "20px 20px",
//                   }}
//                 />

//                 {/* Image */}
//                 <div className="relative z-10 w-full h-full overflow-hidden rounded-2xl">
//                   <img
//                     src={profile}
//                     alt="Khushal"
//                     className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-500"
//                   />
//                 </div>

//                 {/* Corner Borders */}
//                 <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#C9A84C]/50 rounded-tl-lg" />
//                 <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#C9A84C]/50 rounded-tr-lg" />
//                 <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#C9A84C]/50 rounded-bl-lg" />
//                 <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#C9A84C]/50 rounded-br-lg" />
//               </div>
//             </div>

//             {/* Social Icons */}
//             <div className="flex gap-4 mt-6">
//               <a
//                 href="https://github.com/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="p-4 rounded-xl bg-[#0A1628] border border-gray-700 hover:border-yellow-500 transition"
//               >
//                 <FaGithub className="text-white text-2xl" />
//               </a>

//               <a
//                 href="https://linkedin.com/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="p-4 rounded-xl bg-[#0A1628] border border-gray-700 hover:border-cyan-400 transition"
//               >
//                 <FaLinkedinIn className="text-white text-2xl" />
//               </a>
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div
//             className={`space-y-8 transition-all duration-700 delay-200 ${
//               visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
//             }`}
//           >
//             <div className="space-y-5">
//               <h3 className="text-2xl font-black text-white leading-tight">
//                 I build digital experiences that{" "}
//                 <span className="text-[#C9A84C]">matter</span>
//               </h3>

//               <p className="text-gray-400 leading-relaxed text-base">
//                 Hi, I’m Khushal — a passionate and detail-oriented Full-Stack
//                 Developer with a strong foundation in Bachelor of Computer
//                 Applications (BCA). I specialize in creating modern, scalable,
//                 and user-friendly web applications.
//               </p>

//               <p className="text-gray-400 leading-relaxed text-base">
//                 Skilled in HTML, CSS, JavaScript, React.js, Node.js, and Python,
//                 I enjoy building seamless digital experiences that are visually
//                 appealing and performance-driven.
//               </p>

//               <p className="text-gray-400 leading-relaxed text-base">
//                 I’m always exploring new technologies, improving workflows, and
//                 staying updated with the latest trends in web development and
//                 UI/UX design.
//               </p>
//             </div>

//             {/* Info Grid */}
//             <div className="grid grid-cols-2 gap-4">
//               {info.map(({ icon: Icon, label, value }) => (
//                 <div
//                   key={label}
//                   className="flex items-start gap-3 p-4 rounded-xl bg-[#0A1628]/60 border border-white/5"
//                 >
//                   <div className="w-8 h-8 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
//                     <Icon size={15} className="text-[#C9A84C]" />
//                   </div>

//                   <div>
//                     <p className="text-xs text-gray-600 font-medium">{label}</p>

//                     <p
//                       className={`text-sm font-semibold mt-0.5 ${
//                         value === "Available"
//                           ? "text-[#A8FF78]"
//                           : "text-gray-300"
//                       }`}
//                     >
//                       {value}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* CTA */}
//             <a
//               href="#contact"
//               className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#C9A84C] to-[#E8D48E] text-[#050A14] font-bold text-sm hover:scale-105 transition-all duration-300"
//             >
//               Let's Work Together
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


//  import { useEffect, useRef, useState } from "react";
// import profile from "../assets/logo.png";
// import { MapPin, Mail, Phone, Calendar } from "lucide-react";

// import {
//   FaGithub,
//   FaLinkedinIn,
//   FaInstagram,
//   FaReact,
// } from "react-icons/fa";

// const info = [
//   { icon: MapPin, label: "Location", value: "Ahmedabad, Gujarat, India" },
//   { icon: Mail, label: "Email", value: "khushalbhaliya.dev@gmail.com" },
//   { icon: Phone, label: "Phone", value: "+91 98765 43210" },
//   { icon: Calendar, label: "Freelance", value: "Available for Work" },
// ];

// export default function About() {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => {
//         if (e.isIntersecting) setVisible(true);
//       },
//       { threshold: 0.2 },
//     );

//     if (ref.current) obs.observe(ref.current);

//     return () => obs.disconnect();
//   }, []);

//   return (
//     <section
//       id="about"
//       ref={ref}
//       className="relative py-32 overflow-hidden bg-[#050A14]"
//     >
//       {/* Background Effects */}
//       <div className="absolute top-0 left-0 w-80 h-80 bg-[#C9A84C]/10 rounded-full blur-[120px]" />
//       <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00D4FF]/10 rounded-full blur-[120px]" />

//       {/* Grid */}
//       <div
//         className="absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
//           backgroundSize: "60px 60px",
//         }}
//       />

//       <div className="relative max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <div
//           className={`text-center mb-20 transition-all duration-700 ${
//             visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <p className="text-[#C9A84C] text-sm font-bold tracking-[0.3em] uppercase mb-3">
//             Get To Know Me
//           </p>

//           <h2 className="text-4xl lg:text-6xl font-black text-white">
//             About{" "}
//             <span className="bg-gradient-to-r from-[#C9A84C] to-[#E8D48E] bg-clip-text text-transparent">
//               Me
//             </span>
//           </h2>

//           <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent rounded-full" />
//         </div>

//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* LEFT SIDE */}
//           <div
//             className={`transition-all duration-700 delay-100 ${
//               visible
//                 ? "opacity-100 translate-x-0"
//                 : "opacity-0 -translate-x-16"
//             }`}
//           >
//             {/* Profile Card */}
//             <div className="relative group">
//               {/* Glow */}
//               <div className="absolute -inset-2 bg-gradient-to-br from-[#C9A84C]/30 to-[#00D4FF]/20 rounded-[30px] blur-xl opacity-60 group-hover:opacity-100 transition duration-500" />

//               <div className="relative rounded-[30px] overflow-hidden border border-white/10 bg-[#0A1628]/80 backdrop-blur-xl">
//                 {/* Top Bar */}
//                 <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
//                   <div>
//                     <h3 className="text-lg font-bold text-white">
//                       Khushal Bhaliya
//                     </h3>
//                     <p className="text-xs text-[#C9A84C] mt-1">
//                       Full Stack Developer
//                     </p>
//                   </div>

//                   <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C9A84C] to-[#E8D48E] flex items-center justify-center shadow-[0_0_20px_rgba(201,168,76,0.4)]">
//                     <FaReact className="text-[#050A14] text-2xl animate-spin-slow" />
//                   </div>
//                 </div>

//                 {/* Image */}
//                 <div className="relative h-[450px] overflow-hidden">
//                   <img
//                     src={profile}
//                     alt="Khushal Bhaliya"
//                     className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700"
//                   />

//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-transparent to-transparent" />

//                   {/* Floating Badge */}
//                   <div className="absolute bottom-6 left-6 px-4 py-2 rounded-xl bg-[#0A1628]/90 border border-[#C9A84C]/30 backdrop-blur-md">
//                     <p className="text-sm font-bold text-[#C9A84C]">
//                       ⚡ React Developer
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Social Icons */}
//             <div className="flex gap-4 mt-8">
//               <a
//                 href="https://github.com/khushal1818"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="group w-14 h-14 rounded-2xl bg-[#0A1628] border border-white/10 flex items-center justify-center hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/10 transition-all duration-300 hover:scale-110"
//               >
//                 <FaGithub className="text-white text-2xl group-hover:text-[#C9A84C]" />
//               </a>

//               <a
//                 href="https://www.linkedin.com/in/khushal-bhaliya-506107308"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="group w-14 h-14 rounded-2xl bg-[#0A1628] border border-white/10 flex items-center justify-center hover:border-[#00D4FF]/50 hover:bg-[#00D4FF]/10 transition-all duration-300 hover:scale-110"
//               >
//                 <FaLinkedinIn className="text-white text-2xl group-hover:text-[#00D4FF]" />
//               </a>
// {/* 
//               <a
//                 href="https://instagram.com/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="group w-14 h-14 rounded-2xl bg-[#0A1628] border border-white/10 flex items-center justify-center hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300 hover:scale-110"
//               >
//                 <FaInstagram className="text-white text-2xl group-hover:text-pink-400" />
//               </a> */}
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div
//             className={`space-y-8 transition-all duration-700 delay-200 ${
//               visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
//             }`}
//           >
//             {/* Intro */}
//             <div className="space-y-6">
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20">
//                 <span className="w-2 h-2 rounded-full bg-[#A8FF78] animate-pulse" />
//                 <span className="text-xs font-semibold tracking-widest text-[#C9A84C] uppercase">
//                   Passionate Developer
//                 </span>
//               </div>

//               <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight">
//                 Building modern & impactful{" "}
//                 <span className="bg-gradient-to-r from-[#C9A84C] to-[#E8D48E] bg-clip-text text-transparent">
//                   digital experiences
//                 </span>
//               </h3>

//               <p className="text-gray-400 leading-relaxed text-base">
//                 Hi, I'm{" "}
//                 <span className="text-white font-semibold">
//                   Khushal Bhaliya
//                 </span>
//                 , a creative Full Stack Developer passionate about crafting
//                 beautiful, scalable, and high-performance web applications.
//               </p>

//               <p className="text-gray-400 leading-relaxed text-base">
//                 I specialize in React.js, JavaScript, Tailwind CSS, Node.js,
//                 and modern UI/UX design principles. My goal is to build
//                 seamless user experiences with clean code and stunning visuals.
//               </p>

//               <p className="text-gray-400 leading-relaxed text-base">
//                 I love exploring new technologies, solving real-world problems,
//                 and transforming ideas into elegant digital products that make
//                 an impact.
//               </p>
//             </div>

//             {/* Info Cards */}
//             <div className="grid sm:grid-cols-2 gap-5">
//               {info.map(({ icon: Icon, label, value }) => (
//                 <div
//                   key={label}
//                   className="group relative p-5 rounded-2xl bg-[#0A1628]/70 border border-white/5 hover:border-[#C9A84C]/20 transition-all duration-300 overflow-hidden"
//                 >
//                   {/* Hover Glow */}
//                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#C9A84C]/5 to-transparent" />

//                   <div className="relative flex items-start gap-4">
//                     <div className="w-11 h-11 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
//                       <Icon size={18} className="text-[#C9A84C]" />
//                     </div>

//                     <div className="flex-1 min-w-0">
//                       <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">
//                         {label}
//                       </p>

//                       <p
//                         className={`mt-1 font-semibold break-all leading-relaxed ${
//                           label === "Email"
//                             ? "text-[13px] sm:text-sm"
//                             : "text-sm"
//                         } ${
//                           value === "Available for Work"
//                             ? "text-[#A8FF78]"
//                             : "text-gray-300"
//                         }`}
//                       >
//                         {value}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-wrap gap-4 pt-2">
//               <a
//                 href="#contact"
//                 className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#C9A84C] to-[#E8D48E] text-[#050A14] font-bold text-sm hover:scale-105 hover:shadow-[0_0_40px_rgba(201,168,76,0.4)] transition-all duration-300"
//               >
//                 Let's Work Together
//               </a>

//               <a
//                 href="#projects"
//                 className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/10 text-white font-semibold text-sm hover:border-[#C9A84C]/40 hover:bg-[#C9A84C]/5 transition-all duration-300"
//               >
//                 View Projects
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         .animate-spin-slow {
//           animation: spin 8s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// }

import { useEffect, useRef, useState } from "react";
import profile from "../assets/logo.png";
import { MapPin, Mail, Phone, Calendar } from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaReact,
} from "react-icons/fa";

const info = [
  { icon: MapPin, label: "Location", value: "Ahmedabad, Gujarat, India" },

  {
    icon: Mail,
    label: "Email",
    value: "khushalbhaliya.dev@gmail.com",
  },

  { icon: Phone, label: "Phone", value: "+91 98765 43210" },

  {
    icon: Calendar,
    label: "Status",
    value: "Open to Work",
  },
];

export default function About() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );

    if (ref.current) obs.observe(ref.current);

    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 overflow-hidden bg-[#050A14]"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#C9A84C]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00D4FF]/10 rounded-full blur-[120px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[#C9A84C] text-sm font-bold tracking-[0.3em] uppercase mb-3">
            Get To Know Me
          </p>

          <h2 className="text-4xl lg:text-6xl font-black text-white">
            About{" "}
            <span className="bg-gradient-to-r from-[#C9A84C] to-[#E8D48E] bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div
            className={`transition-all duration-700 delay-100 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-16"
            }`}
          >
            {/* Profile Card */}
            <div className="relative group">
              {/* Glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-[#C9A84C]/30 to-[#00D4FF]/20 rounded-[30px] blur-xl opacity-60 group-hover:opacity-100 transition duration-500" />

              <div className="relative rounded-[30px] overflow-hidden border border-white/10 bg-[#0A1628]/80 backdrop-blur-xl">
                {/* Top Bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Khushal Bhaliya
                    </h3>
                    <p className="text-xs text-[#C9A84C] mt-1">
                      Full Stack Developer
                    </p>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C9A84C] to-[#E8D48E] flex items-center justify-center shadow-[0_0_20px_rgba(201,168,76,0.4)]">
                    <FaReact className="text-[#050A14] text-2xl animate-spin-slow" />
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-[450px] overflow-hidden">
                  <img
                    src={profile}
                    alt="Khushal Bhaliya"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-transparent to-transparent" />

                  {/* Floating Badge */}
                  <div className="absolute bottom-6 left-6 px-4 py-2 rounded-xl bg-[#0A1628]/90 border border-[#C9A84C]/30 backdrop-blur-md">
                    <p className="text-sm font-bold text-[#C9A84C]">
                      ⚡ React Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/khushal1818"
                target="_blank"
                rel="noreferrer"
                className="group w-14 h-14 rounded-2xl bg-[#0A1628] border border-white/10 flex items-center justify-center hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/10 transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="text-white text-2xl group-hover:text-[#C9A84C]" />
              </a>

              <a
              href="https://www.linkedin.com/in/khushal-bhaliya-506107308?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                className="group w-14 h-14 rounded-2xl bg-[#0A1628] border border-white/10 flex items-center justify-center hover:border-[#00D4FF]/50 hover:bg-[#00D4FF]/10 transition-all duration-300 hover:scale-110"
              >
                <FaLinkedinIn className="text-white text-2xl group-hover:text-[#00D4FF]" />
              </a>

              {/* <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="group w-14 h-14 rounded-2xl bg-[#0A1628] border border-white/10 flex items-center justify-center hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300 hover:scale-110"
              >
                <FaInstagram className="text-white text-2xl group-hover:text-pink-400" />
              </a> */}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className={`space-y-8 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
          >
            {/* Intro */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20">
                <span className="w-2 h-2 rounded-full bg-[#A8FF78] animate-pulse" />
                <span className="text-xs font-semibold tracking-widest text-[#C9A84C] uppercase">
                  Fresher Developer
                </span>
              </div>

              <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight">
                Building modern & impactful{" "}
                <span className="bg-gradient-to-r from-[#C9A84C] to-[#E8D48E] bg-clip-text text-transparent">
                  digital experiences
                </span>
              </h3>

              <p className="text-gray-400 leading-relaxed text-base">
                Hi, I'm{" "}
                <span className="text-white font-semibold">
                  Khushal Bhaliya
                </span>
                , a passionate Fresher Full Stack Developer focused on creating
                modern, responsive, and user-friendly web applications.
              </p>

              <p className="text-gray-400 leading-relaxed text-base">
                I specialize in React.js, JavaScript, Tailwind CSS, Node.js,
                and modern UI/UX design principles. I enjoy building clean,
                scalable, and high-performance websites with smooth user
                experiences.
              </p>

              <p className="text-gray-400 leading-relaxed text-base">
                As a fresher, I’m continuously learning new technologies,
                improving my development skills, and working on real-world
                projects to grow as a professional developer.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-5">
              {info.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="group relative p-5 rounded-2xl bg-[#0A1628]/70 border border-white/5 hover:border-[#C9A84C]/20 transition-all duration-300 overflow-hidden"
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#C9A84C]/5 to-transparent" />

                  <div className="relative flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#C9A84C]" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">
                        {label}
                      </p>

                      <p
                        className={`mt-1 font-semibold break-all leading-relaxed ${
                          label === "Email"
                            ? "text-[13px] sm:text-sm"
                            : "text-sm"
                        } ${
                          value === "Open to Work"
                            ? "text-[#A8FF78]"
                            : "text-gray-300"
                        }`}
                      >
                        {value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#C9A84C] to-[#E8D48E] text-[#050A14] font-bold text-sm hover:scale-105 hover:shadow-[0_0_40px_rgba(201,168,76,0.4)] transition-all duration-300"
              >
                Let's Work Together
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/10 text-white font-semibold text-sm hover:border-[#C9A84C]/40 hover:bg-[#C9A84C]/5 transition-all duration-300"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </section>
  );
}