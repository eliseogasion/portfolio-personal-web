'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Mail, Copy, Check, ExternalLink, FileText, ArrowUp, Phone, MapPin } from 'lucide-react';

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
    <footer id="contact" className="pt-24 pb-12 bg-[#050507] border-t border-white/10 relative overflow-hidden">
      {/* Background orange tach glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#FF3E00]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Contact Monolithic Banner */}
        <div className="p-8 sm:p-14 bg-black border border-white/15 max-w-4xl mx-auto mb-20 shadow-2xl relative">
          <div className="absolute -top-[1px] left-10 px-3 py-0.5 bg-[#FF3E00] text-black font-mono text-[9px] font-black uppercase tracking-wider">
            COMMUNICATION DISPATCH // OPEN
          </div>

          <div className="text-center">
            <div className="font-mono text-xs text-[#FF3E00] font-bold uppercase tracking-widest mb-3">
              06 // INITIATE DIRECT CONTACT
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4 leading-tight">
              LET&apos;S CONNECT &amp; BUILD EXCEPTIONAL VISUALS
            </h2>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto mb-8 font-mono leading-relaxed">
              Whether discussing automotive styling, Class-A surfacing, or cinematic 3D renders for gaming and marketing, I am open to discussing full-time remote roles and select collaborations.
            </p>

            {/* Direct Contact Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto mb-8 font-mono">
              <a
                href={`mailto:${personal.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#FF3E00] hover:bg-white text-black font-black text-xs uppercase tracking-wider transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>SEND EMAIL</span>
              </a>

              <button
                onClick={copyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-white/10 font-bold text-xs uppercase tracking-wider transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#FF3E00]" />
                    <span className="text-[#FF3E00]">COPIED TO CLIPBOARD!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>COPY {personal.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Phone & CV */}
            <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FF3E00]" />
                <span className="text-white font-bold">{personal.phone}</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF3E00]" />
                <span>{personal.location}</span>
              </div>

              <a
                href={personal.resumePdf}
                download
                className="text-[#FF3E00] hover:underline font-bold flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Telemetry Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500">
          <div>
            <span className="text-white font-bold uppercase">{personal.name}</span> // INDUSTRIAL DESIGNER &amp; 3D AUTOMOTIVE ARTIST
          </div>

          <div className="flex items-center gap-6">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-[#FF3E00] transition-colors flex items-center gap-1.5 uppercase"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63Z" />
              </svg>
              <span>LINKEDIN</span>
            </a>

            <a
              href={personal.artstation}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-[#FF3E00] transition-colors flex items-center gap-1 uppercase"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>ARTSTATION</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 bg-zinc-900 hover:bg-[#FF3E00] text-zinc-400 hover:text-black border border-white/10 transition-colors ml-2 cursor-pointer"
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
