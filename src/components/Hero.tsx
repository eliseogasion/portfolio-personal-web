'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { ArrowRight, Sparkles, Gamepad2, Layers, Download, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const { personal, stats } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-sky-600/15 to-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/60 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-zinc-300">
              Disponible para proyectos & puesto en{' '}
              <span className="text-sky-400 font-bold">Voldex (Driving Empire)</span>
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] mb-6">
            Diseñador Industrial &{' '}
            <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent">
              Render Artist 3D
            </span>
          </h1>

          {/* Subtitle with Estudio 55 anchor */}
          <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed mb-8">
            Especializado en <strong className="text-white font-semibold">vehículos</strong>,{' '}
            <strong className="text-white font-semibold">iluminación cinematográfica</strong> y{' '}
            <strong className="text-white font-semibold">marketing art para Roblox</strong>. Con base en{' '}
            <span className="text-sky-400 font-medium">{personal.currentStudio}</span>, aplico el rigor formal y
            constructivo del diseño industrial para crear renders que maximizan el impacto visual de juegos masivos.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-14">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-400 hover:bg-sky-300 text-zinc-950 font-bold text-sm shadow-lg shadow-sky-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Explorar Renders</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#roblox-spotlight"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-white font-semibold text-sm border border-zinc-700/80 hover:border-zinc-500 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Gamepad2 className="w-4 h-4 text-sky-400" />
              <span>Ver Concepto Roblox</span>
            </a>

            <a
              href={personal.resumePdf}
              download
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-zinc-400 hover:text-white font-medium text-sm transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Descargar CV</span>
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-zinc-800/80">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-xs hover:border-zinc-700/80 transition-colors"
            >
              <div className="text-xl sm:text-2xl font-black text-white tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-400 font-medium leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
