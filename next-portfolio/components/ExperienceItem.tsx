'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItemProps {
  title: string;
  timeframe: string;
  bullets: string[];
}

export const ExperienceItem = ({ title, timeframe, bullets }: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 md:pl-12 pb-12 border-l border-white/10 last:pb-0">
      <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_10px_#dd49dd]" />
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover={{ x: 15 }}
        viewport={{ once: true }}
        className="group cursor-default"
      >
        <span className="text-sm font-medium text-white/40 mb-1 block uppercase tracking-wide">{timeframe}</span>
        <h3 className="text-2xl font-bold font-outfit mb-6 text-white">{title}</h3>
        
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {bullets.map((bullet, i) => (
            <li key={i} className="text-white/60 text-sm leading-relaxed relative pl-4">
              <span className="absolute left-0 top-2.5 w-1 h-1 bg-primary/40 rounded-full" />
              {bullet}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};
