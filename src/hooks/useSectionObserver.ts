import { useEffect, useState } from 'react';

// List of section IDs to observe (without the #)
const sectionIds = ['hero', 'feature', 'about', 'story', 'contact'];

export const useSectionObserver = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = `#${entry.target.id}`;
          if (sectionId !== activeSection) {
            setActiveSection(sectionId);
            // Update URL hash without scrolling
            history.replaceState(null, '', sectionId);
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup
    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
      observer.disconnect();
    };
  }, []);

  return activeSection;
};
