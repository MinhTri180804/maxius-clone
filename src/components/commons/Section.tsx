import { ComponentProps, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface ISectionProps extends ComponentProps<'section'>, PropsWithChildren {}

export default function Section({
  children,
  className,
  ...props
}: ISectionProps) {
  return (
    <section
      {...props}
      className={twMerge(
        'w-full h-dvh snap-start px-[39px] overflow-hidden',
        className
      )}
    >
      {children}
    </section>
  );
}
