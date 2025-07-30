'use client';

import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const whiteColorLogoSections = ['#feature', '#about', '#contact'];

export default function Logo() {
  const [hash, setHash] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

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
        classNames({
          'text-white': hash && whiteColorLogoSections.includes(hash),
        })
      )}
    >
      maxius
    </div>
  );
}
