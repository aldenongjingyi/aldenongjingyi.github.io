"use client";

import { useState, useEffect, useCallback } from "react";

/* ─── Particles ─── */
const PARTICLES = Array.from({ length: 25 }, (_, i) => ({
  left: `${(i * 23.7 + 11) % 100}%`,
  top: `${(i * 31.3 + 7) % 100}%`,
  duration: `${8 + (i % 7) * 2}s`,
  delay: `${(i * 0.8) % 6}s`,
  size: i % 5 === 0 ? 3 : i % 3 === 0 ? 2 : 1,
}));

const NAME = "Alden Ong";
const BIO_LINES = [
  "Curious about how things work,",
  "happiest when shipping.",
  "Fullstack developer building",
  "web & mobile products.",
];
const BADGES = ["Next.js", "React", "Flutter", "Python", "TypeScript", "Node"];

/* ─── Timeline (step → trigger time in ms) — 1.5× slower ─── */
const TIMELINE: [number, number][] = [
  [1, 750],   // particles
  [2, 1800],  // (reserved)
  [3, 2700],  // name typewriter
  [4, 3600],  // role line
  [5, 4200],  // bio lines
  [6, 4950],  // currently widget
  [7, 5700],  // skill badges
  [8, 6450],  // glow pulse
  [9, 7500],  // bottom tag
];
const FADE_OUT_AT = 8250;
const LOOP_AT = 9000;

/* ─── Inner content (re-mounts on each cycle) ─── */
function ReelContent({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const [showCursor, setShowCursor] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  // Sequential timeline
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (const [s, ms] of TIMELINE) {
      timers.push(setTimeout(() => setStep(s), ms));
    }
    timers.push(setTimeout(() => setFadeOut(true), FADE_OUT_AT));
    timers.push(setTimeout(() => onComplete(), LOOP_AT));
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  // Typewriter for name
  useEffect(() => {
    if (step < 3) return;
    setShowCursor(true);
    const iv = setInterval(() => {
      setTypedChars((c) => {
        if (c >= NAME.length) {
          clearInterval(iv);
          return c;
        }
        return c + 1;
      });
    }, 120);
    return () => clearInterval(iv);
  }, [step]);

  // Hide cursor after typing finishes
  useEffect(() => {
    if (typedChars < NAME.length) return;
    const t = setTimeout(() => setShowCursor(false), 400);
    return () => clearTimeout(t);
  }, [typedChars]);

  const vis = (threshold: number) =>
    ({
      opacity: step >= threshold ? 1 : 0,
      transform: step >= threshold ? "translateY(0)" : "translateY(12px)",
      transition: "opacity 0.75s ease, transform 0.75s ease",
    }) as React.CSSProperties;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.675s ease",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "40px 28px",
        fontFamily: "var(--font-geist-mono), monospace",
        overflow: "hidden",
      }}
    >
      {/* Particles */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="reel-particle"
          style={{
            position: "absolute",
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: "rgba(167,139,250,0.35)",
            opacity: step >= 1 ? 0.7 : 0,
            transition: "opacity 1s ease",
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* Glow pulse overlay */}
      <div
        className={step >= 8 ? "reel-glow-active" : ""}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 45%, rgba(167,139,250,0.15) 0%, transparent 70%)",
          opacity: 0,
          pointerEvents: "none",
        }}
      />

      {/* Name (typewriter) */}
      <div style={{ ...vis(3), marginBottom: 6 }}>
        <h1
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: "#f5f5f5",
            margin: 0,
            fontFamily: "var(--font-geist-sans), sans-serif",
            textShadow: "0 0 40px rgba(245,245,245,0.08)",
          }}
        >
          {NAME.slice(0, typedChars)}
          {showCursor && (
            <span className="reel-cursor" style={{ color: "#a78bfa" }}>
              |
            </span>
          )}
        </h1>
      </div>

      {/* Role */}
      <div style={{ ...vis(4), marginBottom: 28 }}>
        <p
          style={{
            fontSize: 16,
            color: "#a78bfa",
            margin: 0,
            letterSpacing: "0.05em",
            textShadow: "0 0 20px rgba(167,139,250,0.15)",
          }}
        >
          fullstack software{" "}
          <span style={{ color: "#8b6fdb" }}>developer.</span>
        </p>
      </div>

      {/* Bio lines */}
      <div style={{ marginBottom: 24 }}>
        {BIO_LINES.map((line, i) => (
          <p
            key={i}
            style={{
              fontSize: 14,
              color: "#999",
              margin: "0 0 4px 0",
              lineHeight: 1.6,
              opacity: step >= 5 ? 1 : 0,
              transform: step >= 5 ? "translateY(0)" : "translateY(8px)",
              transition: `opacity 0.6s ease ${i * 225}ms, transform 0.6s ease ${i * 225}ms`,
            }}
          >
            {line}
          </p>
        ))}
      </div>

      {/* Currently widget */}
      <div style={{ ...vis(6), marginBottom: 24 }}>
        <div
          style={{
            background: "rgba(17,17,17,0.5)",
            border: "1px solid #1f1f1f",
            padding: "16px 18px",
          }}
        >
          <p
            style={{
              fontSize: 10,
              color: "#555",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: 10,
              margin: "0 0 10px 0",
            }}
          >
            currently
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#22c55e",
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: 13, color: "#888" }}>
                Kuala Lumpur, MY
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                className="reel-pulse-dot"
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#a78bfa",
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: 13, color: "#888" }}>
                Software Dev @ Map72
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#60a5fa",
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: 13, color: "#888" }}>
                making content, chasing ideas
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Skill badges */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
        {BADGES.map((badge, i) => (
          <span
            key={badge}
            style={{
              fontSize: 12,
              color: "#888",
              background: "#111",
              border: "1px solid #1f1f1f",
              padding: "4px 10px",
              opacity: step >= 7 ? 1 : 0,
              transform: step >= 7 ? "scale(1)" : "scale(0.8)",
              transition: `opacity 0.45s ease ${i * 150}ms, transform 0.45s ease ${i * 150}ms`,
            }}
          >
            {badge}
          </span>
        ))}
      </div>

      {/* Bottom tag */}
      <div
        style={{
          ...vis(9),
          position: "absolute",
          bottom: 32,
          left: 0,
          right: 0,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: 11,
            color: "#444",
            margin: 0,
            letterSpacing: "0.1em",
          }}
        >
          aldenong.dev
        </p>
      </div>
    </div>
  );
}

/* ─── Main page ─── */
export default function ReelPage() {
  const [cycle, setCycle] = useState(0);

  const handleComplete = useCallback(() => {
    setCycle((c) => c + 1);
  }, []);

  // R key to restart
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "r" || e.key === "R") setCycle((c) => c + 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <style>{`
        @keyframes reel-float {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-8px) translateX(4px); }
          66% { transform: translateY(4px) translateX(-4px); }
        }
        .reel-particle {
          animation-name: reel-float;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        @keyframes reel-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(167,139,250,0.4); }
          50% { box-shadow: 0 0 0 4px rgba(167,139,250,0); }
        }
        .reel-pulse-dot {
          animation: reel-pulse 2s ease-in-out infinite;
        }
        @keyframes reel-glow {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
        .reel-glow-active {
          animation: reel-glow 2.25s ease-in-out forwards !important;
          opacity: 0 !important;
        }
        @keyframes reel-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .reel-cursor {
          animation: reel-blink 0.6s step-end infinite;
        }
      `}</style>

      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#111",
          gap: 16,
        }}
      >
        {/* Instruction */}
        <p
          style={{
            fontSize: 13,
            color: "#555",
            fontFamily: "var(--font-geist-mono), monospace",
            margin: 0,
          }}
        >
          press <span style={{ color: "#888" }}>R</span> to restart &middot;
          390&times;844 &middot; 9:16
        </p>

        {/* Phone frame */}
        <div
          style={{
            width: 390,
            height: 844,
            background: "#0a0a0a",
            borderRadius: 12,
            overflow: "hidden",
            position: "relative",
            border: "1px solid #222",
            boxShadow: "0 0 60px rgba(0,0,0,0.5)",
          }}
        >
          <ReelContent key={cycle} onComplete={handleComplete} />
        </div>
      </div>
    </>
  );
}
