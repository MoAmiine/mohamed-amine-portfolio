import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { servicesData } from '../data/portfolioData';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function ServicesSection({ onSelectService }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const titleWords = ["SERVICES", "WEB", "PUISSANTS", "POUR", "VOTRE", "MARQUE."];

  return (
    <section
      id="services"
      ref={containerRef}
      className="w-full bg-[#0a0a0a] text-white py-16 sm:py-28 px-4 sm:px-12 lg:px-16 border-b border-neutral-800 relative select-none"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Header with Word-by-Word Reveal */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="section-pill-dark">
              <span className="text-[#a3e635]">●</span>
              <span>MES SERVICES</span>
            </div>

            <h2 className="text-3xl sm:text-6xl xl:text-7xl font-display font-black tracking-[-0.05em] leading-[0.95] flex flex-wrap gap-x-2 sm:gap-x-3 gap-y-1">
              {titleWords.map((word, wIdx) => (
                <motion.span
                  key={wIdx}
                  initial={{ y: 50, filter: "blur(8px)", opacity: 0 }}
                  animate={isInView ? { y: 0, filter: "blur(0px)", opacity: 1 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: wIdx * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className={wIdx >= 3 ? "text-neutral-400" : "text-white"}
                >
                  {word}
                </motion.span>
              ))}
            </h2>
          </div>

          <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest hidden sm:flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#a3e635]" />
            <span>CLIQUEZ SUR UN SERVICE POUR LES DÉTAILS</span>
          </div>
        </div>

        {/* Numbered List Rows (001, 002, 003, 004, 005, 006) */}
        <div className="divide-y divide-neutral-800 border-y border-neutral-800">
          {servicesData.map((svc, idx) => (
            <motion.div
              key={svc.num}
              data-cursor="voir"
              onClick={() => onSelectService && onSelectService(svc)}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="py-6 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-8 items-start lg:items-center group transition-all duration-300 cursor-pointer hover:bg-white/[0.015] px-3 sm:px-4 rounded-2xl"
            >
              {/* Col 1: Number (001, 002...) */}
              <div className="lg:col-span-2 text-xs sm:text-base font-mono text-neutral-500 group-hover:text-[#a3e635] transition-colors flex items-center">
                <span className="font-semibold text-[#a3e635] sm:text-neutral-500">{svc.num} /</span>
              </div>

              {/* Col 2: Title & Description & Tags */}
              <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
                <div className="flex items-start sm:items-center justify-between gap-3 sm:gap-4">
                  <h3 className="text-lg xs:text-xl sm:text-3xl lg:text-4xl font-display font-black uppercase tracking-tight text-white group-hover:text-[#a3e635] transition-colors break-words flex-1">
                    {svc.title}
                  </h3>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/[0.04] border border-white/10 group-hover:border-[#a3e635] group-hover:bg-[#a3e635] text-neutral-400 group-hover:text-black flex items-center justify-center transition-all shrink-0 mt-0.5 sm:mt-0">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                  </div>
                </div>
                
                <p className="text-xs sm:text-[13px] text-neutral-400 leading-relaxed max-w-2xl font-normal text-left">
                  {svc.description}
                </p>

                {/* Gray Tag Chips */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                  {svc.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded bg-white/[0.04] border border-white/10 text-[10px] sm:text-[11px] font-mono text-neutral-400 group-hover:border-[#a3e635]/30 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Col 3: Rounded Image on the Right - Desktop/PC ONLY (hidden on mobile) */}
              <div className="hidden lg:flex lg:col-span-3 justify-end">
                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-white/10 relative shadow-xl shrink-0 group-hover:border-[#a3e635]/50 transition-colors">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className={`w-full h-full object-cover object-center filter transition-all duration-500 ${
                      hoveredIdx === idx
                        ? 'scale-115 contrast-125 brightness-110'
                        : 'scale-100 grayscale contrast-100'
                    }`}
                  />
                  <div className="absolute inset-0 bg-[#a3e635]/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-black font-mono font-bold text-[10px]">
                    <span className="bg-[#a3e635] px-2 py-0.5 rounded-full shadow">OUVRIR</span>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
