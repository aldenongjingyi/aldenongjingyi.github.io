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
    <div className="max-w-[360px] bg-[#111]/50 border border-[#1f1f1f] p-5 hover:border-[#333] transition-colors duration-200">
      <p className="text-[12px] font-mono text-[#555] uppercase tracking-widest mb-3">
        currently
      </p>
      <div className="space-y-2.5">
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shrink-0" />
          <span className="text-sm font-mono text-[#888]">Kuala Lumpur, MY</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] shrink-0 pulse-dot" />
          <span className="text-sm font-mono text-[#888]">Software Dev @ Map72</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#60a5fa] shrink-0" />
          <span className="text-sm font-mono text-[#888]">making content, chasing ideas</span>
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
    >
      <ParticleDots />

      <div className="w-full max-w-[960px] mx-auto px-6 lg:px-16 py-16">
        {/* Avatar */}
        <div className="animate-in stagger-1 mb-8">
          <div
            className="w-24 h-24 rounded-full p-[3px] bg-gradient-to-br from-[#a78bfa] to-[#60a5fa]"
            style={{ boxShadow: "0 0 40px rgba(167, 139, 250, 0.15)" }}
          >
            <Image
              src="/avatar.jpg"
              alt="Alden Ong"
              width={90}
              height={90}
              className="rounded-full object-cover w-[90px] h-[90px]"
            />
          </div>
        </div>

        {/* Name — matches section heading style */}
        <h1 className="animate-in stagger-2 text-4xl sm:text-5xl font-bold text-[#f5f5f5] glow-white mb-3">
          Alden Ong
        </h1>

        {/* Role — purple accent, monospace like nav labels */}
        <p
          className="animate-in stagger-2 text-lg sm:text-xl font-mono text-[#a78bfa] glow-purple mb-10"
          style={{ letterSpacing: "0.05em" }}
        >
          fullstack software <span className="text-[#8b6fdb]">developer.</span>
        </p>

        {/* Bio — same body text style as experience bullets */}
        <p className="animate-in stagger-3 text-base sm:text-lg text-[#999] leading-relaxed max-w-[540px] mb-6">
          Curious about how things work, happiest when shipping. Fullstack
          developer at Map Seventy Two, building web and mobile products.
          Outside work I make content, document life, and chase ideas worth building.
        </p>

        {/* Education — metadata style matching experience dates */}
        <div className="animate-in stagger-3 mb-10 space-y-1">
          <p className="text-sm font-mono text-[#888]">
            BSc (Hons) Computer Science{" "}
            <span className="text-[#555] text-[12px]">Sunway University</span>
          </p>
          <p className="text-sm font-mono text-[#888]">
            Masters in Business Administration{" "}
            <span className="text-[#555] text-[12px]">Taylor&apos;s University</span>
          </p>
        </div>

        {/* CTA Buttons — card/tag surface style */}
        <div className="animate-in stagger-4 flex flex-wrap items-center gap-3 mb-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111] border border-[#1f1f1f] text-[#ccc] text-[15px] font-mono hover:border-[#333] hover:text-[#f5f5f5] transition-all duration-200"
          >
            <FileText size={15} />
            resume &#x2197;
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#a78bfa]/25 text-[#a78bfa] text-[15px] font-mono hover:border-[#a78bfa] hover:text-[#c4b5fd] transition-all duration-200"
          >
            <Send size={15} />
            get in touch
          </a>
        </div>

        {/* Social icons */}
        <div className="animate-in stagger-4 flex items-center gap-5 mb-10">
          <a href="https://github.com/aldenongjingyi" target="_blank" rel="noopener noreferrer" className="social-icon-hover text-[#555] hover:text-[#f5f5f5] transition-colors duration-200" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/aldenong123" target="_blank" rel="noopener noreferrer" className="social-icon-hover text-[#555] hover:text-[#f5f5f5] transition-colors duration-200" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://www.instagram.com/aldenojy/" target="_blank" rel="noopener noreferrer" className="social-icon-hover text-[#555] hover:text-[#f5f5f5] transition-colors duration-200" aria-label="Instagram">
            <Instagram size={20} />
          </a>
        </div>

        {/* Currently widget — card style matching contact section */}
        <div className="animate-in stagger-5">
          <CurrentlyWidget />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hero-scroll-indicator">
        <ChevronDown size={18} className="text-[#444] hover:text-[#888] transition-colors duration-200 cursor-pointer" />
      </div>
    </section>
  );
}
