'use client';

import type { FC, ReactNode } from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { ScrollBar } from '../../ui/scroll-area';
import { DocsMainNav } from './docs-main-nav';

interface SidebarProps {
  children: ReactNode;
}

export const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <nav className="sticky top-[72px] hidden w-[228px] self-start md:block">
      <ScrollAreaPrimitive.Root className="relative h-[calc(100vh-72px)] w-full overflow-hidden">
        <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
          <div className="py-12 pl-1 pr-4">
            <DocsMainNav />
            {children}
          </div>
        </ScrollAreaPrimitive.Viewport>
        <ScrollBar className="pb-6 pt-12" />
      </ScrollAreaPrimitive.Root>
    </nav>
  );
};
