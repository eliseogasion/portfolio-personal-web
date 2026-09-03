'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Briefcase, GraduationCap, Globe, Award } from 'lucide-react';

export default function ExperienceSection() {
  const { experience, education, personal } = portfolioData;

  return (
    <section id="experience" className="py-24 bg-[#050507] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#FF3E00] uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 bg-[#FF3E00] rounded-full" />
              <span>04 // CAREER TRACK & ACADEMIC BACKGROUND</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              PROFESSIONAL EXPERIENCE & EDUCATION
            </h2>
          </div>

          <div className="font-mono text-xs text-zinc-400 max-w-sm leading-relaxed">
            +5 years of multidisciplinary track record spanning OEM automotive engineering (Volkswagen, Renault) to 3D design and digital animation.
          </div>
        </div>

        {/* Two Columns: Left Experience, Right Education & Language */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Work Experience */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2 mb-6">
              <Briefcase className="w-4 h-4 text-[#FF3E00]" />
              <span>EMPLOYMENT RECORD</span>
            </h3>

            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="relative p-6 bg-black border border-white/10 hover:border-[#FF3E00]/60 transition-colors"
              >
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

                <div className="space-y-1.5 mb-4">
                  {exp.keyAchievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs text-zinc-400">
                      <span className="text-[#FF3E00] font-mono mt-0.5">►</span>
                      <span className="leading-normal">{ach}</span>
                    </div>
                  ))}
                </div>

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

          {/* Education & Language */}
          <div className="lg:col-span-4 space-y-8">
            {/* Language Card */}
            <div className="p-6 bg-black border border-white/10 relative">
              <h3 className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2 mb-4">
                <Globe className="w-4 h-4 text-[#FF3E00]" />
                <span>LANGUAGES & COMMUNICATION</span>
              </h3>

              <div className="p-4 bg-zinc-900/60 border border-[#FF3E00]/30 font-mono">
                <div className="text-xs font-bold text-[#FF3E00] uppercase">ENGLISH // B2 UPPER-INTERMEDIATE</div>
                <div className="text-sm font-black text-white mt-1">FLUENT CONVERSATIONAL & TECHNICAL</div>
                <div className="text-[11px] text-zinc-400 font-sans mt-2 leading-relaxed">
                  Daily collaboration ease with international art directors, producers, and remote engineering teams worldwide.
                </div>
              </div>

              <div className="mt-3 p-3 bg-zinc-900/40 border border-white/5 font-mono text-xs flex justify-between">
                <span className="text-zinc-500">SPANISH:</span>
                <span className="text-zinc-300 font-bold">Native</span>
              </div>
              <div className="mt-2 p-3 bg-zinc-900/40 border border-white/5 font-mono text-xs flex justify-between">
                <span className="text-zinc-500">ITALIAN:</span>
                <span className="text-zinc-300 font-bold">A1 Elementary</span>
              </div>
            </div>

            {/* Education Cards */}
            <div className="p-6 bg-black border border-white/10 space-y-6">
              <h3 className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2 mb-4">
                <GraduationCap className="w-4 h-4 text-[#FF3E00]" />
                <span>ACADEMIC BACKGROUND</span>
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

            {/* Dual Profile Synergy Card */}
            <div className="p-6 bg-gradient-to-br from-black to-zinc-900 border border-[#FF3E00]/40 font-mono text-xs">
              <div className="text-[#FF3E00] font-black uppercase mb-1 flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>THE DUAL ADVANTAGE</span>
              </div>
              <p className="text-zinc-300 font-sans leading-relaxed text-xs">
                An industrial designer who speaks both the language of high-precision Class-A engineering and the emotional nuances of cinematic 3D lighting, rendering, and game art.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
