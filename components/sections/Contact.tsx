"use client";

import { useState } from "react";
import { Mail, ArrowUpRight, Copy, Check, Send } from "lucide-react";
import { SiGithub, SiLeetcode, SiCodechef, SiHackerrank } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { personal, profiles } from "@/data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("");
  const [note, setNote] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleLaunchEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      subject || "Portfolio Inquiry — M. Raghavendra"
    );
    const mailtoBody = encodeURIComponent(note || "Hello Raghavendra,");
    window.location.href = `mailto:${personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  const socialLinks = [
    { label: "GitHub", handle: "RAGHU1242", href: profiles.github, icon: SiGithub },
    { label: "LinkedIn", handle: "mukku-raghavendra", href: profiles.linkedin, icon: FaLinkedin },
    { label: "LeetCode", handle: "m_raghavendra", href: profiles.leetcode, icon: SiLeetcode },
    { label: "HackerRank", handle: "m_raghavendra331", href: profiles.hackerrank, icon: SiHackerrank },
    { label: "CodeChef", handle: "m_raghu_1242", href: profiles.codechef, icon: SiCodechef },
  ];

  return (
    <SectionWrapper id="contact" label="Contact">
      <div className="section-header">
        <p className="overline">06 // CONTACT</p>
        <h2 className="heading-display" style={{ marginTop: "0.5rem", maxWidth: "780px" }}>
          Let&apos;s build something meaningful.
        </h2>
        <p
          className="body-lg"
          style={{
            color: "var(--text-muted)",
            marginTop: "1rem",
            maxWidth: "560px",
            lineHeight: 1.7,
          }}
        >
          I&apos;m always open to interesting opportunities, collaborations, and conversations around technology.
        </p>
        <span className="section-line" />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.75rem",
        }}
        className="contact-layout"
      >
        {/* Left Column: Direct Email CTA & Copy Shortcut */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div
            className="interactive-card"
            tabIndex={0}
            style={{
              padding: "2.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <div>
              <span className="overline" style={{ letterSpacing: "0.15em" }}>DIRECT COMMUNICATION</span>
              <h3 className="heading-lg" style={{ color: "var(--text-primary)", marginTop: "0.35rem" }}>
                Send an Email
              </h3>
              <p className="body-md" style={{ color: "var(--text-muted)", marginTop: "0.25rem" }}>
                Reach me directly for engineering opportunities, internships, or collaboration.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a
                href={`mailto:${personal.email}`}
                className="btn-view-work"
                style={{
                  padding: "0.85rem 1.6rem",
                  fontSize: "0.925rem",
                  justifyContent: "center",
                  width: "100%",
                }}
                id="contact-get-in-touch"
              >
                <Mail size={16} />
                <span>GET IN TOUCH</span>
                <span className="cta-arrow">&nbsp;↗</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="btn-lets-connect"
                style={{
                  padding: "0.65rem 1.2rem",
                  fontSize: "0.825rem",
                  justifyContent: "center",
                  width: "100%",
                  fontFamily: "var(--font-mono, monospace)",
                }}
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check size={14} style={{ color: "#ffffff" }} />
                    <span>Copied: {personal.email}</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy: {personal.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Profiles List */}
          <div
            className="interactive-card"
            tabIndex={0}
            style={{ padding: "1.75rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}
          >
            <span className="overline" style={{ letterSpacing: "0.15em", marginBottom: "0.35rem" }}>
              CODING &amp; PROFESSIONAL PROFILES
            </span>

            {socialLinks.map((s) => (
              <div
                key={s.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.55rem 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <s.icon size={15} style={{ color: "var(--text-secondary)" }} />
                  <div>
                    <span className="heading-sm" style={{ fontSize: "0.825rem", color: "var(--text-primary)" }}>
                      {s.label}
                    </span>
                    <span className="mono" style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginLeft: "0.5rem" }}>
                      {s.handle}
                    </span>
                  </div>
                </div>

                {s.href ? (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive-tag"
                    style={{ fontSize: "0.725rem", padding: "0.3rem 0.65rem", textDecoration: "none" }}
                    aria-label={`Visit ${s.label} profile`}
                  >
                    Visit
                    <ArrowUpRight size={11} />
                  </a>
                ) : (
                  <span className="interactive-tag" style={{ fontSize: "0.68rem" }}>
                    Config pending
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Pre-filled Email Launcher */}
        <div
          className="interactive-card"
          tabIndex={0}
          style={{ padding: "2.25rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
        >
          <div>
            <div style={{ marginBottom: "1.5rem" }}>
              <span className="overline">PREPARE YOUR MESSAGE</span>
              <h3 className="heading-lg" style={{ color: "var(--text-primary)", marginTop: "0.35rem" }}>
                Quick Email Launcher
              </h3>
              <p className="body-md" style={{ color: "var(--text-muted)", marginTop: "0.25rem" }}>
                Fill out the fields below and launch directly into your native email client with pre-filled content.
              </p>
            </div>

            <form onSubmit={handleLaunchEmail} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              <div>
                <label htmlFor="contact-subject-field" className="overline" style={{ display: "block", marginBottom: "0.4rem" }}>
                  SUBJECT
                </label>
                <input
                  id="contact-subject-field"
                  type="text"
                  placeholder="e.g. Opportunity at [Company] / Project Inquiry"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    outline: "none",
                    transition: "border-color 0.2s, background-color 0.2s",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)";
                  }}
                />
              </div>

              <div>
                <label htmlFor="contact-note-field" className="overline" style={{ display: "block", marginBottom: "0.4rem" }}>
                  MESSAGE BRIEF
                </label>
                <textarea
                  id="contact-note-field"
                  rows={5}
                  placeholder="Hello Raghavendra, I came across your portfolio and wanted to discuss..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    outline: "none",
                    resize: "vertical",
                    minHeight: "120px",
                    transition: "border-color 0.2s, background-color 0.2s",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)";
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-view-work"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "0.85rem 1.5rem",
                  marginTop: "0.5rem",
                }}
                id="contact-launch-email-btn"
              >
                <Send size={15} />
                <span>Open in Email Client</span>
                <span className="cta-arrow">&nbsp;↗</span>
              </button>
            </form>
          </div>

          <p className="mono" style={{ color: "var(--text-muted)", fontSize: "0.725rem", textAlign: "center", marginTop: "1.5rem" }}>
            Direct connection &bull; No third-party tracking &bull; Instant mailto
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </SectionWrapper>
  );
}
