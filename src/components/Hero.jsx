import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { personalData } from '../data/portfolioData';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 45, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 20 });

  const moveWordX = useTransform(springX, [-500, 500], [-35, 35]);
  const moveWordY = useTransform(springY, [-500, 500], [-25, 25]);
  const movePhotoX = useTransform(springX, [-500, 500], [15, -15]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-[#0a0a0a] text-white overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-12 select-none"
    >
      {/* Blueprint Grid Lines & Plus Markers */}
      <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-60"></div>
      
      {/* Decorative Plus Markers */}
      <div className="absolute top-24 sm:top-28 left-4 sm:left-12 text-white/20 font-mono text-xs sm:text-sm pointer-events-none">+</div>
      <div className="absolute top-24 sm:top-28 right-4 sm:right-12 text-white/20 font-mono text-xs sm:text-sm pointer-events-none">+</div>
      <div className="absolute bottom-28 sm:bottom-16 left-4 sm:left-12 text-white/20 font-mono text-xs sm:text-sm pointer-events-none">+</div>
      <div className="absolute bottom-28 sm:bottom-16 right-4 sm:right-12 text-white/20 font-mono text-xs sm:text-sm pointer-events-none">+</div>

      {/* Giant Faded Outline Word Behind Head: "MOHAMED" */}
      <motion.div
        style={{ x: moveWordX, y: moveWordY }}
        className="absolute top-[16%] sm:top-[18%] lg:top-[12%] right-[-5%] sm:right-[5%] text-[24vw] sm:text-[20vw] lg:text-[22vw] font-display font-black leading-none text-outline opacity-20 sm:opacity-25 pointer-events-none z-0 tracking-tighter"
      >
        {personalData.firstName}
      </motion.div>

      {/* Top Left Tagline under Navbar */}
      <div className="relative z-20 max-w-xs sm:max-w-sm mt-2 sm:mt-4">
        <div className="section-pill-dark mb-3 sm:mb-4 text-[10px] sm:text-xs">
          <span className="text-[#10d9a0]">●</span>
          <span>DÉVELOPPEUR FULL-STACK</span>
        </div>
        <p className="text-[11px] sm:text-[13px] font-bold text-neutral-300 uppercase tracking-widest leading-relaxed">
          {personalData.taglineSmall}
        </p>
      </div>

      {/* Center-Right Portrait Cut-Out */}
      <motion.div
        style={{ x: movePhotoX }}
        className="absolute bottom-20 xs:bottom-24 sm:bottom-12 lg:bottom-16 right-[-10px] sm:right-16 lg:right-32 w-[320px] xs:w-[380px] sm:w-[460px] lg:w-[540px] xl:w-[620px] h-[66vh] xs:h-[72vh] sm:h-[86vh] lg:h-[90vh] z-0 sm:z-10 pointer-events-none flex items-end justify-center opacity-55 sm:opacity-100"
      >
        <img
          src="/profile.jpg"
          alt={personalData.fullName}
          className="w-full h-full object-cover object-[center_10%] filter contrast-[1.08] brightness-[0.98] drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)] mask-gradient"
          style={{
            maskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)'
          }}
        />
      </motion.div>

      {/* Bottom Hero Row */}
      <div className="relative z-20 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 sm:gap-8 mt-auto pt-8 sm:pt-12 w-full">
        
        {/* Bottom Left Giant Solid Full Name */}
        <div className="max-w-4xl w-full">
          <div className="text-[11px] sm:text-sm font-mono font-bold tracking-[0.16em] sm:tracking-[0.2em] text-[#10d9a0] mb-2 sm:mb-3 flex items-center gap-2">
            <span>{personalData.year}</span>
            <span className="text-white/40">•</span>
            <span>YOUCODE UM6P</span>
          </div>
          <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[7.2vw] font-display font-black tracking-[-0.05em] text-white leading-[0.9] uppercase break-words">
            MOHAMED AMINE<br />
            <span className="text-neutral-400">TELJAOUI</span><span className="text-[#10d9a0]">.</span>
          </h1>
        </div>

        {/* Bottom Right Floating Dark Card: Small Avatar + "Let's Talk" + Arrow */}
        <motion.div
          whileHover={{ y: -4 }}
          className="glass-surface p-3.5 sm:p-5 rounded-2xl border border-white/10 max-w-sm w-full sm:w-auto flex items-center justify-between gap-3 sm:gap-5 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#10d9a0] shrink-0">
              <img src="/profile.jpg" alt="Avatar" className="w-full h-full object-cover object-top" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#10d9a0] rounded-full border-2 border-[#0a0a0a]"></span>
            </div>
            <div>
              <div className="text-[10px] sm:text-[11px] font-mono font-bold text-[#10d9a0] uppercase tracking-wider">
                LET'S TALK
              </div>
              <div className="text-xs sm:text-sm font-bold text-white font-display">
                {personalData.fullName}
              </div>
              <div className="text-[10px] sm:text-[11px] text-neutral-400 font-mono truncate max-w-[150px] xs:max-w-[180px]">
                {personalData.role}
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#10d9a0] hover:bg-[#0fd098] text-black flex items-center justify-center font-bold transition-transform hover:scale-105 shrink-0"
            title="Ouvrir le contact"
          >
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </motion.div>

      </div>

    </section>
  );
}
