import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, Copy, Check, Send, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { playClick, playSuccess } from '../utils/audio';

export default function ContactSection({ onShowToast }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyEmail = () => {
    playSuccess();
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    onShowToast(`Email copié : ${personalInfo.email} ✓`);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const copyPhone = () => {
    playSuccess();
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    onShowToast(`Téléphone copié : ${personalInfo.phone} ✓`);
    setTimeout(() => setCopiedPhone(false), 2400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    playSuccess();
    const subject = encodeURIComponent(`Contact Portfolio - ${formData.name}`);
    const body = encodeURIComponent(`De: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    onShowToast(`Merci ${formData.name} ! Ouverture de votre client email...`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>// Prise de Contact & Recrutement</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Collaborons sur vos prochains défis tech.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Je suis disponible pour des opportunités Full-Stack, des collaborations ou des missions techniques ambitieuses. N'hésitez pas à me joindre directement.
          </p>

          <div className="space-y-3 pt-2">
            
            {/* Email Box */}
            <div className="p-4 rounded-2xl glass-surface flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-mono">Email direct</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs sm:text-sm font-mono font-medium text-white hover:text-emerald-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
                title="Copier l'email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Box */}
            <div className="p-4 rounded-2xl glass-surface flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-mono">Téléphone & WhatsApp</div>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-xs sm:text-sm font-mono font-medium text-white hover:text-cyan-300 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={copyPhone}
                className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
                title="Copier le numéro"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-cyan-300" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="p-3.5 rounded-2xl glass-surface hover:border-emerald-500/40 flex items-center justify-center gap-2 text-xs font-mono font-medium text-slate-300 hover:text-white transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub : {personalInfo.githubUsername}</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="p-3.5 rounded-2xl glass-surface hover:border-cyan-500/40 flex items-center justify-center gap-2 text-xs font-mono font-medium text-slate-300 hover:text-white transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>
        </div>

        {/* Right Column: Direct Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="glass-surface rounded-3xl p-6 sm:p-8 space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-1">
              Envoyer un message direct
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Remplissez ce formulaire pour me joindre en quelques secondes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Votre nom
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ex: Karim Alaoui"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Votre email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="nom@entreprise.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5">
                Votre message / Opportunité
              </label>
              <textarea
                rows="4"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Bonjour Mohamed Amine, nous avons une opportunité en développement Full-Stack MERN..."
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Transmettre le message</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
