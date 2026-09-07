'use client';

import React from 'react';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolioData';
import { ArrowRight, Download, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 bg-[#0B0B0D] overflow-hidden">
      {/* Subtle ambient light gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-b from-white/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Subtitle */}
        <Reveal delay={50}>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#D5001C] animate-pulse-subtle shadow-[0_0_8px_rgba(213,0,28,0.5)]" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-zinc-400">
              Industrial Design &amp; Product Engineering
            </span>
          </div>
        </Reveal>

        {/* Main Headline */}
        <div className="max-w-4xl mb-8">
          <Reveal delay={150}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6">
              Shaping physical products.<br />
              <span className="text-zinc-400 font-normal">Visualizing complex ideas.</span>
            </h1>
          </Reveal>

          <Reveal delay={250}>
            <p className="text-base sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
              Industrial Designer specialized in product engineering and high-fidelity 3D visualization. Backed by +5 years developing Class-A automotive components for leading global automakers—including{' '}
              <strong className="text-white font-medium">Volkswagen, Stellantis, Renault, and Toyota</strong>—bridging
              rigorous CAD feasibility with aesthetic clarity and realistic visual communication.
            </p>
          </Reveal>
        </div>

        {/* Action Buttons */}
        <Reveal delay={350}>
          <div className="flex flex-wrap items-center gap-4 mb-20">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black text-xs uppercase tracking-wider font-semibold hover:bg-zinc-200 transition-all cursor-pointer"
            >
              <span>Explore Work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="#cinematic-showcase"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-transparent text-white text-xs uppercase tracking-wider font-semibold border border-white/20 hover:border-white hover:bg-white/5 transition-all cursor-pointer"
            >
              <span>3D &amp; Game Art</span>
            </a>

            <a
              href={personal.resumePdf}
              download
              className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs uppercase tracking-wider font-medium text-zinc-400 hover:text-white transition-colors"
            >
              <span>Resume (PDF)</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </Reveal>

        {/* Featured Visual Canvas (Porsche-Style Cinematic Banner) */}
        <Reveal delay={450}>
          <div className="relative aspect-[21/9] w-full rounded-xl overflow-hidden bg-zinc-950 border border-white/10 shadow-2xl mb-16 group">
            <Image
              src="/projects/porsche-930-turbo-hero.png"
              alt="Porsche 911 Turbo 3.0 (Type 930, 1975): Historic Studio & Material Study"
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover transition-transform duration-700 group-hover:scale-102"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 sm:p-10">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-widest font-medium text-zinc-400 block mb-1">
                    Featured Case Study // Historic Automotive 3D
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                    Porsche 911 Turbo 3.0 (Type 930, 1975): Studio &amp; Material Study
                  </h3>
                </div>

                <a
                  href="#projects"
                  className="text-xs uppercase tracking-wider font-semibold text-white hover:text-zinc-300 flex items-center gap-1.5"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Minimalist Key Metrics */}
        <Reveal delay={550}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white tracking-tight mb-1">
                +5 Years
              </div>
              <div className="text-xs uppercase tracking-wider text-zinc-500 font-medium">
                Automotive Engineering &amp; DFM
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-light text-white tracking-tight mb-1">
                Global OEMs
              </div>
              <div className="text-xs uppercase tracking-wider text-zinc-500 font-medium">
                VW • Stellantis • Toyota • Renault
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-light text-white tracking-tight mb-1">
                CATIA V5 &amp; Blender
              </div>
              <div className="text-xs uppercase tracking-wider text-zinc-500 font-medium">
                Class-A CAD to Cycles
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-light text-white tracking-tight mb-1">
                Estudio 55
              </div>
              <div className="text-xs uppercase tracking-wider text-zinc-500 font-medium">
                Furniture Design Atelier
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

