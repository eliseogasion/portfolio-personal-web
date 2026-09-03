'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ProjectItem } from '@/data/portfolioData';
import { X, ChevronLeft, ChevronRight, CheckCircle2, Wrench, Package, Maximize2, Play } from 'lucide-react';

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

  // Reset media index when project changes
  useEffect(() => {
    setActiveMediaIndex(0);
  }, [project]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        // Next project
        const currentIndex = projectsList.findIndex((p) => p.id === project.id);
        if (currentIndex < projectsList.length - 1) {
          onSelectProject(projectsList[currentIndex + 1]);
        }
      } else if (e.key === 'ArrowLeft') {
        // Prev project
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-6xl max-h-[95vh] bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-800 bg-zinc-900/60">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-zinc-400 font-medium">
              {project.clientOrContext} • {project.year}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Project switch buttons */}
            <button
              onClick={() => hasPrev && onSelectProject(projectsList[currentIndex - 1])}
              disabled={!hasPrev}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              title="Proyecto anterior (←)"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs text-zinc-500 font-mono">
              {currentIndex + 1} / {projectsList.length}
            </span>
            <button
              onClick={() => hasNext && onSelectProject(projectsList[currentIndex + 1])}
              disabled={!hasNext}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              title="Siguiente proyecto (→)"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="w-[1px] h-4 bg-zinc-800 mx-1" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              title="Cerrar (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto flex-grow divide-y divide-zinc-800/80">
          {/* Main Visual Display */}
          <div className="bg-black/60 p-4 sm:p-6 flex flex-col items-center justify-center min-h-[340px] md:min-h-[460px]">
            {/* Video player if video exists and selected */}
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
              <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl bg-zinc-950">
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

            {/* Thumbnails strip (if multiple gallery images exist) */}
            {currentMediaList.length > 1 && (
              <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1 max-w-full">
                {currentMediaList.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveMediaIndex(idx)}
                    className={`relative w-20 aspect-video rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                      activeMediaIndex === idx
                        ? 'border-sky-400 shadow-md shadow-sky-500/30 scale-105'
                        : 'border-zinc-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Ángulo ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Details & Technical Breakdown */}
          <div className="p-6 md:p-8 bg-zinc-950 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Col: Overview & Process */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-black text-white tracking-tight mb-2">
                  {project.title}
                </h2>
                <p className="text-sm text-zinc-400 font-medium">
                  {project.subtitle}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                  Descripción & Enfoque
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Process Steps */}
              {project.processBreakdown && project.processBreakdown.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Wrench className="w-3.5 h-3.5 text-sky-400" />
                    <span>Pipeline de Renderizado & Proceso</span>
                  </h4>
                  <div className="space-y-2.5">
                    {project.processBreakdown.map((step, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-start gap-2.5 text-xs text-zinc-300 bg-zinc-900/60 p-3 rounded-lg border border-zinc-800/80"
                      >
                        <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Col: Metadata, Software & Deliverables */}
            <div className="space-y-6 lg:border-l lg:border-zinc-800/80 lg:pl-8">
              {/* Software / Tools */}
              <div>
                <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Wrench className="w-3.5 h-3.5 text-sky-400" />
                  <span>Software & Herramientas</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-medium px-3 py-1 rounded-lg bg-zinc-900 text-sky-300 border border-zinc-800"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              {project.deliverables && project.deliverables.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Package className="w-3.5 h-3.5 text-sky-400" />
                    <span>Entregables Finales</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {project.deliverables.map((deliv, dIdx) => (
                      <li
                        key={dIdx}
                        className="text-xs text-zinc-400 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags */}
              <div>
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                  Tags & Categorización
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-[11px] text-zinc-500 bg-zinc-900/80 px-2 py-0.5 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
