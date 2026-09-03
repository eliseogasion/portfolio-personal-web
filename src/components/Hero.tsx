'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { ArrowRight, Download, Gamepad2, Compass, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const { personal, telemetryStats } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-[#050507] bg-cad-grid">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FF3E00]/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Telemetry Header Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-black border border-[#FF3E00]/40 text-[#FF3E00] font-mono text-[11px] font-bold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF3E00] animate-ping" />
            <span>PORTFOLIO SPECIFICATION // 2026</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 text-[11px] font-mono text-zinc-400">
            <span>TARGET:</span>
            <span className="text-white font-semibold">RENDER ARTIST // DRIVING EMPIRE @ VOLDEX</span>
          </div>
        </div>

        {/* Main Massive Titles */}
        <div className="mb-8">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-[0.95] mb-4">
            ELISEO GASIÓN
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
            <span className="text-xl sm:text-3xl lg:text-4xl font-black text-[#FF3E00] tracking-tight uppercase">
              INDUSTRIAL DESIGNER
            </span>
            <span className="hidden sm:inline text-zinc-600 font-mono text-2xl">//</span>
            <span className="text-xl sm:text-3xl lg:text-4xl font-bold text-zinc-400 tracking-tight uppercase">
              AUTOMOTIVE 3D SURFACE & RENDER ARTIST
            </span>
          </div>
        </div>

        {/* Value Proposition Description */}
        <div className="max-w-3xl mb-12">
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            +5 años desarrollando superficies automotrices complejas Clase A para{' '}
            <strong className="text-white font-semibold">Volkswagen (faros Amarok 2024)</strong> y{' '}
            <strong className="text-white font-semibold">Renault (fenders, paragolpes y consolas H1312)</strong>.
            Llevo esa precisión técnica y comprensión física de materiales al mundo digital para crear{' '}
            <strong className="text-[#FF3E00] font-semibold">
              renders cinemáticos y miniaturas de alto impacto comercial
            </strong>{' '}
            para juegos de carreras masivos como <strong className="text-white font-semibold">Driving Empire en Roblox</strong>.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <a
            href="#proyectos"
            className="inline-flex items-center gap-3 px-7 py-4 rounded-xs bg-[#FF3E00] hover:bg-white text-black font-mono font-black text-xs uppercase tracking-widest shadow-xl shadow-[#FF3E00]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>VER CATÁLOGO TÉCNICO</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#roblox-spotlight"
            className="inline-flex items-center gap-3 px-6 py-4 rounded-xs bg-zinc-900 hover:bg-zinc-800 text-white font-mono font-bold text-xs uppercase tracking-wider border border-white/10 hover:border-white/30 transition-all"
          >
            <Gamepad2 className="w-4 h-4 text-[#FF3E00]" />
            <span>PROPUESTA DRIVING EMPIRE</span>
          </a>

          <a
            href={personal.resumePdf}
            download
            className="inline-flex items-center gap-2 px-5 py-4 rounded-xs text-zinc-400 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors"
          >
            <Download className="w-4 h-4 text-zinc-500" />
            <span>CV EN PDF</span>
          </a>
        </div>

        {/* Telemetry Stats Grid (Automotive Monolith HUD) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {telemetryStats.map((stat, idx) => (
            <div
              key={idx}
              className="relative p-5 rounded-xs bg-black/80 border border-white/10 hover:border-[#FF3E00]/50 transition-colors group"
            >
              {/* Corner tick marker */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#FF3E00] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="font-mono text-2xl sm:text-3xl font-black text-white tracking-tight mb-1 group-hover:text-[#FF3E00] transition-colors">
                {stat.value}
              </div>
              <div className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-wider mb-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-zinc-500 font-mono">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
