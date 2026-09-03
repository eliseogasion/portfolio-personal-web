'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Briefcase, Building2, MapPin, CheckCircle, Calendar } from 'lucide-react';

export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experiencia" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-widest mb-3">
            <Briefcase className="w-4 h-4" />
            <span>Trayectoria Profesional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Experiencia en Estudio 55 & Proyectos 3D
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            La experiencia en el desarrollo de productos comerciales para <strong className="text-white">Estudio 55</strong>{' '}
            aporta la madurez profesional, cumplimiento de plazos estrictos y calidad constructiva requerida para integrar equipos
            internacionales de primer nivel.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                    {exp.company}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex items-center gap-4 text-xs text-zinc-400">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/60 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2 mb-6">
                {exp.keyAchievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-normal">{ach}</span>
                  </div>
                ))}
              </div>

              {/* Tools Tags */}
              <div className="pt-4 border-t border-zinc-800/60 flex flex-wrap gap-2">
                {exp.toolsUsed.map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-medium px-2.5 py-1 rounded-lg bg-zinc-800/80 text-zinc-300 border border-zinc-700/40"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
