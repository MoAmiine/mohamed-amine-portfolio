import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowUpRight, Cpu, Layers, Sparkles } from 'lucide-react';
import { 
  ReactIcon, 
  NodeIcon, 
  MongoIcon, 
  ExpressIcon, 
  LaravelIcon, 
  PhpIcon, 
  PostgresIcon, 
  TailwindIcon, 
  JsIcon, 
  DockerIcon, 
  GitIcon, 
  VueIcon, 
  BootstrapIcon 
} from './Icons';

const techIconMap = {
  react: ReactIcon,
  node: NodeIcon,
  mongo: MongoIcon,
  express: ExpressIcon,
  laravel: LaravelIcon,
  php: PhpIcon,
  postgres: PostgresIcon,
  tailwind: TailwindIcon,
  js: JsIcon,
  docker: DockerIcon,
  git: GitIcon,
  vue: VueIcon,
  bootstrap: BootstrapIcon
};

export default function ServiceModal({ service, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    if (service) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [service, onClose]);

  if (!service) return null;

  const handleDiscussClick = () => {
    onClose();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              {service.num} // EXPERTISE TECHNIQUE
            </span>
            <span className="text-[11px] sm:text-xs font-mono text-neutral-400">
              DISPONIBLE EN MISSION & PRODUCTION
            </span>
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white mb-2 uppercase break-words">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm font-mono text-[#a3e635] uppercase tracking-wider mb-5">
            {service.subtitle}
          </p>

          {/* Service Banner Image */}
          {service.image && (
            <div className="w-full aspect-[16/9] sm:aspect-[2.2/1] bg-[#0a0a0a] rounded-xl sm:rounded-2xl overflow-hidden mb-6 border border-white/10 relative shadow-inner">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover filter contrast-105 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />
            </div>
          )}

          {/* Detailed Presentation */}
          <div className="space-y-3 mb-6 sm:mb-8">
            <div className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#a3e635]" />
              <span>PRÉSENTATION DU SERVICE</span>
            </div>
            <p className="text-xs sm:text-sm md:text-[14px] text-neutral-300 leading-relaxed">
              {service.longDescription || service.description}
            </p>
          </div>

          {/* Deliverables / Scope */}
          {service.deliverables && service.deliverables.length > 0 && (
            <div className="space-y-3 mb-6 sm:mb-8">
              <div className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#a3e635] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>CE QUI EST INCLUS DANS CE SERVICE</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-neutral-300 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#a3e635] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies with Logos */}
          {service.technologies && service.technologies.length > 0 && (
            <div className="space-y-3 mb-6 sm:mb-8">
              <div className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#a3e635]" />
                <span>TECHNOLOGIES & LOGOS OFFICIELS</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.technologies.map((tech, idx) => {
                  const Icon = techIconMap[tech.icon];
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#0a0a0a] border border-white/10 hover:border-[#a3e635]/40 transition-colors flex items-center gap-3.5 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-neutral-300 group-hover:text-[#a3e635] group-hover:scale-110 transition-all shrink-0">
                        {Icon ? <Icon className="w-5 h-5" /> : <Layers className="w-5 h-5" />}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-display font-black text-white group-hover:text-[#a3e635] transition-colors truncate">
                          {tech.name}
                        </div>
                        <div className="text-[11px] font-mono text-neutral-400 truncate">
                          {tech.role}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Bottom Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 pt-5 sm:pt-6 border-t border-white/10 w-full">
            <button
              onClick={handleDiscussClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-display font-black uppercase tracking-wider bg-[#a3e635] text-black hover:bg-[#84cc16] transition-colors shadow-lg cursor-pointer"
            >
              <span>DISCUTER DE CE SERVICE</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

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
