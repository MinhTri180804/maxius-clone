import Logo from '@/components/Logo';
import NavigateContent from '@/components/commons/NavigateSection';
import Sidebar from '@/components/Sidebar';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['300', '500', '700', '900'],
  fallback: ['sans-serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://maxius.io'),
  title:
    'MAXIUS - High-Performance Server Solutions | Self-Developed Semiconductors',
  description:
    "Maxius is Korea's leading self-developed semiconductor company specializing in High-Performance Servers, AI solutions, and blockchain technology. 20+ years of innovation in server technology.",
  keywords:
    'high-performance servers, semiconductors, AI servers, blockchain technology, IPFS, data center solutions, Korea technology, server hardware',
  authors: [{ name: 'Maxius Corporation' }],
  creator: 'Maxius Corporation',
  publisher: 'Maxius Corporation',
  robots: 'index, follow',
  openGraph: {
    title: 'MAXIUS - High-Performance Server Solutions',
    description:
      'Leading semiconductor company in Korea specializing in High-Performance Servers and AI solutions',
    url: 'https://maxius.io',
    siteName: 'MAXIUS',
    images: [
      {
        url: '/hero_banner.png',
        width: 1200,
        height: 630,
        alt: 'MAXIUS High-Performance Servers',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MAXIUS - High-Performance Server Solutions',
    description:
      'Leading semiconductor company in Korea specializing in High-Performance Servers and AI solutions',
    images: ['/hero_banner.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="mdl-js">
      <body
        className={`${roboto.variable} antialiased min-h-dvh w-dvw max-w-dvw relative`}
      >
        <Logo />
        <Sidebar />
        <NavigateContent />
        <main className="w-full h-dvh overflow-y-scroll snap-y snap-mandatory ">
          {children}
        </main>
      </body>
    </html>
  );
}
