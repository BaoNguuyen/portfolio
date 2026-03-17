"use client";

import { motion } from "framer-motion";
import "./Projects.css";

interface Project {
  title: string;
  description: string;
  tech: string[];
  emoji: string;
  color: string;
  link: string;
  more?: number;
}

const projects: Project[] = [
  {
    title: "Lá Nghệ Thuật — Handmade Leaf Art",
    description: "Personalized e-commerce platform for leaf art, featuring AI-powered photo previews and natural leaf processing.",
    tech: ["Next.js", "Tailwind", "AI Preview", "E-commerce"],
    emoji: "🍃",
    color: "#22c55e",
    link: "https://la-nghe-thuat.vercel.app/",
  },
  {
    title: "UK's Largest Influencer Marketing Platform",
    description: "Full-stack SaaS connecting brands with verified influencers at scale.",
    tech: ["React", "Next.js", "MongoDB", "API"],
    emoji: "🚀",
    color: "#7c3aed",
    link: "#",
    more: 8,
  },
  {
    title: "AI Resume Analyzer — Skillyst",
    description: "ATS-powered resume analysis tool with real-time feedback and job match scoring.",
    tech: ["Next.js", "OpenAI", "Python", "Stripe"],
    emoji: "🤖",
    color: "#0891b2",
    link: "#",
  },
  {
    title: "Real-Time Collaboration Suite",
    description: "Multiplayer rich-text editor with live cursors, comments and version history.",
    tech: ["React", "WebSockets", "Redis", "Node.js"],
    emoji: "⚡",
    color: "#059669",
    link: "#",
  },
  {
    title: "E-Commerce Microservices Platform",
    description: "Event-driven backend serving 50k+ orders/day with automated inventory sync.",
    tech: ["Node.js", "Kafka", "Docker", "PostgreSQL"],
    emoji: "🛒",
    color: "#d97706",
    link: "#",
  },
];

function RotatingVisitBtn({ color }: { color: string }) {
  const text = "Visit Now • Visit Now • Visit Now • ";
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const chars = text.split("");
  const total = chars.length;

  return (
    <div className="project-rotating-btn">
      <svg className="rotating-text-svg" viewBox="0 0 70 70">
        <defs>
          <path
            id="circle-path"
            d={`M 35,35 m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        <text
          fontSize="7"
          fill="rgba(255,255,255,0.55)"
          fontFamily="Space Grotesk, sans-serif"
          fontWeight="500"
          letterSpacing="1"
        >
          <textPath href="#circle-path">{text}</textPath>
        </text>
      </svg>
      <div className="rotating-center-icon" style={{ background: color }}>
        ↗
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      viewport={{ once: true, margin: "-60px" }}
      onMouseMove={(e) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
        el.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg) translateY(-4px)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
      }}
    >
      <div className="project-card-top">
        <RotatingVisitBtn color={project.color} />
        <div className="project-screenshots">
          {/* Main screenshot placeholder */}
          <div
            className="project-screenshot-placeholder"
            style={{ flex: "0 0 45%" }}
          >
            <span style={{ fontSize: "2.5rem" }}>{project.emoji}</span>
          </div>
          {/* Secondary screenshot */}
          <div
            className="project-screenshot-placeholder"
            style={{
              background: `linear-gradient(135deg, ${project.color}15 0%, #0d0d0d 100%)`,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "80%" }}>
              {[0.9, 0.6, 0.75, 0.5].map((w, i) => (
                <div
                  key={i}
                  style={{
                    height: "5px",
                    width: `${w * 100}%`,
                    borderRadius: "3px",
                    background: `${project.color}60`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="project-card-body">
        <h3 className="project-title">{project.title}</h3>
        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem", lineHeight: 1.6 }}>
          {project.description}
        </p>
        <div className="project-tech-row">
          {project.tech.map((t) => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
          {project.more && (
            <span className="tech-badge" style={{ color: "var(--accent-purple)" }}>
              +{project.more} More
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section className="projects-section section-full" id="projects">
      <div className="projects-grid-bg" />
      <div className="container section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: "3rem" }}
        >
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">
            Some Of My{" "}
            <span className="gradient-text">Trending Projects</span>
          </h2>
          <p className="section-subtitle">
            A curated selection of projects I&apos;ve built — spanning SaaS platforms,
            AI tools, and scalable backend systems.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginTop: "3rem" }}
        >
          <a href="#" className="btn-secondary">
            View All Projects →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
