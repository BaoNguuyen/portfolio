"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "projects", "experience", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`nav ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <a href="#home" className="nav-logo">
        &lt;YourName /&gt;
      </a>

      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                color: activeSection === link.href.replace("#", "") ? "var(--text-primary)" : undefined,
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a href="mailto:your@email.com" className="nav-cta">
        Hire Me ↗
      </a>
    </motion.nav>
  );
}
