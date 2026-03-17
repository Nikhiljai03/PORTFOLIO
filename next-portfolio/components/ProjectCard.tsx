'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  description: string[];
  timeframe: string;
  tags?: string[];
  link?: string;
  github?: string;
}

export const ProjectCard = ({ name, description, timeframe, tags, link, github }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -12, scale: 1.02 }}
      viewport={{ once: true }}
      className="glass-card p-8 group flex flex-col h-full cursor-default"
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="text-xs font-medium text-primary uppercase tracking-widest">{timeframe}</span>
          <h3 className="text-2xl font-bold font-outfit mt-1 group-hover:text-primary transition-colors">{name}</h3>
        </div>
        <div className="flex gap-3">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
              <Github size={20} />
            </a>
          )}
          {link && (
            <a href={link} target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
              <ArrowUpRight size={22} />
            </a>
          )}
        </div>
      </div>

      <ul className="space-y-3 flex-grow">
        {description.map((point, i) => (
          <li key={i} className="text-white/60 text-sm leading-relaxed flex gap-3">
             <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" />
             {point}
          </li>
        ))}
      </ul>

      {tags && (
        <div className="flex flex-wrap gap-2 mt-8">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-semibold text-white/40 uppercase tracking-tighter">
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};
