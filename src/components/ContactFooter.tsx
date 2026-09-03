'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Mail, Copy, Check, ExternalLink, FileText, ArrowUp, Send } from 'lucide-react';

export default function ContactFooter() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contacto" className="pt-20 pb-12 bg-zinc-950 border-t border-zinc-800 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-sky-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Contact Banner */}
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-zinc-800 text-center max-w-4xl mx-auto mb-16 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Send className="w-3.5 h-3.5" />
            <span>Disponible para Oportunidades & Voldex</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            ¿Listo para llevar los visuales de Driving Empire al siguiente nivel?
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Hablemos sobre cómo mi experiencia en <strong className="text-white">Estudio 55</strong> y especialización en renders
            3D de vehículos pueden integrarse a su pipeline de arte y marketing.
          </p>

          {/* Email & Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-8">
            <a
              href={`mailto:${personal.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-400 hover:bg-sky-300 text-zinc-950 font-bold text-sm shadow-lg shadow-sky-500/20 transition-all hover:scale-[1.02]"
            >
              <Mail className="w-4 h-4" />
              <span>Enviar Correo</span>
            </a>

            <button
              onClick={copyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 font-semibold text-sm transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">¡Copiado al portapapeles!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar {personal.email}</span>
                </>
              )}
            </button>
          </div>

          {/* CV Direct Download */}
          <div className="text-xs text-zinc-400 flex items-center justify-center gap-2">
            <span>¿Querés ver el currículum completo?</span>
            <a
              href={personal.resumePdf}
              download
              className="text-sky-400 hover:underline font-semibold flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              Descargar CV en PDF
            </a>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white tracking-tight">{personal.name}</span>
            <span>•</span>
            <span className="text-zinc-400">{personal.currentStudio}</span>
            <span>•</span>
            <span>{personal.location}</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 fill-sky-400" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63Z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href={personal.artstation}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
              <span>ArtStation</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors ml-2 cursor-pointer"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
