'use client';

import classNames from 'classnames';
import { motion } from 'motion/react';
import { ComponentProps, useState } from 'react';
import { Toggle } from './commons/Toggle';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <ToggleSidebar isOpen={isOpen} onClick={handleToggle} />
      <motion.div
        className="fixed top-0 right-0  w-[90%] h-dvh z-40 bg-[url('/sidebar_background.png')] bg-cover"
        animate={isOpen ? 'open' : 'closed'}
        initial="closed"
        transition={{ duration: 0.2, ease: 'easeOut' }}
        variants={{
          open: { x: '0' },
          closed: { x: '100%' },
        }}
      >
        {/* //TODO add content */}
      </motion.div>
    </div>
  );
}

interface ToggleSidebarProps extends ComponentProps<'button'> {
  isOpen: boolean;
}

const ToggleSidebar = ({ isOpen, ...props }: ToggleSidebarProps) => {
  return (
    <div>
      <Toggle isOpen={isOpen} {...props} />
      <div className="fixed text-black top-[60px] right-[39px] mt-2 z-50 flex items-center gap-[10px] text-[17px] font-roboto font-light">
        <span className="text-language-selected">EN</span>
        <span
          className={classNames({
            'text-white': isOpen,
          })}
        >
          KR
        </span>
      </div>
    </div>
  );
};
