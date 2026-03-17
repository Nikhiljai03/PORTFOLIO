'use client';

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { ProjectCard } from '@/components/ProjectCard';
import { ExperienceItem } from '@/components/ExperienceItem';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Cloud, 
  Code2, 
  Database, 
  BrainCircuit, 
  Layers, 
  ShieldCheck, 
  Smartphone,
  Server
} from 'lucide-react';

const portfolioData = {
  experience: [
    {
      title: 'CDPL | SWE Intern',
      timeframe: 'Feb 2026 - Present',
      bullets: [
        'Led development and production deployment of a scalable web platform on AWS, supporting 1K+ users and improving system performance by 35% through optimized services.',
        'Architected and maintained cloud infrastructure (AWS EC2, S3, autoscaling), achieving 99.9% uptime and enabling seamless handling of 2× traffic spikes.',
        'Contributed to building a defence-oriented drone simulation system, developing a VR-based immersive training environment integrated with controller inputs.',
        'Engineered real-time control and physics interaction modules for the drone simulator, improving simulation accuracy and responsiveness by 40%.',
        'Designed interactive kiosk systems for user engagement, optimizing UI/UX workflows and improving interaction efficiency by 30%.',
        'Automated CI/CD pipelines and deployment processes, reducing release cycle time by 50% and improving overall reliability by 25%.'
      ]
    }
  ],
  projects: [
    {
      name: 'Share Space',
      timeframe: 'Dec 2025',
      tags: ['Social Platform', 'React', 'Vercel', 'Next-gen'],
      link: 'https://share-spcae.vercel.app/',
      bullets: [
        'A social platform where users can share ideas, connect with others, and exchange valuable insights.',
        'Built with a focus on real-time interaction and user connectivity.',
        'Designed for high engagement and seamless content sharing.'
      ]
    },
    {
      name: 'Respiratory Sound Diagnostic Engine',
      timeframe: 'Dec 2025',
      tags: ['CNN', 'Python', 'DSP', 'TensorFlow', 'AI'],
      bullets: [
        'Built DSP pipeline with Librosa converting raw audio to MFCC-based spectral features (6K+ dimensions).',
        'Designed multi-layer CNN achieving accurate classification across 8 respiratory disease classes.',
        'Optimized for medical diagnostic accuracy and speed.'
      ]
    },
    {
      name: 'AI Assistant',
      timeframe: 'Oct 2025',
      tags: ['Voice AI', 'JavaScript', 'Web Speech API', 'Intelligent'],
      link: 'https://nikhiljai03.github.io/AI-ASSISTANT-/',
      bullets: [
        'An intelligent voice-enabled AI assistant that can understand and respond to user queries naturally.',
        'Leverages Web Speech API for real-time speech-to-text and text-to-speech.'
      ]
    },
    {
      name: 'Moodly: Emotion-Aware Music Recommender',
      timeframe: 'Sep 2025',
      tags: ['React.js', 'Flask', 'OpenCV', 'DeepFace'],
      bullets: [
        'Emotion engine with DeepFace + OpenCV for real-time mood detection from webcam input.',
        'Integrated YouTube Data API for real-time mood-aligned music retrieval.',
        'Full-stack architecture with Flask backend and React frontend.'
      ]
    }
  ],
  expertise: [
    'Responsive Design',
    'API Development',
    'AWS EC2 & S3',
    'Lambda & DynamoDB',
    'AI Agent Design',
    'Cloud Architecture'
  ],
  journey: [
    {
      title: 'Education & Learning',
      content: 'Pursuing IT degree while building real-world projects. Academic foundation combined with hands-on experience in modern software development.'
    },
    {
      title: 'Technology Stack',
      content: 'Toolkit spans across HTML5, CSS3, JavaScript, React, Java, C, and various modern databases.'
    },
    {
      title: 'Future Vision',
      content: 'Driven by the challenge of turning innovative ideas into functional, user-centric applications, focusing on high-impact projects.'
    }
  ],
  skills: [
    { name: 'Python', icon: <Code2 size={24} /> },
    { name: 'Java', icon: <Cpu size={24} /> },
    { name: 'TypeScript', icon: <Code2 size={24} /> },
    { name: 'JavaScript', icon: <Code2 size={24} /> },
    { name: 'Agentic AI', icon: <BrainCircuit size={24} /> },
    { name: 'Next.js', icon: <Layers size={24} /> },
    { name: 'AWS Cloud', icon: <Cloud size={24} /> },
    { name: 'Docker', icon: <Smartphone size={24} /> },
    { name: 'PostgreSQL', icon: <Database size={24} /> },
    { name: 'MongoDB', icon: <Database size={24} /> },
  ],
  education: {
    university: 'Vignan Institute Of Technology & Science',
    timeframe: 'July 2024 - Present',
    degree: 'Bachelor of Technology in Information Technology',
    location: 'Hyderabad, Telangana'
  },
  achievements: [
    'Scalar Certified: Java Mastering the fundamentals',
    'Merit Certificate: Hack With AI Hackathon (KL University)'
  ]
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Experience Section */}
      <Section 
        id="experience" 
        title="Professional Experience" 
        subtitle="My journey in software engineering, from internships to specialized systems development."
      >
        <div className="max-w-4xl mx-auto">
          {portfolioData.experience.map((exp, i) => (
            <ExperienceItem key={i} {...exp} />
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section 
        id="projects" 
        title="Featured Projects" 
        subtitle="A collection of systems I've built, focusing on AI, Cloud, and high-performance applications."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioData.projects.map((proj, i) => (
            <ProjectCard key={i} {...proj} description={proj.bullets} />
          ))}
        </div>
      </Section>

      {/* Expertise & Journey */}
      <Section id="skills" title="Core Expertise" subtitle="Technical arsenal and frameworks I use to bring ideas to life.">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {portfolioData.skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10, color: '#3b82f6' }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-6 flex flex-col items-center justify-center text-center gap-4 group"
            >
              <div className="text-white/40 group-hover:text-primary transition-colors duration-300">
                {skill.icon}
              </div>
              <span className="font-medium text-sm text-white/80">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
          <div>
            <h3 className="text-2xl font-bold font-outfit mb-8">Specialized Knowledge</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {portfolioData.expertise.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 10, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-4 glass-card border-l-4 border-l-primary cursor-default"
                >
                  <ShieldCheck className="text-primary" size={20} />
                  <span className="text-sm font-medium text-white/80">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold font-outfit mb-8">My Journey</h3>
            <div className="space-y-6">
              {portfolioData.journey.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ x: 10 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="cursor-default"
                >
                  <h4 className="text-primary font-bold text-sm uppercase tracking-widest mb-2">{item.title}</h4>
                  <p className="text-white/60 leading-relaxed text-sm">{item.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Education & Achievements */}
      <Section id="education" title="Education & Recognition" className="bg-white/5 border-y border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass-card p-8 cursor-default"
          >
            <h3 className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Education</h3>
            <h4 className="text-2xl font-bold mb-1">{portfolioData.education.university}</h4>
            <p className="text-white/40 mb-4">{portfolioData.education.timeframe}</p>
            <p className="text-lg text-white/70">{portfolioData.education.degree}</p>
            <p className="text-white/40 text-sm mt-2">{portfolioData.education.location}</p>
          </motion.div>
          
          <div className="flex flex-col gap-4">
            <h3 className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Honors & Certifications</h3>
            {portfolioData.achievements.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 15 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 glass-card p-5 cursor-default"
              >
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-white/70 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
