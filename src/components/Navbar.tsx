'use client';

import React, { useState, useEffect } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Menu, X, FileText, Send, Terminal } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '01 // PROYECTOS', href: '#proyectos' },
    { label: '02 // ROBLOX / VOLDEX', href: '#roblox-spotlight' },
    { label: '03 // TRAYECTORIA', href: '#experiencia' },
    { label: '04 // SKILLS & CAD', href: '#skills' },
    { label: '05 // CONTACTO', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#050507]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black'
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-xs bg-[#FF3E00] flex items-center justify-center font-mono font-black text-black text-xs tracking-tighter group-hover:bg-white transition-colors">
            EG
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-white tracking-tight text-sm uppercase group-hover:text-[#FF3E00] transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="hidden sm:inline-block text-[9px] font-mono font-semibold px-2 py-0.5 rounded-xs bg-white/5 text-[#FF3E00] border border-[#FF3E00]/30 tracking-wider">
                OEM SURFACING & 3D
              </span>
            </div>
            <p className="text-[10px] font-mono text-zinc-500 hidden sm:block">
              CÓRDOBA, ARG // VW & RENAULT ALUM
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-mono font-medium text-zinc-400 hover:text-white hover:border-b border-[#FF3E00] pb-0.5 transition-colors tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={portfolioData.personal.resumePdf}
            download
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold text-zinc-300 bg-zinc-900 border border-zinc-700/80 hover:border-white hover:text-white rounded-xs transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-[#FF3E00]" />
            <span>CV (PDF)</span>
          </a>
          <a
            href="#contacto"
            className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono font-bold text-black bg-[#FF3E00] hover:bg-white rounded-xs transition-all tracking-wider shadow-sm shadow-[#FF3E00]/30"
          >
            <span>CONTACT</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-zinc-400 hover:text-white lg:hidden rounded-xs bg-zinc-900 border border-zinc-800"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050507]/98 backdrop-blur-xl border-b border-white/10 px-6 py-5 space-y-3 mt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-mono font-medium text-zinc-300 hover:text-[#FF3E00] py-2 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <a
              href={portfolioData.personal.resumePdf}
              download
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-mono font-semibold text-zinc-300 bg-zinc-900 rounded-xs border border-zinc-800"
            >
              <FileText className="w-4 h-4 text-[#FF3E00]" />
              DESCARGAR CV EN PDF
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-mono font-bold text-black bg-[#FF3E00] rounded-xs"
            >
              CONTACTAR // POSTULACIÓN
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
