'use client';

import classNames from 'classnames';
import { motion, Variants } from 'motion/react';
import { ComponentProps, FC, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Toggle } from './commons/Toggle';
import { useSectionObserver } from '@/hooks/useSectionObserver';

const whiteColorInSections = ['#feature', '#about', '#contact'];

type Options = 'Brochure' | 'Proposal';

type OptionMenusItems = {
  title: Options;
  items: string[];
};

const optionMenusItems: OptionMenusItems[] = [
  {
    title: 'Brochure',
    items: [
      'HJS 2224',
      'TJS 2125G',
      'HGS 4024',
      'TJS 104S',
      'TJS 212S+',
      'HSS 2224',
    ],
  },
  {
    title: 'Proposal',
    items: [
      'IPFS Data Center Development & Operation Consulting',
      'IPFS Data Center Build Vision',
      'Technology Application',
    ],
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [optionSelect, setOptionSelect] = useState<Options | null>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: Options) => {
    if (option === optionSelect) {
      setOptionSelect(null);
      return;
    }
    setOptionSelect(option);
  };

  return (
    <div className="z-50">
      <ToggleSidebar isOpen={isOpen} onClick={handleToggle} />
      <motion.div
        className={twMerge(
          // Global responsive
          "fixed top-0 right-0 h-dvh z-40 bg-[url('/sidebar_background.png')] bg-cover",
          // Mobile responsive
          'w-[90%]',
          // Tablet responsive
          'md:w-[70%]',
          // Desktop responsive
          'lg:w-[532px]'
        )}
        animate={isOpen ? 'open' : 'closed'}
        initial="closed"
        transition={{ duration: 0.2, ease: 'easeOut' }}
        variants={{
          open: { x: '0' },
          closed: { x: '100%' },
        }}
      >
        <div className="w-full h-full px-[25px] flex flex-col items-start justify-between pt-[140px] pb-[30px]">
          <ul className="flex flex-col gap-[25px] shrink overflow-y-auto">
            <li
              className={twMerge(
                // Global responsive
                'text-[var(--color-deep-saffron)] cursor-pointer',
                // Mobile responsive
                'text-xl font-bold ',
                // Tablet responsive
                '',
                // Desktop responsive
                'lg:text-[36px] lg:font-light'
              )}
              onClick={handleToggle}
            >
              Home
            </li>
            {optionMenusItems.map((item) => (
              <OptionMenuItem
                key={item.title}
                titleText={item.title}
                items={item.items}
                isActive={optionSelect === item.title}
                onClick={() => handleSelectOption(item.title)}
              />
            ))}
            <li
              className={twMerge(
                // Global responsive
                'text-white cursor-pointer',
                // Mobile responsive
                'text-xl font-bold ',
                // Tablet responsive
                '',
                // Desktop responsive
                'lg:text-[36px] lg:font-light'
              )}
              onClick={handleToggle}
            >
              Contact
            </li>
          </ul>

          <div className="w-full items-start grow-0">
            <div className="pt-[10px] pb-[30px] border-t border-white">
              <p className="text-xs text-white">
                5F 12-30, Simin-daero 327beon-gil, Dongan-gu, Anyang-si,
                Gyeonggi-do, Republic of Korea <br />
                Tel 02. 851. 2662 / Fax 02. 851. 2655
              </p>
            </div>
            <div className="text-[13px] text-white flex flex-col gap-[20px]">
              <p>View map</p>

              <div>
                <p>Company</p>
                <p>support@maxius.io</p>
              </div>

              <div>
                <p>Technical support</p>
                <p>support@maxius.io</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

interface ToggleSidebarProps extends ComponentProps<'button'> {
  isOpen: boolean;
}

const ToggleSidebar = ({ isOpen, ...props }: ToggleSidebarProps) => {
  const sectionActive = useSectionObserver();

  return (
    <div>
      <Toggle
        isOpen={isOpen}
        strokeWhite={
          isOpen || whiteColorInSections.includes(sectionActive || '')
        }
        {...props}
      />
      <div
        className={twMerge(
          // Global responsive
          'fixed text-black mt-2 z-50 flex items-center gap-[10px] text-[17px] font-roboto font-light',
          // Mobile responsive
          'right-[39px] top-[70px]',
          // Tablet responsive
          // Desktop responsive
          'lg:right-[100px] lg:top-[100px]'
        )}
      >
        <LanguageSelect
          name="EN"
          isActive={isOpen}
          isOpen={isOpen}
          sectionActive={sectionActive}
        />
        <LanguageSelect
          name="KR"
          isActive={!isOpen}
          isOpen={isOpen}
          sectionActive={sectionActive}
        />
      </div>
    </div>
  );
};

interface IOptionMenuItemProps extends ComponentProps<'li'> {
  isActive: boolean;
  titleText: Options;
  items: string[];
}

const OptionMenuItem: FC<IOptionMenuItemProps> = ({
  isActive,
  className,
  titleText,
  items,
  onClick,
}) => {
  return (
    <motion.li
      animate={{ height: 'auto', gap: isActive ? '25px' : '0' }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={twMerge(
        // Global responsive
        'text-white flex flex-col gap-5',
        // Mobile responsive
        '',
        // Tablet responsive
        '',
        // Desktop responsive
        '',
        classNames({
          'text-[var(--color-deep-saffron)]': isActive,
        }),
        className
      )}
      onClick={onClick}
    >
      <h5
        className={twMerge(
          // Global responsive
          'cursor-pointer',
          // Mobile responsive
          'font-bold text-xl',
          // Tablet responsive
          '',
          // Desktop responsive
          'lg:text-[36px] lg:font-light'
        )}
      >
        {titleText}
      </h5>
      <motion.ul
        className={twMerge(
          // Global responsive
          'flex flex-col w-full gap-5 items-start  text-white',
          // Mobile responsive
          'text-xs',
          // Tablet responsive
          '',
          // Desktop responsive
          'lg:text-[17.5px]'
        )}
        animate={isActive ? 'open' : 'closed'}
        initial="closed"
        transition={{ duration: 0.2, ease: 'easeOut' }}
        variants={optionMenuItemListVariants}
      >
        {items.map((item, index) => (
          <li
            className="px-[10px] cursor-pointer"
            key={`${titleText}_${index}`}
          >
            {item}
          </li>
        ))}
      </motion.ul>
    </motion.li>
  );
};

type ILanguageSelectProps = {
  isActive: boolean;
  name: string;
  isOpen: boolean;
  sectionActive: string | null;
};

const LanguageSelect: FC<ILanguageSelectProps> = ({
  isActive,
  name,
  isOpen,
  sectionActive,
}) => {
  return (
    <span
      className={twMerge(
        // Global responsive
        'cursor-pointer',
        // Mobile responsive
        '',
        // Tablet responsive
        'md:text-[21px]',
        // Desktop responsive
        '',
        classNames({
          'text-white':
            isOpen || whiteColorInSections.includes(sectionActive || ''),
          'text-language-selected': !isActive,
        })
      )}
    >
      {name}
    </span>
  );
};

const optionMenuItemListVariants: Variants = {
  closed: {
    visibility: 'hidden',
    height: 0,
    opacity: 0,
  },
  open: {
    visibility: 'visible',
    height: 'auto',
    opacity: 1,
  },
};
