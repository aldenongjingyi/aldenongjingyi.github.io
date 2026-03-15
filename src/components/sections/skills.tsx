"use client";

import { type IconType } from "react-icons";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiMysql,
  SiC,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiFlutter,
  SiDart,
  SiGit,
  SiVercel,
  SiFigma,
  SiAndroid,
  SiDavinciresolve,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import {
  TbBrandAdobePhotoshop,
  TbBrandAdobePremier,
  TbBrandAdobeIllustrator,
} from "react-icons/tb";
import { techStack } from "@/lib/data";

const skillIcons: Record<string, IconType> = {
  Java: DiJava,
  Python: SiPython,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  SQL: SiMysql,
  C: SiC,
  "HTML/CSS": SiHtml5,
  "Next.js": SiNextdotjs,
  React: SiReact,
  "Tailwind CSS": SiTailwindcss,
  Flutter: SiFlutter,
  Dart: SiDart,
  "Android SDK": SiAndroid,
  Git: SiGit,
  Vercel: SiVercel,
  "VS Code": VscVscode,
  Figma: SiFigma,
  "DaVinci Resolve": SiDavinciresolve,
  Photoshop: TbBrandAdobePhotoshop,
  "Premiere Pro": TbBrandAdobePremier,
  Illustrator: TbBrandAdobeIllustrator,
  Lightroom: TbBrandAdobePhotoshop,
};

export function SkillsSection() {
  const categories = Object.entries(techStack);

  return (
    <section id="skills" className="pt-[80px] pb-0 bg-[#0d0d0d]" aria-label="Skills">
      <div className="max-w-[960px] mx-auto px-6 lg:px-16">
        {/* Dramatic heading */}
        <div className="reveal mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f5f5f5] glow-white mb-2">
            what I{" "}
            <span className="text-[#a78bfa] glow-purple">work with</span>
          </h2>
        </div>

        {/* Skill categories */}
        <div className="space-y-0">
          {categories.map(([category, skills], i) => (
            <div
              key={category}
              className={`reveal py-6 ${
                i < categories.length - 1 ? "border-b border-[#1a1a1a]" : ""
              }`}
            >
              {/* Category label — prominent with left border */}
              <p className="text-[12px] text-[#555] font-mono uppercase tracking-widest mb-3 border-l-2 border-[#333] pl-3">
                {category}
              </p>

              {/* Skill badges with icons */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => {
                  const Icon = skillIcons[skill];
                  return (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#111] border border-[#1f1f1f] text-[#ccc] text-[15px] font-mono hover:border-[#333] hover:text-[#f5f5f5] transition-all duration-200"
                    >
                      {Icon && <Icon size={14} className="text-[#888] shrink-0" />}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
