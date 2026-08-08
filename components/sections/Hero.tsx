"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, type Variants } from "framer-motion";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import dynamic from "next/dynamic";
import { personal, profiles } from "@/data/portfolio";

// ─────────────────────────────────────────────
// LAZY 3D BALLOON SCENE WITH CSS FALLBACK
// ─────────────────────────────────────────────
const BalloonScene = dynamic(() => import("@/components/3d/BalloonScene"), {
  ssr: false,
  loading: () => <BalloonFallback />,
});

function BalloonFallback() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-hidden="true"
    >
      <div
        className="animate-float"
        style={{
          width: "220px",
          height: "260px",
          borderRadius: "50% 50% 50% 50% / 55% 55% 45% 45%",
          background:
            "radial-gradient(ellipse at 35% 35%, #FFAA52 0%, #FF8500 55%, #D94A00 100%)",
          boxShadow:
            "inset -12px -10px 22px rgba(120,30,0,0.32), 6px 14px 30px rgba(255,133,0,0.22)",
          position: "relative",
        }}
      >
        {/* Face */}
        <div
          style={{
            position: "absolute",
            top: "42%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "9px",
          }}
        >
          <div style={{ display: "flex", gap: "24px" }}>
            <div
              style={{
                width: "11px",
                height: "13px",
                borderRadius: "50%",
                background: "#110702",
              }}
            />
            <div
              style={{
                width: "11px",
                height: "13px",
                borderRadius: "50%",
                background: "#110702",
              }}
            />
          </div>
          <div
            style={{
              width: "32px",
              height: "10px",
              border: "2.5px solid #110702",
              borderTop: "none",
              borderRadius: "0 0 16px 16px",
            }}
          />
        </div>
        {/* String */}
        <div
          style={{
            position: "absolute",
            bottom: "-40px",
            left: "50%",
            width: "2px",
            height: "40px",
            background: "#E8E8E8",
            transform: "translateX(-50%)",
          }}
        />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// HERO SECTION COMPONENT (MATCHING IMAGE 2)
// ─────────────────────────────────────────────
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsMobile(
        window.innerWidth < 768 || window.matchMedia("(hover: none)").matches
      );
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isMobile) return;
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    },
    [isMobile]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const socialLinks = [
    { icon: SiGithub, href: profiles.github, label: "GitHub", show: !!profiles.github },
    { icon: FaLinkedin, href: profiles.linkedin, label: "LinkedIn", show: !!profiles.linkedin },
    { icon: SiLeetcode, href: profiles.leetcode, label: "LeetCode", show: !!profiles.leetcode },
  ].filter((s) => s.show);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: "5.5rem",
        paddingBottom: "6.5rem",
      }}
      aria-label="Hero"
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1320px",
          marginInline: "auto",
          paddingInline: "clamp(1.5rem, 4vw, 3rem)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "clamp(2rem, 4vw, 4rem)",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Column: Exact Visual Hierarchy from Image 2 */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "680px",
            }}
          >
            {/* 1. "HELLO, I'M" — Uppercase, letter-spaced, muted, NO top line */}
            <motion.p
              variants={itemVariants}
              style={{
                fontFamily: "var(--font-inter, sans-serif)",
                fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#A0A0A0",
                margin: "0 0 1rem 0",
              }}
            >
              HELLO, I&apos;M
            </motion.p>

            {/* 2. "M. Raghavendra" — Huge, bold, clean white, single line on desktop */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontFamily: "var(--font-inter, sans-serif)",
                fontSize: "clamp(2.85rem, 6.2vw, 5.25rem)",
                fontWeight: 750,
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
                margin: "0 0 1.65rem 0",
                whiteSpace: "nowrap",
              }}
              className="hero-title"
            >
              {personal.displayName}
            </motion.h1>

            {/* 3. Violet Accent Line BELOW the Name */}
            <motion.div
              variants={itemVariants}
              style={{
                width: "148px",
                height: "4.5px",
                borderRadius: "999px",
                background: "#625BFF",
                boxShadow: "0 0 14px rgba(98, 91, 255, 0.35)",
                margin: "0 0 2rem 0",
              }}
            />

            {/* 4. Full Readable Role Line with Violet Dot Separators */}
            <motion.div
              variants={itemVariants}
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "0.85rem",
                fontFamily: "var(--font-inter, sans-serif)",
                fontSize: "clamp(1.15rem, 1.8vw, 1.45rem)",
                fontWeight: 500,
                color: "#C8C8C8",
                margin: "0 0 1.65rem 0",
                lineHeight: 1.3,
              }}
            >
              <span>Software Developer</span>
              <span style={{ color: "#635BFF", fontSize: "1.1rem", margin: "0 0.15rem" }}>&bull;</span>
              <span>Tech Enthusiast</span>
              <span style={{ color: "#635BFF", fontSize: "1.1rem", margin: "0 0.15rem" }}>&bull;</span>
              <span>Problem Solver</span>
            </motion.div>

            {/* 5. Supporting Description */}
            <motion.p
              variants={itemVariants}
              style={{
                fontFamily: "var(--font-inter, sans-serif)",
                fontSize: "clamp(1rem, 1.35vw, 1.15rem)",
                fontWeight: 400,
                lineHeight: 1.7,
                color: "#8E8E8E",
                margin: "0 0 2rem 0",
                maxWidth: "620px",
              }}
            >
              Solving real-world problems through innovative solutions,
              combining technical expertise with creativity.
            </motion.p>

            {/* 6. Social Icon Buttons (GitHub, LinkedIn, LeetCode) */}
            {socialLinks.length > 0 && (
              <motion.div
                variants={itemVariants}
                style={{
                  display: "flex",
                  gap: "0.85rem",
                  alignItems: "center",
                  margin: "0 0 2rem 0",
                }}
                aria-label="Social profiles"
              >
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label={s.label}
                    title={s.label}
                  >
                    <s.icon size={20} />
                  </a>
                ))}
              </motion.div>
            )}

            {/* 7. CTA Buttons (Primary Violet + Secondary Dark) */}
            <motion.div
              variants={itemVariants}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-view-work"
                id="hero-view-work"
              >
                <span>View My Work</span>
                <span className="cta-arrow">&nbsp;↗</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-lets-connect"
                id="hero-lets-connect"
              >
                <span>Let&apos;s Connect</span>
                <span className="cta-arrow">&nbsp;↗</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Orange Balloon Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            style={{
              height: "480px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-hidden="true"
            className="balloon-panel"
          >
            {/* Soft Warm Radial Floor Glow */}
            <div
              style={{
                position: "absolute",
                bottom: "12%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "52%",
                height: "24%",
                background:
                  "radial-gradient(ellipse at center, rgba(255,133,0,0.16) 0%, transparent 70%)",
                pointerEvents: "none",
                borderRadius: "50%",
                filter: "blur(22px)",
              }}
            />
            <BalloonScene mouseX={mousePos.x} mouseY={mousePos.y} />
          </motion.div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────
          EXACT SCROLL INDICATOR MATCHING IMAGE 2:
          - Centered horizontally at bottom 50%
          - Minimal mouse-outline icon (~22x34px) with scroll line
          - "SCROLL" uppercase letter-spaced text
          - Small pulsing violet dot (~6px)
      ───────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        style={{
          position: "absolute",
          bottom: "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.45rem",
          zIndex: 2,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        {/* Minimal Mouse Icon */}
        <div
          style={{
            width: "22px",
            height: "34px",
            borderRadius: "12px",
            border: "1.6px solid #D5D5D5",
            display: "flex",
            justifyContent: "center",
            paddingTop: "6px",
          }}
        >
          <motion.div
            animate={{ y: [0, 6, 0], opacity: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            style={{
              width: "2px",
              height: "6px",
              borderRadius: "1px",
              background: "#D5D5D5",
            }}
          />
        </div>

        {/* "SCROLL" Text */}
        <span
          style={{
            fontFamily: "var(--font-inter, sans-serif)",
            fontSize: "0.72rem",
            fontWeight: 500,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#8A8A8A",
            marginLeft: "0.28em",
          }}
        >
          SCROLL
        </span>

        {/* Pulsing Violet Dot */}
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.15, 0.9] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#635BFF",
            boxShadow: "0 0 8px rgba(99, 91, 255, 0.6)",
          }}
        />
      </motion.div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .hero-title {
            white-space: normal !important;
          }
          .balloon-panel {
            height: 320px !important;
            order: 2;
          }
        }
        @media (max-width: 600px) {
          .balloon-panel {
            height: 260px !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-grid * { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
