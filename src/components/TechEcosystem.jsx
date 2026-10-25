import React, { useState } from 'react';
import { skillCategories, languages } from '../data/portfolioData';
import { Cpu, ShieldCheck, Terminal, Globe2, Sparkles, Check } from 'lucide-react';
import { playClick } from '../utils/audio';

export default function TechEcosystem() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="ecosystem" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold flex items-center justify-center gap-1.5">
          <Cpu className="w-3.5 h-3.5" />
          <span>// Écosystème & Boîte à outils</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Stack Technique & Méthodologie
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Des compétences concrètes appliquées sur des projets en production et à YouCode UM6P.
        </p>
      </div>

      {/* Interactive Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {skillCategories.map((cat, idx) => (
          <button
            key={cat.title}
            onClick={() => {
              playClick();
              setActiveTab(idx);
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeTab === idx
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                : 'bg-white/[0.02] border border-white/[0.06] text-slate-400 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Tab Content Cards */}
      <div className="glass-surface rounded-3xl p-6 sm:p-8 mb-12">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-1">
            {skillCategories[activeTab].title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            {skillCategories[activeTab].description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories[activeTab].skills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-emerald-500/30 transition-all flex items-center justify-between"
            >
              <div>
                <div className="text-sm font-semibold text-white flex items-center gap-2">
                  <span>{skill.name}</span>
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                  {skill.tag}
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bento Row: Security + CachyOS + Languages */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Web Security */}
        <div className="glass-surface rounded-3xl p-6 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-300 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Sécurité Web Intransigeante</h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Protection proactive contre l'OWASP Top 10 : Atténuation des injections XSS, protection CSRF avec tokens synchronisés, Content Security Policy (CSP) et cookies SameSite.
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06] text-[11px] font-mono text-cyan-400">
            <span>#XSS Mitigation</span> <span>#CSRF</span> <span>#CSP Headers</span>
          </div>
        </div>

        {/* Card 2: DevOps, Agile & Outils */}
        <div className="glass-surface rounded-3xl p-6 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
              <Terminal className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Agile & Outils Collaboratifs</h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Gestion de projet en méthode Agile (SCRUM), planification de sprints et user stories avec Jira, Trello et Miro. Conception d'interfaces sur Figma et conteneurisation Docker.
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06] text-[11px] font-mono text-purple-400">
            <span>#SCRUM</span> <span>#Jira</span> <span>#Trello</span> <span>#Miro</span> <span>#Figma</span> <span>#Docker</span>
          </div>
        </div>

        {/* Card 3: Languages */}
        <div className="glass-surface rounded-3xl p-6 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <Globe2 className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Langues & Communication</h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Excellente communication orale et écrite pour le travail en équipe et la rédaction technique.
            </p>

            <div className="space-y-3">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-200 font-medium">{lang.name}</span>
                    <span className="text-emerald-400 font-mono text-[11px]">{lang.level}</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-emerald-400 rounded-full"
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
