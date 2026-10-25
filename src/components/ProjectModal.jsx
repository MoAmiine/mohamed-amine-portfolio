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
          className="relative max-w-3xl w-full bg-[#111111] border border-white/15 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl max-h-[90vh] overflow-y-auto text-white overscroll-contain modal-scrollbar my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Fermer la modale"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white transition-all cursor-pointer z-10"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Top Metadata */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4 pr-10">
            <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] font-mono font-bold bg-[#a3e635]/15 text-[#a3e635] border border-[#a3e635]/30 uppercase">
              {project.badge}
            </span>
            <span className="text-[11px] sm:text-xs font-mono text-neutral-500 uppercase">
              {project.client} • {project.period}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white mb-3 sm:mb-4 uppercase break-words">
            {project.title}
          </h3>

          {/* Project Image Banner */}
          {project.image && (
            <div className="w-full aspect-[16/10] sm:aspect-[2/1] bg-[#0a0a0a] rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 border border-white/10 relative shadow-inner p-3 sm:p-6 flex items-center justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="max-h-full max-w-full object-contain filter contrast-105"
              />
            </div>
          )}

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed mb-5 sm:mb-6">
            {project.description}
          </p>

          {/* Highlights / Architecture */}
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            <div className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#a3e635] flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>SPÉCIFICATIONS TECHNIQUES & ARCHITECTURE</span>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/10 text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {project.summary}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
            <div className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400">
              TECHNOLOGIES UTILISÉES
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-mono bg-white/[0.04] border border-white/10 text-white"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 pt-5 sm:pt-6 border-t border-white/10 w-full">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3 rounded-xl text-xs font-display font-black uppercase tracking-wider bg-[#a3e635] text-black hover:bg-[#84cc16] transition-colors shadow-lg"
            >
              <span>VOIR LE CODE SOURCE GITHUB</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="text-xs font-mono text-neutral-500 hover:text-white transition-colors py-1 cursor-pointer"
            >
              Fermer [ESC]
            </button>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
