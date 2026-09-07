'use client';

import React from 'react';
import Image from 'next/image';
import { ProjectItem } from '@/data/portfolioData';
import { Play, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <article
      onClick={() => onSelect(project)}
      className="group cursor-pointer flex flex-col transition-all duration-300"
    >
      {/* Visual Canvas */}
      <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-zinc-950 border border-white/10 mb-4 group-hover:border-white/30 transition-all duration-500">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-[var(--ease-luxury)] group-hover:scale-[1.03]"
        />

        {/* Subtle Top Tags */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white border border-white/10">
            {project.categoryLabel}
          </span>
        </div>

        {project.videoUrl && (
          <div className="absolute top-3.5 right-3.5 p-2 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white">
            <Play className="w-3 h-3 fill-current" />
          </div>
        )}
      </div>

      {/* Card Info */}
      <div className="flex flex-col flex-grow">
        <div className="flex items-center justify-between text-xs text-zinc-500 uppercase tracking-wider mb-1.5 font-medium">
          <span>{project.clientOrContext}</span>
          <span>{project.year}</span>
        </div>

        <h3 className="text-lg font-semibold text-white group-hover:text-zinc-200 transition-colors tracking-tight mb-1.5 flex items-center justify-between">
          <span>{project.title}</span>
          <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-[var(--ease-luxury)] flex-shrink-0 ml-2 text-zinc-400 group-hover:text-white" />
        </h3>

        <p className="text-xs text-zinc-400 font-light leading-relaxed line-clamp-2 mb-3">
          {project.subtitle}
        </p>

        {/* Minimal Tool Pills */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tools.slice(0, 3).map((tool, idx) => (
            <span
              key={idx}
              className="text-[10px] text-zinc-400 bg-white/5 px-2 py-0.5 rounded-full"
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
