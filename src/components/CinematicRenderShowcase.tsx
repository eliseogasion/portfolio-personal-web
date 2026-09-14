'use client';

import React from 'react';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolioData';
import Reveal from '@/components/ui/Reveal';

export default function CinematicRenderShowcase() {
  const ferioliProject =
    portfolioData.projects.find((p) => p.id === 'ferioli-hydrocrane-animation') ||
    portfolioData.projects[2];

  return (
    <section id="cinematic-showcase" className="py-24 md:py-32 bg-[#0E0E11] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <Reveal delay={50}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#D5001C] animate-pulse-subtle shadow-[0_0_8px_rgba(213,0,28,0.5)]" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-zinc-400">
                  Latest Project // 3D Mechanical Animation
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Ferioli: Hydraulic Crane Kinematics.
              </h2>
            </div>

            <p className="text-sm text-zinc-400 max-w-md font-light leading-relaxed">
              Full adaptation of manufacturer SolidWorks CAD into Blender: model optimization, extra asset creation, custom PBR material shading, and complete kinematic animation.
            </p>
          </div>
        </Reveal>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase: Real Video & Renders */}
          <div className="lg:col-span-7 space-y-4">
            <Reveal delay={150} className="space-y-8">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-white/10 shadow-2xl">
              <video
                src={ferioliProject.videoUrl || "/videos/ferioli-hidrogrua-animation.mp4"}
                poster="/projects/ferioli-hidrogrua-hero.jpg"
                controls
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />

              <div className="absolute top-4 left-4">
                <span className="text-[11px] uppercase tracking-wider font-medium px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white border border-white/10">
                  SolidWorks CAD → Blender Animation
                </span>
              </div>
            </div>

            {/* Keyframe Stills */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 group">
                <Image
                  src="/projects/ferioli-hidrogrua-hero.jpg"
                  alt="Ferioli Crane Mechanism Frame"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 text-[10px] uppercase font-medium bg-black/80 px-2 py-0.5 rounded text-white">
                  Full Extension Frame
                </div>
              </div>

              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 group">
                <Image
                  src="/projects/ferioli-hidrogrua-detail.jpg"
                  alt="Ferioli Hydraulic Assembly Detail"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 text-[10px] uppercase font-medium bg-black/80 px-2 py-0.5 rounded text-white">
                  Hydraulic Cylinder Detail
                </div>
              </div>
            </div>
            </Reveal>
          </div>

          {/* Technical Case Breakdown */}
          <div className="lg:col-span-5">
            <Reveal delay={250} className="space-y-8">
              <div>
                <span className="text-xs uppercase tracking-widest font-medium text-zinc-500 block mb-2">
                  Client: Ferioli (Heavy Machinery)
                </span>
                <h3 className="text-2xl font-semibold text-white tracking-tight mb-3">
                  Bringing engineering CAD into dynamic motion
                </h3>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                The objective was to produce a realistic, high-definition mechanical animation demonstrating the full operational deployment of Ferioli&apos;s hydraulic crane. Starting from manufacturing engineering files, the entire model was adapted, detailed, and animated for commercial and technical presentation.
              </p>
            </div>

            {/* Process Steps */}
            <div className="space-y-3.5 text-sm font-light text-zinc-300">
              <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                <div className="font-semibold text-white mb-1">
                  CAD Import &amp; Topology Optimization
                </div>
                <div className="text-xs text-zinc-400 font-normal leading-relaxed">
                  Exported assemblies from SolidWorks and optimized dense CAD geometry in Blender for clean deformation and smooth rendering.
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                <div className="font-semibold text-white mb-1">
                  Modeling Extra Operational Assets
                </div>
                <div className="text-xs text-zinc-400 font-normal leading-relaxed">
                  Modeled supplementary components from scratch: hydraulic lines, fittings, chassis supports, and functional safety hardware.
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                <div className="font-semibold text-white mb-1">
                  Complete PBR Shading &amp; Decals
                </div>
                <div className="text-xs text-zinc-400 font-normal leading-relaxed">
                  Authored industrial materials: powder-coated paint, mirror chrome hydraulic rams, rubber conduits, and regulatory decals.
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                <div className="font-semibold text-white mb-1">
                  Kinematic Rigging &amp; Animation
                </div>
                <div className="text-xs text-zinc-400 font-normal leading-relaxed">
                  Constrained and animated the multi-stage telescopic boom, hydraulic pistons, and stabilizers to represent true machine physics.
                </div>
              </div>
            </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
