'use client';

import React from 'react';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolioData';

export default function Estudio55Section() {
  return (
    <section id="estudio-55" className="py-24 bg-[#050507] border-t border-white/10 relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#DF5A2B]/10 blur-[170px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#FF3E00] uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 bg-[#FF3E00] rounded-full" />
              <span>03 // VENTURE & INDUSTRIAL LAB</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              ESTUDIO 55 // CRAFT & ENTREPRENEURSHIP
            </h2>
          </div>

          <div className="font-mono text-xs text-zinc-400 max-w-md leading-relaxed">
            [ROLE]: Founder, Product Designer & 3D Artist. Bespoke furniture design, multi-axis CNC machining, and commercial photorealistic renders.
          </div>
        </div>

        {/* Spotlight Grid */}
        <div className="rounded-xs bg-black border border-white/15 p-6 sm:p-10 shadow-2xl relative mb-12">
          <div className="absolute -top-[1px] left-10 px-3 py-0.5 bg-[#FF3E00] text-black font-mono text-[9px] font-black uppercase tracking-wider">
            FOUNDER & LEAD PRODUCT DESIGNER
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Real Video & Renders */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative aspect-video rounded-xs overflow-hidden border border-white/20 bg-zinc-950 group">
                <video
                  src="/videos/estudio55-silla-video.mp4"
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md px-2.5 py-1 border border-white/10 font-mono text-[10px] text-zinc-300">
                  <span className="text-[#FF3E00] font-bold">ESTUDIO 55</span> // CNC JOINERY & CINEMATIC TURNTABLE
                </div>
              </div>

              {/* Real Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-2">
                <div className="relative aspect-video border border-white/10 overflow-hidden group">
                  <Image
                    src="/projects/estudio55-silla-enzo.png"
                    alt="Silla Enzo Estudio 55"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-1 left-1.5 font-mono text-[9px] bg-black/80 px-1 text-white">
                    ENZO CHAIR
                  </div>
                </div>

                <div className="relative aspect-video border border-white/10 overflow-hidden group">
                  <Image
                    src="/projects/estudio55-mesa-saar.png"
                    alt="Mesa Saar Estudio 55"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-1 left-1.5 font-mono text-[9px] bg-black/80 px-1 text-white">
                    SAAR TABLE
                  </div>
                </div>

                <div className="relative aspect-video border border-white/10 overflow-hidden group">
                  <Image
                    src="/projects/estudio55-living.png"
                    alt="Manifiesto Living Environment"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-1 left-1.5 font-mono text-[9px] bg-black/80 px-1 text-white">
                    MANIFIESTO SCENE
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Multidisciplinary & Entrepreneurial Perspective */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="font-mono text-xs text-[#FF3E00] font-bold uppercase tracking-wider">
                  HOLISTIC PRODUCT OWNERSHIP
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase mt-1 mb-3">
                  From Workshop Engineering to Commercial Scale
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                  Founding <strong className="text-white">Estudio 55</strong> demonstrates full end-to-end initiative: taking a product from rough concept sketch, mechanical stress calculations, and CNC milling in solid 2-inch Laurel wood, all the way to commercial art direction and photorealistic catalog renders.
                </p>
              </div>

              {/* 3 Pillars */}
              <div className="space-y-3 font-mono">
                <div className="p-3.5 bg-zinc-900/60 border border-white/5 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#FF3E00] mt-1.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white uppercase">
                      CAD/CAM & DIGITAL FABRICATION
                    </div>
                    <div className="text-[11px] text-zinc-400 font-sans mt-0.5">
                      Parametric modeling in SolidWorks/CATIA, CNC toolpath programming (G-Code), nesting optimization, and precise assembly tolerances.
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-zinc-900/60 border border-white/5 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#FF3E00] mt-1.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white uppercase">
                      COMMERCIAL 3D RENDERING & PBR SHADERS
                    </div>
                    <div className="text-[11px] text-zinc-400 font-sans mt-0.5">
                      E-commerce visualization: realistic wood grain porosity, polyurethane matte coatings, and natural atmospheric lighting rigs.
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-zinc-900/60 border border-white/5 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#FF3E00] mt-1.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white uppercase">
                      END-TO-END EXECUTION & BRANDING
                    </div>
                    <div className="text-[11px] text-zinc-400 font-sans mt-0.5">
                      Supplier logistics, numbered limited production runs (Batch 01), art direction, and digital marketing strategy.
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote from Manifiesto */}
              <div className="p-4 bg-zinc-900/40 border-l-2 border-[#FF3E00] font-mono text-xs text-zinc-400 italic">
                &ldquo;Constructive honesty and technical resolution: Exposed joinery is not an imperfection—it is the hallmark of authenticity.&rdquo;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
