import React, { useState } from 'react';
import { personalData } from '../data/portfolioData';
import { ArrowUpRight, Copy, Check, Phone, Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';

export default function CtaFooter({ onShowToast }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    if (onShowToast) onShowToast(`Email copié : ${personalData.email} ✓`);
    setTimeout(() => setCopied(false), 2400);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="w-full bg-[#0a0a0a] text-white pt-28 pb-12 px-6 sm:px-12 lg:px-16 relative select-none">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Giant PARLONS-EN / LET'S TALK Banner */}
        <div className="space-y-8 border-b border-neutral-800 pb-20">
          <div className="section-pill-dark">
            <span className="text-[#10d9a0]">●</span>
            <span>DISPONIBLE POUR NOUVEAUX DÉFIS</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-6xl sm:text-8xl xl:text-9xl font-display font-black tracking-[-0.06em] text-white uppercase leading-[0.85]">
              PARLONS<span className="text-[#10d9a0]">-</span>EN.
            </h2>
            <div className="text-xl sm:text-2xl font-mono text-neutral-400">
              LET'S BUILD SOMETHING EXTRAORDINARY.
            </div>
          </div>

          {/* Huge Email Link with Underline Animation & Copy Button */}
          <div className="pt-6 flex flex-wrap items-center gap-6">
            <a
              href={`mailto:${personalData.email}`}
              onClick={handleCopyEmail}
              className="group inline-flex items-center gap-4 text-2xl sm:text-5xl font-display font-black text-white hover:text-[#10d9a0] transition-colors relative"
            >
              <span className="relative">
                {personalData.email}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#10d9a0] group-hover:w-full transition-all duration-300"></span>
              </span>
              <button
                type="button"
                className="w-12 h-12 rounded-full border border-white/20 group-hover:border-[#10d9a0] flex items-center justify-center text-sm font-bold shrink-0 transition-transform group-hover:scale-110"
                title="Copier l'adresse email"
              >
                {copied ? <Check className="w-5 h-5 text-[#10d9a0]" /> : <Copy className="w-5 h-5" />}
              </button>
            </a>
          </div>

          {/* Secondary Details Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-xs font-mono">
            <div>
              <div className="text-neutral-500 uppercase mb-1">Téléphone direct</div>
              <a href={`tel:${personalData.phone}`} className="text-sm font-bold text-white hover:text-[#10d9a0]">
                {personalData.phone}
              </a>
            </div>
            <div>
              <div className="text-neutral-500 uppercase mb-1">Localisation</div>
              <div className="text-sm font-bold text-white">{personalData.location}</div>
            </div>
            <div>
              <div className="text-neutral-500 uppercase mb-1">Statut actuel</div>
              <div className="text-sm font-bold text-[#10d9a0]">{personalData.status}</div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer: Logo, Nav, Socials, Copyright */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pt-6 text-xs text-neutral-400 font-mono">
          
          {/* Logo */}
          <a href="#" className="font-display text-lg font-black text-white">
            MoAmiine<span className="text-[#10d9a0]">.dev</span>
          </a>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-6 uppercase font-bold text-[11px] tracking-wider">
            <a href="#about" className="hover:text-white transition-colors">Impact</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#projects" className="hover:text-white transition-colors">Projets</a>
            <a href="#process" className="hover:text-white transition-colors">Méthode</a>
            <a href="#why-me" className="hover:text-white transition-colors">Pourquoi moi</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#10d9a0] transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#10d9a0] transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#10d9a0] transition-colors"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full border border-white/10 hover:border-[#10d9a0] text-white hover:text-[#10d9a0] transition-all cursor-pointer"
              title="Retour en haut"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Final Copyright */}
        <div className="text-center text-[11px] font-mono text-neutral-600 pt-4">
          ©2026 {personalData.fullName}. TOUS DROITS RÉSERVÉS.
        </div>

      </div>
    </footer>
  );
}
