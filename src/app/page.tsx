import HeroSection from '@/components/pages/home/HeroSection';
import Section from '@/components/commons/Section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Section className="bg-[url('/hero_banner.png')] bg-cover">
        <h1>Hero Section</h1>
      </Section>
    </>
  );
}
