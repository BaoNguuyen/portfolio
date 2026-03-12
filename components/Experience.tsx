"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const experiences = [
  {
    year: "2024 – Present",
    role: "Senior Full-Stack Engineer",
    company: "TechCorp Inc. · Remote",
    desc: "Leading development of microservices architecture serving 2M+ users. Built real-time features with WebSockets, reduced API latency by 40%.",
  },
  {
    year: "2022 – 2024",
    role: "Full-Stack Developer",
    company: "StartupXYZ · Ho Chi Minh City",
    desc: "Built the entire product from scratch — React frontend, Node.js backend, PostgreSQL. Scaled from 0 to 50k monthly active users.",
  },
  {
    year: "2021 – 2022",
    role: "Frontend Developer",
    company: "Agency ABC · Freelance",
    desc: "Delivered 15+ web projects for clients across UK, US, and Australia. Specialized in performance optimization and animation-heavy interfaces.",
  },
  {
    year: "2020 – 2021",
    role: "Junior Developer",
    company: "Digital Studio · Ho Chi Minh City",
    desc: "Started career building e-commerce sites and admin dashboards with React and WordPress.",
  },
];

// Seeded deterministic PRNG — avoids SSR/client hydration mismatch
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function generateContribData() {
  const rand = seededRandom(42);
  const weeks = 52;
  const days = 7;
  const data: number[][] = [];
  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < days; d++) {
      const r = rand();
      week.push(r < 0.4 ? 0 : r < 0.6 ? 1 : r < 0.75 ? 2 : r < 0.9 ? 3 : 4);
    }
    data.push(week);
  }
  return data;
}


export default function Experience() {
  const contribData = useMemo(() => generateContribData(), []);

  return (
    <section id="experience" style={{ padding: "6rem 2rem" }}>
      <div className="container">
        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* Timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{ marginBottom: "2.5rem" }}
            >
              <div className="section-label">Career</div>
              <h2 className="section-title">
                Work{" "}
                <span className="gradient-text">Experience</span>
              </h2>
            </motion.div>

            <motion.div
              className="timeline"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  className="timeline-item"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
                    },
                  }}
                >
                  <div className="timeline-dot" />
                  <div className="timeline-year">{exp.year}</div>
                  <div className="timeline-role">{exp.role}</div>
                  <div className="timeline-company">{exp.company}</div>
                  <div className="timeline-desc">{exp.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Contribution Graph */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{ marginBottom: "2.5rem" }}
            >
              <div className="section-label">Activity</div>
              <h2 className="section-title">
                GitHub{" "}
                <span className="gradient-text">Contributions</span>
              </h2>
              <p className="section-subtitle">
                500+ contributions in the last year — consistently shipping code.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  overflowX: "auto",
                }}
              >
                <div className="contrib-graph">
                  {contribData.map((week, wi) => (
                    <div key={wi} className="contrib-week">
                      {week.map((level, di) => (
                        <div
                          key={di}
                          className="contrib-day"
                          data-level={level}
                          title={`Level ${level}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginTop: "1rem",
                    justifyContent: "flex-end",
                  }}
                >
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Less</span>
                  {[0, 1, 2, 3, 4].map((l) => (
                    <div key={l} className="contrib-day" data-level={l} />
                  ))}
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>More</span>
                </div>
              </div>

              {/* Stats */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "1rem",
                  marginTop: "1.5rem",
                }}
              >
                {[
                  { label: "Repositories", value: "80+" },
                  { label: "Contributions", value: "500+" },
                  { label: "Pull Requests", value: "200+" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      borderRadius: "12px",
                      padding: "1.25rem",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1.75rem",
                        fontWeight: 700,
                        letterSpacing: "-0.03em",
                        background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
