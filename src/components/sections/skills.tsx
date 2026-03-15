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
import { techStack } from "@/lib/data";

/* Placeholder icon for Adobe tools (not available in react-icons) */
function AdobeIcon({ color }: { color: string }) {
  return (
    <span className="text-[10px] font-bold shrink-0 leading-none" style={{ color }}>
      ◆
    </span>
  );
}

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
};

const creativeColors: Record<string, string> = {
  Photoshop: "#31A8FF",
  "Premiere Pro": "#9999FF",
  Illustrator: "#FF9A00",
  Lightroom: "#31A8FF",
};

export function SkillsSection() {
  const categories = Object.entries(techStack);

  return (
    <section id="skills" className="pt-[80px] pb-0 bg-[#0a0b12]" aria-label="Skills">
      <div className="max-w-[960px] mx-auto px-6 lg:px-16">
        {/* Dramatic heading */}
        <div className="reveal mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f5f5f5] glow-white mb-2">
            what I{" "}
            <span className="text-[#818cf8] glow-purple">work with</span>
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
              <p className="text-[11px] text-[#555] font-mono uppercase tracking-widest mb-3 border-l-2 border-[#333] pl-3">
                {category}
              </p>

              {/* Skill badges with icons */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => {
                  const Icon = skillIcons[skill];
                  const adobeColor = creativeColors[skill];
                  return (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#0e1018] border border-[#1a1a2e] text-[#ccc] text-[15px] font-mono hover:border-[#333] hover:text-[#f5f5f5] transition-all duration-200"
                    >
                      {Icon ? (
                        <Icon size={14} className="text-[#888] shrink-0" />
                      ) : adobeColor ? (
                        <AdobeIcon color={adobeColor} />
                      ) : null}
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
