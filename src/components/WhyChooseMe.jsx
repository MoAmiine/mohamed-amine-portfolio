import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { whyChoosePoints } from '../data/portfolioData';

export default function WhyChooseMe() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const headline = "CONCENTRÉ SUR UN CODE QUI DONNE DES RÉSULTATS.";
  const words = headline.split(" ");

  return (
    <section
      id="why-me"
      ref={containerRef}
      className="w-full bg-[#f6f6f4] text-black py-16 sm:py-28 px-4 sm:px-12 lg:px-16 border-b border-neutral-300 relative select-none"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Pill */}
        <div className="section-pill-light">
          <span className="text-[#10d9a0]">●</span>
          <span>POURQUOI MOI</span>
        </div>

        {/* Huge Blur-to-Sharp Headline */}
        <h2 className="text-3xl sm:text-6xl xl:text-7xl font-display font-black tracking-[-0.05em] leading-[0.95] flex flex-wrap gap-x-2 sm:gap-x-4 gap-y-1 max-w-5xl">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ y: 50, filter: "blur(10px)", opacity: 0 }}
              animate={isInView ? { y: 0, filter: "blur(0px)", opacity: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.07,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={i >= 4 ? "text-neutral-400" : "text-black"}
            >
              {w}
            </motion.span>
          ))}
        </h2>

        {/* 4 Value Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-neutral-300">
          {whyChoosePoints.map((point) => (
            <div key={point.num} className="space-y-2 sm:space-y-3 group">
              <div className="text-xs font-mono font-bold text-[#10d9a0]">
                {point.num} //
              </div>
              <h3 className="text-base sm:text-lg font-display font-black text-black uppercase tracking-tight group-hover:text-[#10d9a0] transition-colors">
                {point.title}
              </h3>
              <p className="text-xs text-neutral-600 font-medium leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
