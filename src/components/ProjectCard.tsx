'use client';

import React from 'react';
import Image from 'next/image';
import { ProjectItem } from '@/data/portfolioData';
import { Eye, Play } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <article
      onClick={() => onSelect(project)}
      className="group cursor-pointer bg-black border border-white/10 hover:border-[#FF3E00] transition-all duration-300 flex flex-col relative overflow-hidden"
    >
      {/* Visual Canvas */}
      <div className="relative aspect-video w-full bg-zinc-950 overflow-hidden border-b border-white/10">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="flex items-center gap-2 px-4 py-2 bg-[#FF3E00] text-black font-mono font-black text-xs uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5" />
            <span>VIEW DOSSIER & RENDER</span>
          </div>
        </div>

        {/* Top Telemetry Header */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-2 font-mono">
          <span className="text-[9px] font-bold px-2 py-0.5 bg-black/90 text-[#FF3E00] border border-[#FF3E00]/40 tracking-wider">
            {project.specCode}
          </span>
          {project.featured && (
            <span className="text-[9px] font-bold px-2 py-0.5 bg-[#FF3E00] text-black tracking-wider">
              FEATURED
            </span>
          )}
        </div>

        {project.videoUrl && (
          <div className="absolute top-2.5 right-2.5 p-1 bg-black/80 border border-white/20 text-white">
            <Play className="w-3 h-3 fill-current" />
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-grow justify-between bg-[#08080c]">
        <div>
          <div className="flex items-center justify-between font-mono text-[10px] text-zinc-500 uppercase tracking-wider mb-2">
            <span className="text-[#FF3E00] font-semibold">{project.clientOrContext}</span>
            <span>{project.year}</span>
          </div>

          <h3 className="text-base font-bold text-white group-hover:text-[#FF3E00] transition-colors leading-tight uppercase mb-2">
            {project.title}
          </h3>

          <p className="text-xs text-zinc-400 font-normal leading-relaxed line-clamp-2 mb-4">
            {project.subtitle}
          </p>
        </div>

        {/* Tools and Specs Footnote */}
        <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5 font-mono text-[10px]">
          {project.tools.slice(0, 3).map((tool, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-zinc-900 text-zinc-300 border border-white/5"
            >
              {tool}
            </span>
          ))}
          {project.tools.length > 3 && (
            <span className="px-1 py-0.5 text-zinc-500">
              +{project.tools.length - 3}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
