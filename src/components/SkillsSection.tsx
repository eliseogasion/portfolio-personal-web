'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';

export default function SkillsSection() {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="py-24 md:py-32 bg-[#0E0E11] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D5001C]" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-zinc-400">
                Competencies
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Software Stack &amp; Capabilities.
            </h2>
          </div>

          <p className="text-sm text-zinc-400 max-w-sm font-light leading-relaxed">
            Proficiency across high-end automotive CAD platforms and artistic digital rendering environments.
          </p>
        </div>

        {/* 3-Column Clean Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-semibold text-white tracking-tight pb-4 mb-6 border-b border-white/10">
                  {category.title}
                </h3>

                <div className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between text-xs py-2 border-b border-white/5 last:border-none"
                    >
                      <span className={`font-normal ${skill.featured ? 'text-white' : 'text-zinc-400'}`}>
                        {skill.name}
                      </span>

                      <span className="text-[11px] text-zinc-500 font-medium">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
