"use client";

import { motion, type Variants, type Transition } from "framer-motion";
import "./Hero.css";
import IconSphere from "../IconSphere/IconSphere";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const techIcons = [
  { emoji: "⚛️", label: "React", style: { top: "10%", left: "20%", "--float-duration": "3.5s", "--float-delay": "0s" } },
  { emoji: "▲", label: "Next.js", style: { top: "5%", left: "55%", "--float-duration": "4.2s", "--float-delay": "0.3s" } },
  { emoji: "🟦", label: "TypeScript", style: { top: "30%", left: "5%", "--float-duration": "3.8s", "--float-delay": "0.6s" } },
  { emoji: "🌿", label: "Node.js", style: { top: "28%", left: "70%", "--float-duration": "4.5s", "--float-delay": "0.1s" } },
  { emoji: "🐍", label: "Python", style: { top: "55%", left: "15%", "--float-duration": "4.0s", "--float-delay": "0.8s" } },
  { emoji: "🔷", label: "Docker", style: { top: "60%", left: "60%", "--float-duration": "3.6s", "--float-delay": "0.4s" } },
  { emoji: "🗄️", label: "Postgres", style: { top: "78%", left: "30%", "--float-duration": "4.8s", "--float-delay": "0.2s" } },
  { emoji: "🔥", label: "Firebase", style: { top: "80%", left: "72%", "--float-duration": "3.9s", "--float-delay": "0.7s" } },
  { emoji: "☁️", label: "AWS", style: { top: "45%", left: "42%", "--float-duration": "4.3s", "--float-delay": "0.5s" } },
  { emoji: "🎨", label: "Tailwind", style: { top: "15%", left: "82%", "--float-duration": "3.7s", "--float-delay": "0.9s" } },
];

const socials = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Email", href: "mailto:your@email.com" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE } as Transition,
  },
};

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="hero-badge">
            <span className="hero-badge-dot" />
            Available for freelance &amp; full-time roles
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="hero-heading">
            Software Engineer |{" "}
            <span className="highlight">Full‑Stack</span> &{" "}
            <span className="highlight">AI/ML</span> Developer |
            Building Products for{" "}
            <span className="highlight">Startups</span> Worldwide
          </motion.h1>

          {/* Description */}
          <motion.p variants={itemVariants} className="hero-desc">
            I craft fast, scalable, and beautiful web products — from idea to
            deployment. Passionate about developer experience, clean code, and
            thoughtful design.
          </motion.p>

          {/* Social Links */}
          <motion.ul variants={itemVariants} className="hero-social">
            {socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label} ↗
                </a>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      {/* Floating Tech Icons */}
      <div className="floating-icons">
        <IconSphere />
        {/* {techIcons.map((icon) => (
          <div
            key={icon.label}
            className="floating-icon"
            title={icon.label}
            style={icon.style as React.CSSProperties}
          >
            {icon.emoji}
          </div>
        ))} */}
      </div>
    </section>
  );
}
