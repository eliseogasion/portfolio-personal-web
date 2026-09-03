'use client';

import React from 'react';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolioData';
import { Gamepad2, Sparkles, CheckCircle2, Zap, ArrowUpRight, Flame } from 'lucide-react';

interface RobloxSpotlightProps {
  onOpenProject?: (projectId: string) => void;
}

export default function RobloxSpotlight({ onOpenProject }: RobloxSpotlightProps) {
  const robloxProject =
    portfolioData.projects.find((p) => p.id === 'driving-empire-hypercar') ||
    portfolioData.projects.find((p) => p.category === 'roblox');

  return (
    <section id="roblox-spotlight" className="py-20 bg-zinc-950/60 relative overflow-hidden border-y border-zinc-800/60">
      {/* Background ambient neon glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-sky-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Foco en Voldex & Driving Empire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Roblox Game & Marketing Art
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Diseñado para captar la atención de millones de jugadores. El flujo combina la precisión formal del diseño industrial
            con la composición dinámica y el alto contraste que exige el feed de Roblox.
          </p>
        </div>

        {/* Feature Spotlight Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-zinc-800 p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Render Image Showcase */}
            <div className="lg:col-span-7">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-700/80 shadow-2xl bg-zinc-950 group">
                <Image
                  src={robloxProject ? robloxProject.heroImage : '/projects/roblox-driving-empire-hero.svg'}
                  alt="Roblox Driving Empire Render Showcase"
                  fill
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-zinc-950/85 backdrop-blur-md text-sky-400 border border-sky-500/30">
                    16:9 Marketing Aspect Ratio
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Technical Points for Voldex Art Lead */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                  Pipeline & Adaptación
                </span>
                <h3 className="text-2xl font-black text-white tracking-tight mt-1 mb-3">
                  ¿Por qué este enfoque funciona para Driving Empire?
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Para destacar en la plataforma, un render de auto necesita comunicar velocidad, prestigio y fidelidad estética
                  en fracciones de segundo sobre pantallas de todos los tamaños.
                </p>
              </div>

              {/* Pillars */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white mb-0.5">Iluminación Automotriz Dramática</h4>
                    <p className="text-[11px] text-zinc-400 leading-normal">
                      Luces de silueta (rim lights) para recortar la carrocería sobre fondos oscuros o urbanos.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white mb-0.5">Shading PBR & Reflejos Realistas</h4>
                    <p className="text-[11px] text-zinc-400 leading-normal">
                      Pintura multicapa, laca transparente, fibra de carbono y detalles metálicos en llantas.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white mb-0.5">Velocidad en Entrega & Postproducción</h4>
                    <p className="text-[11px] text-zinc-400 leading-normal">
                      Flujo optimizado en Blender y Photoshop para responder con agilidad a eventos y nuevos vehículos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tools Badges */}
              <div className="pt-2 flex flex-wrap gap-2">
                {['Blender 4.x', 'Roblox Studio', 'Adobe Photoshop', 'Adobe Premiere Pro'].map((tool, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold px-3 py-1 rounded-lg bg-zinc-800 text-zinc-200 border border-zinc-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
