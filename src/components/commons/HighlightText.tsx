import classNames from 'classnames';
import { ComponentProps, PropsWithChildren } from 'react';

interface IHighlightTextProps
  extends PropsWithChildren,
    ComponentProps<'span'> {}

export default function HighlightText({
  children,
  className,
  ...props
}: IHighlightTextProps) {
  return (
    <span
      className={classNames('text-[var(--color-deep-saffron)]', className)}
      {...props}
    >
      {children}
    </span>
  );
}
