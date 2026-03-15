"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "/about" },
  { href: "#experience", label: "/work" },
  { href: "#projects", label: "/projects" },
  { href: "#contact", label: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="navbar-enter fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0a0a]/60 lg:left-[256px]">
        <div className="px-6 h-12 flex items-center justify-between">
          {/* Left — Name with gradient asterisk */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-1.5 group cursor-pointer"
            title="Back to top"
          >
            <span className="font-mono text-sm text-[#f5f5f5] tracking-tight">
              alden
            </span>
            <span className="gradient-text text-sm font-bold cursor-pointer" title="Back to top">&#10022;</span>
          </a>

          {/* Right — Nav links (desktop) */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[13px] text-[#555] hover:text-[#f5f5f5] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-1.5 text-[#888] hover:text-[#f5f5f5] transition-colors"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-[#0a0a0a]/95 backdrop-blur-lg flex flex-col items-center justify-center">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-4 right-6 p-2 text-[#888] hover:text-[#f5f5f5] transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-2xl text-[#888] hover:text-[#f5f5f5] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
