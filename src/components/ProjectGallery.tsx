'use client';

import React, { useState } from 'react';
import { portfolioData, ProjectItem } from '@/data/portfolioData';
import ProjectCard from './ProjectCard';
import LightboxModal from './LightboxModal';
import { LayoutGrid, Car, Gamepad2, Compass, Layers } from 'lucide-react';

export default function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'ALL WORK', icon: LayoutGrid },
    { id: 'automotive-oem', label: 'AUTOMOTIVE OEM (VW & RENAULT)', icon: Car },
    { id: 'cinematic-game', label: 'CINEMATIC & GAME ART', icon: Gamepad2 },
    { id: 'estudio-55', label: 'ESTUDIO 55 // VENTURE', icon: Layers },
    { id: 'simulation-product', label: 'SIMULATION & HARDWARE', icon: Compass },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#FF3E00] uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 bg-[#FF3E00] rounded-full" />
              <span>01 // SELECTED WORK & ENGINEERING ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              FEATURED PROJECTS
            </h2>
          </div>

          <p className="font-mono text-xs text-zinc-400 max-w-md leading-relaxed">
            From high-precision Class-A surfaces for <strong className="text-white">Volkswagen</strong> and{' '}
            <strong className="text-white">Renault</strong>, to cinematic lighting, game renders, and artisanal furniture design.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none font-mono text-xs">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xs transition-all flex-shrink-0 cursor-pointer uppercase tracking-wider ${
                  isActive
                    ? 'bg-[#FF3E00] text-black font-black shadow-lg shadow-[#FF3E00]/20'
                    : 'bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/10'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
                <span
                  className={`text-[9px] px-1.5 py-0.2 rounded-xs ${
                    isActive ? 'bg-black text-[#FF3E00] font-bold' : 'bg-black/50 text-zinc-500'
                  }`}
                >
                  {cat.id === 'all'
                    ? portfolioData.projects.length
                    : portfolioData.projects.filter((p) => p.category === cat.id).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
