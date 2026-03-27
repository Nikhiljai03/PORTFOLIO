'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download, ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/20 transition-transform duration-500">
                <img 
                  src="/pics/IMG20250920195421.jpg.jpeg" 
                  alt="Nikhil Jai" 
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 blur-3xl -z-10 rounded-full" />
            </motion.div>

            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold font-outfit mb-6 tracking-tight"
              >
                Kola Nikhil <span className="text-gradient">Jai</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl text-white/60 mb-10 max-w-2xl leading-relaxed"
              >
                Software Engineer specializing in <span className="text-white font-semibold">AI Systems</span>, 
                <span className="text-white font-semibold"> Cloud Architecture</span> and building 
                <span className="text-white font-semibold"> Next-gen Web Platforms</span>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <a href="#projects" className="btn-primary flex items-center gap-2 group">
                  View My Work
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </a>
                <a 
                  href="/NIKHIL_Resume.pdf" 
                  download 
                  className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2"
                >
                  <Download size={18} />
                  Download CV
                </a>
              </motion.div>
            </div>
          </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
        <div className="w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] animate-slow-pulse" />
      </div>
      
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
