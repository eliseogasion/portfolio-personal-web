'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Briefcase, GraduationCap, Globe } from 'lucide-react';

export default function ExperienceSection() {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="py-24 md:py-32 bg-[#0B0B0D] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D5001C]" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-zinc-400">
                Career Track
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Experience &amp; Education.
            </h2>
          </div>

          <p className="text-sm text-zinc-400 max-w-sm font-light leading-relaxed">
            +5 years of multidisciplinary design experience across serial automotive programs, 3D digital art, and industrial product development.
          </p>
        </div>

        {/* Two Columns: Left Experience, Right Education & Language */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Work Experience */}
          <div className="lg:col-span-8 space-y-8">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-zinc-400 flex items-center gap-2 mb-6">
              <Briefcase className="w-4 h-4 text-white" />
              <span>Professional Experience</span>
            </h3>

            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-white px-2.5 py-1 rounded-full bg-white/10">
                      {exp.company}
                    </span>
                    <span className="text-xs text-zinc-400 font-medium">— {exp.highlight}</span>
                  </div>

                  <span className="text-xs text-zinc-500 font-mono">{exp.period}</span>
                </div>

                <h4 className="text-xl font-semibold text-white tracking-tight mb-3">
                  {exp.role}
                </h4>

                <p className="text-sm text-zinc-300 font-light leading-relaxed mb-5">
                  {exp.description}
                </p>

                <div className="space-y-2 mb-5">
                  {exp.keyAchievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-400 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  {exp.toolsUsed.map((tool, tIdx) => (
                    <span key={tIdx} className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 text-zinc-400">
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
            <div className="p-8 rounded-xl bg-white/[0.03] border border-white/10">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-zinc-400 flex items-center gap-2 mb-4">
                <Globe className="w-4 h-4 text-white" />
                <span>Languages</span>
              </h3>

              <div className="p-4 rounded-lg bg-white/5 border border-white/5 mb-4">
                <div className="text-xs font-semibold text-[#D5001C] uppercase tracking-wider mb-1">English // B2 Level</div>
                <div className="text-sm font-medium text-white mb-1">Advanced Technical &amp; Conversational</div>
                <div className="text-xs text-zinc-400 font-light leading-relaxed">
                  Seamless daily collaboration with international directors, producers, and remote engineering teams worldwide.
                </div>
              </div>

              <div className="flex justify-between py-2 text-xs border-b border-white/5">
                <span className="text-zinc-500">Spanish</span>
                <span className="text-white font-medium">Native</span>
              </div>
              <div className="flex justify-between py-2 text-xs">
                <span className="text-zinc-500">Italian</span>
                <span className="text-white font-medium">A1 Elementary</span>
              </div>
            </div>

            {/* Education Cards */}
            <div className="p-8 rounded-xl bg-white/[0.03] border border-white/10 space-y-6">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-zinc-400 flex items-center gap-2 mb-4">
                <GraduationCap className="w-4 h-4 text-white" />
                <span>Academic Degrees</span>
              </h3>

              {education.map((edu, eIdx) => (
                <div key={eIdx} className="space-y-1.5 pb-4 border-b border-white/5 last:border-none last:pb-0">
                  <div className="text-[10px] uppercase font-semibold text-zinc-500">{edu.period}</div>
                  <h4 className="text-sm font-semibold text-white">{edu.degree}</h4>
                  <div className="text-xs text-zinc-400">{edu.institution}</div>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed pt-1">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
