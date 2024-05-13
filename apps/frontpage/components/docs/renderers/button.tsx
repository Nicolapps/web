'use client';

import { cn } from '@repo/utils';
import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';
import { ChevronSmallDownIcon } from '@storybook/icons';

interface ButtonProps {
  onClick?: () => void;
  children: string;
  active?: boolean;
  arrow?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { onClick, children = '', active = false, arrow = false, ...props },
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center h-7 rounded border border-zinc-300 text-sm px-2 hover:border-blue-500 transition-colors text-zinc-800 hover:text-blue-500 gap-1 data-[state=open]:text-blue-500 data-[state=open]:border-blue-500 outline-blue-500 outline-offset-3',
          active && 'border-blue-500 text-blue-500',
        )}
        onClick={onClick}
        ref={ref}
        type="button"
        {...props}
      >
        {children}
        {arrow ? <ChevronSmallDownIcon /> : null}
      </button>
    );
  },
);

Button.displayName = 'Button';
