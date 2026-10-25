import React from 'react';
import { experienceTimeline } from '../data/portfolioData';
import { Briefcase, GraduationCap, TrendingUp, Calendar, MapPin } from 'lucide-react';

export default function ExperienceTimeline() {
  const getIcon = (type) => {
    switch (type) {
      case 'work':
        return <Briefcase className="w-4 h-4 text-emerald-400" />;
      case 'education':
        return <GraduationCap className="w-4 h-4 text-cyan-300" />;
      case 'venture':
        return <TrendingUp className="w-4 h-4 text-purple-400" />;
      default:
        return <Briefcase className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-white/[0.06]">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold flex items-center justify-center gap-1.5">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>// Trajectoire & Étapes</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Expérience Professionnelle & Formation
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          De Marrakech à YouCode Youssoufia : rigueur scientifique appliquée au génie logiciel.
        </p>
      </div>

      {/* Timeline items list */}
      <div className="space-y-6 relative before:absolute before:inset-0 before:left-5 sm:before:left-1/2 before:w-[1px] before:bg-gradient-to-b before:from-emerald-500/40 before:via-cyan-500/30 before:to-transparent">
        
        {experienceTimeline.map((item, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={item.entity + item.period}
              className="relative flex flex-col sm:flex-row items-start group"
            >
              {/* Central Node Badge */}
              <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-2xl bg-[#090d16] border border-white/10 flex items-center justify-center shadow-lg group-hover:border-emerald-500/50 group-hover:shadow-emerald-500/20 transition-all z-10">
                {getIcon(item.type)}
              </div>

              {/* Card Container */}
              <div
                className={`w-full sm:w-1/2 pl-14 sm:pl-0 ${
                  isEven ? 'sm:pr-10 sm:text-right' : 'sm:pl-10 sm:ml-auto text-left'
                }`}
              >
                <div className="glass-surface glass-surface-hover rounded-3xl p-6 text-left">
                  
                  {/* Period Badge & Category */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      {item.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {item.period}
                    </span>
                  </div>

                  {/* Title & Entity */}
                  <h3 className="text-lg font-bold text-white mb-1">
                    {item.role}
                  </h3>
                  <div className="text-xs font-semibold text-emerald-400 font-mono mb-3 flex items-center gap-1.5">
                    <span>{item.entity}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400 font-normal flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {item.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Key Highlights */}
                  {item.points && item.points.length > 0 && (
                    <ul className="space-y-2 pt-3 border-t border-white/[0.05]">
                      {item.points.map((pt, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                          <span className="text-emerald-400 font-mono mt-0.5">▹</span>
                          <span className="leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                </div>
              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}
