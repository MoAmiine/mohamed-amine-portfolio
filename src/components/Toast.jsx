import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
      <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-[#0d121c]/95 border border-emerald-500/40 shadow-2xl shadow-emerald-500/20 text-xs sm:text-sm font-medium text-white backdrop-blur-xl">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        <span>{message}</span>
      </div>
    </div>
  );
}
