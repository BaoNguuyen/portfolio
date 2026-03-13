"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#projects", label: "Projects" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
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
      <a href="/" className="nav-logo">
        &lt; Bao Nguyen /&gt;
      </a>

      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={
                pathname === link.href ||
                (link.href === "/" && pathname === "/")
                  ? "nav-link-active"
                  : ""
              }
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
