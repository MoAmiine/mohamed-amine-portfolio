import React from 'react';
import { marqueeTech } from '../data/portfolioData';

export default function TechMarquee() {
  const repeatedTech = [...marqueeTech, ...marqueeTech, ...marqueeTech];

  return (
    <div className="w-full bg-[#f6f6f4] border-y border-neutral-300 text-black py-4 sm:py-5 overflow-hidden flex items-center select-none relative z-20">
      
      {/* Pinned Label Left */}
      <div className="hidden sm:flex items-center gap-2 pl-8 pr-6 py-1 bg-[#f6f6f4] border-r border-neutral-300 z-10 shrink-0">
        <span className="w-2 h-2 rounded-full bg-[#10d9a0]"></span>
        <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-neutral-800">
          STACK UTILISÉE
        </span>
      </div>

      {/* Infinite Marquee Track */}
      <div className="flex overflow-hidden w-full mask-marquee">
        <div className="animate-marquee flex items-center gap-10 whitespace-nowrap">
          {repeatedTech.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 text-neutral-500 hover:text-black hover:scale-105 transition-all duration-200 cursor-pointer group"
            >
              <span className="text-base group-hover:text-[#10d9a0] transition-colors">{item.symbol}</span>
              <span className="text-xs sm:text-sm font-display font-black tracking-tight uppercase">
                {item.name}
              </span>
              <span className="text-neutral-300 ml-4 font-mono">/</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
