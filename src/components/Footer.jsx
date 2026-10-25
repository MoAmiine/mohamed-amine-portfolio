import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { playClick } from '../utils/audio';

export default function Footer() {
  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-400 font-mono">
      <div className="flex items-center gap-2">
        <span className="text-emerald-400 font-bold">&lt;/&gt;</span>
        <span>Conçu & Codé avec passion par <strong className="text-white font-semibold">Mohamed Amine Teljaoui</strong></span>
      </div>

      <div className="flex items-center gap-6 text-[11px]">
        <span>YouCode UM6P © 2026</span>
        <span className="hidden sm:inline">CachyOS Linux</span>
        <button
          onClick={scrollToTop}
          className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors cursor-pointer"
        >
          <span>Remonter</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
