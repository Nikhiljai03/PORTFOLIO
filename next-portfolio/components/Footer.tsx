'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Code2 } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold font-outfit text-gradient mb-8">Kola Nikhil Jai.</h2>
        
        <div className="flex gap-6 mb-12">
          {[
            { icon: <Github size={24} />, href: "https://github.com/Nikhiljai03" },
            { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/nikhil-jai-a5994930b/" },
            { icon: <Code2 size={24} />, href: "https://leetcode.com/u/NIKHILJAI03/" }, // LeetCode
            { icon: <Mail size={24} />, href: "mailto:nikhilraina95@gmail.com" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -5, color: '#3b82f6' }}
              className="text-white/40 transition-colors"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <p className="text-white/30 text-sm max-w-md">
          Designed and built with passion. Using Next.js, Framer Motion, and Tailwind CSS.
          &copy; {new Date().getFullYear()} Kola Nikhil Jai. All rights reserved.
        </p>
      </div>
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] -z-10 rounded-full" />
    </footer>
  );
};
