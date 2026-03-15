"use client";

import { Play, ArrowUpRight } from "lucide-react";

export function ReelCTA() {
  return (
    <section className="pt-[80px]">
      <div className="max-w-[960px] mx-auto px-6 lg:px-16">
        <a
          href="/reel"
          target="_blank"
          rel="noopener noreferrer"
          className="reveal group flex items-center gap-5 p-5 bg-[#111]/50 border border-[#1f1f1f] hover:border-[#a78bfa]/30 hover:bg-[#111] transition-all duration-300"
        >
          {/* Play icon */}
          <div className="w-12 h-12 shrink-0 border border-[#1f1f1f] group-hover:border-[#a78bfa]/40 bg-[#0a0a0a] flex items-center justify-center transition-colors duration-300">
            <Play
              size={18}
              className="text-[#555] group-hover:text-[#a78bfa] transition-colors duration-300 ml-0.5"
            />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-[15px] font-mono text-[#f5f5f5] mb-1">
              cinematic <span className="text-[#a78bfa]">reel</span>
            </p>
            <p className="text-xs font-mono text-[#555]">
              Animated intro designed for Instagram &amp; TikTok &middot; 9:16
            </p>
          </div>

          {/* Arrow */}
          <ArrowUpRight
            size={16}
            className="text-[#333] group-hover:text-[#a78bfa] transition-colors duration-300 shrink-0"
          />
        </a>
      </div>
    </section>
  );
}
