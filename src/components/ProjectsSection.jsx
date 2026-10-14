import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projectsList } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectsSection({ onSelectProject }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="w-full bg-[#f6f6f4] text-black py-28 px-6 sm:px-12 lg:px-16 border-b border-neutral-300 relative select-none"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="section-pill-light">
              <span className="text-[#10d9a0]">●</span>
              <span>PORTFOLIO SÉLECTIONNÉ</span>
            </div>

            <h2 className="text-5xl sm:text-7xl xl:text-8xl font-display font-black tracking-[-0.05em] leading-[0.9]">
              <span>MES </span>
              <span className="text-neutral-400">PROJETS.</span>
            </h2>
          </div>

          {/* Refined Award-Look Button: "TOUS LES PROJETS" */}
          <motion.a
            href="https://github.com/MoAmiine"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-[#0a0a0a] text-white border border-black/10 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_-12px_rgba(16,217,160,0.35)] transition-all duration-300 overflow-hidden cursor-pointer w-fit"
          >
            {/* Shimmer light sweep */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#10d9a0]/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

            {/* Pulsing indicator + GitHub icon */}
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10d9a0] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10d9a0]"></span>
              </span>
              <GithubIcon className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
            </span>

            {/* Label */}
            <span className="text-xs sm:text-[13px] font-display font-black uppercase tracking-[0.14em] text-white">
              TOUS LES PROJETS
            </span>

            {/* Project count pill */}
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-neutral-300 border border-white/10">
              36+
            </span>

            {/* Arrow Bubble */}
            <span className="w-8 h-8 rounded-full bg-[#10d9a0] text-black flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:rotate-45 shadow-sm shrink-0">
              <ArrowUpRight className="w-4 h-4 text-black transition-transform" />
            </span>
          </motion.a>
        </div>

        {/* Asymmetric Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Card 1: REVIO (Hero Project - 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            data-cursor="voir"
            onClick={() => onSelectProject(projectsList[0])}
            className="md:col-span-7 polaroid-frame cursor-pointer group"
          >
            <div className="relative aspect-[16/10] bg-[#0a0a0a] rounded-lg overflow-hidden mb-4 p-4 sm:p-6 flex items-center justify-center">
              <img
                src={projectsList[0].image}
                alt="REVIO"
                className="max-h-full max-w-full object-contain filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono font-bold text-[#10d9a0] uppercase border border-white/10">
                {projectsList[0].badge}
              </div>
            </div>
            
            <div className="flex items-center justify-between text-black font-display pt-2 border-t border-neutral-200">
              <div className="flex items-center gap-2">
                <span className="text-sm font-black tracking-tight group-hover:text-[#10d9a0] transition-colors">
                  • {projectsList[0].title}
                </span>
                <span className="text-xs text-neutral-500 font-mono">
                  {projectsList[0].category}
                </span>
              </div>
              <span className="text-xs text-neutral-500 font-mono">
                {projectsList[0].client}
              </span>
            </div>
          </motion.div>

          {/* Card 2: MUNISPORT (Offset 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-cursor="voir"
            onClick={() => onSelectProject(projectsList[1])}
            className="md:col-span-5 polaroid-frame md:mt-16 cursor-pointer group"
          >
            <div className="relative aspect-[4/3] bg-[#0a0a0a] rounded-lg overflow-hidden mb-4 p-4 sm:p-6 flex items-center justify-center">
              <img
                src={projectsList[1].image}
                alt="MUNISPORT"
                className="max-h-full max-w-full object-contain filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono font-bold text-[#10d9a0] uppercase border border-white/10">
                {projectsList[1].badge}
              </div>
            </div>

            <div className="flex items-center justify-between text-black font-display pt-2 border-t border-neutral-200">
              <div className="flex items-center gap-2">
                <span className="text-sm font-black tracking-tight group-hover:text-[#10d9a0] transition-colors">
                  • {projectsList[1].title}
                </span>
                <span className="text-xs text-neutral-500 font-mono">
                  {projectsList[1].category}
                </span>
              </div>
              <span className="text-xs text-neutral-500 font-mono">
                {projectsList[1].client}
              </span>
            </div>
          </motion.div>

          {/* Card 3: AMATEUR2PRO (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            data-cursor="voir"
            onClick={() => onSelectProject(projectsList[2])}
            className="md:col-span-5 polaroid-frame cursor-pointer group"
          >
            <div className="relative aspect-[4/3] bg-[#0a0a0a] rounded-lg overflow-hidden mb-4 p-4 sm:p-6 flex items-center justify-center">
              <img
                src={projectsList[2].image}
                alt="AMATEUR2PRO"
                className="max-h-full max-w-full object-contain filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono font-bold text-[#10d9a0] uppercase border border-white/10">
                {projectsList[2].badge}
              </div>
            </div>

            <div className="flex items-center justify-between text-black font-display pt-2 border-t border-neutral-200">
              <div className="flex items-center gap-2">
                <span className="text-sm font-black tracking-tight group-hover:text-[#10d9a0] transition-colors">
                  • {projectsList[2].title}
                </span>
                <span className="text-xs text-neutral-500 font-mono">
                  {projectsList[2].category}
                </span>
              </div>
              <span className="text-xs text-neutral-500 font-mono">
                {projectsList[2].client}
              </span>
            </div>
          </motion.div>

          {/* Card 4: TRUCKFLOW (7 cols offset) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-cursor="voir"
            onClick={() => onSelectProject(projectsList[3])}
            className="md:col-span-7 polaroid-frame md:-mt-8 cursor-pointer group"
          >
            <div className="relative aspect-[16/10] bg-[#0a0a0a] rounded-lg overflow-hidden mb-4 p-4 sm:p-6 flex items-center justify-center">
              <img
                src={projectsList[3].image}
                alt="TRUCKFLOW"
                className="max-h-full max-w-full object-contain filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono font-bold text-[#10d9a0] uppercase border border-white/10">
                {projectsList[3].badge}
              </div>
            </div>

            <div className="flex items-center justify-between text-black font-display pt-2 border-t border-neutral-200">
              <div className="flex items-center gap-2">
                <span className="text-sm font-black tracking-tight group-hover:text-[#10d9a0] transition-colors">
                  • {projectsList[3].title}
                </span>
                <span className="text-xs text-neutral-500 font-mono">
                  {projectsList[3].category}
                </span>
              </div>
              <span className="text-xs text-neutral-500 font-mono">
                {projectsList[3].client}
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
