"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
  /** Duration before starting the exit animation (ms). Default 1800 */
  duration?: number;
}

/**
 * LoadingScreen
 *
 * Audio-waveform style loader with 5 bars.
 * Respects prefers-reduced-motion — if set, skips instantly.
 * Exit: opacity fade + slight scale-up (premium feel, not janky).
 */
export default function LoadingScreen({
  onComplete,
  duration = 1800,
}: LoadingScreenProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(false);
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  // Bar animation delays — staggered for organic feel
  const bars = [
    { delay: 0,    height: [0.3, 1.0, 0.4, 0.8, 0.3] },
    { delay: 0.15, height: [0.6, 0.3, 1.0, 0.5, 0.7] },
    { delay: 0.05, height: [1.0, 0.5, 0.3, 1.0, 0.4] },
    { delay: 0.25, height: [0.4, 0.9, 0.6, 0.3, 1.0] },
    { delay: 0.1,  height: [0.7, 0.4, 0.9, 0.6, 0.3] },
  ];

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "var(--bg-primary)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.75rem",
          }}
        >
          {/* Waveform bars */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              height: "40px",
            }}
            aria-hidden="true"
          >
            {bars.map((bar, i) => (
              <motion.span
                key={i}
                style={{
                  display: "block",
                  width: "3px",
                  borderRadius: "2px",
                  background: "var(--text-primary)",
                  transformOrigin: "center",
                  height: "100%",
                }}
                animate={{
                  scaleY: bar.height,
                  opacity: [0.4, 1, 0.5, 1, 0.4],
                }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: bar.delay,
                  repeatType: "mirror",
                }}
              />
            ))}
          </div>

          {/* Label */}
          <span
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              userSelect: "none",
            }}
            aria-live="polite"
          >
            Loading
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
