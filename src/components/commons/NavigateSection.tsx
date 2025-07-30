'use client';
import classNames from 'classnames';
import { ComponentProps, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function NavigateContent() {
  const [sectionActive, setSectionActive] = useState<string | null>(null);

  useEffect(() => {
    const handleChangeSection = () => {
      setSectionActive(window.location.hash);
    };

    handleChangeSection();

    window.addEventListener('hashchange', handleChangeSection);
    return () => {
      window.removeEventListener('hashchange', handleChangeSection);
    };
  }, [sectionActive]);

  const handleClick = (id: string) => {
    setSectionActive(`#${id}`);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ul className="flex flex-col gap-1 z-50 items-end fixed top-1/2 right-[39px]">
      <NavigateItem
        isActive={sectionActive === '#hero'}
        onClick={() => handleClick('hero')}
        className={classNames({
          'bg-[var(--color-space-cadet)]': sectionActive === '#story',
        })}
      />
      <NavigateItem
        isActive={sectionActive === '#feature'}
        onClick={() => handleClick('feature')}
        className={classNames({
          'bg-[var(--color-space-cadet)]':
            sectionActive === '#hero' || sectionActive === '#story',
        })}
      />
      <NavigateItem
        isActive={sectionActive === '#about'}
        onClick={() => handleClick('about')}
        className={classNames({
          'bg-[var(--color-space-cadet)]':
            sectionActive === '#hero' || sectionActive === '#story',
        })}
      />
      <NavigateItem
        isActive={sectionActive === '#story'}
        onClick={() => handleClick('story')}
        className={classNames({
          'bg-[var(--color-space-cadet)]': sectionActive === '#hero',
        })}
      />

      <NavigateItem
        isActive={sectionActive === '#contact'}
        onClick={() => handleClick('contact')}
        className={classNames({
          'bg-[var(--color-space-cadet)]':
            sectionActive === '#hero' || sectionActive === '#story',
        })}
      />
    </ul>
  );
}

interface INavigateItemProps extends ComponentProps<'li'> {
  isActive: boolean;
}

const NavigateItem = ({
  isActive,
  className,
  ...props
}: INavigateItemProps) => {
  return (
    <li
      className={twMerge(
        classNames('h-[7px] transition-all duration-150', {
          'w-[7px] bg-[#fff]': !isActive,
          'w-[30px] bg-[#ff9933]': isActive,
        }),
        className
      )}
      {...props}
    ></li>
  );
};
