'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';

export default function SkillsSection() {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#0E0E11] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D5001C]" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-zinc-400">
                Toolkit
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Software &amp; Core Tools.
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-light leading-relaxed">
            Practical software used in daily production. My experience with <strong className="text-white font-normal">Roblox Studio is self-taught</strong> through hands-on personal projects and automotive lighting exploration.
          </p>
        </div>

        {/* 3-Column Concise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-semibold text-white tracking-tight pb-3 mb-4 border-b border-white/10">
                  {category.title}
                </h3>

                <div className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between text-xs py-1.5 border-b border-white/5 last:border-none"
                    >
                      <span className="text-zinc-200 font-normal">
                        {skill.name}
                      </span>

                      <span className="text-[11px] text-zinc-500 font-normal">
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
