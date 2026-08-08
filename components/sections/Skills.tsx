"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  Layout,
  Database,
  Smartphone,
  Cpu,
  PenTool,
  Wrench,
  CheckCircle2,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import { skillCategories } from "@/data/portfolio";

function getCategoryIcon(id: string) {
  switch (id) {
    case "programming":
      return <Terminal size={17} />;
    case "frontend":
      return <Layout size={17} />;
    case "database":
      return <Database size={17} />;
    case "appdev":
      return <Smartphone size={17} />;
    case "core":
      return <Cpu size={17} />;
    case "uiux":
      return <PenTool size={17} />;
    case "tools":
      return <Wrench size={17} />;
    default:
      return <Terminal size={17} />;
  }
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" label="Technical Skills">
      <div className="section-header">
        <p className="overline">02 // TOOLKIT</p>
        <h2 className="heading-xl" style={{ marginTop: "0.5rem" }}>
          Technical Skills
        </h2>
        <p
          className="body-md"
          style={{
            color: "var(--text-muted)",
            marginTop: "0.5rem",
            maxWidth: "540px",
          }}
        >
          Languages, frameworks, systems, and developer tools in active practice.
        </p>
        <span className="section-line" />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
          gap: "1.35rem",
        }}
      >
        {skillCategories.map((cat, index) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
          >
            <GlassCard
              hover
              style={{
                height: "100%",
                padding: "1.65rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.15rem",
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid var(--border)",
                  paddingBottom: "0.85rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div
                    style={{
                      width: "2.1rem",
                      height: "2.1rem",
                      borderRadius: "6px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-primary)",
                    }}
                  >
                    {getCategoryIcon(cat.id)}
                  </div>
                  <h3 className="heading-sm" style={{ color: "var(--text-primary)" }}>
                    {cat.label}
                  </h3>
                </div>
                <span
                  className="mono"
                  style={{ color: "var(--text-muted)", fontSize: "0.72rem" }}
                >
                  {cat.skills.length} skills
                </span>
              </div>

              {/* Skills list / chips with signature Dark -> White hover */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag"
                    tabIndex={0}
                  >
                    <CheckCircle2 size={11} />
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
