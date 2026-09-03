'use client';

import React from 'react';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolioData';
import { Flame, Check, Wrench, Shield, ArrowUpRight } from 'lucide-react';

export default function CinematicRenderShowcase() {
  const hypercarProject =
    portfolioData.projects.find((p) => p.id === 'apex-gt-hypercar-cinematic') ||
    portfolioData.projects[2];

  return (
    <section id="cinematic-showcase" className="py-24 bg-[#08080c] relative overflow-hidden border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Telemetry Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#FF3E00] uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 bg-[#FF3E00] rounded-full" />
              <span>02 // CINEMATIC & GAME ART SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              WHERE TECHNICAL RIGOR MEETS VISUAL STORYTELLING
            </h2>
          </div>

          <div className="font-mono text-xs text-zinc-500 max-w-sm">
            [FOCUS]: Crafting high-impact promotional renders, cinematic lighting rigs, and marketing key art for gaming platforms and digital storefronts.
          </div>
        </div>

        {/* Monolithic Showcase Box */}
        <div className="rounded-xs bg-black border border-white/15 p-6 sm:p-10 shadow-2xl relative">
          <div className="absolute -top-[1px] left-10 px-3 py-0.5 bg-[#FF3E00] text-black font-mono text-[9px] font-black uppercase tracking-wider">
            AUTOMOTIVE ART & MARKETING KEY VISUAL
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Canvas */}
            <div className="lg:col-span-7">
              <div className="relative aspect-video rounded-xs overflow-hidden border border-white/20 bg-zinc-950 group">
                <Image
                  src={hypercarProject.heroImage}
                  alt={hypercarProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md px-2.5 py-1 border border-white/10 font-mono text-[10px] text-zinc-300">
                  <span className="text-[#FF3E00] font-bold">16:9</span> // KEY VISUAL RATIO
                </div>

                <div className="absolute bottom-3 right-3 bg-black/85 backdrop-blur-md px-2.5 py-1 border border-white/10 font-mono text-[10px] text-zinc-400">
                  BLENDER CYCLES + PHOTOSHOP
                </div>
              </div>
            </div>

            {/* Technical Case Study Specs */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="font-mono text-xs text-[#FF3E00] font-bold uppercase tracking-wider">
                  THE ARTISTIC ADVANTAGE
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase mt-1 mb-3">
                  Why Real Automotive CAD Elevates Game Rendering
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Lighting a vehicle is not about random spotlights—it is about sculpting form. Having modeled headlights for <strong className="text-white">Volkswagen</strong> and aerodynamic body panels for <strong className="text-white">Renault</strong>, I understand how photons bounce across curvature-continuous sheets of metal, where the eye naturally travels, and how to command immediate visual engagement.
                </p>
              </div>

              {/* Technical Points */}
              <div className="space-y-2.5 font-mono">
                <div className="p-3 bg-zinc-900/60 border border-white/5 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#FF3E00] mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white uppercase">PBR MULTI-LAYER SHADERS</div>
                    <div className="text-[11px] text-zinc-400 font-sans mt-0.5">
                      Realistic clearcoat depth, metallic flakes, anisotropic brake discs, and authentic tire rubber wear.
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-zinc-900/60 border border-white/5 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#FF3E00] mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white uppercase">HIGH-CTR MARKETING COMPOSITION</div>
                    <div className="text-[11px] text-zinc-400 font-sans mt-0.5">
                      Dynamic Dutch angles, rim lighting, and focal depth calibrated to pop on both mobile feeds and 4K displays.
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-zinc-900/60 border border-white/5 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#FF3E00] mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white uppercase">RAPID PRODUCTION PIPELINE</div>
                    <div className="text-[11px] text-zinc-400 font-sans mt-0.5">
                      Streamlined workflow between Blender, game engines (Roblox Studio), and Adobe Suite for fast-paced iteration.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
