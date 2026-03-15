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
    <div className="animate-in w-full bg-[#111] border border-[#1f1f1f] rounded-lg px-4 py-3" style={{ animationDelay: "360ms" }}>
      <p className="text-[11px] text-[#444] font-mono uppercase tracking-widest mb-2">
        currently
      </p>
      <div className="space-y-1.5">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shrink-0" />
          <span className="text-[13px] font-mono text-[#aaa] whitespace-nowrap">Kuala Lumpur, MY</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] shrink-0 pulse-dot" />
          <span className="text-[13px] font-mono text-[#aaa] whitespace-nowrap">Software Dev @ Map72</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#60a5fa] shrink-0" />
          <span className="text-[13px] font-mono text-[#aaa] whitespace-nowrap">making content, chasing ideas</span>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-16"
    >
      <ParticleDots />

      <div className="w-full max-w-[680px] mx-auto flex flex-col items-start text-left py-24">
        {/* Avatar */}
        <div className="animate-in stagger-1 relative mb-6">
          <div
            className="w-[102px] h-[102px] rounded-full p-[3px] bg-gradient-to-br from-[#a78bfa] to-[#60a5fa]"
            style={{ boxShadow: "0 0 40px rgba(167, 139, 250, 0.15)" }}
          >
            <Image
              src="/avatar.jpg"
              alt="Alden Ong"
              width={96}
              height={96}
              className="rounded-full object-cover w-[96px] h-[96px]"
            />
          </div>
        </div>

        {/* Name */}
        <h1
          className="animate-in stagger-2 font-mono font-bold text-[#f5f5f5] glow-white mb-3"
          style={{ fontSize: "clamp(40px, 6vw, 64px)", letterSpacing: "-0.02em" }}
        >
          Alden Ong
        </h1>

        {/* Role */}
        <p
          className="animate-in stagger-3 font-mono text-[#a78bfa] glow-purple mb-4"
          style={{ fontSize: "clamp(18px, 2.5vw, 24px)", letterSpacing: "0.08em" }}
        >
          fullstack software <span className="text-[#8b6fdb]">developer.</span>
        </p>

        {/* Education */}
        <div className="animate-in stagger-3 mb-6 space-y-1">
          <p className="font-mono text-[13px] text-[#ccc]">
            BSc (Hons) Computer Science{" "}
            <span className="text-[#555] text-[11px]">Sunway University</span>
          </p>
          <p className="font-mono text-[13px] text-[#ccc]">
            Masters in Business Administration{" "}
            <span className="text-[#555] text-[11px]">Taylor&apos;s University</span>
          </p>
        </div>

        {/* Bio */}
        <div className="animate-in stagger-4 mb-6">
          <p style={{ fontSize: "16px", lineHeight: 1.8, letterSpacing: "0.01em", color: "#999" }}>
            Curious about how things work, happiest when shipping. Fullstack
            developer at Map Seventy Two, building web and mobile products.
            Outside work I make content, document life, and chase ideas worth building.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="animate-in stagger-5 flex items-center gap-3 mb-6">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono border border-[#1f1f1f] text-[#ccc] hover:bg-[rgba(167,139,250,0.08)] hover:text-[#f5f5f5] hover:border-[#333] transition-all duration-200"
            style={{ padding: "12px 24px", fontSize: "15px" }}
          >
            <FileText size={16} />
            resume &#x2197;
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-mono border border-[#1f1f1f] text-[#ccc] hover:bg-[rgba(167,139,250,0.08)] hover:text-[#f5f5f5] hover:border-[#333] transition-all duration-200"
            style={{ padding: "12px 24px", fontSize: "15px" }}
          >
            <Send size={16} />
            get in touch
          </a>
        </div>

        {/* Social icons */}
        <div className="animate-in stagger-5 flex items-center gap-5 mb-6">
          <a href="https://github.com/aldenongjingyi" target="_blank" rel="noopener noreferrer" className="p-2 text-[#555] hover:text-white transition-colors duration-200" aria-label="GitHub"><Github size={20} /></a>
          <a href="https://linkedin.com/in/aldenong123" target="_blank" rel="noopener noreferrer" className="p-2 text-[#555] hover:text-white transition-colors duration-200" aria-label="LinkedIn"><Linkedin size={20} /></a>
          <a href="https://www.instagram.com/aldenojy/" target="_blank" rel="noopener noreferrer" className="p-2 text-[#555] hover:text-white transition-colors duration-200" aria-label="Instagram"><Instagram size={20} /></a>
        </div>

        {/* Currently widget */}
        <CurrentlyWidget />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hero-scroll-indicator">
        <ChevronDown size={18} className="text-[#444] hover:text-[#888] transition-colors duration-200 cursor-pointer" />
      </div>
    </section>
  );
}
