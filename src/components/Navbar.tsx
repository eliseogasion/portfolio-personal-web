'use client';

import React, { useState, useEffect } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

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
    { label: 'Work', href: '#projects' },
    { label: '3D Art', href: '#cinematic-showcase' },
    { label: 'Estudio 55', href: '#estudio-55' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[var(--ease-luxury)] ${
        scrolled
          ? 'bg-[#0B0B0D]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-xl shadow-black/40'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <span className="text-base sm:text-lg font-bold text-white tracking-tight uppercase group-hover:text-zinc-300 transition-colors">
            {portfolioData.personal.name}
          </span>
          <span className="hidden sm:inline-block w-[1px] h-3.5 bg-zinc-700" />
          <span className="hidden sm:inline-block text-xs text-zinc-400 font-normal">
            Industrial Design &amp; Product Engineering
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-wider text-zinc-400 hover:text-white transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={portfolioData.personal.resumePdf}
            download
            className="text-xs uppercase tracking-wider font-medium text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>

          <a
            href="#contact"
            className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white hover:text-black border border-white/20 transition-all"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-zinc-300 hover:text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0B0D]/98 backdrop-blur-2xl border-b border-white/10 px-8 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-wider text-zinc-300 hover:text-white py-1.5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href={portfolioData.personal.resumePdf}
              download
              className="flex items-center justify-center gap-2 py-3 rounded-full text-xs font-medium text-zinc-300 bg-zinc-900 border border-white/10 uppercase tracking-wider"
            >
              <FileText className="w-4 h-4" />
              Download Resume (PDF)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center py-3 rounded-full text-xs font-semibold text-black bg-white uppercase tracking-wider"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
