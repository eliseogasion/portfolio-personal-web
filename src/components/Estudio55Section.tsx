'use client';

import React from 'react';
import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import { portfolioData } from '@/data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Estudio55Section() {
  const { personal } = portfolioData;

  return (
    <section id="estudio-55" className="py-24 md:py-32 bg-[#0B0B0D] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <Reveal delay={50}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#D5001C] animate-pulse-subtle shadow-[0_0_8px_rgba(213,0,28,0.5)]" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-zinc-400">
                  Personal Studio &amp; Active Venture
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Estudio 55. Design Philosophy &amp; Craft.
              </h2>
            </div>

            <div className="max-w-md space-y-4">
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                My independent furniture and product design studio—an active entrepreneurial venture run in parallel, where I materialize my own creative vision and design language.
              </p>

              <a
                href={personal.estudio55Instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 text-xs text-zinc-300 hover:text-white transition-all duration-300 font-medium group cursor-pointer"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
                <span>@estudio.55_</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Video & Renders */}
          <div className="lg:col-span-7">
            <Reveal delay={150} className="space-y-4">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-white/10 shadow-2xl">
              <video
                src="/videos/estudio55-silla-video.mp4"
                controls
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="text-[11px] uppercase tracking-wider font-medium px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white border border-white/10">
                  Enzo Chair // Joinery Study
                </span>
              </div>
            </div>

            {/* Gallery Strip */}
            <div className="grid grid-cols-3 gap-3">
              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 group">
                <Image
                  src="/projects/estudio55-silla-enzo.png"
                  alt="Enzo Chair Estudio 55"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 text-[10px] uppercase font-medium bg-black/80 px-2 py-0.5 rounded text-white">
                  Enzo Chair
                </div>
              </div>

              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 group">
                <Image
                  src="/projects/estudio55-mesa-saar.png"
                  alt="Saar Table Estudio 55"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 text-[10px] uppercase font-medium bg-black/80 px-2 py-0.5 rounded text-white">
                  Saar Table
                </div>
              </div>

              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 group">
                <Image
                  src="/projects/estudio55-living.png"
                  alt="Manifiesto Living Scene"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 text-[10px] uppercase font-medium bg-black/80 px-2 py-0.5 rounded text-white">
                  Manifiesto Scene
                </div>
              </div>
            </div>
            </Reveal>
          </div>

          {/* Right: The Entrepreneurial & Creative Story */}
          <div className="lg:col-span-5">
            <Reveal delay={250} className="space-y-8">
              <div>
                <span className="text-xs uppercase tracking-widest font-medium text-zinc-500 block mb-2">
                  Creative Space
                </span>
                <h3 className="text-2xl font-semibold text-white tracking-tight mb-3">
                  Where personal ideas take physical form
                </h3>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  Estudio 55 is my personal design venture—an active, parallel creative studio where I express my own philosophy without corporate filters. It allows me to explore author furniture pieces, experiment with honest craftsmanship, and shape an aesthetic identity entirely my own.
                </p>
              </div>

              <div className="space-y-3 font-light text-sm text-zinc-300">
                <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                  <div className="font-semibold text-white mb-1">
                    Creative Autonomy &amp; Philosophy
                  </div>
                  <div className="text-xs text-zinc-400 font-normal leading-relaxed">
                    A direct channel for my design voice: balancing structural honesty, refined proportions, and timeless author pieces designed to last.
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                  <div className="font-semibold text-white mb-1">
                    From Concept to Material Object
                  </div>
                  <div className="text-xs text-zinc-400 font-normal leading-relaxed">
                    Seamlessly connecting initial sketches, 3D visualization, physical workshop prototyping, and direct production.
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                  <div className="font-semibold text-white mb-1">
                    Active Entrepreneurial Venture
                  </div>
                  <div className="text-xs text-zinc-400 font-normal leading-relaxed">
                    Managing an ongoing brand in parallel: overseeing creative direction, manufacturing partnerships, and visual catalog presentation.
                  </div>
                </div>
              </div>

              <div className="pl-4 border-l-2 border-white/20 text-xs text-zinc-400 font-light italic leading-relaxed">
                &ldquo;Estudio 55 represents my conviction that great design is honest: pieces that celebrate their construction, honor noble materials, and speak with quiet authenticity.&rdquo;
              </div>

              <div className="pt-2">
                <a
                  href={personal.estudio55Instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-zinc-300 hover:text-white transition-colors group cursor-pointer"
                >
                  <span>Explore Atelier &amp; Catalog on Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
