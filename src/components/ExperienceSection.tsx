'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Briefcase, GraduationCap, Globe, Check, Award } from 'lucide-react';

export default function ExperienceSection() {
  const { experience, education, personal } = portfolioData;

  return (
    <section id="experiencia" className="py-24 bg-[#050507] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#FF3E00] uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 bg-[#FF3E00] rounded-full" />
              <span>03 // TRAYECTORIA PROFESIONAL & FORMACIÓN</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              EXPERIENCIA OEM & EDUCACIÓN
            </h2>
          </div>

          <div className="font-mono text-xs text-zinc-400 max-w-sm leading-relaxed">
            +5 años de trayectoria formal en ingeniería y diseño automotriz internacional para Volkswagen, Renault y Valeo.
          </div>
        </div>

        {/* Two Columns: Left Experience, Right Education & Language */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Work Experience (Left 8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2 mb-6">
              <Briefcase className="w-4 h-4 text-[#FF3E00]" />
              <span>EXPERIENCIA LABORAL AUDITADA</span>
            </h3>

            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="relative p-6 bg-black border border-white/10 hover:border-[#FF3E00]/60 transition-colors"
              >
                {/* Highlight Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 font-mono">
                    <span className="text-xs font-black text-black bg-[#FF3E00] px-2 py-0.5 uppercase">
                      {exp.company}
                    </span>
                    <span className="text-xs text-zinc-400 font-semibold">// {exp.highlight}</span>
                  </div>

                  <span className="font-mono text-[11px] text-zinc-500">{exp.period}</span>
                </div>

                <h4 className="text-lg font-bold text-white tracking-tight uppercase mb-2">
                  {exp.role}
                </h4>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Key Points */}
                <div className="space-y-1.5 mb-4">
                  {exp.keyAchievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs text-zinc-400">
                      <span className="text-[#FF3E00] font-mono mt-0.5">►</span>
                      <span className="leading-normal">{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tools */}
                <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {exp.toolsUsed.map((tool, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 bg-zinc-900 text-zinc-300 border border-white/5">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education & Language (Right 4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Language Telemetry Card */}
            <div className="p-6 bg-black border border-white/10 relative">
              <h3 className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2 mb-4">
                <Globe className="w-4 h-4 text-[#FF3E00]" />
                <span>IDIOMAS & COMUNICACIÓN</span>
              </h3>

              <div className="p-4 bg-zinc-900/60 border border-[#FF3E00]/30 font-mono">
                <div className="text-xs font-bold text-[#FF3E00] uppercase">INGLÉS // B2 LEVEL</div>
                <div className="text-sm font-black text-white mt-1">ADVANCED CONVERSATIONAL & WRITTEN</div>
                <div className="text-[11px] text-zinc-400 font-sans mt-2 leading-relaxed">
                  Fluidez para interactuar a diario con directores de arte, productores y equipos remotos internacionales.
                </div>
              </div>

              <div className="mt-3 p-3 bg-zinc-900/40 border border-white/5 font-mono text-xs flex justify-between">
                <span className="text-zinc-500">ITALIANO:</span>
                <span className="text-zinc-300 font-bold">Nivel A1 (Básico)</span>
              </div>
            </div>

            {/* Education Cards */}
            <div className="p-6 bg-black border border-white/10 space-y-6">
              <h3 className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2 mb-4">
                <GraduationCap className="w-4 h-4 text-[#FF3E00]" />
                <span>FORMACIÓN ACADÉMICA</span>
              </h3>

              {education.map((edu, eIdx) => (
                <div key={eIdx} className="space-y-1.5 pb-4 border-b border-white/5 last:border-none last:pb-0">
                  <div className="font-mono text-[10px] text-[#FF3E00] uppercase font-bold">{edu.period}</div>
                  <h4 className="text-sm font-bold text-white uppercase">{edu.degree}</h4>
                  <div className="font-mono text-xs text-zinc-400">{edu.institution}</div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans pt-1">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>

            {/* Voldex Compatibility Badge */}
            <div className="p-6 bg-gradient-to-br from-black to-zinc-900 border border-[#FF3E00]/40 font-mono text-xs">
              <div className="text-[#FF3E00] font-black uppercase mb-1 flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>FIT DIRECTO PARA VOLDEX</span>
              </div>
              <p className="text-zinc-300 font-sans leading-relaxed text-xs">
                Cumple y supera los requisitos de 1 a 3 años de experiencia creativa, dominio de Blender/Photoshop, base en Argentina (admitido para remoto) y dominio de inglés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
