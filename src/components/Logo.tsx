'use client';

import classNames from 'classnames';
import { useEffect, useState } from 'react';

const colorBasedOnHash = {
  white: ['#firstPage'],
  black: ['#secondPage'],
};

export default function Logo() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const classname = classNames(
    'font-roboto uppercase text-[20.5px] fixed top-[30px] left-[39px] font-bold',
    {
      'text-dark-jungle-green': colorBasedOnHash.black.includes(hash),
      'text-white': colorBasedOnHash.white.includes(hash),
    }
  );

  return <div className={classname}>maxius</div>;
}
