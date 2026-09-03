'use client';

import React from 'react';
import Image from 'next/image';
import { ProjectItem } from '@/data/portfolioData';
import { Play, Eye, Layers, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const getCategoryBadgeColor = (cat: ProjectItem['category']) => {
    switch (cat) {
      case 'roblox':
        return 'bg-sky-500/10 text-sky-400 border-sky-500/30';
      case 'estudio-55':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'automotive':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      default:
        return 'bg-zinc-800 text-zinc-300 border-zinc-700';
    }
  };

  return (
    <article
      onClick={() => onSelect(project)}
      className="group cursor-pointer rounded-2xl bg-zinc-900/60 border border-zinc-800/80 overflow-hidden hover:border-zinc-600 hover:shadow-2xl hover:shadow-sky-500/5 transition-all duration-300 flex flex-col"
    >
      {/* Visual Canvas Container */}
      <div className="relative aspect-video w-full bg-zinc-950 overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-sky-400 text-zinc-950 font-bold text-xs shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <Eye className="w-4 h-4" />
            <span>Ver Render & Proceso</span>
          </div>
        </div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span
            className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border backdrop-blur-md ${getCategoryBadgeColor(
              project.category
            )}`}
          >
            {project.categoryLabel}
          </span>
          {project.featured && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-400 text-zinc-950 shadow-sm flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              DESTACADO
            </span>
          )}
        </div>

        {/* Video indicator if available */}
        {project.videoUrl && (
          <div className="absolute top-3 right-3 p-1.5 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-700 text-white">
            <Play className="w-3.5 h-3.5 fill-current" />
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <div className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider mb-1.5 flex items-center justify-between">
            <span>{project.clientOrContext}</span>
            <span>{project.year}</span>
          </div>
          <h3 className="text-base font-bold text-white group-hover:text-sky-400 transition-colors leading-snug mb-2">
            {project.title}
          </h3>
          <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-4">
            {project.subtitle}
          </p>
        </div>

        {/* Tools Tags */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/60">
          {project.tools.slice(0, 3).map((tool, idx) => (
            <span
              key={idx}
              className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-zinc-800/80 text-zinc-300"
            >
              {tool}
            </span>
          ))}
          {project.tools.length > 3 && (
            <span className="text-[10px] text-zinc-500 px-1 py-0.5">
              +{project.tools.length - 3}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
