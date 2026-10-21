import React from 'react';
import { marqueeTech } from '../data/portfolioData';
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
  NextIcon,
  NestIcon
} from './Icons';

const iconMap = {
  react: ReactIcon,
  next: NextIcon,
  node: NodeIcon,
  nest: NestIcon,
  mongo: MongoIcon,
  express: ExpressIcon,
  laravel: LaravelIcon,
  docker: DockerIcon,
  php: PhpIcon,
  postgres: PostgresIcon,
  tailwind: TailwindIcon,
  js: JsIcon,
  git: GitIcon,
};

export default function TechMarquee() {
  const repeatedTech = [...marqueeTech, ...marqueeTech, ...marqueeTech];

  return (
    <div className="w-full bg-[#f6f6f4] border-y border-neutral-300 text-black py-4 sm:py-5 overflow-hidden flex items-center select-none relative z-20">
      
      {/* Pinned Label Left */}
      <div className="hidden sm:flex items-center gap-2 pl-8 pr-6 py-1 bg-[#f6f6f4] border-r border-neutral-300 z-10 shrink-0">
        <span className="w-2 h-2 rounded-full bg-[#10d9a0]"></span>
        <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-neutral-800">
          STACK UTILISÉE
        </span>
      </div>

      {/* Infinite Marquee Track */}
      <div className="flex overflow-hidden w-full mask-marquee">
        <div className="animate-marquee flex items-center gap-10 whitespace-nowrap">
          {repeatedTech.map((item, idx) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 text-neutral-600 hover:text-black hover:scale-105 transition-all duration-200 cursor-pointer group"
              >
                <span className="w-5 h-5 flex items-center justify-center text-neutral-500 group-hover:text-[#10d9a0] transition-colors shrink-0">
                  {IconComponent ? <IconComponent className="w-4 h-4" /> : null}
                </span>
                <span className="text-xs sm:text-sm font-display font-black tracking-tight uppercase">
                  {item.name}
                </span>
                <span className="text-neutral-300 ml-4 font-mono">/</span>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
