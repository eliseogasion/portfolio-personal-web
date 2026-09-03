'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Cpu, Wrench, Check, Sparkles } from 'lucide-react';

export default function SkillsSection() {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="py-20 md:py-28 bg-zinc-950/40 relative border-t border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-widest mb-3">
            <Cpu className="w-4 h-4" />
            <span>Stack Técnico & Capacidades</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Herramientas & Habilidades Clave
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Alineadas con los requerimientos exactos del rol de <strong className="text-white">Render Artist</strong>:
            dominio de Blender, Roblox Studio, suite de Adobe y comprensión profunda de geometría 3D y materiales.
          </p>
        </div>

        {/* 3-Column Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight mb-5 pb-3 border-b border-zinc-800 flex items-center justify-between">
                  <span>{category.title}</span>
                  <span className="w-2 h-2 rounded-full bg-sky-400" />
                </h3>

                <div className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`p-3 rounded-xl border flex items-center justify-between transition-colors ${
                        skill.featured
                          ? 'bg-sky-500/5 border-sky-500/30'
                          : 'bg-zinc-950/40 border-zinc-800/60'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Check
                          className={`w-4 h-4 ${
                            skill.featured ? 'text-sky-400 font-bold' : 'text-zinc-500'
                          }`}
                        />
                        <span
                          className={`text-xs font-semibold ${
                            skill.featured ? 'text-white' : 'text-zinc-300'
                          }`}
                        >
                          {skill.name}
                        </span>
                      </div>

                      <span className="text-[11px] text-zinc-400 font-medium bg-zinc-800/80 px-2 py-0.5 rounded">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-800/60 text-[11px] text-zinc-500 text-center">
                Optimizado para entregas rápidas e iteración continua
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
