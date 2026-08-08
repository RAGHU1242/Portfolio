"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GitPullRequest, Award, Users, Trophy, Calendar } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { openSource, leadership } from "@/data/portfolio";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = value / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="heading-lg" style={{ color: "var(--text-primary)" }}>
      {count}
      {suffix}
    </span>
  );
}

export default function OpenSource() {
  const gssoc = openSource.gssoc;
  const hacktoberfest = openSource.hacktoberfest;
  const dss = leadership[0];

  return (
    <SectionWrapper id="experience" label="Open Source & Experience">
      <div className="section-header">
        <p className="overline">03 // CONTRIBUTIONS</p>
        <h2 className="heading-xl" style={{ marginTop: "0.5rem" }}>
          Open Source &amp; Experience
        </h2>
        <p className="body-md" style={{ color: "var(--text-muted)", marginTop: "0.5rem", maxWidth: "540px" }}>
          Community leadership, open-source impact, and collaborative development.
        </p>
        <span className="section-line" />
      </div>

      {/* Metrics Banner */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
          marginBottom: "3rem",
        }}
      >
        <div
          className="interactive-card"
          tabIndex={0}
          style={{
            padding: "1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
            borderLeft: "2px solid var(--text-primary)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)" }}>
            <GitPullRequest size={14} />
            <span className="mono" style={{ fontSize: "0.72rem" }}>MERGED PRs (GSSoC)</span>
          </div>
          <Counter value={gssoc.stats.prsMerged} />
          <span className="body-sm" style={{ color: "var(--text-muted)" }}>Across multiple repositories</span>
        </div>

        <div
          className="interactive-card"
          tabIndex={0}
          style={{
            padding: "1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
            borderLeft: "2px solid var(--text-primary)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)" }}>
            <Trophy size={14} />
            <span className="mono" style={{ fontSize: "0.72rem" }}>CONTRIBUTION PTS</span>
          </div>
          <Counter value={gssoc.stats.points} />
          <span className="body-sm" style={{ color: "var(--text-muted)" }}>Rank #{gssoc.stats.rank} of {gssoc.stats.totalContributors}</span>
        </div>

        <div
          className="interactive-card"
          tabIndex={0}
          style={{
            padding: "1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
            borderLeft: "2px solid var(--text-primary)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)" }}>
            <Award size={14} />
            <span className="mono" style={{ fontSize: "0.72rem" }}>AMBASSADOR RANK</span>
          </div>
          <p className="heading-lg" style={{ color: "var(--text-primary)", margin: 0 }}>
            {gssoc.stats.ambassadorRank}
          </p>
          <span className="body-sm" style={{ color: "var(--text-muted)" }}>Nationally selected</span>
        </div>

        <div
          className="interactive-card"
          tabIndex={0}
          style={{
            padding: "1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
            borderLeft: "2px solid var(--text-primary)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)" }}>
            <Users size={14} />
            <span className="mono" style={{ fontSize: "0.72rem" }}>PEERS ONBOARDED</span>
          </div>
          <Counter value={50} suffix="+" />
          <span className="body-sm" style={{ color: "var(--text-muted)" }}>VJIT students mentored</span>
        </div>
      </div>

      {/* Timeline Progression */}
      <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "2rem" }}>
        {/* Item 1: GSSoC */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="interactive-card" tabIndex={0} style={{ padding: "2rem" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "0.75rem",
                marginBottom: "1rem",
              }}
            >
              <div>
                <span className="interactive-tag" style={{ marginBottom: "0.5rem" }}>
                  Open Source Program
                </span>
                <h3 className="heading-lg" style={{ color: "var(--text-primary)" }}>
                  {gssoc.name} ({gssoc.shortName})
                </h3>
                <p className="mono" style={{ color: "var(--text-secondary)", fontSize: "0.85rem", marginTop: "0.25rem" }}>
                  {gssoc.roles.join(" & ")}
                </p>
              </div>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-mono, monospace)",
                }}
              >
                <Calendar size={12} />
                {gssoc.duration}
              </span>
            </div>

            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
                marginTop: "1.25rem",
              }}
            >
              {gssoc.highlights.map((h, i) => (
                <li
                  key={i}
                  className="body-md"
                  style={{
                    color: "var(--text-secondary)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.6rem",
                  }}
                >
                  <span style={{ color: "var(--text-muted)", marginTop: "0.2rem", flexShrink: 0 }}>—</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Item 2: Hacktoberfest */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          <div className="interactive-card" tabIndex={0} style={{ padding: "2rem" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "0.75rem",
                marginBottom: "1rem",
              }}
            >
              <div>
                <span className="interactive-tag" style={{ marginBottom: "0.5rem" }}>
                  Global Open Source Sprint
                </span>
                <h3 className="heading-lg" style={{ color: "var(--text-primary)" }}>
                  {hacktoberfest.name}
                </h3>
                <p className="mono" style={{ color: "var(--text-secondary)", fontSize: "0.85rem", marginTop: "0.25rem" }}>
                  {hacktoberfest.role} &bull; {hacktoberfest.organizer}
                </p>
              </div>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-mono, monospace)",
                }}
              >
                <Calendar size={12} />
                {hacktoberfest.year}
              </span>
            </div>

            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
                marginTop: "1.25rem",
              }}
            >
              {hacktoberfest.highlights.map((h, i) => (
                <li
                  key={i}
                  className="body-md"
                  style={{
                    color: "var(--text-secondary)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.6rem",
                  }}
                >
                  <span style={{ color: "var(--text-muted)", marginTop: "0.2rem", flexShrink: 0 }}>—</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Item 3: Leadership / DSS VJIT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        >
          <div className="interactive-card" tabIndex={0} style={{ padding: "2rem" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "0.75rem",
                marginBottom: "1rem",
              }}
            >
              <div>
                <span className="interactive-tag" style={{ marginBottom: "0.5rem" }}>
                  Community Leadership
                </span>
                <h3 className="heading-lg" style={{ color: "var(--text-primary)" }}>
                  {dss.organization}
                </h3>
                <p className="mono" style={{ color: "var(--text-secondary)", fontSize: "0.85rem", marginTop: "0.25rem" }}>
                  {dss.role}
                </p>
              </div>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-mono, monospace)",
                }}
              >
                <Calendar size={12} />
                {dss.since}
              </span>
            </div>

            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
                marginTop: "1.25rem",
              }}
            >
              {dss.contributions.map((c, i) => (
                <li
                  key={i}
                  className="body-md"
                  style={{
                    color: "var(--text-secondary)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.6rem",
                  }}
                >
                  <span style={{ color: "var(--text-muted)", marginTop: "0.2rem", flexShrink: 0 }}>—</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
