"use client";

import { motion } from "framer-motion";

const socials = [
  { label: "GitHub",    href: "https://github.com" },
  { label: "LinkedIn",  href: "https://linkedin.com" },
  { label: "Twitter",   href: "https://twitter.com" },
  { label: "Dribbble",  href: "https://dribbble.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      {/* Big decorative text in background */}
      <div
        style={{
          position: "absolute",
          top: "3rem",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "clamp(6rem, 15vw, 14rem)",
          fontWeight: 900,
          letterSpacing: "-0.06em",
          color: "rgba(255,255,255,0.015)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        PORTFOLIO
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* CTA Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <h2 className="footer-cta-heading">
            Let&apos;s Build
            <br />
            <span className="gradient-text">Something</span>
            <br />
            Together
          </h2>
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <a href="mailto:your@email.com" className="footer-email">
            your@email.com
          </a>
        </motion.div>

        {/* Socials */}
        <motion.ul
          className="footer-socials"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
        >
          {socials.map((s) => (
            <li key={s.href}>
              <a href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label} ↗
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Divider + Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} YourName. Crafted with ☕ and lots of passion.
          </p>
          <p className="footer-copy">
            Built with Next.js · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
