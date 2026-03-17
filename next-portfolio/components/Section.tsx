'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ id, title, subtitle, children, className }: SectionProps) => {
  return (
    <section id={id} className={`py-40 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">{title}</h2>
          {subtitle && <p className="text-white/50 text-lg max-w-2xl">{subtitle}</p>}
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full" />
        </motion.div>
        {children}
      </div>
    </section>
  );
};
