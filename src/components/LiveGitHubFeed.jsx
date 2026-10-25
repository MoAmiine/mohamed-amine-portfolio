import React, { useState, useEffect } from 'react';
import { Star, GitFork, ExternalLink, Calendar, Code } from 'lucide-react';
import { GithubIcon } from './Icons';
import { playClick } from '../utils/audio';

export default function LiveGitHubFeed() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback data if GitHub API limits requests
  const fallbackRepos = [
    {
      id: 1,
      name: "MuniSport",
      html_url: "https://github.com/MoAmiine/MuniSport",
      description: "Plateforme de Gestion Sportive & Associative avec tarification Pass'Sport",
      language: "JavaScript / EJS",
      stargazers_count: 0,
      forks_count: 0,
      pushed_at: "2026-10-14"
    },
    {
      id: 2,
      name: "TruckFlow",
      html_url: "https://github.com/MoAmiine/TruckFlow",
      description: "API RESTful de Gestion de Flotte de Transport Routier",
      language: "Node.js / Express",
      stargazers_count: 0,
      forks_count: 0,
      pushed_at: "2026-10-12"
    },
    {
      id: 3,
      name: "Amateur2pro",
      html_url: "https://github.com/MoAmiine/Amateur2pro",
      description: "Le pont entre amateur et pro, gestion de tournois e-sports",
      language: "Blade / Laravel",
      stargazers_count: 0,
      forks_count: 0,
      pushed_at: "2026-04-26"
    },
    {
      id: 4,
      name: "Click-Fast",
      html_url: "https://github.com/MoAmiine/Click-Fast",
      description: "Spécification & benchmark d'une application web de réflexes et précision",
      language: "JavaScript",
      stargazers_count: 0,
      forks_count: 0,
      pushed_at: "2026-10-01"
    }
  ];

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch('https://api.github.com/users/MoAmiine/repos?sort=updated&per_page=4');
        if (!res.ok) throw new Error('API Rate limit');
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setRepos(data);
        } else {
          setRepos(fallbackRepos);
        }
      } catch (e) {
        setRepos(fallbackRepos);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
      <div className="glass-surface rounded-3xl p-6 sm:p-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white">
              <GithubIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Dépôts GitHub Synchronisés en Direct</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </h3>
              <p className="text-xs text-slate-400 font-mono">github.com/MoAmiine</p>
            </div>
          </div>

          <a
            href="https://github.com/MoAmiine"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-medium bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 transition-colors"
          >
            <span>Voir tous les repos (16+)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="group p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-emerald-400 group-hover:text-emerald-300 truncate">
                    {repo.name}
                  </span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-white shrink-0 ml-1" />
                </div>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                  {repo.description || "Dépôt de développement logiciel open-source."}
                </p>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-3 border-t border-white/[0.05]">
                <span className="flex items-center gap-1 text-slate-300">
                  <Code className="w-3 h-3 text-cyan-400" />
                  {repo.language || "Code"}
                </span>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-0.5">
                    <Star className="w-3 h-3 text-amber-400" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-0.5">
                    <GitFork className="w-3 h-3 text-slate-500" />
                    {repo.forks_count}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
