'use client';

import React, { useState } from 'react';
import { portfolioData, ProjectItem } from '@/data/portfolioData';
import ProjectCard from './ProjectCard';
import LightboxModal from './LightboxModal';
import { LayoutGrid, Car, Gamepad2, Briefcase } from 'lucide-react';

export default function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'Todos los Renders', icon: LayoutGrid },
    { id: 'roblox', label: 'Roblox & Gaming', icon: Gamepad2 },
    { id: 'estudio-55', label: 'Estudio 55 (Comercial)', icon: Briefcase },
    { id: 'automotive', label: 'Automotive & 3D', icon: Car },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="proyectos" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              Catálogo de Trabajos
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Renders Seleccionados & Proyectos
            </h2>
          </div>

          <p className="text-sm text-zinc-400 max-w-md">
            Combinación de proyectos comerciales de <strong className="text-zinc-200">Estudio 55</strong>, estudios de
            iluminación automotriz y piezas adaptadas al ecosistema de <strong className="text-zinc-200">Roblox</strong>.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex-shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-sky-400 text-zinc-950 shadow-md shadow-sky-500/20'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-zinc-950/20 text-zinc-900' : 'bg-zinc-800 text-zinc-500'
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
