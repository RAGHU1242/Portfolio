"use client";

import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  label?: string; // e.g. "01" for section numbering
}

/**
 * SectionWrapper
 * Consistent section container. Scroll-reveal animation is handled
 * by Framer Motion at the component level — this wrapper just provides
 * layout, ID, and semantic structure.
 */
export default function SectionWrapper({
  id,
  children,
  className = "",
  label,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`section ${className}`}
      aria-label={label}
    >
      <div className="container">{children}</div>
    </section>
  );
}
