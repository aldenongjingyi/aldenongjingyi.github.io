"use client";

import { Github, Linkedin, Mail, Instagram, ArrowUpRight } from "lucide-react";

const links = [
  {
    label: "Email",
    href: "mailto:aldenongjingyi@gmail.com",
    icon: Mail,
    value: "aldenongjingyi@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/aldenongjingyi",
    icon: Github,
    value: "github.com/aldenongjingyi",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/aldenong123",
    icon: Linkedin,
    value: "linkedin.com/in/aldenong123",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/aldenojy/",
    icon: Instagram,
    value: "@aldenojy",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="pt-[80px] pb-20">
      <div className="max-w-[960px] mx-auto px-6 lg:px-16">
        {/* Heading */}
        <div className="reveal mb-12">
          <h2 className="glow-reveal text-4xl sm:text-5xl font-bold text-[#f5f5f5] glow-white mb-2">
            get in <span className="text-[#a78bfa] glow-purple">touch</span>
          </h2>
          <p className="text-sm text-[#888]">
            Open to opportunities, collaborations, and conversations.
          </p>
        </div>

        {/* Contact links */}
        <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 gap-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="reveal-child glow-hover-purple flex items-center gap-4 p-4 bg-[#111]/50 border border-[#1f1f1f] hover:bg-[#111] hover:border-[#333] transition-all duration-200 group"
            >
              <div className="w-10 h-10 bg-[#0a0a0a] border border-[#1f1f1f] flex items-center justify-center group-hover:border-[#333] transition-colors duration-200">
                <link.icon size={16} className="text-[#888] group-hover:text-[#f5f5f5] transition-colors duration-200" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-[#f5f5f5] font-medium">{link.label}</p>
                <p className="text-xs text-[#555] font-mono truncate">{link.value}</p>
              </div>
              <ArrowUpRight size={14} className="text-[#333] group-hover:text-[#888] transition-colors duration-200 shrink-0" />
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="reveal mt-24 pt-6 border-t border-[#1f1f1f] text-center">
          <p className="text-xs text-[#444] font-mono">
            &copy; 2026 Alden Ong &middot; Built with Next.js + Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
