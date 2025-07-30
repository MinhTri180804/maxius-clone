import { ComponentProps, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

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
      className={twMerge('text-[var(--color-deep-saffron)]', className)}
      {...props}
    >
      {children}
    </span>
  );
}
