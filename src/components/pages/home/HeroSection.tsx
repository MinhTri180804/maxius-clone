'use client';
import Section from '@/components/commons/Section';
import { motion, Variants } from 'motion/react';
import { twMerge } from 'tailwind-merge';

export default function HeroSection() {
  return (
    <Section
      id="hero"
      className="bg-[url('/hero_banner.png')] bg-cover flex flex-col gap-[34px] items-start justify-center"
    >
      <div
        className={twMerge(
          // Global responsive
          'flex flex-col gap-[34px] items-start',
          // Mobile responsive
          '',
          // Tablet responsive
          'md:ml-[5%] md:mt-[40%]',
          // Desktop responsive
          'lg:ml-[10%] lg:mt-[20%]'
        )}
      >
        <motion.h1
          variants={variantTitle}
          initial="offscreen"
          whileInView="onscreen"
          className={twMerge(
            // Global responsive
            'uppercase font-roboto font-bold text-title-hero-section',
            // Mobile responsive
            'text-[45px] leading-[45px]',
            // Tablet responsive
            'md:text-[95px] leading-[92px]'
          )}
        >
          Max I & US
        </motion.h1>
        <div
          className={twMerge(
            // Global responsive
            'flex flex-col font-light text-description-hero-section',
            // Mobile responsive
            'text-[15px] gap-5',
            // Tablet responsive
            'md:text-[20.5px] leading-[1.41]  md:gap-20'
          )}
        >
          <motion.p
            variants={variantDescription}
            initial="offscreen"
            whileInView="onscreen"
            className={twMerge(
              // Global responsive
              'flex flex-col gap-0 items-start',
              // Mobile responsive
              'w-[247px]',
              // Tablet responsive
              'md:w-[415px]'
            )}
          >
            Maxius is the only self-developed semiconductor company that focuses
            on developing High-Performance Servers. We provide specialized
            solutions tailored towards different sectors of the IT industry and
            strive to break into the global market as a leader in server
            technology.
          </motion.p>

          <motion.p
            variants={variantFooterDescription}
            initial="offscreen"
            whileInView="onscreen"
            className={twMerge(
              // Global responsive
              'flex flex-col gap-0 items-start',
              // Mobile responsive
              'w-[247px]',
              // Tablet responsive
              'md:w-full'
            )}
          >
            Together, we will be the best in value and speed.
          </motion.p>
        </div>
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
