'use client';

import React from 'react';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolioData';
import { ArrowRight } from 'lucide-react';

export default function CinematicRenderShowcase() {
  const hypercarProject =
    portfolioData.projects.find((p) => p.id === 'apex-gt-hypercar-cinematic') ||
    portfolioData.projects[2];

  return (
    <section id="cinematic-showcase" className="py-24 md:py-32 bg-[#0E0E11] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D5001C]" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-zinc-400">
                Art Direction &amp; Rendering
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Where technical form meets visual art.
            </h2>
          </div>

          <p className="text-sm text-zinc-400 max-w-md font-light leading-relaxed">
            Translating mathematical curvature and aerodynamic volume into high-impact visual storytelling for games and automotive marketing.
          </p>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-white/10 shadow-2xl group">
              <Image
                src={hypercarProject.heroImage}
                alt={hypercarProject.title}
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover transition-transform duration-700 group-hover:scale-103"
              />

              <div className="absolute top-4 left-4">
                <span className="text-[11px] uppercase tracking-wider font-medium px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white border border-white/10">
                  16:9 Marketing Key Art
                </span>
              </div>
            </div>
          </div>

          {/* Conceptual Narrative */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest font-medium text-zinc-500 block mb-2">
                Philosophy
              </span>
              <h3 className="text-2xl font-semibold text-white tracking-tight mb-3">
                Why real-world CAD matters in 3D rendering
              </h3>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                Lighting a vehicle is not about adding generic spotlights—it is about carving aerodynamic character. Having designed real exterior surfaces for Volkswagen and Renault, I know how light travels across sheet metal, where reflection lines break, and how to command immediate emotional focus.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="space-y-4 text-sm font-light text-zinc-300">
              <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                <div className="font-semibold text-white mb-1">
                  Physically Calibrated PBR Shaders
                </div>
                <div className="text-xs text-zinc-400 leading-relaxed font-normal">
                  Authentic clearcoat depth, metallic flakes, carbon weave, and tire rubber wear calibrated for realistic light response.
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                <div className="font-semibold text-white mb-1">
                  Cinematic Camera &amp; Framing
                </div>
                <div className="text-xs text-zinc-400 leading-relaxed font-normal">
                  Dynamic low-angle lenses, rim lighting, and focal depth engineered to pop on mobile storefronts and 4K displays.
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                <div className="font-semibold text-white mb-1">
                  Speed &amp; Rapid Production
                </div>
                <div className="text-xs text-zinc-400 leading-relaxed font-normal">
                  Streamlined pipeline between Blender, game engines (Roblox Studio), and Adobe Suite for rapid turnaround cycles.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
