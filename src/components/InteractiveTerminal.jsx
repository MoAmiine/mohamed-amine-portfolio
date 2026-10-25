import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles } from 'lucide-react';
import { playClick } from '../utils/audio';

export default function InteractiveTerminal() {
  const [history, setHistory] = useState([
    {
      type: 'system',
      content: 'CachyOS Linux 6.11.2-cachyos (fish shell)\nTapez "help" pour voir la liste des commandes ou "neofetch" pour la configuration système.'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const outputEndRef = useRef(null);

  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    playClick();

    if (trimmed === 'clear') {
      setHistory([]);
      return;
    }

    const newHistory = [...history, { type: 'user', content: cmd }];

    if (trimmed === 'help') {
      newHistory.push({
        type: 'output',
        content: `Commandes disponibles :
  • neofetch  : Affiche les spécifications techniques & profil
  • about     : Présentation de Mohamed Amine Teljaoui
  • skills    : Synthèse de la stack (MERN, Laravel, DB)
  • projects  : Liste des projets phares (Revio, MuniSport...)
  • contact   : Coordonnées directes (Email, Phone, GitHub)
  • matrix    : Déclenche l'effet Cyber Matrix
  • clear     : Nettoie le terminal`
      });
    } else if (trimmed === 'neofetch') {
      newHistory.push({
        type: 'neofetch',
        content: ''
      });
    } else if (trimmed === 'about') {
      newHistory.push({
        type: 'output',
        content: `Mohamed Amine Teljaoui — Développeur Full Stack spécialité MERN
--------------------------------------------------
Développeur Web Full-Stack spécialisé MERN (MongoDB, Express, React, Node.js)
et écosystème Laravel (PHP). Expérimenté dans la conception d'architectures SaaS,
d'interfaces utilisateur réactives et d'APIs RESTful performantes et sécurisées.
Fort intérêt pour le code propre, la conteneurisation Docker et l'optimisation des bases de données.`
      });
    } else if (trimmed === 'skills') {
      newHistory.push({
        type: 'output',
        content: `[+] Frontend   : React, JavaScript (ES6+), API de stockage web, EJS, Vue.js, Tailwind CSS, Bootstrap
[+] Backend    : Node.js, Express.js, Laravel (Sanctum), PHP, APIs RESTful
[+] Database   : MongoDB, PostgreSQL, SQL / MySQL
[+] DevOps & PM: Docker, Git, GitHub, SCRUM (Agile), Jira, Trello, Miro, Figma
[+] Architecture: Sécurité web (Atténuation XSS & CSRF, CSP, SameSite), Diagrammes UML (DCU , DC), POO`
      });
    } else if (trimmed === 'projects') {
      newHistory.push({
        type: 'output',
        content: `1. Revio (Solution SaaS & NFC) : Plateforme NFC & dashboard restaurant.
2. MuniSport (YouCode UM6P)    : Gestion sportive municipale (Node.js, PostgreSQL).
3. Amateur2Pro (YouCode)        : Tournois e-sports amateurs (Laravel, Tailwind).
4. TruckFlow                   : API REST logistique de gestion de fret routier.`
      });
    } else if (trimmed === 'contact') {
      newHistory.push({
        type: 'output',
        content: `Email    : medamine.teljaoui@gmail.com
Téléphone: +212 634-555918
GitHub   : github.com/MoAmiine
LinkedIn : linkedin.com/in/mohamed-amine-teljaoui-6b3592396`
      });
    } else if (trimmed === 'matrix') {
      newHistory.push({
        type: 'output',
        content: `01001101 01001111 01001000 01000001 01001101 01000101 01000100
[OK] Welcome to Mohamed Amine's core runtime. Everything is operational.`
      });
    } else if (trimmed === '') {
      // Nothing
    } else {
      newHistory.push({
        type: 'error',
        content: `cachyos: commande introuvable: "${trimmed}". Tapez "help" pour voir les commandes disponibles.`
      });
    }

    setHistory(newHistory);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
      setInputVal('');
    }
  };

  const quickChips = ['neofetch', 'about', 'skills', 'projects', 'contact', 'matrix', 'clear'];

  return (
    <section id="terminal" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-white/[0.06]">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
        <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold flex items-center justify-center gap-1.5">
          <TerminalIcon className="w-3.5 h-3.5" />
          <span>// Environnement Linux</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          CachyOS Interactive Terminal
        </h2>
        <p className="text-slate-400 text-sm">
          Naviguez dans mon profil à l'aide d'un shell interactif.
        </p>
      </div>

      {/* Quick Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
        <span className="text-xs font-mono text-slate-500 mr-2">Suggestions :</span>
        {quickChips.map((chip) => (
          <button
            key={chip}
            onClick={() => handleCommand(chip)}
            className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.03] hover:bg-emerald-500/15 border border-white/10 hover:border-emerald-500/40 text-emerald-400 transition-all cursor-pointer"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Terminal Window Box */}
      <div className="rounded-3xl bg-[#090d16] border border-white/15 overflow-hidden shadow-2xl shadow-black/80 font-mono text-xs sm:text-sm">
        
        {/* Titlebar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-white/[0.03] border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
            <span className="ml-3 text-xs text-slate-400">amine@cachyos-arch: ~ (fish)</span>
          </div>
          <div className="text-[11px] text-emerald-400/80">UTF-8</div>
        </div>

        {/* Content Log */}
        <div className="p-5 sm:p-6 min-h-[300px] max-h-[420px] overflow-y-auto space-y-3">
          {history.map((entry, idx) => (
            <div key={idx}>
              {entry.type === 'system' && (
                <div className="text-slate-400 whitespace-pre-line leading-relaxed">
                  {entry.content}
                </div>
              )}

              {entry.type === 'user' && (
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="text-emerald-400 font-bold">amine@cachyos</span>
                  <span className="text-cyan-400">:~$</span>
                  <span>{entry.content}</span>
                </div>
              )}

              {entry.type === 'output' && (
                <div className="text-slate-300 whitespace-pre-line pl-2 border-l-2 border-emerald-500/40 py-1 leading-relaxed">
                  {entry.content}
                </div>
              )}

              {entry.type === 'error' && (
                <div className="text-rose-400 pl-2 border-l-2 border-rose-500/40 py-1">
                  {entry.content}
                </div>
              )}

              {entry.type === 'neofetch' && (
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 py-2 text-xs">
                  <div className="sm:col-span-5 text-emerald-400 font-bold whitespace-pre font-mono leading-tight">
{`    /\\_/\\  
   ( o.o )  
    > ^ <   
  CACHYOS   `}
                  </div>
                  <div className="sm:col-span-7 space-y-1 text-slate-300">
                    <div className="font-bold text-white">amine@cachyos</div>
                    <div className="text-slate-500">------------------</div>
                    <div><span className="text-emerald-400">OS:</span> CachyOS Linux x86_64</div>
                    <div><span className="text-emerald-400">Host:</span> YouCode (UM6P) Youssoufia</div>
                    <div><span className="text-emerald-400">Kernel:</span> 6.11.2-cachyos-bore</div>
                    <div><span className="text-emerald-400">Uptime:</span> 2 years in tech</div>
                    <div><span className="text-emerald-400">Stack:</span> MongoDB, Express, React, Node, Laravel</div>
                    <div><span className="text-emerald-400">Shell:</span> fish 3.7.1</div>
                    <div><span className="text-emerald-400">Security:</span> OWASP Top 10 • CSP • XSS/CSRF Guard</div>
                  </div>
                </div>
              )}
            </div>
          ))}
          <div ref={outputEndRef} />
        </div>

        {/* Input Line */}
        <div className="flex items-center gap-2 px-5 py-3.5 bg-black/40 border-t border-white/[0.06]">
          <span className="text-emerald-400 font-bold">amine@cachyos</span>
          <span className="text-cyan-400">:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Tapez 'help', 'neofetch', 'projects'..."
            className="flex-1 bg-transparent text-white outline-none border-none font-mono text-xs sm:text-sm placeholder:text-slate-600"
            spellCheck="false"
            autoComplete="off"
          />
        </div>

      </div>

    </section>
  );
}
