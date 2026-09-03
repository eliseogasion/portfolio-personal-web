'use client';

import React, { useState } from 'react';
import { portfolioData, ProjectItem } from '@/data/portfolioData';
import ProjectCard from './ProjectCard';
import LightboxModal from './LightboxModal';
import { LayoutGrid, Car, Gamepad2, Compass } from 'lucide-react';

export default function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'TODOS // ALL', icon: LayoutGrid },
    { id: 'automotive-oem', label: 'OEM AUTOMOTIVE (VW & RENAULT)', icon: Car },
    { id: 'roblox-gaming', label: 'ROBLOX & GAMING (DRIVING EMPIRE)', icon: Gamepad2 },
    { id: 'product-sim', label: 'SIMULACIÓN & HARDWARE (UNC)', icon: Compass },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="proyectos" className="py-24 relative bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#FF3E00] uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 bg-[#FF3E00] rounded-full" />
              <span>01 // CATÁLOGO TÉCNICO & RENDERS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              PROYECTOS DESTACADOS
            </h2>
          </div>

          <p className="font-mono text-xs text-zinc-400 max-w-md leading-relaxed">
            Piezas de producción real para <strong className="text-white">Volkswagen</strong> y{' '}
            <strong className="text-white">Renault</strong> junto a propuestas de arte 3D y renderizado para{' '}
            <strong className="text-[#FF3E00]">Voldex / Driving Empire</strong>.
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
