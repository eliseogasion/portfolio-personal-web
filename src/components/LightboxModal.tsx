'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ProjectItem } from '@/data/portfolioData';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  project: ProjectItem | null;
  projectsList: ProjectItem[];
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export default function LightboxModal({
  project,
  projectsList,
  onClose,
  onSelectProject,
}: LightboxModalProps) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  useEffect(() => {
    setActiveMediaIndex(0);
  }, [project]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        const currentIndex = projectsList.findIndex((p) => p.id === project.id);
        if (currentIndex < projectsList.length - 1) {
          onSelectProject(projectsList[currentIndex + 1]);
        }
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = projectsList.findIndex((p) => p.id === project.id);
        if (currentIndex > 0) {
          onSelectProject(projectsList[currentIndex - 1]);
        }
      }
    },
    [project, projectsList, onClose, onSelectProject]
  );

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, handleKeyDown]);

  if (!project) return null;

  const currentMediaList = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [project.heroImage];

  const currentImage = currentMediaList[activeMediaIndex] || project.heroImage;

  const currentIndex = projectsList.findIndex((p) => p.id === project.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < projectsList.length - 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl transition-all duration-300">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-6xl max-h-[92vh] bg-[#0E0E11] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 animate-modal-luxury">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0B0B0D]">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-white/10 text-white">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-zinc-400 font-medium">
              {project.clientOrContext} • {project.year}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <button
                onClick={() => hasPrev && onSelectProject(projectsList[currentIndex - 1])}
                disabled={!hasPrev}
                className="p-1.5 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white disabled:opacity-20 transition-all"
                title="Previous (←)"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs text-zinc-500 font-mono px-1">
                {currentIndex + 1} / {projectsList.length}
              </span>
              <button
                onClick={() => hasNext && onSelectProject(projectsList[currentIndex + 1])}
                disabled={!hasNext}
                className="p-1.5 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white disabled:opacity-20 transition-all"
                title="Next (→)"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="w-[1px] h-4 bg-white/10" />

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-all"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-grow divide-y divide-white/5">
          {/* Main Visual Display */}
          <div className="bg-black p-6 flex flex-col items-center justify-center min-h-[360px] md:min-h-[480px]">
            {project.videoUrl ? (
              <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden bg-black shadow-2xl relative">
                <video
                  src={project.videoUrl}
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <div className="relative w-full max-w-4xl aspect-[16/10] rounded-xl overflow-hidden shadow-2xl bg-zinc-950">
                <Image
                  src={currentImage}
                  alt={project.title}
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1100px"
                  className="object-contain"
                />
              </div>
            )}

            {currentMediaList.length > 1 && (
              <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-1 max-w-full">
                {currentMediaList.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveMediaIndex(idx)}
                    className={`relative w-20 aspect-video rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                      activeMediaIndex === idx
                        ? 'border-white shadow-lg shadow-white/10 scale-105'
                        : 'border-white/10 opacity-50 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt={`Angle ${idx + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Editorial Technical Dossier */}
          <div className="p-8 md:p-12 bg-[#0E0E11] grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Overview & Pipeline */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                  {project.title}
                </h2>
                <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                  {project.subtitle}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest font-semibold text-zinc-400 mb-3">
                  Overview &amp; Design Intent
                </h4>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  {project.description}
                </p>
              </div>

              {project.processBreakdown && (
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-zinc-400 mb-4">
                    Development &amp; Rendering Pipeline
                  </h4>
                  <div className="space-y-2.5">
                    {project.processBreakdown.map((step, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 bg-white/5 p-4 rounded-xl font-light"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Telemetry Specs & Deliverables */}
            <div className="lg:col-span-5 space-y-8 lg:border-l lg:border-white/10 lg:pl-12">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-semibold text-zinc-400 mb-4 pb-2 border-b border-white/10">
                  Project Specifications
                </h4>
                <div className="space-y-3 text-xs">
                  {project.engineeringSpecs.map((spec, idx) => (
                    <div key={idx} className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-zinc-500 font-normal">{spec.label}</span>
                      <span className="text-white font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest font-semibold text-zinc-400 mb-3">
                  Tools &amp; Environment
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-white font-normal"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {project.deliverables && (
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-zinc-400 mb-3">
                    Deliverables
                  </h4>
                  <ul className="space-y-1.5 text-xs text-zinc-400 font-light">
                    {project.deliverables.map((deliv, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D5001C]" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
