'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Mail, Copy, Check, ExternalLink, ArrowUp, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

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
    <footer id="contact" className="pt-24 pb-12 bg-[#0B0B0D] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Contact Hero Banner */}
        <Reveal delay={50} className="max-w-3xl mx-auto text-center mb-20">
          <div>
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#D5001C] animate-pulse-subtle shadow-[0_0_8px_rgba(213,0,28,0.5)]" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-zinc-400">
                Get in Touch
              </span>
            </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
            Let&apos;s build exceptional automotive visuals.
          </h2>

          <p className="text-base text-zinc-400 font-light leading-relaxed mb-10 max-w-xl mx-auto">
            Available for remote 3D artist positions, Class-A surfacing contracts, and select creative visual collaborations.
          </p>

          {/* Action Pills */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={`mailto:${personal.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email</span>
            </a>

            <button
              onClick={copyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-xs uppercase tracking-wider border border-white/10 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 opacity-70" />
                  <span>Copy {personal.email}</span>
                </>
              )}
            </button>
          </div>

          {/* Direct Details */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-xs text-zinc-400 font-light">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 opacity-70" />
              <span className="text-white font-medium">{personal.phone}</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 opacity-70" />
              <span>{personal.location}</span>
            </div>

            <a
              href={personal.resumePdf}
              download
              className="text-white hover:text-zinc-300 font-medium flex items-center gap-1"
            >
              <span>Download Resume (PDF)</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
          </div>
        </Reveal>

        {/* Minimal Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-light">
          <div>
            <span className="text-zinc-300 font-medium">{personal.name}</span> • Industrial Design &amp; Product Engineering
          </div>

          <div className="flex items-center gap-6">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1 uppercase tracking-wider text-[11px] font-medium"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>

            <a
              href={personal.artstation}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1 uppercase tracking-wider text-[11px] font-medium"
            >
              <span>ArtStation</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>

            <a
              href={personal.estudio55Instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1 uppercase tracking-wider text-[11px] font-medium"
            >
              <span>Estudio 55</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer ml-2"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
