"use client";

import { useEffect, useState, useMemo } from "react";

interface Star {
  id: number;
  top: number;
  left: number;
  size: number;
  opacity: number;
  color: string;
  duration: number;
  delay: number;
}

/**
 * GlobalStarfield
 *
 * Persistent, full-page cosmic starfield with very slow, subconscious drift.
 * Pure lightweight CSS animation (no heavy Three.js / canvas loops).
 * Automatically reduces star count on mobile and respects prefers-reduced-motion.
 */
export default function GlobalStarfield() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const starCount = isMobile ? 35 : 85;

  const stars: Star[] = useMemo(() => {
    if (!mounted) return [];
    return Array.from({ length: starCount }, (_, i) => {
      const isGrey = i % 3 === 0;
      return {
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 1.4 + 0.6,
        opacity: isGrey ? Math.random() * 0.25 + 0.1 : Math.random() * 0.5 + 0.2,
        color: isGrey ? "#8c8c8c" : "#ffffff",
        duration: Math.random() * 20 + 25, // 25s - 45s slow drift
        delay: Math.random() * 8,
      };
    });
  }, [mounted, starCount]);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Slow-moving star layer 1 */}
      <div
        className="starfield-layer-slow"
        style={{
          position: "absolute",
          inset: 0,
        }}
      >
        {stars.map((s) => (
          <span
            key={s.id}
            style={{
              position: "absolute",
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              borderRadius: "50%",
              backgroundColor: s.color,
              opacity: s.opacity,
              boxShadow: s.size > 1.4 ? `0 0 2px ${s.color}` : "none",
            }}
          />
        ))}
      </div>

      <style>{`
        .starfield-layer-slow {
          animation: globalStarDrift 40s ease-in-out infinite alternate;
        }

        @keyframes globalStarDrift {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-24px) translateX(12px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .starfield-layer-slow {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
