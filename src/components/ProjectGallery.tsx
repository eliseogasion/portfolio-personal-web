'use client';

import React, { useState } from 'react';
import { portfolioData, ProjectItem } from '@/data/portfolioData';
import ProjectCard from './ProjectCard';
import LightboxModal from './LightboxModal';

export default function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Models & Work' },
    { id: 'automotive-oem', label: 'Automotive OEM' },
    { id: 'cinematic-game', label: '3D & Game Art' },
    { id: 'estudio-55', label: 'Estudio 55 Design' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D5001C]" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-zinc-400">
                Selected Works
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Engineering archive &amp; visual projects.
            </h2>
          </div>

          <p className="text-sm text-zinc-400 max-w-md font-light leading-relaxed">
            From serial OEM surfacing for <strong className="text-white font-medium">Volkswagen</strong> and{' '}
            <strong className="text-white font-medium">Renault</strong> to cinematic lighting rigs, game renders, and bespoke furniture design.
          </p>
        </div>

        {/* Minimalist Model Range Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-14 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const count =
              cat.id === 'all'
                ? portfolioData.projects.length
                : portfolioData.projects.filter((p) => p.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all flex-shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-white text-black shadow-lg shadow-white/10'
                    : 'text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-black/15 text-black font-bold' : 'text-zinc-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        project={selectedProject}
        projectsList={filteredProjects}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
      />
    </section>
  );
}
