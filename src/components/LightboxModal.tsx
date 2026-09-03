'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ProjectItem } from '@/data/portfolioData';
import { X, ChevronLeft, ChevronRight, Check, Wrench, Package, Terminal } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/95 backdrop-blur-md">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-6xl max-h-[95vh] bg-[#050507] border border-white/20 rounded-xs shadow-2xl overflow-hidden flex flex-col z-10">
        {/* Telemetry Header */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-white/10 bg-black font-mono">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold px-2 py-0.5 bg-[#FF3E00] text-black tracking-wider">
              {project.specCode}
            </span>
            <span className="text-xs text-zinc-400">
              CLIENT // <strong className="text-white">{project.clientOrContext}</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => hasPrev && onSelectProject(projectsList[currentIndex - 1])}
              disabled={!hasPrev}
              className="p-1.5 text-zinc-400 hover:text-white disabled:opacity-20 transition-colors"
              title="Anterior (←)"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs text-zinc-500">
              {currentIndex + 1} / {projectsList.length}
            </span>
            <button
              onClick={() => hasNext && onSelectProject(projectsList[currentIndex + 1])}
              disabled={!hasNext}
              className="p-1.5 text-zinc-400 hover:text-white disabled:opacity-20 transition-colors"
              title="Siguiente (→)"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="w-[1px] h-4 bg-white/10 mx-2" />

            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-[#FF3E00] transition-colors"
              title="Cerrar (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-grow divide-y divide-white/10">
          {/* Main Display */}
          <div className="bg-black/90 p-4 sm:p-6 flex flex-col items-center justify-center min-h-[320px] md:min-h-[440px]">
            {project.videoUrl ? (
              <div className="w-full max-w-4xl aspect-video rounded-xs overflow-hidden bg-black shadow-2xl relative border border-white/10">
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
              <div className="relative w-full max-w-4xl aspect-video rounded-xs overflow-hidden shadow-2xl bg-zinc-950 border border-white/10">
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
              <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1 max-w-full">
                {currentMediaList.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveMediaIndex(idx)}
                    className={`relative w-20 aspect-video rounded-xs overflow-hidden border-2 transition-all flex-shrink-0 ${
                      activeMediaIndex === idx
                        ? 'border-[#FF3E00] shadow-md shadow-[#FF3E00]/40'
                        : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt={`Ángulo ${idx + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Technical Dossier */}
          <div className="p-6 md:p-8 bg-[#050507] grid grid-cols-1 lg:grid-cols-12 gap-8 font-sans">
            {/* Left: Overview & Pipeline */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-2xl font-black text-white tracking-tight uppercase mb-2">
                  {project.title}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 font-mono">
                  {project.subtitle}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs font-bold text-[#FF3E00] uppercase tracking-wider mb-2">
                  // DESCRIPCIÓN & ENFOQUE TÉCNICO
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>

              {project.processBreakdown && (
                <div>
                  <h4 className="font-mono text-xs font-bold text-[#FF3E00] uppercase tracking-wider mb-3">
                    // PIPELINE DE DESARROLLO & RENDERIZADO
                  </h4>
                  <div className="space-y-2">
                    {project.processBreakdown.map((step, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-start gap-3 text-xs text-zinc-300 bg-zinc-900/60 p-3 rounded-xs border border-white/5 font-mono"
                      >
                        <div className="w-1.5 h-1.5 bg-[#FF3E00] mt-1.5 flex-shrink-0" />
                        <span className="leading-relaxed font-sans">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Telemetry Specs & Deliverables */}
            <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-white/10 lg:pl-8 font-mono">
              {/* Engineering Specs Table */}
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 pb-2 border-b border-white/10">
                  // FICHA DE HOMOLOGACIÓN
                </h4>
                <div className="space-y-2 text-xs">
                  {project.engineeringSpecs.map((spec, idx) => (
                    <div key={idx} className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-zinc-500">{spec.label}</span>
                      <span className="text-zinc-200 font-bold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                  // SOFTWARE & ENTORNO
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs px-2.5 py-1 bg-zinc-900 text-zinc-200 border border-white/10"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              {project.deliverables && (
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                    // ENTREGABLES
                  </h4>
                  <ul className="space-y-1 text-xs text-zinc-400">
                    {project.deliverables.map((deliv, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2">
                        <span className="text-[#FF3E00]">►</span>
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
