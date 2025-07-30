'use client';
import HighlightText from '@/components/commons/HighlightText';
import Section from '@/components/commons/Section';
import classNames from 'classnames';
import { ComponentProps, PropsWithChildren, useMemo, useState } from 'react';
import { motion } from 'motion/react';

export default function AboutSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <Section className="flex justify-center px-[39px] items-center bg-[url('/about_banner.png')] bg-cover">
      <ul className="flex flex-col gap-0  pr-[35px] w-full">
        <AboutSectionItem
          title="Product"
          isOpen={openId === 'Product'}
          onClick={() => setOpenId('Product')}
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
      </ul>
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
}

const AboutSectionItem = ({
  title,
  isLast = false,
  isOpen,
  children,
  highlightTitle = false,
  ...props
}: IAboutSectionItemProps) => {
  const classname = useMemo(
    () =>
      classNames(
        'flex flex-col p-5 gap-[20px] pb-12 border-b border-[#ffffff52]',
        {
          'pb-5': isLast,
          'border-b-0': isLast,
        }
      ),
    [isLast]
  );

  const classnameTitle = useMemo(
    () =>
      classNames('text-xl font-bold', {
        'text-[var(--color-deep-saffron)]': highlightTitle,
        'text-white': !highlightTitle,
      }),
    [highlightTitle]
  );
  return (
    <li className={classname} {...props}>
      <h2 className={classnameTitle}>{title}</h2>
      <motion.p
        className="text-[10px] leading-[16px]  text-white overflow-hidden"
        animate={isOpen ? 'open' : 'closed'}
        initial="closed"
        transition={{ duration: 0.2, ease: 'easeOut' }}
        variants={{
          open: { y: '0', height: 'auto' },
          closed: { y: '100%', height: 0 },
        }}
      >
        {children}
      </motion.p>
    </li>
  );
};
