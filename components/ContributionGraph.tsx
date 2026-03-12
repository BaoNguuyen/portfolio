"use client";

import { motion } from "framer-motion";
import React from "react";

const generateContributions = () => {
  const contributions = [];
  for (let i = 0; i < 52 * 7; i++) {
    contributions.push(Math.floor(Math.random() * 4));
  }
  return contributions;
};

const contributionData = generateContributions();

const getColor = (level: number) => {
  switch (level) {
    case 0: return 'var(--border)';
    case 1: return '#9be9a8';
    case 2: return '#40c463';
    case 3: return '#30a14e';
    case 4: return '#216e39';
    default: return 'var(--border)';
  }
};

export default function ContributionGraph() {
  return (
    <section id="github" style={{ padding: '8rem 0' }}>
      <div style={{ 
        background: 'var(--card-bg)', 
        border: '1px solid var(--border)', 
        borderRadius: '24px', 
        padding: '3rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Contribution Graph</h2>
          <p>Tracking progress and consistency through code.</p>
        </div>

        <div style={{ display: 'grid', gridAutoFlow: 'column', gridTemplateRows: 'repeat(7, 1fr)', gap: '4px', maxWidth: '100%', overflowX: 'auto', paddingBottom: '1rem' }}>
          {contributionData.map((level, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 52) * 0.01, duration: 0.3 }}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '2px',
                background: getColor(level),
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          <div>847 contributions in the last year</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span>Less</span>
            {[0, 1, 2, 3].map(lvl => (
              <div key={lvl} style={{ width: '12px', height: '12px', borderRadius: '2px', background: getColor(lvl) }}></div>
            ))}
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
