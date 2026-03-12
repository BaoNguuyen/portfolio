"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "One of the best engineers I've worked with. Delivered a complex full-stack product on time with exceptional code quality. Highly recommend.",
    name: "James Miller",
    role: "CTO, TechCorp Inc.",
    initials: "JM",
    stars: 5,
  },
  {
    quote: "Transformed our entire backend architecture. Reduced infrastructure costs by 35% while improving performance. Outstanding technical expertise.",
    name: "Sarah Johnson",
    role: "VP Engineering, StartupXYZ",
    initials: "SJ",
    stars: 5,
  },
  {
    quote: "Exceptional attention to detail with UI/UX. The animations and interactions feel premium — exactly what we needed to impress investors.",
    name: "Alex Chen",
    role: "Product Lead, InnovateCo",
    initials: "AC",
    stars: 5,
  },
  {
    quote: "Delivered a fully functional AI-powered SaaS in 3 months. Communication was excellent throughout. Will definitely work together again.",
    name: "Marie Dupont",
    role: "Founder, AI Startup",
    initials: "MD",
    stars: 5,
  },
  {
    quote: "Best freelance engineer we've ever hired. Deep understanding of scalability, clean APIs, and outstanding frontend polish.",
    name: "Tom Bradley",
    role: "Director, Digital Agency",
    initials: "TB",
    stars: 5,
  },
  {
    quote: "Rebuilt our e-commerce platform from scratch in record time. Revenue increased 60% after launch thanks to performance improvements.",
    name: "Nguyen Phuong",
    role: "CEO, RetailTech Vietnam",
    initials: "NP",
    stars: 5,
  },
];

// Duplicate for seamless loop
const doubled = [...testimonials, ...testimonials];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="testimonial-card">
      <div className="stars">{"★".repeat(t.stars)}</div>
      <p className="testimonial-quote">&quot;{t.quote}&quot;</p>
      <div className="testimonial-author">
        <div className="testimonial-avatar">{t.initials}</div>
        <div>
          <div className="testimonial-name">{t.name}</div>
          <div className="testimonial-role">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      style={{
        padding: "6rem 0",
        background: "var(--bg-secondary)",
        overflow: "hidden",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", marginBottom: "3rem", padding: "0 2rem" }}
      >
        <div className="section-label">Social Proof</div>
        <h2 className="section-title">
          What Clients{" "}
          <span className="gradient-text">Say</span>
        </h2>
      </motion.div>

      {/* Scrolling track */}
      <div style={{ position: "relative" }}>
        {/* Left fade */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(to right, var(--bg-secondary), transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        {/* Right fade */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(to left, var(--bg-secondary), transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <div className="testimonials-track">
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
