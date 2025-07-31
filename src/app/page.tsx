import FeatureSection from '@/components/pages/home/FeatureSection';
import HeroSection from '@/components/pages/home/HeroSection';
import AboutSection from '@/components/pages/home/AboutSection';
import StorySection from '@/components/pages/home/StorySection';
import ContactSection from '@/components/pages/home/ContactSection';
import { Metadata } from 'next';

// Static generation for better SEO and performance
export const dynamic = 'force-static';
export const revalidate = false;

// Page-specific metadata for better SEO
export const metadata: Metadata = {
  title:
    'MAXIUS - High-Performance Server Solutions | Leading Semiconductor Company',
  description:
    'Discover MAXIUS high-performance servers with self-developed semiconductors. 20+ years of innovation in AI, blockchain, and data center solutions. Trusted by 1000+ companies.',
  alternates: {
    canonical: 'https://maxius.io',
  },
};

// Structured data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MAXIUS Corporation',
  description:
    'Leading self-developed semiconductor company specializing in High-Performance Servers',
  url: 'https://maxius.io',
  logo: 'https://maxius.io/logo.png',
  foundingDate: '1996',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5F 12-30, Simin-daero 327beon-gil, Dongan-gu',
    addressLocality: 'Anyang-si',
    addressRegion: 'Gyeonggi-do',
    addressCountry: 'Republic of Korea',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+82-2-851-2662',
    contactType: 'customer service',
    email: 'support@maxius.io',
  },
  sameAs: ['https://maxius.io'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'High-Performance Server Solutions',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'High-Performance Servers',
          description:
            'Self-developed semiconductor-based high-performance servers',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Solutions',
          description:
            'AI-based adaptive security systems and genetic analysis',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Blockchain Solutions',
          description: 'IPFS data center development and blockchain technology',
        },
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection />
      <FeatureSection />
      <AboutSection />
      <StorySection />
      <ContactSection />
    </>
  );
}
