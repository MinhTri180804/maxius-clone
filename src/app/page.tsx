import FeatureSection from '@/components/pages/home/FeatureSection';
import HeroSection from '@/components/pages/home/HeroSection';
import AboutSection from '@/components/pages/home/AboutSection';
import StorySection from '@/components/pages/home/StorySection';
import ContactSection from '@/components/pages/home/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <AboutSection />
      <StorySection />
      <ContactSection />
    </>
  );
}
