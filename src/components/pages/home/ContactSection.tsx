'use client';

import Section from '@/components/commons/Section';
import { ComponentProps, FC, PropsWithChildren } from 'react';
import { motion, Variants } from 'motion/react';

export default function ContactSection() {
  return (
    <Section className="bg-[url('/contact_banner.png')] bg-cover relative ">
      <div className="absolute bottom-[15%] left-[50px]">
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
      </div>
    </Section>
  );
}

interface IContactItemProps extends ComponentProps<'li'>, PropsWithChildren {
  title: string;
}

const ContactItem: FC<IContactItemProps> = ({ title, children }) => {
  return (
    <li className="flex flex-col gap-3 items-start">
      <motion.h2
        variants={titleVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.2 }}
        className="font-extrabold text-[20.5px] text-white"
      >
        {title}
      </motion.h2>
      <motion.div
        variants={contentVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.2 }}
        className="text-[13.5px] px-[12.5px] text-white font-light py-[7px]"
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
