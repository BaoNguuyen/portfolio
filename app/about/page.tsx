"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";

const skills = [
  { name: "React / Next.js", level: 5, icon: "⚛", color: "#61DAFB", bg: "rgba(97,218,251,0.10)", desc: "Expert" },
  { name: "TypeScript", level: 5, icon: "TS", color: "#3178C6", bg: "rgba(49,120,198,0.10)", desc: "Expert" },
  { name: "Node.js", level: 4, icon: "⬡", color: "#68A063", bg: "rgba(104,160,99,0.10)", desc: "Advanced" },
  { name: "Python", level: 4, icon: "🐍", color: "#FFD54F", bg: "rgba(255,213,79,0.10)", desc: "Advanced" },
  { name: "UI / UX Design", level: 4, icon: "✦", color: "#FF78B4", bg: "rgba(255,120,180,0.10)", desc: "Advanced" },
  { name: "DevOps / CI·CD", level: 3, icon: "⚙", color: "#A78BFA", bg: "rgba(108,99,255,0.14)", desc: "Proficient" },
];

const stats = [
  { num: "3+", label: "Years of Experience" },
  { num: "20+", label: "Projects Completed" },
  { num: "10+", label: "Happy Clients" },
];

const tags = ["React / Next.js", "TypeScript", "Node.js", "Python", "UI/UX", "DevOps"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

function SkillDots({ level }: { level: number }) {
  return (
    <div className="skill-dots">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`dot ${i < level ? "dot-on" : "dot-off"}`} />
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />

      <main className="about-main">

        {/* ── HERO ── */}
        <section className="about-hero-new">
          <div className="hero-left">
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="badge-dot" />
              Available for work
            </motion.div>

            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Bao <span className="name-accent">Nguyen</span>
            </motion.h1>

            <motion.p
              className="hero-desc"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Full Stack Developer &amp; UI Engineer — I build fast, scalable
              web applications with a sharp eye for design and a passion for
              clean, maintainable code.
            </motion.p>

            <motion.div
              className="hero-tags"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {tags.map((t) => (
                <span key={t} className="hero-tag">{t}</span>
              ))}
            </motion.div>
          </div>

          {/* Avatar */}
          <motion.div
            className="hero-avatar-wrap"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <div className="avatar-ring">
              <div className="avatar-inner">
                <img
                  src="/avata.jpg"
                  alt="Bao Nguyen"
                  className="avatar-img"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                    (e.currentTarget.nextElementSibling as HTMLElement)!.style.display = "flex";
                  }}
                />
                <span className="avatar-fallback">BN</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── STATS ── */}
        <section className="about-stats-row">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat-card"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </motion.div>
          ))}
        </section>

        {/* ── BIO ── */}
        <section className="about-section">
          <motion.div
            className="section-head"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">My Story</h2>
            <div className="section-line" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <p className="bio-text">
              With several years of hands-on experience, I&apos;ve had the privilege
              of working across a wide range of projects — from pixel-perfect
              landing pages to complex, data-driven full-stack applications. I
              believe exceptional software lives at the intersection of technical
              rigor and thoughtful design.
            </p>
            <p className="bio-text">
              When I&apos;m not writing code, I&apos;m exploring emerging technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community. I care deeply about building things that
              are not just functional, but genuinely delightful to use.
            </p>
          </motion.div>
        </section>

        {/* ── SKILLS ── */}
        <section className="about-section">
          <motion.div
            className="section-head"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Skills &amp; Expertise</h2>
            <div className="section-line" />
          </motion.div>

          <div className="skills-grid">
            {skills.map((s, i) => (
              <motion.div
                key={s.name}
                className="skill-card"
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ borderColor: "rgba(108,99,255,0.4)", backgroundColor: "rgba(108,99,255,0.06)" }}
              >
                <div
                  className="skill-icon"
                  style={{ background: s.bg, color: s.color }}
                >
                  {s.icon}
                </div>
                <div className="skill-info">
                  <span className="skill-name">{s.name}</span>
                  <span className="skill-desc">{s.desc}</span>
                </div>
                <SkillDots level={s.level} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <motion.section
          className="about-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="cta-title">Let&apos;s build something great.</h2>
            <p className="cta-desc">Have a project in mind? I&apos;d love to hear about it.</p>
          </div>
          <a href="mailto:your@email.com" className="cta-btn">
            Get in Touch ↗
          </a>
        </motion.section>

      </main>

      <Footer />
    </>
  );
}