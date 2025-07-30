'use client';

import Section from '@/components/commons/Section';
import { ComponentProps, FC, PropsWithChildren } from 'react';
import { motion, Variants } from 'motion/react';
import { twMerge } from 'tailwind-merge';

export default function ContactSection() {
  return (
    <Section
      id="contact"
      className="bg-[url('/contact_banner.png')] bg-cover relative "
    >
      <motion.div
        onViewportEnter={() => (window.location.hash = '#contact')}
        className={twMerge(
          // Global responsive
          'absolute  ',
          // Mobile responsive
          'left-[50px] bottom-[15%] w-[70%]',
          // Tablet responsive
          '',
          // Desktop responsive
          'lg:left-[180px]'
        )}
      >
        <ul className="w-full h-fit flex flex-col gap-[30px]">
          <ContactItem title="Company.">
            <a href="mailto: support@maxius.io" target="_blank">
              support@maxius.io
            </a>
          </ContactItem>
          <ContactItem title="Warranty.">
            <a href="#" target="_blank">
              Learn more &gt;
            </a>
          </ContactItem>
          <ContactItem title="Technical support.">
            <a href="mailto: support@maxius.io" target="_blank">
              support@maxius.io
            </a>
          </ContactItem>
        </ul>
      </motion.div>
    </Section>
  );
}

interface IContactItemProps extends ComponentProps<'li'>, PropsWithChildren {
  title: string;
}

const ContactItem: FC<IContactItemProps> = ({ title, children }) => {
  return (
    <li
      className={twMerge(
        // Global responsive
        'flex flex-col items-start',
        // Mobile responsive
        'gap-3',
        // Tablet responsive
        'md:gap-1',
        // Desktop responsive
        ''
      )}
    >
      <motion.h2
        variants={titleVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.2 }}
        className={twMerge(
          // Global responsive
          'font-extrabold  text-white',
          // Mobile responsive
          'text-[20.5px]',
          // Tablet responsive
          'md:text-[34px]',
          // Desktop responsive
          ''
        )}
      >
        {title}
      </motion.h2>
      <motion.div
        variants={contentVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.2 }}
        className={twMerge(
          // Global responsive
          'px-[12.5px] text-white font-light',
          // Mobile responsive
          'text-[13.5px] py-[7px]',
          // Tablet responsive
          'md:text-[16px] md:py-0',
          // Desktop responsive
          ''
        )}
      >
        {children}
      </motion.div>
    </li>
  );
};

const titleVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,

    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  onscreen: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};

const contentVariants: Variants = {
  offscreen: {
    opacity: 0,
    x: -100,

    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  onscreen: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.5,
      delay: 0.5,
      ease: 'easeOut',
    },
  },
};
