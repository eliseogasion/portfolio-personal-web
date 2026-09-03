'use client';

import React from 'react';
import Image from 'next/image';

export default function Estudio55Section() {
  return (
    <section id="estudio-55" className="py-24 md:py-32 bg-[#0B0B0D] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D5001C]" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-zinc-400">
                Design Venture &amp; Atelier
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Estudio 55. Craftsmanship &amp; Digital Precision.
            </h2>
          </div>

          <p className="text-sm text-zinc-400 max-w-md font-light leading-relaxed">
            Founder &amp; Lead Designer. Author furniture, multi-axis CNC machining in solid Laurel wood, and photorealistic commercial visualization.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Video & Renders */}
          <div className="lg:col-span-7 space-y-4">
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
                  Joinery Detail Video
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
          </div>

          {/* Right: The Entrepreneurial & Multidisciplinary Perspective */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest font-medium text-zinc-500 block mb-2">
                Holistic Product Ownership
              </span>
              <h3 className="text-2xl font-semibold text-white tracking-tight mb-3">
                From workshop craft to commercial scale
              </h3>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                Founding Estudio 55 represents end-to-end creative and operational leadership: from initial concept sketches and CNC G-Code toolpath programming in solid 2-inch timber, to art direction, brand building, and photorealistic catalog rendering for direct sales.
              </p>
            </div>

            <div className="space-y-3 font-light text-sm text-zinc-300">
              <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                <div className="font-semibold text-white mb-1">
                  CAD/CAM &amp; Digital Fabrication
                </div>
                <div className="text-xs text-zinc-400 font-normal leading-relaxed">
                  SolidWorks and CATIA parametric modeling, multi-axis CNC toolpaths, and precision friction-fit joinery.
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                <div className="font-semibold text-white mb-1">
                  Commercial 3D Rendering &amp; Shaders
                </div>
                <div className="text-xs text-zinc-400 font-normal leading-relaxed">
                  E-commerce visualization with photorealistic wood grain pores, polyurethane matte coatings, and natural lighting.
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                <div className="font-semibold text-white mb-1">
                  Limited Series Rollout (Batch 01)
                </div>
                <div className="text-xs text-zinc-400 font-normal leading-relaxed">
                  Management of supplier logistics, numbered production runs, and digital marketing strategy.
                </div>
              </div>
            </div>

            <div className="pl-4 border-l-2 border-white/20 text-xs text-zinc-400 font-light italic leading-relaxed">
              &ldquo;Constructive honesty and technical resolution: Exposed joinery is not an imperfection—it is the hallmark of authenticity.&rdquo;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
