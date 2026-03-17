"use client";

import { motion } from "framer-motion";
import "./devboard.css";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const stack = [
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "Vercel",
    "Framer Motion",
];

const features = [
    "Real-time commit analytics",
    "Deployment monitoring",
    "AI development insights",
    "Team productivity metrics",
    "Repository health tracking",
];

export default function DevBoardPage() {
    return (
        <section className="project">
            <div className="container section">

                {/* HERO */}
                <motion.div
                    className="project-hero"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: EASE }}
                >
                    <span className="project-tag">Featured Project</span>

                    <h1 className="project-title">
                        DevBoard —{" "}
                        <span className="gradient">
                            Developer Analytics Dashboard
                        </span>
                    </h1>

                    <p className="project-desc">
                        DevBoard is an AI-powered developer dashboard that aggregates
                        commit activity, deployment metrics and repository health into
                        one real-time analytics platform for engineering teams.
                    </p>

                    <div className="project-actions">
                        <a href="#" className="btn-primary">
                            Live Demo ↗
                        </a>

                        <a href="#" className="btn-secondary">
                            GitHub
                        </a>
                    </div>
                </motion.div>

                {/* OVERVIEW */}
                <motion.section
                    className="project-block"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: EASE }}
                    viewport={{ once: true }}
                >
                    <h2>Overview</h2>

                    <p>
                        Engineering teams often lack visibility into real-time development
                        metrics such as commit frequency, deployment velocity and repository
                        health. DevBoard centralizes these signals into a unified dashboard,
                        helping teams identify bottlenecks and improve delivery speed.
                    </p>
                </motion.section>

                {/* PROBLEM / SOLUTION */}
                <div className="project-grid">

                    <motion.div
                        className="project-card"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: EASE }}
                        viewport={{ once: true }}
                    >
                        <h3>Problem</h3>
                        <p>
                            Development data is scattered across GitHub, CI/CD systems
                            and monitoring tools. Teams struggle to quickly understand
                            project velocity and code quality trends.
                        </p>
                    </motion.div>

                    <motion.div
                        className="project-card"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: EASE }}
                        viewport={{ once: true }}
                    >
                        <h3>Solution</h3>
                        <p>
                            DevBoard aggregates GitHub events, deployment logs and
                            repository analytics into a single interface that visualizes
                            team performance and engineering health.
                        </p>
                    </motion.div>

                </div>

                {/* STACK */}
                <motion.section
                    className="project-block"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: EASE }}
                    viewport={{ once: true }}
                >
                    <h2>Tech Stack</h2>

                    <div className="stack-grid">
                        {stack.map((tech) => (
                            <div key={tech} className="stack-item">
                                {tech}
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* ARCHITECTURE */}
                <motion.section
                    className="project-block"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: EASE }}
                    viewport={{ once: true }}
                >
                    <h2>Architecture</h2>

                    <div className="arch-box">
                        <div>Next.js Frontend</div>
                        <span>↓</span>
                        <div>Node.js API</div>
                        <span>↓</span>
                        <div>PostgreSQL Database</div>
                        <span>↓</span>
                        <div>GitHub Webhooks</div>
                    </div>
                </motion.section>

                {/* FEATURES */}
                <motion.section
                    className="project-block"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: EASE }}
                    viewport={{ once: true }}
                >
                    <h2>Key Features</h2>

                    <ul className="feature-list">
                        {features.map((f) => (
                            <li key={f}>✓ {f}</li>
                        ))}
                    </ul>
                </motion.section>

            </div>
        </section>
    );
}