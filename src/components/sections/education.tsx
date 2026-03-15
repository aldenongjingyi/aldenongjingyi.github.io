"use client";

import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";

export function EducationSection() {
  return (
    <section id="education" className="pb-24">
      <div className="animate-in mb-1">
        <span className="text-xs text-[#555] uppercase tracking-widest">
          Academic
        </span>
      </div>
      <h2 className="animate-in text-2xl font-bold text-[#f5f5f5] mb-8" style={{ animationDelay: '40ms' }}>
        Education
      </h2>

      <div className="space-y-3">
        {education.map((edu, i) => (
          <div
            key={i}
            className="animate-in flex items-start gap-4 p-4 rounded-lg bg-[#111] border border-[#1f1f1f]"
            style={{ animationDelay: `${80 + i * 60}ms` }}
          >
            <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-[#262626] flex items-center justify-center shrink-0">
              <GraduationCap size={18} className="text-[#666]" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#f5f5f5]">
                {edu.degree}
              </h3>
              <p className="text-sm text-[#f59e0b] mt-0.5">{edu.school}</p>
              <p className="text-xs text-[#555] mt-1">{edu.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
