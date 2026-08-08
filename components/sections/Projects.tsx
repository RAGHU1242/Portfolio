"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ArrowUpRight,
  FolderGit2,
  Cpu,
  Smartphone,
  Globe,
  Layers,
  Users,
  ChevronDown,
  ChevronUp,
  Info,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { projects, type ProjectCategory } from "@/data/portfolio";

const categories: ProjectCategory[] = [
  "All",
  "IoT",
  "Mobile",
  "Web",
  "Open Source",
  "AI/ML",
  "Other",
];

function getCategoryIcon(cat: string) {
  switch (cat) {
    case "Mobile":
      return <Smartphone size={13} />;
    case "IoT":
      return <Cpu size={13} />;
    case "Web":
      return <Globe size={13} />;
    case "Open Source":
      return <FolderGit2 size={13} />;
    default:
      return <Layers size={13} />;
  }
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const toggleExpand = (id: string) => {
    setExpandedId((curr) => (curr === id ? null : id));
  };

  return (
    <SectionWrapper id="projects" label="Featured Projects">
      <div className="section-header">
        <p className="overline">01 // PORTFOLIO</p>
        <h2 className="heading-xl" style={{ marginTop: "0.5rem" }}>
          Featured Projects &amp; Work
        </h2>
        <p
          className="body-md"
          style={{
            color: "var(--text-muted)",
            marginTop: "0.5rem",
            maxWidth: "560px",
          }}
        >
          Real-world IoT engineering, mobile applications, and open-source web contributions.
        </p>
        <span className="section-line" />
      </div>

      {/* Category Filter Tabs */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          marginBottom: "2.5rem",
        }}
        role="tablist"
        aria-label="Filter projects by category"
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`filter-tab ${isActive ? "filter-tab-active" : ""}`}
              role="tab"
              aria-selected={isActive}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "1.75rem",
        }}
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                gridColumn: "1 / -1",
                padding: "4rem 2rem",
                textAlign: "center",
                color: "var(--text-muted)",
              }}
            >
              <p className="body-md">
                No projects currently listed under &ldquo;{activeCategory}&rdquo;.
              </p>
            </motion.div>
          ) : (
            filteredProjects.map((project) => {
              const isExpanded = expandedId === project.id;
              const hasDeepDetails = !!project.details || !!project.teamMembers;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div
                    className="project-card"
                    tabIndex={0}
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      padding: "1.75rem",
                      border: project.featured
                        ? "1px solid rgba(255,255,255,0.16)"
                        : "1px solid var(--border)",
                    }}
                  >
                    <div>
                      {/* Top Row: Category Tag + Year + Featured Badge */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: "1.25rem",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <span className="interactive-tag">
                            {getCategoryIcon(project.category)}
                            {project.category}
                          </span>
                          {project.featured && (
                            <span
                              className="interactive-tag"
                              style={{
                                background: "rgba(255,255,255,0.06)",
                                color: "var(--text-primary)",
                                borderColor: "rgba(255,255,255,0.2)",
                              }}
                            >
                              Featured
                            </span>
                          )}
                        </div>
                        <span
                          className="mono"
                          style={{
                            color: "var(--text-muted)",
                            fontSize: "0.75rem",
                          }}
                        >
                          {project.year}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3
                        className="heading-lg"
                        style={{ color: "var(--text-primary)", fontSize: "1.25rem" }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="mono"
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: "0.8rem",
                          marginTop: "0.25rem",
                          marginBottom: "1rem",
                        }}
                      >
                        {project.subtitle}
                      </p>

                      {/* Project Description */}
                      <p
                        className="body-md"
                        style={{
                          color: "var(--text-muted)",
                          lineHeight: 1.65,
                          marginBottom: "1.25rem",
                          fontSize: "0.875rem",
                        }}
                      >
                        {project.description}
                      </p>

                      {/* Contribution bullets */}
                      {project.contributions && project.contributions.length > 0 && (
                        <div style={{ marginBottom: "1.25rem" }}>
                          <p
                            className="overline"
                            style={{
                              fontSize: "0.68rem",
                              marginBottom: "0.5rem",
                              letterSpacing: "0.14em",
                            }}
                          >
                            KEY CONTRIBUTIONS
                          </p>
                          <ul
                            style={{
                              listStyle: "none",
                              display: "flex",
                              flexDirection: "column",
                              gap: "0.4rem",
                            }}
                          >
                            {project.contributions.map((c, i) => (
                              <li
                                key={i}
                                className="body-sm"
                                style={{
                                  color: "var(--text-secondary)",
                                  display: "flex",
                                  alignItems: "flex-start",
                                  gap: "0.5rem",
                                  lineHeight: 1.55,
                                }}
                              >
                                <span
                                  style={{
                                    color: "var(--text-muted)",
                                    marginTop: "0.15rem",
                                    flexShrink: 0,
                                    fontSize: "0.7rem",
                                  }}
                                >
                                  —
                                </span>
                                <span>{c}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Deep Expandable Case Study (for IoT / Detailed Projects) */}
                      {hasDeepDetails && (
                        <div style={{ marginBottom: "1.25rem" }}>
                          <button
                            onClick={() => toggleExpand(project.id)}
                            style={{
                              background: "none",
                              border: "none",
                              color: "var(--text-primary)",
                              fontFamily: "var(--font-mono, monospace)",
                              fontSize: "0.75rem",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.35rem",
                              padding: "0.25rem 0",
                              cursor: "pointer",
                              transition: "color 0.15s",
                            }}
                            aria-expanded={isExpanded}
                          >
                            <Info size={12} style={{ color: "var(--text-muted)" }} />
                            {isExpanded ? "Hide Project Case Study" : "View Hardware & Specs"}
                            {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                          </button>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                style={{
                                  overflow: "hidden",
                                  marginTop: "0.75rem",
                                  padding: "1rem",
                                  background: "rgba(255,255,255,0.02)",
                                  borderRadius: "8px",
                                  border: "1px solid var(--border)",
                                }}
                              >
                                {project.teamMembers && (
                                  <div style={{ marginBottom: "0.85rem" }}>
                                    <span
                                      className="overline"
                                      style={{
                                        fontSize: "0.65rem",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.3rem",
                                        marginBottom: "0.3rem",
                                      }}
                                    >
                                      <Users size={10} /> TEAM CONTRIBUTORS
                                    </span>
                                    <div
                                      style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "0.35rem",
                                      }}
                                    >
                                      {project.teamMembers.map((m) => (
                                        <span
                                          key={m}
                                          className="interactive-tag"
                                          style={{ fontSize: "0.7rem", padding: "0.2rem 0.5rem" }}
                                        >
                                          {m}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {project.details?.componentsUsed && (
                                  <div style={{ marginBottom: "0.85rem" }}>
                                    <span
                                      className="overline"
                                      style={{ fontSize: "0.65rem", display: "block", marginBottom: "0.3rem" }}
                                    >
                                      HARDWARE &amp; SENSORS
                                    </span>
                                    <ul
                                      style={{
                                        listStyle: "none",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "0.25rem",
                                      }}
                                    >
                                      {project.details.componentsUsed.map((comp, idx) => (
                                        <li
                                          key={idx}
                                          className="mono"
                                          style={{
                                            fontSize: "0.73rem",
                                            color: "var(--text-secondary)",
                                          }}
                                        >
                                          &bull; {comp}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {project.details?.futureScope && (
                                  <div>
                                    <span
                                      className="overline"
                                      style={{ fontSize: "0.65rem", display: "block", marginBottom: "0.3rem" }}
                                    >
                                      FUTURE SCOPE
                                    </span>
                                    <ul
                                      style={{
                                        listStyle: "none",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "0.25rem",
                                      }}
                                    >
                                      {project.details.futureScope.map((sc, idx) => (
                                        <li
                                          key={idx}
                                          className="mono"
                                          style={{
                                            fontSize: "0.73rem",
                                            color: "var(--text-muted)",
                                          }}
                                        >
                                          &bull; {sc}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </div>

                    {/* Bottom: Tech tags + GitHub link */}
                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.35rem",
                          paddingTop: "1rem",
                          borderTop: "1px solid var(--border)",
                          marginBottom: "1.25rem",
                        }}
                      >
                        {project.technologies.map((t) => (
                          <span
                            key={t}
                            className="skill-tag"
                            style={{ fontSize: "0.72rem", padding: "0.25rem 0.55rem" }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div
                        style={{
                          display: "flex",
                          gap: "0.75rem",
                          alignItems: "center",
                        }}
                      >
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                            style={{ fontSize: "0.8rem", padding: "0.45rem 0.9rem" }}
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            <SiGithub size={14} />
                            GitHub
                            <ArrowUpRight size={12} style={{ opacity: 0.6 }} />
                          </a>
                        )}
                        {project.liveDemo && (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ fontSize: "0.8rem", padding: "0.45rem 0.9rem" }}
                            aria-label={`View live demo for ${project.title}`}
                          >
                            <ExternalLink size={14} />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })
          )}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
