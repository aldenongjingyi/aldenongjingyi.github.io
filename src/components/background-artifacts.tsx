"use client";

import { useEffect, useRef, type RefObject } from "react";

interface BackgroundArtifactsProps {
  scrollRef: RefObject<HTMLDivElement | null>;
}

export function BackgroundArtifacts({ scrollRef }: BackgroundArtifactsProps) {
  const layerRefs = useRef<(Element | null)[]>([]);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const layers = [
      { idx: 0, ty: -0.04, rot: 0.015, baseRot: 30 },
      { idx: 1, ty: -0.08 },
      { idx: 2, ty: -0.12, rot: 0.008, baseRot: -12 },
      { idx: 3, ty: 0.06, rot: 0.025, baseRot: 0 },
      { idx: 4, ty: -0.05, rot: 0.02, baseRot: 15 },
      { idx: 5, ty: -0.15 },
      { idx: 6, ty: -0.1 },
      { idx: 7, ty: -0.06 },
      { idx: 8, ty: -0.09 },
      { idx: 9, ty: -0.03 },
      { idx: 10, ty: -0.06 },
      { idx: 11, ty: -0.04 },
    ];

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = scrollEl.scrollTop;
        for (const l of layers) {
          const el = layerRefs.current[l.idx] as HTMLElement | null;
          if (!el) continue;
          el.style.transform = l.rot
            ? `translateY(${y * l.ty}px) rotate(${(l.baseRot ?? 0) + y * l.rot}deg)`
            : `translateY(${y * l.ty}px)`;
        }
        ticking = false;
      });
    };

    scrollEl.addEventListener("scroll", onScroll, { passive: true });
    return () => scrollEl.removeEventListener("scroll", onScroll);
  }, [scrollRef]);

  return (
    <div
      className="sticky top-0 left-0 w-full h-0 overflow-visible pointer-events-none"
      style={{ zIndex: 1 }}
    >
      {/* Hexagonal wireframe — slow drift + rotation */}
      <svg
        ref={(el) => { layerRefs.current[0] = el; }}
        className="absolute will-change-transform"
        style={{ top: "12vh", right: "-40px", width: "320px", height: "320px", opacity: 0.025 }}
        viewBox="0 0 200 200"
        fill="none"
      >
        <polygon points="100,10 180,55 180,145 100,190 20,145 20,55" stroke="#6c8aec" strokeWidth="0.5" />
        <polygon points="100,35 158,65 158,135 100,165 42,135 42,65" stroke="#6c8aec" strokeWidth="0.3" />
      </svg>

      {/* Dot grid — medium drift */}
      <svg
        ref={(el) => { layerRefs.current[1] = el; }}
        className="absolute will-change-transform"
        style={{ top: "5vh", left: "6%", width: "200px", height: "400px", opacity: 0.025 }}
        viewBox="0 0 200 400"
        fill="none"
      >
        {Array.from({ length: 8 }, (_, r) =>
          Array.from({ length: 4 }, (_, c) => (
            <circle key={`${r}-${c}`} cx={c * 50 + 25} cy={r * 50 + 25} r="1.2" fill="#6c8aec" />
          ))
        )}
      </svg>

      {/* Diagonal lines — faster drift */}
      <svg
        ref={(el) => { layerRefs.current[2] = el; }}
        className="absolute will-change-transform"
        style={{ top: "35vh", right: "18%", width: "160px", height: "320px", opacity: 0.018 }}
        viewBox="0 0 160 320"
        fill="none"
      >
        {Array.from({ length: 6 }, (_, i) => (
          <line key={i} x1={i * 26} y1="0" x2={i * 26 + 70} y2="320" stroke="#6c8aec" strokeWidth="0.5" />
        ))}
      </svg>

      {/* Concentric circles — slow rotation */}
      <svg
        ref={(el) => { layerRefs.current[3] = el; }}
        className="absolute will-change-transform"
        style={{ top: "70vh", left: "12%", width: "240px", height: "240px", opacity: 0.018 }}
        viewBox="0 0 240 240"
        fill="none"
      >
        <circle cx="120" cy="120" r="100" stroke="#6c8aec" strokeWidth="0.4" />
        <circle cx="120" cy="120" r="65" stroke="#6c8aec" strokeWidth="0.3" />
        <circle cx="120" cy="120" r="30" stroke="#6c8aec" strokeWidth="0.3" />
      </svg>

      {/* Triangle — very slow drift */}
      <svg
        ref={(el) => { layerRefs.current[4] = el; }}
        className="absolute will-change-transform"
        style={{ top: "55vh", left: "60%", width: "140px", height: "140px", opacity: 0.02 }}
        viewBox="0 0 160 160"
        fill="none"
      >
        <polygon points="80,15 150,140 10,140" stroke="#6c8aec" strokeWidth="0.5" />
        <polygon points="80,40 130,120 30,120" stroke="#6c8aec" strokeWidth="0.3" />
      </svg>

      {/* Gradient vertical line 1 */}
      <div
        ref={(el) => { layerRefs.current[5] = el; }}
        className="absolute w-px will-change-transform"
        style={{
          top: "8vh",
          right: "30%",
          height: "220px",
          opacity: 0.04,
          background: "linear-gradient(to bottom, transparent, #6c8aec, transparent)",
        }}
      />

      {/* Gradient vertical line 2 */}
      <div
        ref={(el) => { layerRefs.current[6] = el; }}
        className="absolute w-px will-change-transform"
        style={{
          top: "50vh",
          left: "40%",
          height: "160px",
          opacity: 0.03,
          background: "linear-gradient(to bottom, transparent, #6c8aec, transparent)",
        }}
      />

      {/* Cross mark 1 */}
      <svg
        ref={(el) => { layerRefs.current[7] = el; }}
        className="absolute will-change-transform"
        style={{ top: "22vh", left: "3%", width: "50px", height: "50px", opacity: 0.025 }}
        viewBox="0 0 50 50"
        fill="none"
      >
        <line x1="25" y1="10" x2="25" y2="40" stroke="#6c8aec" strokeWidth="0.8" />
        <line x1="10" y1="25" x2="40" y2="25" stroke="#6c8aec" strokeWidth="0.8" />
      </svg>

      {/* Cross mark 2 */}
      <svg
        ref={(el) => { layerRefs.current[8] = el; }}
        className="absolute will-change-transform"
        style={{ top: "68vh", right: "7%", width: "35px", height: "35px", opacity: 0.02 }}
        viewBox="0 0 35 35"
        fill="none"
      >
        <line x1="17.5" y1="5" x2="17.5" y2="30" stroke="#6c8aec" strokeWidth="0.6" />
        <line x1="5" y1="17.5" x2="30" y2="17.5" stroke="#6c8aec" strokeWidth="0.6" />
      </svg>

      {/* Ambient glow orb 1 */}
      <div
        ref={(el) => { layerRefs.current[9] = el; }}
        className="absolute rounded-full will-change-transform"
        style={{
          top: "8vh",
          right: "-100px",
          width: "380px",
          height: "380px",
          opacity: 0.05,
          background: "radial-gradient(circle, #6c8aec 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Ambient glow orb 2 */}
      <div
        ref={(el) => { layerRefs.current[10] = el; }}
        className="absolute rounded-full will-change-transform"
        style={{
          top: "50vh",
          left: "-80px",
          width: "320px",
          height: "320px",
          opacity: 0.035,
          background: "radial-gradient(circle, #6c8aec 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Ambient glow orb 3 */}
      <div
        ref={(el) => { layerRefs.current[11] = el; }}
        className="absolute rounded-full will-change-transform"
        style={{
          top: "80vh",
          right: "15%",
          width: "280px",
          height: "280px",
          opacity: 0.025,
          background: "radial-gradient(circle, #6c8aec 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
    </div>
  );
}
