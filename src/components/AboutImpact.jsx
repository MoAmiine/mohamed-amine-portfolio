import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalData } from '../data/portfolioData';

export default function AboutImpact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const titleLines = [
    { text: "MON IMPACT", color: "text-black" },
    { text: "À TRAVERS", color: "text-black" },
    { text: "L'EXPÉRIENCE", color: "text-neutral-400" }
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="w-full bg-[#f6f6f4] text-black py-28 px-6 sm:px-12 lg:px-16 border-b border-neutral-300 relative select-none"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Top Section Pill */}
        <div className="flex items-center justify-between">
          <div className="section-pill-light">
            <span className="text-[#10d9a0]">●</span>
            <span>DES PARCOURS NUMÉRIQUES MEILLEURS</span>
          </div>
          <div className="hidden sm:block text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
            YOUCODE (UM6P) • 2025–EN COURS
          </div>
        </div>

        {/* Main Grid: Huge 3-Line Title + Asterisk/Photo + Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Huge Title with Progressive Word Reveal */}
          <div className="lg:col-span-7 space-y-2">
            {titleLines.map((line, lineIdx) => (
              <div key={line.text} className="overflow-hidden">
                <motion.div
                  initial={{ y: 80, filter: "blur(10px)", opacity: 0 }}
                  animate={isInView ? { y: 0, filter: "blur(0px)", opacity: 1 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: lineIdx * 0.14,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className={`text-5xl sm:text-7xl xl:text-8xl font-display font-black tracking-[-0.05em] leading-[0.92] ${line.color}`}
                >
                  {line.text}
                </motion.div>
              </div>
            ))}

            {/* Rotating Asterisk & Small Tilted Photo */}
            <div className="flex items-center gap-6 pt-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="text-4xl sm:text-5xl font-black text-[#10d9a0]"
              >
                ✱
              </motion.div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-black rotate-[-6deg] shadow-lg">
                <img
                  src="/profile.jpg"
                  alt="Mohamed Amine"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
                MOHAMED AMINE TELJAOUI<br />
                <span className="text-black">DÉVELOPPEUR FULL-STACK</span>
              </div>
            </div>
          </div>

          {/* Right: Small Uppercase Bio Paragraph */}
          <div className="lg:col-span-5 space-y-6 lg:pt-4">
            <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-neutral-500 uppercase">
              // PROFIL TECHNIQUE & VISION
            </div>
            <p className="text-xs sm:text-[13px] font-bold text-neutral-800 leading-relaxed uppercase tracking-wider text-justify border-l-2 border-[#10d9a0] pl-4">
              {personalData.bio}
            </p>
            <div className="text-xs text-neutral-600 font-medium leading-relaxed">
              Conception d'applications web scalables, sécurisées et performantes avec l'écosystème <strong>MERN Stack</strong> et <strong>Laravel</strong>.
            </div>
          </div>

        </div>

        {/* Stats Row: "72+" Style Big Counters */}
        <div className="pt-16 border-t border-neutral-300 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {personalData.stats.map((s, idx) => (
            <div key={s.label} className="space-y-1">
              <div className="text-6xl sm:text-7xl xl:text-8xl font-display font-black tracking-[-0.06em] text-black">
                {s.number}
              </div>
              <div className="text-xs font-mono font-bold tracking-wider text-[#10d9a0] uppercase">
                {s.label}
              </div>
              <div className="text-[11px] text-neutral-500 font-mono uppercase">
                {s.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
