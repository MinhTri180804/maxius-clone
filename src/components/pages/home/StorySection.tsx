'use client';

import HighlightText from '@/components/commons/HighlightText';
import Section from '@/components/commons/Section';
import classNames from 'classnames';
import { Variants } from 'motion';
import { ComponentProps, FC, PropsWithChildren } from 'react';
import { motion } from 'motion/react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { twMerge } from 'tailwind-merge';

export default function StorySection() {
  return (
    <Section
      id="story"
      className={twMerge(
        // Global responsive
        'px-[39px] flex flex-col gap-5 items-center justify-center bg-white',
        // Mobile responsive
        '',
        // Tablet responsive
        'md:gap-0',
        // Desktop responsive
        ''
      )}
    >
      <motion.h2
        variants={titleVariants}
        initial="offscreen"
        whileInView="onscreen"
        onViewportEnter={() => (window.location.hash = '#story')}
        className={twMerge(
          // Global responsive
          'font-bold text-[25px] text-black uppercase w-full text-center',
          // Mobile responsive
          '',
          // Tablet responsive
          'md:text-[30px] md:font-extrabold md:pb-[40px]',
          // Desktop responsive
          'lg:text-[98.5px]'
        )}
      >
        STORY
      </motion.h2>
      <motion.div
        variants={contentVariants}
        initial="offscreen"
        whileInView="onscreen"
        className={twMerge(
          // Global responsive
          'overflow-x-auto flex gap-0 items-stretch',
          // Mobile responsive
          'w-full',
          // Tablet responsive
          'md:w-[90%]',
          // Desktop responsive
          'lg:w-[70%]'
        )}
      >
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="w-full"
        >
          <SwiperSlide>
            <StoryContentHistory />
          </SwiperSlide>
          <SwiperSlide>
            <StoryContentPartners />
          </SwiperSlide>
          <SwiperSlide>
            <StoryContentHistory />
          </SwiperSlide>
          <SwiperSlide>
            <StoryContentHistory />
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </Section>
  );
}

// Component story part
const StoryContentHistory = () => {
  return (
    <StoryItem title="History">
      <StoryItemPartList>
        <StoryItemPart title="2021">
          Rebrand the Company name to Maxius
          <br />
          1st Pan-Governmental Information Resource Integration HW3
        </StoryItemPart>
        <StoryItemPart title="2020">
          2nd construction of AI-based adaptive security system
          <br />
          SPC Certification : TOP 5 Rank record in the world of storage
        </StoryItemPart>
        <StoryItemPart title="2019">
          Development of Genome Analysis System Semiconductor and HPC Storage
        </StoryItemPart>
        <StoryItemPart title="2018">
          Development of small supercomputers using high performance system
          semiconductors
          <br />
          Certified by International TPC
        </StoryItemPart>
        <StoryItemPart title="2017">
          Confirmation of excellent product for reducing standby power (Korea
          Energy Agency)
          <br />
          Technology Innovation Award
        </StoryItemPart>
        <StoryItemPart title="2016">
          Obtain Certificate of Conformity registered for broadcasting and
          communication equipment (National Radio Research Institute)
          <br />
          Sign MOU Agreement with KT ds
        </StoryItemPart>
        <StoryItemPart title="2015">
          Awarded IT Convergence Entrepreneur
          <br />
          Awarded Korean Patent Technology Award (Sejong the Great Award)
        </StoryItemPart>
        <StoryItemPart title="2010">
          Internationally develop the first PCI Interface Type storage board SSD
          product
        </StoryItemPart>
        <StoryItemPart title="1996">Company established</StoryItemPart>
      </StoryItemPartList>
    </StoryItem>
  );
};

const StoryContentPartners = () => {
  return (
    <StoryItem title="Partners">
      <StoryItemPartList>
        <StoryItemPart title="1000 corporate Partners">
          Cheongwadae, KHNP, Ministry of National Defense,
          <br />
          Gunpo city, Korea Agro-Fisheries&Food Trade
          <br />
          Coporation, JeollaNamdo, KMRB, JDC,
          <br />
          Korea Housing Finance Corporation,
          <br />
          Gyeonggi Provincial Police Agency, NCIS, KPIC,
          <br />
          Supreme Court of Korea, IPET, LH, National Gugak
          <br />
          Center,Korea Workers Compensation&Welfare
          <br />
          Service
          <span>
            <HighlightText className="text-[var(--color-dark-jungle-green)] font-medium">
              {' '}
              More than 1,000 government-
              <br />
              related companies, including them
            </HighlightText>
          </span>
        </StoryItemPart>

        <StoryItemPart title="250 Additional corporate Partners">
          KAIST, Seoul National University, Dongguk
          <br />
          University, Pusan National University, Incheon
          <br />
          National University, ETRI, Seoyeong University,
          <br />
          Telecommuications Technology Association,
          <br />
          Sunmoon University, Namseoul University,
          <br />
          Chungnam National University, Gachon University,
          <br />
          Myongji University
          <HighlightText className="text-[var(--color-dark-jungle-green)] font-medium">
            More than 250 companies
            <br />
            related to education, including
          </HighlightText>
        </StoryItemPart>

        <StoryItemPart title="120 corporate Partners">
          Samsung Total, Samsung SDS, LS Electric, Hanwha
          <br />
          Systems,
          <HighlightText className="text-[var(--color-dark-jungle-green)] font-medium">
            More than 120 manufacturing-related companies, including
          </HighlightText>
        </StoryItemPart>
      </StoryItemPartList>
    </StoryItem>
  );
};
// Components commons

interface IStoryItemProps extends ComponentProps<'div'>, PropsWithChildren {
  title: string;
}

const StoryItem: FC<IStoryItemProps> = ({ title, children, ...props }) => {
  return (
    <div
      className={twMerge(
        // Global responsive
        'flex min-w-full flex-col gap-5 items-start justify-stretch px-[30px] select-none',
        // Mobile responsive
        'w-full',
        // Tablet responsive
        'md:px-0',
        // Desktop responsive
        ''
      )}
      {...props}
    >
      <h5
        className={twMerge(
          // Global responsive
          'font-bold text-xl text-black w-full',
          // Mobile responsive
          '',
          // Tablet responsive
          'md:px-[30px]',
          // Desktop responsive
          'lg:text-[39.5px]'
        )}
      >
        {title}
      </h5>
      {children}
    </div>
  );
};

interface IStoryItemPartListProps
  extends ComponentProps<'ul'>,
    PropsWithChildren {}

const StoryItemPartList: FC<IStoryItemPartListProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <ul
      className={twMerge(
        // Global responsive
        'flex flex-col gap-5 items-start w-full justify-stretch max-h-[310px] overflow-y-auto no-scrollbar',
        // Mobile responsive
        '',
        // Tablet responsive
        'md:border-r md:px-[30px]',
        // Desktop responsive
        '',
        className
      )}
      {...props}
    >
      {children}
    </ul>
  );
};

interface IStoryItemPartProps extends ComponentProps<'li'>, PropsWithChildren {
  title: string;
}

const StoryItemPart: FC<IStoryItemPartProps> = ({
  title,
  children,
  className,
  ...props
}) => {
  return (
    <li
      className={classNames(
        'flex  text-[13px] gap-[10px] flex-col items-stretch text-[var(--color-dark-jungle-green)] justify-stretch',
        className
      )}
      {...props}
    >
      <h5 className="font-medium">{title}</h5>
      <p className="font-light">{children}</p>
    </li>
  );
};

// Variant animation
const titleVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: -50,

    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  onscreen: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      delay: 0.5,
      ease: 'easeOut',
    },
  },
};

const contentVariants: Variants = {
  offscreen: {
    opacity: 0,
    x: -200,

    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  onscreen: {
    opacity: 1,
    x: 0,

    transition: {
      delay: 1,
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};
