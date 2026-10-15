import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText } from 'lucide-react';

export default function CvModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 20 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          data-lenis-prevent="true"
          className="relative w-full max-w-4xl bg-[#101010] border border-white/15 rounded-3xl p-5 sm:p-8 shadow-2xl text-white max-h-[92vh] overflow-y-auto my-auto overscroll-contain modal-scrollbar flex flex-col"
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

          {/* Header */}
          <div className="mb-4 sm:mb-6 pr-10">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
              <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] font-mono font-bold bg-[#10d9a0]/15 text-[#10d9a0] border border-[#10d9a0]/30 uppercase flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>CURRICULUM VITAE // 2026</span>
              </span>
              <span className="text-[11px] sm:text-xs font-mono text-neutral-400">
                YOUCODE (UM6P)
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-black tracking-tight text-white uppercase">
              MOHAMED AMINE TELJAOUI
            </h3>
            <p className="text-xs sm:text-sm font-mono text-[#10d9a0] uppercase tracking-wider mt-1">
              DÉVELOPPEUR FULL-STACK MERN & LARAVEL
            </p>
          </div>

          {/* PDF Viewer Container */}
          <div className="w-full flex-1 min-h-[50vh] sm:min-h-[62vh] rounded-2xl overflow-hidden border border-white/10 bg-[#161616] relative shadow-inner mb-5">
            <iframe
              src="/cv-mohamed-amine-teljaoui.pdf#view=FitH"
              title="Curriculum Vitae - Mohamed Amine Teljaoui"
              className="w-full h-full min-h-[50vh] sm:min-h-[62vh] border-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 pt-4 border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              <a
                href="/cv-mohamed-amine-teljaoui.pdf"
                download="CV_Mohamed_Amine_Teljaoui.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-display font-black uppercase tracking-wider bg-[#10d9a0] text-black hover:bg-[#0fd098] transition-colors shadow-lg cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>TÉLÉCHARGER LE CV</span>
              </a>

              <a
                href="/cv-mohamed-amine-teljaoui.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-mono text-neutral-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>OUVRIR LE PDF</span>
              </a>
            </div>

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
