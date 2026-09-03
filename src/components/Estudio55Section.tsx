'use client';

import React from 'react';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolioData';
import { Hammer, Layers, Cpu, Play, Check, Flame, Box, Sparkles, ArrowUpRight } from 'lucide-react';

export default function Estudio55Section() {
  return (
    <section id="estudio-55" className="py-24 bg-[#050507] border-t border-white/10 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#DF5A2B]/10 blur-[170px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#FF3E00] uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 bg-[#FF3E00] rounded-full" />
              <span>02 // VENTURE & INDUSTRIAL LAB</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              ESTUDIO 55 // FACETA EMPRENDEDORA
            </h2>
          </div>

          <div className="font-mono text-xs text-zinc-400 max-w-md leading-relaxed">
            [ROL]: Fundador, Diseñador de Producto & Artista 3D. Diseño de mobiliario de autor, mecanizado CNC y renders comerciales de catálogo.
          </div>
        </div>

        {/* Spotlight Grid: Video/Visual + Entrepreneurial Pillars */}
        <div className="rounded-xs bg-black border border-white/15 p-6 sm:p-10 shadow-2xl relative mb-12">
          <div className="absolute -top-[1px] left-10 px-3 py-0.5 bg-[#FF3E00] text-black font-mono text-[9px] font-black uppercase tracking-wider">
            FOUNDER & LEAD PRODUCT DESIGNER
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Real Video / Render */}
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
                  <span className="text-[#FF3E00] font-bold">ESTUDIO 55</span> // UNIONES & MECANIZADO CNC
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
                    SILLA ENZO
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
                    MESA SAAR
                  </div>
                </div>

                <div className="relative aspect-video border border-white/10 overflow-hidden group">
                  <Image
                    src="/projects/estudio55-living.png"
                    alt="Colección Manifiesto en Living"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-1 left-1.5 font-mono text-[9px] bg-black/80 px-1 text-white">
                    MANIFIESTO LIVING
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Multidisciplinary Argument for Voldex */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="font-mono text-xs text-[#FF3E00] font-bold uppercase tracking-wider">
                  VISIÓN HOLÍSTICA DE PRODUCTO
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase mt-1 mb-3">
                  De la ingeniería de garage a la escala comercial
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                  Crear <strong className="text-white">Estudio 55</strong> significó asumir el control total de una marca física: desde el boceto y cálculo de resistencia hasta el fresado CNC en madera maciza de Laurel, la dirección de arte y los renders de catálogo para ventas directas.
                </p>
              </div>

              {/* 3 Pillars */}
              <div className="space-y-3 font-mono">
                <div className="p-3.5 bg-zinc-900/60 border border-white/5 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#FF3E00] mt-1.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white uppercase">
                      DISEÑO CAD/CAM & FABRICACIÓN DIGITAL
                    </div>
                    <div className="text-[11px] text-zinc-400 font-sans mt-0.5">
                      Modelado en CATIA/SolidWorks, programación de trayectorias de corte CNC, optimización de placas y tolerancias de encastre.
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-zinc-900/60 border border-white/5 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#FF3E00] mt-1.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white uppercase">
                      RENDERIZADO COMERCIAL & SHADERS PBR
                    </div>
                    <div className="text-[11px] text-zinc-400 font-sans mt-0.5">
                      Visualización fotorrealista para e-commerce: calibración de maderas, laca poliuretánica mate, vetas reales e iluminación de ambiente.
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-zinc-900/60 border border-white/5 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#FF3E00] mt-1.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white uppercase">
                      OWNERSHIP & EJECUCIÓN END-TO-END
                    </div>
                    <div className="text-[11px] text-zinc-400 font-sans mt-0.5">
                      Gestión de presupuesto, trato con proveedores, producción por lotes (Batch 01) y estrategia digital de marketing.
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote from Manifiesto */}
              <div className="p-4 bg-zinc-900/40 border-l-2 border-[#FF3E00] font-mono text-xs text-zinc-400 italic">
                &ldquo;Honestidad constructiva y resolución técnica: Los encastres a la vista no son imperfecciones, son la firma de la autenticidad.&rdquo;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
