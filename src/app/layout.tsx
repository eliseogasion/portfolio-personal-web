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
  metadataBase: new URL('https://eliseo-gasion.vercel.app'),
  title: `${portfolioData.personal.name} | Industrial Designer & 3D Automotive Artist`,
  description: `${portfolioData.personal.headline}`,
  keywords: [
    'Industrial Designer',
    'Automotive 3D Artist',
    'Class-A Surfacing',
    'CATIA V5',
    'Blender Cycles',
    'Volkswagen Amarok 2024',
    'Renault H1312',
    'Estudio 55',
    'Vehicle Lighting Renders',
    'Game Art',
    'High-CTR Marketing Art'
  ],
  authors: [{ name: portfolioData.personal.name }],
  openGraph: {
    title: `${portfolioData.personal.name} | Industrial Designer & 3D Automotive Artist`,
    description: portfolioData.personal.headline,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/projects/vw-amarok-headlights.jpg',
        width: 1280,
        height: 720,
        alt: 'Eliseo Gasion Portfolio Showcase'
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}>
      <head>
        <meta name="theme-color" content="#050507" />
      </head>
      <body className="min-h-screen bg-[#050507] text-zinc-100 antialiased selection:bg-[#FF3E00] selection:text-black font-sans">
        {children}
      </body>
    </html>
  );
}
