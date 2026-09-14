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
  alternates: {
    canonical: 'https://eliseo-gasion.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${portfolioData.personal.name} | Industrial Designer & 3D Automotive Artist`,
    description: portfolioData.personal.headline,
    images: ['/projects/vw-amarok-headlights-main.jpg'],
  },
  openGraph: {
    title: `${portfolioData.personal.name} | Industrial Designer & 3D Automotive Artist`,
    description: portfolioData.personal.headline,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/projects/vw-amarok-headlights-main.jpg',
        width: 1242,
        height: 991,
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: portfolioData.personal.name,
    jobTitle: portfolioData.personal.role,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Córdoba',
      addressCountry: 'AR',
    },
    email: `mailto:${portfolioData.personal.email}`,
    telephone: portfolioData.personal.phone,
    url: 'https://eliseo-gasion.vercel.app',
    sameAs: [portfolioData.personal.linkedin],
    knowsAbout: [
      'Class-A Surfacing',
      'CATIA V5',
      'Plastic Injection DFM',
      'Blender Cycles',
      'Automotive 3D Visualization',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'National University of Córdoba (FAUD UNC)',
    },
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}>
      <head>
        <meta name="theme-color" content="#050507" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#050507] text-zinc-100 antialiased selection:bg-[#FF3E00] selection:text-black font-sans">
        {children}
      </body>
    </html>
  );
}
