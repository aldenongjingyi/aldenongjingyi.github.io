"use client";

import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-end pb-24 px-6 lg:px-16"
    >
      {/* Subtle blue glow */}
      <div
        className="absolute top-0 right-0 w-[60%] h-[80%] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 30%, rgba(59, 130, 246, 0.08), transparent 70%)",
        }}
      />

      <div className="w-full max-w-[720px]">
        {/* Role label */}
        <p
          className="animate-in stagger-1 font-mono text-sm tracking-wide mb-6"
          style={{ color: "#7c8aff" }}
        >
          fullstack software developer
        </p>

        {/* Name */}
        <h1
          className="animate-in stagger-2 font-bold leading-[0.95] mb-8"
          style={{ fontSize: "clamp(56px, 8vw, 96px)", letterSpacing: "-0.03em" }}
        >
          <span className="hero-name-gradient">Alden Ong</span>
          <br />
          <span className="hero-name-gradient">Jing Yi</span>
        </h1>

        {/* Bio */}
        <p className="animate-in stagger-3 text-lg sm:text-xl leading-relaxed text-[#888] max-w-[540px] mb-10">
          Building systems at the intersection of engineering, data, and design. CS + MBA. Based in Kuala Lumpur.
        </p>

        {/* CTA Buttons */}
        <div className="animate-in stagger-4 flex items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#6366f1] text-white text-sm font-medium hover:bg-[#5558e6] transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#1a1a2e] border border-[#2a2a3e] text-[#ccc] text-sm font-medium hover:bg-[#222240] hover:text-white transition-all duration-200"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hero-scroll-indicator">
        <ChevronDown size={18} className="text-[#444] hover:text-[#888] transition-colors duration-200 cursor-pointer" />
      </div>
    </section>
  );
}
