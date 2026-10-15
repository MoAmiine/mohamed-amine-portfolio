import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalData } from '../data/portfolioData';
import { ArrowUpRight, X, Phone, Mail, Clock, Plus, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';

export default function Navbar({ onOpenCv }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "PROJETS", href: "#projects", num: "01" },
    { label: "SERVICES", href: "#services", num: "02" },
    { label: "MÉTHODE", href: "#process", num: "03" },
    { label: "CONTACT", href: "#contact", num: "04" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0a0a0a]/85 backdrop-blur-xl border-b border-white/5 py-3.5 sm:py-4 px-4 sm:px-12' 
          : 'bg-transparent py-4 sm:py-6 px-4 sm:px-12'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo Left */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-display text-lg sm:text-xl font-black text-white tracking-tight">
              MoAmiine<span className="text-[#10d9a0]">.dev</span>
            </span>
          </a>

          {/* Links Center */}
          <nav className="hidden md:flex items-center gap-8 text-[12px] font-bold tracking-[0.14em] text-neutral-400 uppercase">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#10d9a0] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: GitHub & LinkedIn Quick Icons + Discuter + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* GitHub Quick Link */}
            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 hover:border-[#10d9a0] text-neutral-300 hover:text-[#10d9a0] flex items-center justify-center transition-all bg-white/[0.04] cursor-pointer"
              title="Profil GitHub"
              aria-label="Profil GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* LinkedIn Quick Link */}
            <a
              href="https://www.linkedin.com/in/mohamed-amine-teljaoui-6b3592396/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 hover:border-[#10d9a0] text-neutral-300 hover:text-[#10d9a0] flex items-center justify-center transition-all bg-white/[0.04] cursor-pointer"
              title="Profil LinkedIn"
              aria-label="Profil LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* CV Modal Quick Button */}
            <button
              onClick={onOpenCv}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 hover:border-[#10d9a0] text-neutral-300 hover:text-[#10d9a0] flex items-center justify-center transition-all bg-white/[0.04] cursor-pointer group"
              title="Consulter mon CV (PDF)"
              aria-label="Consulter mon CV"
            >
              <FileText className="w-4 h-4 group-hover:scale-110 transition-transform text-[#10d9a0]" />
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 hover:border-[#10d9a0] text-xs font-bold uppercase tracking-wider text-white hover:text-[#10d9a0] transition-all"
            >
              <span>DISCUTER</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Ouvrir le menu"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 hover:border-[#10d9a0] bg-white/[0.04] flex flex-col items-center justify-center gap-1.5 text-white transition-all group cursor-pointer"
            >
              <span className="w-4 h-[1.5px] bg-white group-hover:bg-[#10d9a0] transition-colors"></span>
              <span className="w-4 h-[1.5px] bg-white group-hover:bg-[#10d9a0] transition-colors"></span>
            </button>
          </div>

        </div>
      </header>

      {/* FULLSCREEN DARK OVERLAY MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-[1000] bg-[#0a0a0a] text-white flex flex-col justify-between p-4 sm:p-14 overflow-y-auto blueprint-grid"
          >
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 sm:pb-6">
              <span className="font-display text-lg sm:text-xl font-black text-white">
                MoAmiine<span className="text-[#10d9a0]">.dev</span>
              </span>

              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Fermer le menu"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 hover:border-[#10d9a0] flex items-center justify-center text-white hover:text-[#10d9a0] transition-transform duration-300 hover:rotate-90 cursor-pointer"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Menu Body */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto py-6 sm:py-12">
              
              {/* Left Column: Big "+" markers + Giant Links */}
              <div className="lg:col-span-7 space-y-3 sm:space-y-4">
                <div className="text-[10px] sm:text-[11px] font-mono text-[#10d9a0] tracking-[0.2em] uppercase mb-4 sm:mb-6 flex items-center gap-2">
                  <Plus className="w-3.5 h-3.5" />
                  <span>MENU PRINCIPAL</span>
                </div>

                <div className="space-y-2 sm:space-y-4">
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={handleLinkClick}
                      whileHover={{ x: 12 }}
                      className="group flex items-baseline gap-3 sm:gap-4 text-3xl sm:text-6xl font-display font-black text-neutral-300 hover:text-white transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-mono text-neutral-600 group-hover:text-[#10d9a0]">
                        {link.num}
                      </span>
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 opacity-0 group-hover:opacity-100 text-[#10d9a0] transition-opacity" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Right Column: Contact Details, Hours & Socials */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-12">
                <div className="space-y-4 sm:space-y-6">
                  <div className="text-[10px] sm:text-[11px] font-mono text-[#10d9a0] tracking-[0.2em] uppercase">
                    INFORMATIONS & CONTACT
                  </div>

                  {/* Email */}
                  <div>
                    <div className="text-[10px] sm:text-[11px] text-neutral-500 font-mono uppercase mb-1">Email professionnel</div>
                    <a
                      href={`mailto:${personalData.email}`}
                      className="text-sm sm:text-lg font-mono font-bold lowercase text-white hover:text-[#10d9a0] transition-colors break-all sm:break-normal"
                    >
                      {personalData.email}
                    </a>
                  </div>

                  {/* Phone */}
                  <div>
                    <div className="text-[10px] sm:text-[11px] text-neutral-500 font-mono uppercase mb-1">Téléphone / WhatsApp</div>
                    <a
                      href={`tel:${personalData.phone}`}
                      className="text-sm sm:text-lg font-bold text-white hover:text-[#10d9a0] transition-colors"
                    >
                      {personalData.phone}
                    </a>
                  </div>

                  {/* Availability */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#10d9a0] shrink-0" />
                    <div>
                      <div className="text-[11px] sm:text-xs font-bold text-white uppercase">{personalData.status}</div>
                      <div className="text-[10px] sm:text-[11px] text-neutral-400">{personalData.statusSub}</div>
                    </div>
                  </div>
                </div>

                {/* Social Icons */}
                <div>
                  <div className="text-[10px] sm:text-[11px] text-neutral-500 font-mono uppercase mb-2.5 sm:mb-3">Réseaux & Code</div>
                  <div className="flex items-center gap-3">
                    <a
                      href={personalData.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 sm:p-3 rounded-full border border-white/10 hover:border-[#10d9a0] text-neutral-300 hover:text-[#10d9a0] transition-colors"
                      title="GitHub"
                    >
                      <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a
                      href={personalData.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 sm:p-3 rounded-full border border-white/10 hover:border-[#10d9a0] text-neutral-300 hover:text-[#10d9a0] transition-colors"
                      title="LinkedIn"
                    >
                      <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a
                      href={personalData.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 sm:p-3 rounded-full border border-white/10 hover:border-[#10d9a0] text-neutral-300 hover:text-[#10d9a0] transition-colors"
                      title="Instagram"
                    >
                      <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Footer inside Menu */}
            <div className="border-t border-white/10 pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-neutral-500 font-mono gap-3 sm:gap-4 text-center sm:text-left">
              <span>{personalData.fullName} — {personalData.role}</span>
              <span>{personalData.year} TOUS DROITS RÉSERVÉS</span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
