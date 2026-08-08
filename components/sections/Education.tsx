"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, School, Calendar, MapPin, Award } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { educationList } from "@/data/portfolio";

function getEducationIcon(id: string) {
  switch (id) {
    case "vjit":
      return <GraduationCap size={18} />;
    case "royal-junior-college":
      return <BookOpen size={18} />;
    case "krishnaveni":
      return <School size={18} />;
    default:
      return <GraduationCap size={18} />;
  }
}

export default function Education() {
  return (
    <SectionWrapper id="education" label="Education Timeline">
      <div className="section-header">
        <p className="overline">04 // EDUCATION</p>
        <h2 className="heading-xl" style={{ marginTop: "0.5rem" }}>
          Academic Foundation
        </h2>
        <p className="body-md" style={{ color: "var(--text-muted)", marginTop: "0.5rem", maxWidth: "540px" }}>
          Formal education in Information Technology and foundational sciences.
        </p>
        <span className="section-line" />
      </div>

      {/* Timeline Container */}
      <div className="education-timeline-wrapper">
        {/* Central Spine Line (Desktop) */}
        <div className="timeline-central-line" aria-hidden="true" />

        <div className="timeline-nodes-container">
          {educationList.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className={`timeline-row ${isLeft ? "row-left" : "row-right"}`}
              >
                {/* Timeline Node Marker */}
                <div
                  className={`timeline-node-marker ${item.isPrimary ? "marker-active" : ""}`}
                  aria-hidden="true"
                >
                  <span className="marker-inner-dot" />
                </div>

                {/* Timeline Card */}
                <div className="timeline-card-col">
                  <div
                    className="interactive-card"
                    tabIndex={0}
                    style={{
                      padding: item.isPrimary ? "2rem" : "1.65rem",
                      border: item.isPrimary
                        ? "1px solid rgba(255,255,255,0.18)"
                        : "1px solid var(--border)",
                      position: "relative",
                      borderRadius: "12px",
                    }}
                  >
                    {/* Primary Badge if current */}
                    {item.isPrimary && (
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          marginBottom: "1rem",
                        }}
                      >
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: "#ffffff",
                            boxShadow: "0 0 8px rgba(255,255,255,0.8)",
                          }}
                        />
                        <span className="interactive-tag" style={{ fontSize: "0.7rem", padding: "0.2rem 0.6rem" }}>
                          Current Degree &bull; VJIT
                        </span>
                      </div>
                    )}

                    {/* Header Row: Icon + Title */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        gap: "0.75rem",
                        marginBottom: "0.75rem",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <div
                          style={{
                            width: "2.25rem",
                            height: "2.25rem",
                            borderRadius: "6px",
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid var(--border)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--text-primary)",
                            flexShrink: 0,
                          }}
                        >
                          {getEducationIcon(item.id)}
                        </div>
                        <div>
                          <h3
                            className="heading-lg"
                            style={{
                              fontSize: item.isPrimary ? "1.25rem" : "1.05rem",
                              color: "var(--text-primary)",
                              margin: 0,
                            }}
                          >
                            {item.institution}
                          </h3>
                          <p
                            className="mono"
                            style={{
                              color: "var(--text-secondary)",
                              fontSize: "0.825rem",
                              marginTop: "0.15rem",
                              margin: 0,
                            }}
                          >
                            {item.qualification}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Factual Degree Detail */}
                    <p
                      className="body-md"
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "0.875rem",
                        lineHeight: 1.65,
                        marginTop: "0.75rem",
                        marginBottom: "1.25rem",
                      }}
                    >
                      {item.description}
                    </p>

                    {/* Footer Row: Period + Location + Compact Deliberate CGPA Badge */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "0.75rem",
                        paddingTop: "1rem",
                        borderTop: "1px solid var(--border)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "1.15rem",
                        }}
                      >
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.4rem",
                            fontSize: "0.775rem",
                            color: "var(--text-muted)",
                            fontFamily: "var(--font-mono, monospace)",
                          }}
                        >
                          <Calendar size={13} />
                          {item.period}
                        </span>

                        {item.location && (
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.4rem",
                              fontSize: "0.775rem",
                              color: "var(--text-muted)",
                            }}
                          >
                            <MapPin size={13} />
                            {item.location}
                          </span>
                        )}
                      </div>

                      {/* Premium Compact Deliberate CGPA/Score Badge */}
                      <span className="education-grade-badge">
                        <Award size={13} style={{ opacity: 0.85, flexShrink: 0 }} />
                        <span>{item.grade}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Embedded Timeline & Badge Styles */}
      <style>{`
        .education-timeline-wrapper {
          position: relative;
          max-width: 1060px;
          margin-inline: auto;
          padding: 1rem 0;
        }

        .education-grade-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #F5F5F5;
          border-radius: 8px;
          padding: 8px 12px;
          font-family: var(--font-mono, monospace);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          white-space: nowrap;
          transition: background-color 220ms ease, border-color 220ms ease, transform 220ms ease;
        }

        .education-grade-badge:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.20);
          transform: translateY(-1px);
        }

        .timeline-central-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 1px;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(255, 255, 255, 0.18) 12%,
            rgba(255, 255, 255, 0.18) 88%,
            transparent
          );
          transform: translateX(-50%);
        }

        .timeline-nodes-container {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          position: relative;
        }

        .timeline-row {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
        }

        .timeline-node-marker {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 2px solid rgba(255, 255, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          transition: all 0.25s ease;
        }

        .marker-inner-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
        }

        .marker-active {
          border-color: #ffffff;
          box-shadow: 0 0 14px rgba(255, 255, 255, 0.4);
        }

        .marker-active .marker-inner-dot {
          background: #ffffff;
        }

        /* Desktop Left/Right alternation */
        @media (min-width: 860px) {
          .row-left {
            justify-content: flex-start;
          }
          .row-left .timeline-card-col {
            width: calc(50% - 2.5rem);
          }

          .row-right {
            justify-content: flex-end;
          }
          .row-right .timeline-card-col {
            width: calc(50% - 2.5rem);
          }
        }

        /* Mobile Single-Column Timeline */
        @media (max-width: 859px) {
          .timeline-central-line {
            left: 14px !important;
            transform: none !important;
          }

          .timeline-node-marker {
            left: 14px !important;
            top: 2rem !important;
            transform: translateX(-50%) !important;
          }

          .timeline-row {
            justify-content: flex-start !important;
            padding-left: 2.5rem;
          }

          .timeline-card-col {
            width: 100% !important;
          }
        }
      `}</style>
    </SectionWrapper>
  );
}
