import classNames from 'classnames';
import { ComponentProps, PropsWithChildren } from 'react';

interface ISectionProps extends ComponentProps<'section'>, PropsWithChildren {}

export default function Section({ children, ...props }: ISectionProps) {
  const classname = classNames(
    'w-full h-dvh snap-start px-[39px]',
    props.className
  );
  return (
    <section {...props} className={classname}>
      {children}
    </section>
  );
}
