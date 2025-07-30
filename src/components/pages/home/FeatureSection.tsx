'use client';
import Section from '@/components/commons/Section';
import HighlightText from '@/components/commons/HighlightText';
import { motion, Variants } from 'motion/react';

export default function FeatureSection() {
  return (
    <Section
      id="feature"
      className="bg-[url('/feature_banner.png')] bg-cover flex flex-col justify-center items-center"
    >
      <motion.p
        variants={contentVariants}
        initial="offscreen"
        whileInView="onscreen"
        onViewportEnter={() => (window.location.hash = '#feature')}
        className="text-xl font-bold break-all mx-[10%] text-white whitespace-pre-wrap"
      >
        1. <HighlightText>Self-produced</HighlightText> semiconductors 2.
        Production and Sales of <HighlightText>H</HighlightText>igh-
        <HighlightText>P</HighlightText>erformance{' '}
        <HighlightText>Self-produced</HighlightText>ervers with
        self-manufactured semiconductors 3. Construction of operative{' '}
        <HighlightText>Block chain IDC</HighlightText> based on high-performance
        servers 4. Establish solution relating to Blockchain{' '}
        <HighlightText>(IPFS)</HighlightText>
      </motion.p>
    </Section>
  );
}

const contentVariants: Variants = {
  offscreen: {
    opacity: 0,
    x: -200,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};
