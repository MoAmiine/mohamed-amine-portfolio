import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { processSteps } from '../data/portfolioData';
import { Search, Layers, Code2, Rocket } from 'lucide-react';

const processIcons = [Search, Layers, Code2, Rocket];

export default function ProcessSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      ref={containerRef}
      className="w-full bg-[#0a0a0a] text-white py-16 sm:py-28 px-4 sm:px-12 lg:px-16 border-b border-neutral-800 relative select-none"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4">
          <div className="section-pill-dark">
            <span className="text-[#10d9a0]">●</span>
            <span>MA MÉTHODE DE TRAVAIL</span>
          </div>

          <h2 className="text-3xl sm:text-6xl xl:text-7xl font-display font-black tracking-[-0.05em] leading-[0.95] break-words">
            <span>UN PROCESSUS RIGOUREUX </span>
            <span className="text-neutral-500">DE BOUT EN BOUT.</span>
          </h2>
        </div>

        {/* 4 Black Square Cards in a Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{
                y: -8,
                borderColor: '#10d9a0',
                boxShadow: '0 20px 40px -15px rgba(16, 217, 160, 0.2)'
              }}
              className="bg-[#111111] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[220px] sm:aspect-square group transition-all duration-300 cursor-pointer"
            >
              {/* Top Row: Rotating Green Icon & Step Number */}
              <div className="flex items-center justify-between">
                <motion.div
                  className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#10d9a0] group-hover:rotate-90 transition-transform duration-500"
                >
                  {(() => {
                    const StepIcon = processIcons[idx % processIcons.length];
                    return <StepIcon className="w-5 h-5 text-[#10d9a0]" />;
                  })()}
                </motion.div>
                <span className="font-mono text-xs text-neutral-600 group-hover:text-[#10d9a0] transition-colors">
                  {step.step} //
                </span>
              </div>

              {/* Title & Description at Bottom */}
              <div className="space-y-2 sm:space-y-3 pt-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-display font-black uppercase tracking-tight text-white group-hover:text-[#10d9a0] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-neutral-400 font-normal leading-relaxed">
                  {step.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
