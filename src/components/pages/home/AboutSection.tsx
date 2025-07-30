'use client';
import HighlightText from '@/components/commons/HighlightText';
import Section from '@/components/commons/Section';
import classNames from 'classnames';
import { motion } from 'motion/react';
import { ComponentProps, PropsWithChildren, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function AboutSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <Section
      id="about"
      className="flex justify-center px-[39px] items-center bg-[url('/about_banner.png')] bg-cover relative"
    >
      <motion.ul
        onViewportEnter={() => (window.location.hash = '#about')}
        viewport={{ amount: 0.1 }}
        className={twMerge(
          // Global responsive
          'flex flex-col gap-0 pr-[35px] w-full',
          // Mobile responsive
          '',
          // Tablet responsive
          'md:w-[90%]',
          // Desktop responsive
          'lg:flex-row pr-0 lg:w-[70%] lg:justify-center lg:h-full'
        )}
      >
        <AboutSectionItem
          title="Product"
          isOpen={openId === 'Product'}
          onClick={() => setOpenId('Product')}
          index={0}
        >
          <HighlightText>High-Performance Server</HighlightText> with an
          extensive selection of serviceable capabilities <br />
          Building <HighlightText>IDC</HighlightText>; incorporating the latest{' '}
          <HighlightText>Storage</HighlightText> technology applicable to
          various I/O devices Various{' '}
          <HighlightText>Blockchain Solutions</HighlightText> , including IPFS.
          <br />
          <br />
          Maxius will continue to develop as a company in the global market by
          supplying a variety of products and solutions.
        </AboutSectionItem>
        <AboutSectionItem
          title="Technology"
          isOpen={openId === 'Technology'}
          onClick={() => setOpenId('Technology')}
          index={1}
        >
          Based on more than 20 years of research know-how <br />
          and technology, we are the only company in Korea extensive selection{' '}
          <br />
          that makes HPC servers
          <HighlightText>using self-developed system</HighlightText> <br />
          semiconductors and{' '}
          <HighlightText>provides solutions specialized</HighlightText> <br />
          in <HighlightText>the intelligent data center</HighlightText> in the
          IT industry.
          <br />
          <br />
          With our services, Maxius strives to supply <br />
          differentiated products and solutions.
        </AboutSectionItem>
        <AboutSectionItem
          title="Application"
          isOpen={openId === 'Application'}
          onClick={() => setOpenId('Application')}
          index={2}
        >
          Maxius&apos; miscellaneous products are used for{' '}
          <HighlightText>AI/genetic analysis, </HighlightText> <br />
          <br />
          <HighlightText>edge computing, IDC centers,</HighlightText> as well as
          various solutions
          <br />
          used for vast
          <HighlightText>data analysis, </HighlightText>
          <HighlightText>distributed </HighlightText>
          <HighlightText>processing functions and IPFS IDC </HighlightText>,
          etc.
          <br />
          <br />
          Maxius will supply serviceable products and solutions to <br />
          varying fields through R&D and communication.
        </AboutSectionItem>
        <AboutSectionItem
          title="Blockchain"
          isOpen={openId === 'Blockchain'}
          onClick={() => setOpenId('Blockchain')}
          index={3}
          isLast
          highlightTitle
        >
          <HighlightText>storage and service</HighlightText> utilized in
          Metaverse <br />
          <HighlightText>
            IPFS Storage and Application Services
          </HighlightText>{' '}
          in Web3.0
          <br />
          <br />
          Maxius provides both H/W and S/W, which are optimized for
          decentralized storage to match customer needs and create the best
          added value.
        </AboutSectionItem>
      </motion.ul>
    </Section>
  );
}

interface IAboutSectionItemProps
  extends PropsWithChildren,
    ComponentProps<'li'> {
  title: string;
  isLast?: boolean;
  isOpen: boolean;
  highlightTitle?: boolean;
  index: number;
}

const AboutSectionItem = ({
  title,
  isLast = false,
  isOpen,
  children,
  highlightTitle = false,
  index,
  ...props
}: IAboutSectionItemProps) => {
  return (
    <li
      className={twMerge(
        // Global responsive
        'flex flex-1 flex-col p-5 gap-[20px] pb-12  border-[#ffffff52] group',
        // Mobile responsive
        'border-b',
        // Tablet responsive
        '',
        // Desktop responsive
        'lg:border-b-0 lg:border-r lg:relative lg:justify-start lg:h-full lg:pt-[30dvh] lg:hover:flex-2 lg:transition-all  lg:cursor-pointer',
        classNames({
          'pb-5': isLast,
          'border-b-0': isLast,
        })
      )}
      {...props}
    >
      <motion.h2
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        initial={{
          opacity: 0,
          y: (index + 1) % 2 === 0 ? 100 : -100,
        }}
        transition={{
          duration: 0.2,
          delay: 0.2 * index + 1,
          ease: 'easeOut',
        }}
        viewport={{ amount: 0.5 }}
        className={twMerge(
          // Global responsive
          'text-xl font-bold',
          // Mobile responsive
          '',
          // Tablet responsive
          '',
          // Desktop responsive
          'lg:text-[30px]',
          classNames({
            'text-[var(--color-deep-saffron)]': highlightTitle,
            'text-white': !highlightTitle,
          })
        )}
      >
        {title}
      </motion.h2>
      <motion.p
        className={twMerge(
          // Global responsive
          'text-[10px] leading-[16px]  text-white',
          // Mobile responsive
          'hidden',
          // Tablet responsive
          '',
          // Desktop responsive
          'lg:block lg:w-full lg:opacity-0 lg:group-hover:opacity-100 lg:text-sm lg:leading-[22px]'
        )}
      >
        {children}
      </motion.p>
      <motion.p
        className={twMerge(
          // Global responsive
          'text-[10px] leading-[16px]  text-white overflow-hidden',
          // Mobile responsive
          '',
          // Tablet responsive
          'md:text-[12px] md:leading-[22px]',
          // Desktop responsive
          'lg:hidden'
        )}
        animate={isOpen ? 'open' : 'closed'}
        initial="closed"
        transition={{ duration: 0.2, ease: 'linear' }}
        variants={{
          open: { y: '0', height: 'auto' },
          closed: { y: '100%', height: 0 },
        }}
        viewport={{ amount: 0.5 }}
      >
        {children}
      </motion.p>
    </li>
  );
};
