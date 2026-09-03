'use client';

import React, { useState, useEffect } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Menu, X, FileText, Send, Sparkles } from 'lucide-react';

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
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Roblox / Voldex', href: '#roblox-spotlight' },
    { label: 'Estudio 55', href: '#estudio-55' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center font-bold text-white text-sm shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
            55
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white tracking-tight text-base sm:text-lg group-hover:text-sky-400 transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                Estudio 55
              </span>
            </div>
            <p className="text-xs text-zinc-400 hidden sm:block">
              {portfolioData.personal.role}
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs lg:text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded-lg transition-colors"
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
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-300 bg-zinc-900 border border-zinc-700/80 hover:border-zinc-500 hover:text-white rounded-lg transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-sky-400" />
            <span>CV (PDF)</span>
          </a>
          <a
            href="#contacto"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-zinc-950 bg-sky-400 hover:bg-sky-300 rounded-lg shadow-sm shadow-sky-400/20 transition-all hover:scale-[1.02]"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Contactar</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-zinc-400 hover:text-white md:hidden rounded-lg bg-zinc-900/80 border border-zinc-800"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800 px-4 py-4 space-y-2 mt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-lg"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2">
            <a
              href={portfolioData.personal.resumePdf}
              download
              className="flex items-center justify-center gap-2 py-2 text-sm font-medium text-zinc-300 bg-zinc-900 rounded-lg border border-zinc-800"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              Descargar CV en PDF
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2 text-sm font-semibold text-zinc-950 bg-sky-400 rounded-lg"
            >
              <Send className="w-4 h-4" />
              Contactar / Postulación
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
