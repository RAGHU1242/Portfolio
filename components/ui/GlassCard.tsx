"use client";

import { ReactNode, forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  /** Faint accent glow on hover */
  glow?: boolean;
  /** Render as a non-animated div (e.g. for list items that already animate) */
  plain?: boolean;
}

/**
 * GlassCard
 * Reusable glass-morphism card. hover=true adds subtle elevation.
 * plain=true skips Framer Motion for performance in long lists.
 */
export default function GlassCard({
  children,
  className = "",
  hover = false,
  glow = false,
  plain = false,
  ...props
}: GlassCardProps) {
  const base = `glass ${hover ? "glass-hover" : ""} ${className}`;
  const glowStyle = glow
    ? {
        boxShadow: "0 0 0 1px rgba(99,102,241,0.15), 0 0 24px rgba(99,102,241,0.06)",
      }
    : undefined;

  if (plain) {
    return (
      <div className={base} style={glowStyle}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={base}
      style={glowStyle}
      whileHover={
        hover
          ? {
              y: -3,
              borderColor: "rgba(255,255,255,0.12)",
              transition: { duration: 0.2, ease: "easeOut" },
            }
          : undefined
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}
