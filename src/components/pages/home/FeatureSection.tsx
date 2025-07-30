import Section from '@/components/commons/Section';
import classNames from 'classnames';
import { ComponentProps, PropsWithChildren } from 'react';

export default function FeatureSection() {
  return (
    <Section className="bg-[url('/feature_banner.png')] bg-cover flex flex-col justify-center items-center">
      <p className="text-xl font-bold break-all mx-[10%] text-white whitespace-pre-wrap">
        1. <HighlightText>Self-produced</HighlightText> semiconductors 2.
        Production and Sales of <HighlightText>H</HighlightText>igh-
        <HighlightText>P</HighlightText>erformance{' '}
        <HighlightText>Self-produced</HighlightText>ervers with
        self-manufactured semiconductors 3. Construction of operative{' '}
        <HighlightText>Block chain IDC</HighlightText> based on high-performance
        servers 4. Establish solution relating to Blockchain{' '}
        <HighlightText>(IPFS)</HighlightText>
      </p>
    </Section>
  );
}

interface IHighlightTextProps
  extends PropsWithChildren,
    ComponentProps<'span'> {}

const HighlightText = ({
  children,
  className,
  ...props
}: IHighlightTextProps) => {
  return (
    <span className={classNames('text-highlight-text', className)} {...props}>
      {children}
    </span>
  );
};
