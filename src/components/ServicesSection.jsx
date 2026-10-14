import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { servicesData } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export default function ServicesSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const titleWords = ["SERVICES", "WEB", "PUISSANTS", "POUR", "VOTRE", "MARQUE."];

  return (
    <section
      id="services"
      ref={containerRef}
      className="w-full bg-[#0a0a0a] text-white py-28 px-6 sm:px-12 lg:px-16 border-b border-neutral-800 relative select-none"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header with Word-by-Word Reveal */}
        <div className="space-y-4">
          <div className="section-pill-dark">
            <span className="text-[#10d9a0]">●</span>
            <span>MES SERVICES</span>
          </div>

          <h2 className="text-4xl sm:text-6xl xl:text-7xl font-display font-black tracking-[-0.05em] leading-[0.95] flex flex-wrap gap-x-3 gap-y-1">
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

        {/* Numbered List Rows (001, 002, 003, 004) */}
        <div className="divide-y divide-neutral-800 border-y border-neutral-800">
          {servicesData.map((svc, idx) => (
            <motion.div
              key={svc.num}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group transition-colors duration-300 cursor-pointer"
            >
              {/* Col 1: Number (001, 002...) */}
              <div className="lg:col-span-2 text-sm sm:text-base font-mono text-neutral-600 group-hover:text-[#10d9a0] transition-colors">
                {svc.num} /
              </div>

              {/* Col 2: Title & Description & Tags */}
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl sm:text-4xl font-display font-black uppercase tracking-tight text-white group-hover:text-[#10d9a0] transition-colors">
                    {svc.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-[#10d9a0] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                
                <p className="text-xs sm:text-[13px] text-neutral-400 leading-relaxed max-w-2xl font-normal">
                  {svc.description}
                </p>

                {/* Gray Tag Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {svc.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-[11px] font-mono text-neutral-400 group-hover:border-[#10d9a0]/30 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Col 3: Rounded Image on the Right with Zoom + Parallax */}
              <div className="lg:col-span-3 flex justify-start lg:justify-end">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-white/10 relative shadow-xl">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className={`w-full h-full object-cover object-center filter transition-all duration-500 ${
                      hoveredIdx === idx
                        ? 'scale-115 contrast-125 brightness-110'
                        : 'scale-100 grayscale contrast-100'
                    }`}
                  />
                  <div className="absolute inset-0 bg-[#10d9a0]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
