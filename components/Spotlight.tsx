"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import Magnetic from "./Magnetic";

export default function Spotlight() {
  return (
    <section id="spotlight" style={{ padding: '8rem 0' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--border)',
          borderRadius: '32px',
          padding: '4rem',
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', background: 'var(--accent)', filter: 'blur(150px)', opacity: 0.1, pointerEvents: 'none' }}></div>
        
        <div className="spotlight-content">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>
              Just launched <br />
              <span style={{ color: 'var(--accent)' }}>FinTrack.ai</span>
            </h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', color: 'var(--text-muted)' }}>
              An AI-powered personal finance manager that helps you track spending, 
              set budgets, and get intelligent insights into your financial health. 
              Built with Next.js, OpenAI, and Stripe.
            </p>

            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <Magnetic>
                <a href="#" style={{ 
                  background: 'var(--foreground)', 
                  color: 'var(--background)', 
                  padding: '0.8rem 2rem', 
                  borderRadius: '100px', 
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  Try FinTrack <ArrowUpRight size={18} />
                </a>
              </Magnetic>
              <button style={{ 
                background: 'transparent', 
                border: '1px solid var(--border)', 
                color: 'var(--foreground)', 
                padding: '0.8rem 2rem', 
                borderRadius: '100px', 
                fontWeight: 600,
              }}>
                Learn More
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="spotlight-image"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
          style={{
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)',
            border: '1px solid var(--border)',
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1611974717482-58a25a3d5be3?auto=format&fit=crop&q=80&w=2070" 
            alt="FinTrack AI" 
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
