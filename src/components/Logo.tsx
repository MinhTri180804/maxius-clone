'use client';

import { twMerge } from 'tailwind-merge';
import { useSectionObserver } from '@/hooks/useSectionObserver';

const whiteColorLogoSections = ['#feature', '#about', '#contact'];

export default function Logo() {
  // This will automatically update when a new section comes into view
  const activeSection = useSectionObserver();

  // Determine if the logo should be white based on the active section
  const shouldBeWhite = whiteColorLogoSections.includes(activeSection);

  return (
    <div
      className={twMerge(
        // Global responsive
        'font-roboto uppercase text-dark-jungle-green text-[20.5px] fixed top-[30px] font-bold z-40 transition-all duration-300 ease-in-out',
        // Mobile responsive
        'left-[39px] top-[30px]',
        // Tablet responsive
        '',
        // Desktop responsive
        'lg:left-[100px] lg:top-[50px]',
        // Apply white text when shouldBeWhite is true
        shouldBeWhite ? 'text-white' : ''
      )}
    >
      maxius
    </div>
  );
}
