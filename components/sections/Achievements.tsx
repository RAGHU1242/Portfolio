"use client";

import { motion } from "framer-motion";
import { Trophy, Shield, Zap, Target, Cloud } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { achievements } from "@/data/portfolio";

function getAchievementIcon(id: string) {
  switch (id) {
    case "innoquest":
      return <Trophy size={18} />;
    case "cyberonix":
      return <Shield size={18} />;
    case "algobharat":
      return <Zap size={18} />;
    case "leetcode":
      return <Target size={18} />;
    case "google-cloud":
      return <Cloud size={18} />;
    default:
      return <Trophy size={18} />;
  }
}

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" label="Achievements">
      <div className="section-header">
        <p className="overline">05 // RECOGNITION</p>
        <h2 className="heading-xl" style={{ marginTop: "0.5rem" }}>
          Achievements &amp; Milestones
        </h2>
        <p className="body-md" style={{ color: "var(--text-muted)", marginTop: "0.5rem", maxWidth: "540px" }}>
          Milestones across hackathons, cybersecurity competitions, algorithms, and cloud study jams.
        </p>
        <span className="section-line" />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {achievements.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
          >
            <div
              className="interactive-card"
              tabIndex={0}
              style={{
                height: "100%",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1.25rem",
              }}
            >
              <div>
                <div
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "6px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-primary)",
                    marginBottom: "1.25rem",
                  }}
                >
                  {getAchievementIcon(item.id)}
                </div>

                <h3 className="heading-lg" style={{ fontSize: "1.15rem", color: "var(--text-primary)", margin: 0 }}>
                  {item.title}
                </h3>
                <p className="mono" style={{ color: "var(--text-secondary)", fontSize: "0.8rem", marginTop: "0.25rem" }}>
                  {item.subtitle}
                </p>

                <p
                  className="body-md"
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.875rem",
                    marginTop: "0.75rem",
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid var(--border)", paddingTop: "0.85rem" }}>
                <span className="overline" style={{ fontSize: "0.68rem" }}>
                  {item.category.toUpperCase()}
                </span>
                <span className="interactive-tag" style={{ fontSize: "0.7rem", padding: "0.2rem 0.5rem" }}>
                  Verified
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
