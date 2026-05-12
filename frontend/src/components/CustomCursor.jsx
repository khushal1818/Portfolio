// import { useEffect, useRef } from "react";

// export default function CustomCursor() {
//   const dot = useRef(null);
//   const ring = useRef(null);

//   useEffect(() => {
//     if (window.matchMedia("(pointer: coarse)").matches) return; // skip on touch devices

//     let mouseX = 0,
//       mouseY = 0;
//     let ringX = 0,
//       ringY = 0;
//     let rafId;

//     const onMove = (e) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;
//       if (dot.current) {
//         dot.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
//       }
//     };

//     const animate = () => {
//       ringX += (mouseX - ringX) * 0.12;
//       ringY += (mouseY - ringY) * 0.12;
//       if (ring.current) {
//         ring.current.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
//       }
//       rafId = requestAnimationFrame(animate);
//     };
//     animate();

//     const onEnterLink = () => {
//       if (ring.current)
//         ring.current.classList.add("scale-150", "border-[#C9A84C]");
//       if (dot.current) dot.current.classList.add("opacity-0");
//     };
//     const onLeaveLink = () => {
//       if (ring.current)
//         ring.current.classList.remove("scale-150", "border-[#C9A84C]");
//       if (dot.current) dot.current.classList.remove("opacity-0");
//     };

//     document.addEventListener("mousemove", onMove);
//     document.querySelectorAll("a, button").forEach((el) => {
//       el.addEventListener("mouseenter", onEnterLink);
//       el.addEventListener("mouseleave", onLeaveLink);
//     });

//     return () => {
//       document.removeEventListener("mousemove", onMove);
//       cancelAnimationFrame(rafId);
//     };
//   }, []);

//   return (
//     <>
//       {/* Dot */}
//       <div
//         ref={dot}
//         className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#C9A84C] z-[9999] pointer-events-none transition-opacity duration-150 hidden md:block"
//         style={{ willChange: "transform" }}
//       />
//       {/* Ring */}
//       <div
//         ref={ring}
//         className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/30 z-[9998] pointer-events-none transition-[transform,border-color,scale] duration-200 hidden md:block"
//         style={{ willChange: "transform" }}
//       />
//     </>
//   );
// }
