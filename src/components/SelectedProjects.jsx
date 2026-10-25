import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { ArrowUpRight, Layers, Sparkles } from 'lucide-react';
import { playClick } from '../utils/audio';
import { GithubIcon } from './Icons';

export default function SelectedProjects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'mern', label: 'MERN & Node.js' },
    { id: 'laravel', label: 'Laravel & PHP' },
    { id: 'systems', label: 'Systèmes & APIs' }
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>// Travaux & Réalisations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projets sélectionnés & architectures
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Des applications web et micro-services aux plateformes interactives développées à YouCode UM6P.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 bg-white/[0.02] border border-white/[0.06] p-1.5 rounded-2xl">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                playClick();
                setActiveFilter(tab.id);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group glass-surface glass-surface-hover rounded-3xl p-6 flex flex-col justify-between space-y-6 relative overflow-hidden"
          >
            {/* Top Row: Context Badge & Year */}
            <div>
              <div className="flex items-center justify-between mb-4 text-xs font-mono">
                <span className="px-2.5 py-1 rounded-md font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  {project.badge}
                </span>
                <span className="text-slate-500">{project.period}</span>
              </div>

              {/* Title & Company */}
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <div className="text-xs text-slate-400 font-mono mb-3">
                {project.company}
              </div>

              {/* Summary Description */}
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                {project.summary}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.03] border border-white/[0.08] text-slate-300"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-2 py-1 rounded-lg text-[11px] font-mono text-slate-500">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
              <button
                onClick={() => {
                  playClick();
                  onSelectProject(project);
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Voir l'architecture</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
                title="Consulter sur GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
