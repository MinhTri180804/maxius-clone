'use client';

import classNames from 'classnames';
import { useEffect, useState } from 'react';

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

  const classname = classNames(
    'font-roboto uppercase text-dark-jungle-green text-[20.5px] fixed top-[30px] left-[39px] font-bold z-40 transition-all duration-300 ease-in-out',
    {
      'text-white': hash && whiteColorLogoSections.includes(hash),
    }
  );

  return <div className={classname}>maxius</div>;
}
