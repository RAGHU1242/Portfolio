"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { personal } from "@/data/portfolio";

const navLinks = [
  { label: "Home",       href: "#home" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Education",  href: "#education" },
  { label: "Contact",    href: "#contact" },
];

function scrollTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  } else if (href === "#home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActiveId(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setMenuOpen(false);
    scrollTo(href);
  }, []);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition:
          "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
        background: scrolled ? "rgba(5,5,5,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid transparent",
      }}
      role="banner"
    >
      <nav
        style={{
          width: "100%",
          maxWidth: "1320px",
          marginInline: "auto",
          paddingInline: "clamp(1.5rem, 4vw, 3rem)",
          height: "4.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        aria-label="Primary navigation"
      >
        {/* Brand / Logo */}
        <button
          onClick={() => scrollTo("#home")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-inter, sans-serif)",
            fontSize: "1.15rem",
            fontWeight: 700,
            letterSpacing: "-0.01em",
            color: "#F5F5F5",
            padding: 0,
            display: "inline-flex",
            alignItems: "baseline",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
          aria-label="Scroll to home"
        >
          {personal.displayName}
          <span style={{ color: "#6C63FF", marginLeft: "1px" }}>.</span>
        </button>

        {/* Center Nav Items */}
        <ul
          role="list"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.25rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeId === id;

            return (
              <li key={link.href} style={{ position: "relative" }}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right: Resume Button */}
        <div style={{ display: "flex", alignItems: "center" }} className="hidden-mobile">
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-resume"
            aria-label="Open resume PDF"
          >
            <FileText size={15} />
            Resume
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMenuOpen((o) => !o)}
          style={{
            background: "none",
            border: "none",
            color: "#C5C5C5",
            cursor: "pointer",
            display: "none",
            padding: "0.25rem",
          }}
          className="show-mobile"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            style={{
              overflow: "hidden",
              background: "rgba(5,5,5,0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
            role="dialog"
            aria-label="Mobile navigation"
          >
            <ul
              role="list"
              style={{
                listStyle: "none",
                padding: "1rem 1.75rem 1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.35rem",
                margin: 0,
              }}
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "var(--font-inter, sans-serif)",
                      fontSize: "1.05rem",
                      fontWeight: 500,
                      color: "#C5C5C5",
                      padding: "0.65rem 0",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#FFFFFF"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#C5C5C5"; }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li style={{ paddingTop: "0.75rem" }}>
                <a
                  href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-resume"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <FileText size={15} />
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile   { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
      `}</style>
    </motion.header>
  );
}
