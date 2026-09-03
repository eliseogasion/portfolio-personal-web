'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Terminal, Cpu, Check } from 'lucide-react';

export default function SkillsSection() {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="py-24 bg-[#08080c] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#FF3E00] uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 bg-[#FF3E00] rounded-full" />
              <span>04 // STACK TÉCNICO & CAD INDUSTRIAL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              CAPACIDADES & DOMINIO DE SOFTWARE
            </h2>
          </div>

          <div className="font-mono text-xs text-zinc-400 max-w-sm leading-relaxed">
            Intersección entre el software de ingeniería automotriz de alta gama (CATIA V5) y las herramientas de renderizado digital para gaming (Blender, Roblox Studio, Photoshop).
          </div>
        </div>

        {/* 3-Column Telemetry Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 bg-black border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/10">
                  <span className="text-xs font-black text-[#FF3E00] uppercase tracking-wider">
                    {category.code}
                  </span>
                  <span className="w-1.5 h-1.5 bg-[#FF3E00]" />
                </div>

                <h3 className="text-base font-bold text-white uppercase tracking-tight mb-5">
                  {category.title}
                </h3>

                <div className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`p-3 border flex items-center justify-between text-xs transition-colors ${
                        skill.featured
                          ? 'bg-zinc-900/90 border-[#FF3E00]/40 text-white'
                          : 'bg-zinc-950/50 border-white/5 text-zinc-400'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={skill.featured ? 'text-[#FF3E00]' : 'text-zinc-600'}>
                          ►
                        </span>
                        <span className="font-semibold uppercase">{skill.name}</span>
                      </div>

                      <span className="text-[10px] text-zinc-500 font-bold">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-white/5 text-[10px] text-zinc-600 uppercase text-center">
                // SPEC VERIFIED
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
