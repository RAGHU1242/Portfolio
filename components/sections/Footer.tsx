"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { personal, profiles } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-secondary)",
        padding: "3.5rem 0 2.5rem",
        position: "relative",
        zIndex: 10,
      }}
      role="contentinfo"
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
            paddingBottom: "2rem",
            borderBottom: "1px solid var(--border)",
          }}
        >
          {/* Left: Name */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontWeight: 600,
                fontSize: "1rem",
                letterSpacing: "0.04em",
                color: "var(--text-primary)",
              }}
            >
              {personal.displayName}.
            </span>
          </div>

          {/* Center: Statement */}
          <p
            className="body-md"
            style={{
              color: "var(--text-muted)",
              margin: 0,
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "0.8rem",
            }}
          >
            Built with curiosity &amp; code.
          </p>

          {/* Right: Links + Back to top */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {profiles.github && (
              <a
                href={profiles.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                style={{ width: "2.2rem", height: "2.2rem" }}
                aria-label="GitHub profile"
              >
                <SiGithub size={14} />
              </a>
            )}
            {profiles.linkedin && (
              <a
                href={profiles.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                style={{ width: "2.2rem", height: "2.2rem" }}
                aria-label="LinkedIn profile"
              >
                <FaLinkedin size={14} />
              </a>
            )}
            <a
              href={`mailto:${personal.email}`}
              className="social-btn"
              style={{ width: "2.2rem", height: "2.2rem" }}
              aria-label="Email M. Raghavendra"
            >
              <Mail size={14} />
            </a>

            <button
              onClick={scrollToTop}
              className="btn btn-secondary"
              style={{ padding: "0.35rem 0.65rem", fontSize: "0.75rem" }}
              aria-label="Scroll back to top of page"
            >
              <ArrowUp size={12} />
              Top
            </button>
          </div>
        </div>

        {/* Small copyright row */}
        <div
          style={{
            paddingTop: "1.75rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.75rem",
            color: "var(--text-muted)",
            fontSize: "0.75rem",
            fontFamily: "var(--font-mono, monospace)",
          }}
        >
          <p style={{ margin: 0 }}>
            &copy; {new Date().getFullYear()} {personal.displayName}. All rights reserved.
          </p>
          <p style={{ margin: 0, color: "var(--text-muted)" }}>
            B.Tech Information Technology &bull; VJIT
          </p>
        </div>
      </div>
    </footer>
  );
}
