"use client";

import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";

const projectStyles = [
  { color: "#1e3a5f", label: "human activity recognition" },
  { color: "#2d1b4e", label: "collaborative pixel editor" },
  { color: "#3d2000", label: "wafflebox productions" },
  { color: "#1a1a1a", label: "this portfolio" },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="pt-[80px] pb-0">
      <div className="max-w-[960px] mx-auto px-6 lg:px-16">
        {/* Heading with count */}
        <div className="reveal mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f5f5f5] glow-white">
            projects{" "}
            <span className="text-[#818cf8] glow-purple font-mono text-3xl sm:text-4xl">
              [{projects.length}]
            </span>
          </h2>
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, i) => {
            const style = projectStyles[i % projectStyles.length];
            return (
              <a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal block bg-[#0e1018] border border-[#1a1a2e] overflow-hidden hover:border-[#333] hover:-translate-y-0.5 transition-all duration-200 group"
              >
                {/* Styled preview card */}
                <div
                  className="relative h-48 flex items-center justify-center overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${style.color}, #08090d)`,
                  }}
                >
                  {/* Dot grid overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, #fff 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                    }}
                  />
                  {/* Project name as display text */}
                  <span
                    className="relative font-mono text-white select-none group-hover:opacity-[0.4] transition-opacity duration-200"
                    style={{ fontSize: "13px", opacity: 0.3, letterSpacing: "0.1em" }}
                  >
                    {style.label}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#f5f5f5] lowercase mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#888] leading-relaxed mb-4">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-0.5 bg-[#08090d] border border-[#1a1a2e] text-[#888] text-[11px] font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#1a1a2e]">
                    <span className={`inline-flex items-center gap-1.5 text-[11px] font-mono ${
                      project.status === "live" ? "text-[#22c55e]" : "text-[#888]"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        project.status === "live" ? "bg-[#22c55e]" : "bg-[#555]"
                      }`} />
                      {project.status === "live" ? "live" : "source"}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-[#555] group-hover:text-[#f5f5f5] transition-colors duration-200 font-mono">
                      view <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
