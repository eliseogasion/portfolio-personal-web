import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { portfolioData } from '@/data/portfolioData';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-estudio55.vercel.app'),
  title: `${portfolioData.personal.name} | Industrial Designer & 3D Render Artist`,
  description: `${portfolioData.personal.headline} Proyectos de Estudio 55 y especialización en Roblox (Driving Empire).`,
  keywords: [
    'Render Artist',
    'Driving Empire',
    'Roblox Renders',
    'Diseñador Industrial',
    'Estudio 55',
    'Automotive 3D',
    'Blender Cycles',
    'Voldex',
    '3D Visualization',
    'Hard-surface'
  ],
  authors: [{ name: portfolioData.personal.name }],
  openGraph: {
    title: `${portfolioData.personal.name} | 3D Render Artist & Diseñador Industrial`,
    description: portfolioData.personal.headline,
    type: 'website',
    locale: 'es_ES',
    images: [
      {
        url: '/projects/roblox-driving-empire-hero.svg',
        width: 1280,
        height: 720,
        alt: 'Portfolio Showcase'
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}>
      <head>
        <meta name="theme-color" content="#09090b" />
      </head>
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
