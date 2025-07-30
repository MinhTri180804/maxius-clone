import FeatureSection from '@/components/pages/home/FeatureSection';
import HeroSection from '@/components/pages/home/HeroSection';
import AboutSection from '@/components/pages/home/AboutSection';
import StorySection from '@/components/pages/home/StorySection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <AboutSection />
      <StorySection />
    </>
  );
}
