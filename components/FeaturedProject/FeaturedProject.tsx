"use client";

import { motion } from "framer-motion";
import "./FeaturedProject.css";

const mockupStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: "12px",
  background: "linear-gradient(135deg, #1a0a2e 0%, #0d1829 50%, #0a1a0d 100%)",
  minHeight: "320px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "1rem",
  padding: "2rem",
};

export default function FeaturedProject() {
  return (
    <section className="featured section-full" id="featured">
      <div className="container section">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <span className="featured-tag">✦ Featured Launch</span>
            <h2 className="featured-title">
              Just Launched{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                DevBoard.io
              </span>
            </h2>
            <p className="featured-desc">
              An AI-powered developer dashboard that helps you track projects, code
              metrics, and team performance in real-time. Built for engineers who
              care about velocity and quality.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="/projects/devboard" className="btn-primary">
                Try DevBoard ↗
              </a>
              <a href="#" className="btn-secondary">
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Right: Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-80px" }}
            className="featured-mockup"
          >
            <div style={mockupStyle}>
              {/* Fake browser chrome */}
              <div style={{ display: "flex", gap: "6px", alignSelf: "flex-start" }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
              </div>
              {/* Fake UI elements */}
              <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div style={{ height: 48, borderRadius: 8, background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.2)", display: "flex", alignItems: "center", padding: "0 1rem", gap: "0.75rem" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#8b5cf6", boxShadow: "0 0 10px #8b5cf6" }} />
                  <div style={{ height: 8, width: "60%", borderRadius: 4, background: "rgba(255,255,255,0.1)" }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5rem" }}>
                  {["#8b5cf6", "#06b6d4", "#22c55e"].map((color, i) => (
                    <div key={i} style={{ height: 72, borderRadius: 8, background: `${color}20`, border: `1px solid ${color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>
                      {["📊", "⚡", "✅"][i]}
                    </div>
                  ))}
                </div>
                <div style={{ height: 80, borderRadius: 8, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", padding: "0.75rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {[0.7, 0.4, 0.85, 0.55].map((w, i) => (
                    <div key={i} style={{ height: 6, borderRadius: 3, background: `rgba(139,92,246,${w * 0.6})`, width: `${w * 100}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
