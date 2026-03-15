"use client";

import Image from "next/image";
import { experience } from "@/lib/data";

const companyLogos: Record<string, { src?: string; bg: string; letter?: string }> = {
  "Map Seventy Two Sdn Bhd": { src: "/logos/map72.png", bg: "#6b4f36" },
  "Taxi Production": { src: "/logos/taxi.jpg", bg: "#111" },
  "AS Watson Group (Watsons Malaysia)": { src: "/logos/watsons-logo.png", bg: "#1a9e8f" },
  "WaffleBox Productions": { src: "/logos/wafflebox.png", bg: "#f0f0f0" },
};

function CompanyLogo({ company }: { company: string }) {
  const logo = companyLogos[company];
  const letter = logo?.letter ?? company.charAt(0);
  const bg = logo?.bg ?? "#1a1a1a";

  if (!logo?.src) {
    return (
      <div
        className="w-14 h-14 rounded-lg flex items-center justify-center text-[15px] font-bold font-mono text-white/90 shrink-0 border border-white/5"
        style={{ backgroundColor: bg }}
      >
        {letter}
      </div>
    );
  }

  return (
    <div
      className="w-14 h-14 rounded-lg flex items-center justify-center shrink-0 border border-white/5 overflow-hidden"
      style={{ backgroundColor: bg }}
    >
      <Image
        src={logo.src}
        alt={`${company} logo`}
        width={56}
        height={56}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="pt-16 pb-0">
      <div className="max-w-[960px] mx-auto px-6 lg:px-16">
        {/* Heading */}
        <div className="reveal mb-14">
          <h2 className="glow-reveal text-4xl sm:text-5xl font-bold text-[#f5f5f5] glow-white mb-3">
            work{" "}
            <span className="text-[#a78bfa] glow-purple">experience</span>
          </h2>
          <p className="text-lg text-[#888]">
            where I&apos;ve built, shipped, and contributed.
          </p>
        </div>

        {/* Timeline entries */}
        <div className="space-y-0">
          {experience.map((exp, i) => {
            const isCurrent = exp.date.includes("Present");

            return (
              <div key={i} className="reveal-left">
                {/* Divider (not on first) */}
                {i > 0 && (
                  <div className="reveal-divider border-t border-[#1f1f1f] mx-0 my-0" />
                )}

                <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 py-8">
                  {/* Left column — date + logo */}
                  <div className="sm:w-[180px] shrink-0 flex sm:flex-col items-center sm:items-start gap-4">
                    <CompanyLogo company={exp.company} />
                    <div className="sm:mt-1">
                      <p className="text-sm font-mono text-[#888]">{exp.date}</p>
                      <p className="text-[12px] font-mono text-[#444] mt-0.5">{exp.location}</p>
                    </div>
                  </div>

                  {/* Right column — content */}
                  <div className="flex-1 min-w-0">
                    {/* Company | Role header */}
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-lg font-bold">
                        <span className="text-[#a78bfa]">{exp.company}</span>
                        <span className="text-[#444] mx-2">|</span>
                        <span className="text-[#f5f5f5]">{exp.role}</span>
                      </h3>
                      {isCurrent && (
                        <span className="glow-green inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#22c55e]/10 text-[#22c55e] text-[12px] font-mono rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] pulse-dot" />
                          Current
                        </span>
                      )}
                    </div>

                    {/* Bullet points */}
                    <ul className="reveal-stagger space-y-2.5 mt-4">
                      {exp.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="reveal-child flex items-start gap-3 text-base text-[#999] leading-relaxed"
                        >
                          <span className="text-[#a78bfa] mt-[6px] shrink-0 text-[8px]">&#9679;</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies & Tools */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2.5 py-1 bg-[#141414] border border-[#1f1f1f] text-[#888] text-[12px] font-mono rounded hover:border-[#333] hover:text-[#ccc] transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer link */}
        <div className="reveal mt-8 pt-6 border-t border-[#1f1f1f] text-center">
          <a
            href="https://linkedin.com/in/aldenong123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#555] hover:text-[#888] font-mono transition-colors duration-200"
          >
            view full experience &#x2197;
          </a>
        </div>
      </div>
    </section>
  );
}
