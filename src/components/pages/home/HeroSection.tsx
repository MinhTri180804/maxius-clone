'use client';
import Section from '@/components/commons/Section';
import { motion, Variants } from 'motion/react';

export default function HeroSection() {
  return (
    <Section className="bg-[url('/hero_banner.png')] bg-cover flex flex-col gap-[34px] items-start justify-center">
      <motion.h1
        variants={variantTitle}
        initial="offscreen"
        whileInView="onscreen"
        onViewportEnter={() => (window.location.hash = '#hero')}
        className="uppercase text-[45px] font-roboto font-bold leading-[45px] text-title-hero-section"
      >
        Max I & US
      </motion.h1>
      <div className="w-[247px] flex flex-col gap-5 font-light text-[15px] text-description-hero-section">
        <motion.p
          variants={variantDescription}
          initial="offscreen"
          whileInView="onscreen"
          className="flex flex-col gap-0 items-start"
        >
          <span>Maxius is the only self-developed</span>
          <span>semiconductor company that </span>
          <span>focuses on developing High-Performance </span>
          <span>Servers. We provide specialized </span>
          <span>solutions tailored towards different </span>
          <span>sectors of the IT industry and strive </span>
          <span>to break into the global market as a </span>
          <span>leader in server technology.</span>
        </motion.p>

        <motion.p
          variants={variantFooterDescription}
          initial="offscreen"
          whileInView="onscreen"
          className="flex flex-col gap-0 items-start"
        >
          Together, we will be the best in value and speed.
        </motion.p>
      </div>
    </Section>
  );
}

const variantTitle: Variants = {
  offscreen: {
    opacity: 0,
    y: -150,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

const variantDescription: Variants = {
  offscreen: {
    opacity: 0,
    x: -150,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      delay: 0.5,
      ease: 'easeOut',
    },
  },
};

const variantFooterDescription: Variants = {
  offscreen: {
    opacity: 0,
    x: -150,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};
