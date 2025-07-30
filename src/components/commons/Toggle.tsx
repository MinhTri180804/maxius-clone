'use client';

import { type Variants, motion } from 'motion/react';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface IToggleProps extends ComponentProps<'button'> {
  isOpen: boolean;
  strokeWhite: boolean;
}

export const Toggle = ({
  isOpen,
  strokeWhite,
  className,
  ...props
}: IToggleProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        // Global responsive
        'right-[39px] mt-1 fixed z-50 cursor-pointer',
        // Mobile responsive
        'top-[30px]',
        // Tablet responsive
        'md:top-[39px]',
        // Desktop responsive
        'lg:right-[100px] lg:top-[60px]',
        className
      )}
    >
      <motion.svg
        width="30"
        height="30"
        stroke={strokeWhite ? 'white' : '#222222'}
        viewBox="0 0 30 30"
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.1 }}
        className={'transition-all duration-150'}
      >
        <Path
          variants={{
            closed: { d: 'M 2 6 L 28 6' },
            open: { d: 'M 6 6 L 24 24' },
          }}
        />
        <Path
          variants={{
            closed: { opacity: 1, d: 'M 2 15 L 28 15' },
            open: { opacity: 0, d: 'M 2 15 L 28 15' },
          }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 24 L 28 24' },
            open: { d: 'M 6 24 L 24 6' },
          }}
        />
      </motion.svg>
    </button>
  );
};

interface PathProps {
  d?: string;
  variants: Variants;
  transition?: { duration: number };
  stroke?: string;
}

const Path = (props: PathProps) => {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="1.5"
      stroke={props.stroke}
      strokeLinecap="round"
      className="font-bold transition-all duration-150"
      {...props}
    />
  );
};
