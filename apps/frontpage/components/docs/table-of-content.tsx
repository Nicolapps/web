'use client';

import { cn } from '@repo/utils';
import type { ElementOrSelector } from 'framer-motion';
import { inView } from 'framer-motion';
import type { Dispatch, FC, SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import { useScrollDirection } from 'react-use-scroll-direction';
import { ScrollArea } from '../ui/scroll-area';

interface Heading {
  id: number;
  slug: string;
  title: string;
  level: number;
}

interface TableOfContentProps {
  headings?: Heading[];
}

interface ElementProps {
  heading: Heading;
  isInView: string[];
  setIsInView: Dispatch<SetStateAction<string[]>>;
}

export const TableOfContent: FC<TableOfContentProps> = ({ headings }) => {
  const [isInView, setIsInView] = useState<string[]>([]);

  return (
    <nav className="sticky top-[72px] hidden w-[228px] self-start xl:block">
      <ScrollArea className="h-[calc(100vh-72px)] w-full">
        <div className="py-12">
          <div className="block h-8 text-sm font-bold">On this page</div>
          <ul className="mt-1">
            {headings?.map((heading) => {
              return (
                <Element
                  heading={heading}
                  isInView={isInView}
                  key={heading.id}
                  setIsInView={setIsInView}
                />
              );
            })}
          </ul>
        </div>
      </ScrollArea>
    </nav>
  );
};

const Element: FC<ElementProps> = ({ heading, isInView, setIsInView }) => {
  const { isScrollingUp } = useScrollDirection();

  // This is quite a dirty solution that don't always work.
  // TODO: Find a better solution.
  useEffect(() => {
    const box = document.getElementById(heading.slug) as ElementOrSelector;

    inView(box, () => {
      const isInArray = isInView.includes(heading.slug);
      !isInArray && isScrollingUp
        ? setIsInView((value) => [...new Set([heading.slug, ...value])])
        : setIsInView((value) => [...new Set([...value, heading.slug])]);

      return () => {
        setIsInView((value) => value.filter((slug) => slug !== heading.slug));
      };
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps -- This is intentional
  }, [isScrollingUp]);

  const active =
    isInView.length > 0 ? isInView[0].includes(heading.slug) : false;

  return (
    <li key={heading.id}>
      <a
        className={cn(
          'mb-3 flex w-full items-center text-sm text-zinc-700 transition-colors hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-500',
          heading.level > 2 && 'ml-5',
          active && 'text-blue-500',
        )}
        href={`#${heading.slug}`}
      >
        {heading.title}
      </a>
    </li>
  );
};
