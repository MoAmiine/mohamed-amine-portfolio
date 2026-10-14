import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        data-lenis-prevent="true"
        className="fixed inset-0 z-[2000] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.94, y: 30, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.94, y: 30, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          data-lenis-prevent="true"
          onWheel={(e) => e.stopPropagation()}
          className="relative max-w-3xl w-full bg-[#111111] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl max-h-[88vh] overflow-y-auto text-white overscroll-contain modal-scrollbar my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Fermer la modale"
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Metadata */}
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#10d9a0]/15 text-[#10d9a0] border border-[#10d9a0]/30 uppercase">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-neutral-500 uppercase">
              {project.client} • {project.period}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white mb-4 uppercase">
            {project.title}
          </h3>

          {/* Project Image Banner */}
          {project.image && (
            <div className="w-full aspect-[16/9] sm:aspect-[2/1] bg-[#0a0a0a] rounded-2xl overflow-hidden mb-6 border border-white/10 relative shadow-inner p-6 flex items-center justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="max-h-full max-w-full object-contain filter contrast-105"
              />
            </div>
          )}

          {/* Description */}
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Highlights / Architecture */}
          <div className="space-y-4 mb-8">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#10d9a0] flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>SPÉCIFICATIONS TECHNIQUES & ARCHITECTURE</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {project.summary}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-3 mb-8">
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400">
              TECHNOLOGIES UTILISÉES
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/10 text-white"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs font-display font-black uppercase tracking-wider bg-[#10d9a0] text-black hover:bg-[#0fd098] transition-colors shadow-lg"
            >
              <span>VOIR LE CODE SOURCE GITHUB</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="text-xs font-mono text-neutral-500 hover:text-white transition-colors"
            >
              Fermer [ESC]
            </button>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
