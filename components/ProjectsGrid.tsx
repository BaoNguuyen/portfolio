"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const projects = [
  {
    title: "EcoSwap",
    description: "A decentralized platform for trading eco-friendly goods using blockchain technology.",
    image: "https://images.unsplash.com/photo-1542601906-93947f6072ef?auto=format&fit=crop&q=80&w=2000",
    tags: ["React", "Solidity", "Tailwind"],
    link: "#"
  },
  {
    title: "Voyager UI",
    description: "A high-performance design system component library for rapid UI development.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=2000",
    tags: ["TypeScript", "Radix UI", "CSS"],
    link: "#"
  },
  {
    title: "MindFlow",
    description: "A minimalist meditation and productivity app designed to keep users focused.",
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=2000",
    tags: ["Next.js", "Framer Motion", "Supabase"],
    link: "#"
  }
];

function Card({ project }: { project: typeof projects[0] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="project-card"
    >
      <div 
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
          background: 'var(--card-bg)',
          border: '1px solid var(--border)',
          borderRadius: '24px',
          overflow: 'hidden',
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div style={{ height: '220px', overflow: 'hidden' }}>
          <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.5rem' }}>{project.title}</h3>
            <ArrowUpRight size={20} opacity={0.5} />
          </div>
          <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>{project.description}</p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {project.tags.map(tag => (
              <span key={tag} style={{ 
                fontSize: '0.75rem', 
                fontWeight: 600, 
                padding: '0.25rem 0.75rem', 
                borderRadius: '50px', 
                background: 'var(--background)',
                border: '1px solid var(--border)'
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsGrid() {
  return (
    <section id="projects" style={{ padding: '8rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
        <div>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Selected Projects</h2>
          <p style={{ fontSize: '1.1rem' }}>A glimpse into some of my recent work.</p>
        </div>
        <a href="#" style={{ fontWeight: 600, borderBottom: '1px solid var(--accent)', color: 'var(--accent)' }}>View all projects</a>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '2.5rem' 
      }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
          >
            <Card project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
