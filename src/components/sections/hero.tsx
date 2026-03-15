"use client";

import Image from "next/image";
import { Github, Linkedin, Instagram, ChevronDown, FileText, Send } from "lucide-react";

function ParticleDots() {
  const particles = Array.from({ length: 55 }, (_, i) => ({
    left: `${(i * 23.7 + 11) % 100}%`,
    top: `${(i * 31.3 + 7) % 100}%`,
    duration: `${8 + (i % 7) * 2}s`,
    delay: `${(i * 0.8) % 6}s`,
    size: i % 7 === 0 ? 3 : i % 3 === 0 ? 1 : 2,
  }));

  return (
    <div className="particles">
      {particles.map((p, i) => (
        <span
          key={i}
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

function CurrentlyWidget() {
  return (
    <div
      className="animate-in w-full rounded-lg"
      style={{
        maxWidth: 340,
        background: "#0d0d0d",
        border: "1px solid #1f1f1f",
        borderRadius: 8,
        padding: "16px 20px",
        animationDelay: "360ms",
      }}
    >
      <p
        className="font-mono uppercase"
        style={{ fontSize: 10, color: "#444", letterSpacing: "0.1em", marginBottom: 12 }}
      >
        currently
      </p>
      <div className="flex flex-col" style={{ gap: 6 }}>
        <div className="flex items-center" style={{ gap: 8 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shrink-0" />
          <span className="font-mono" style={{ fontSize: 13, color: "#777" }}>Kuala Lumpur, MY</span>
        </div>
        <div className="flex items-center" style={{ gap: 8 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] shrink-0 pulse-dot" />
          <span className="font-mono" style={{ fontSize: 13, color: "#777" }}>Software Dev @ Map72</span>
        </div>
        <div className="flex items-center" style={{ gap: 8 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#60a5fa] shrink-0" />
          <span className="font-mono" style={{ fontSize: 13, color: "#777" }}>making content, chasing ideas</span>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center"
      style={{ paddingBottom: 80 }}
    >
      <ParticleDots />

      <div className="w-full max-w-[960px] mx-auto px-6 lg:px-16">
        {/* Two-column layout: row on md+, column on mobile */}
        <div className="flex flex-col md:flex-row items-start" style={{ gap: 64 }}>

          {/* ── Left column ── */}
          <div
            className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-[42%] shrink-0"
            style={{ gap: 20 }}
          >
            {/* Avatar */}
            <div className="animate-in stagger-1 relative">
              <div
                className="w-[80px] h-[80px] rounded-full p-[3px] bg-gradient-to-br from-[#a78bfa] to-[#60a5fa]"
                style={{ boxShadow: "0 0 40px rgba(167, 139, 250, 0.15)" }}
              >
                <Image
                  src="/avatar.jpg"
                  alt="Alden Ong"
                  width={74}
                  height={74}
                  className="rounded-full object-cover w-[74px] h-[74px]"
                />
              </div>
            </div>

            {/* Name */}
            <h1
              className="animate-in stagger-2 font-mono font-bold text-[#f5f5f5] glow-white"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.02em" }}
            >
              Alden Ong
            </h1>

            {/* Role */}
            <p
              className="animate-in stagger-3 font-mono text-[#a78bfa] glow-purple"
              style={{ fontSize: 16, letterSpacing: "0.08em" }}
            >
              fullstack software <span className="text-[#8b6fdb]">developer.</span>
            </p>

            {/* Education */}
            <div className="animate-in stagger-3">
              <p className="font-mono text-[#555]" style={{ fontSize: 13, lineHeight: 1.6 }}>
                BSc (Hons) Computer Science{" "}
                <span className="text-[#555]" style={{ fontSize: 11 }}>Sunway University</span>
              </p>
              <p className="font-mono text-[#555]" style={{ fontSize: 13, lineHeight: 1.6 }}>
                Masters in Business Administration{" "}
                <span className="text-[#555]" style={{ fontSize: 11 }}>Taylor&apos;s University</span>
              </p>
            </div>

            {/* Social icons */}
            <div className="animate-in stagger-5 flex items-center" style={{ gap: 20 }}>
              <a href="https://github.com/aldenongjingyi" target="_blank" rel="noopener noreferrer" className="text-[#555] hover:text-[#aaa] transition-colors duration-200" aria-label="GitHub"><Github size={18} /></a>
              <a href="https://linkedin.com/in/aldenong123" target="_blank" rel="noopener noreferrer" className="text-[#555] hover:text-[#aaa] transition-colors duration-200" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="https://www.instagram.com/aldenojy/" target="_blank" rel="noopener noreferrer" className="text-[#555] hover:text-[#aaa] transition-colors duration-200" aria-label="Instagram"><Instagram size={18} /></a>
            </div>
          </div>

          {/* ── Right column ── */}
          <div className="flex flex-col flex-1 w-full" style={{ gap: 32, paddingTop: 8 }}>
            {/* Bio */}
            <div className="animate-in stagger-4">
              <p style={{ fontSize: 17, lineHeight: 1.8, letterSpacing: "0.01em", color: "#999", maxWidth: 480 }}>
                Curious about how things work, happiest when shipping. Fullstack
                developer at Map Seventy Two, building web and mobile products.
                Outside work I make content, document life, and chase ideas worth building.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="animate-in stagger-5 flex items-center" style={{ gap: 12 }}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[#888] hover:text-[#ccc] transition-all duration-200"
                style={{ padding: "10px 20px", fontSize: 14, border: "1px solid #333" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#555"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#333"; }}
              >
                <FileText size={14} />
                resume &#x2197;
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-mono text-[#a78bfa] hover:text-[#c4b5fd] transition-all duration-200"
                style={{ padding: "10px 20px", fontSize: 14, border: "1px solid rgba(167, 139, 250, 0.27)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#a78bfa"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(167, 139, 250, 0.27)"; }}
              >
                <Send size={14} />
                get in touch
              </a>
            </div>

            {/* Currently widget */}
            <CurrentlyWidget />
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hero-scroll-indicator">
        <ChevronDown size={18} className="text-[#444] hover:text-[#888] transition-colors duration-200 cursor-pointer" />
      </div>
    </section>
  );
}
