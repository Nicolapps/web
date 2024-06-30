'use client';

import Link from 'next/link';
import type { FC, ReactNode } from 'react';
import { cn } from '@repo/utils';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
import {
  APIIcon,
  ChangelogIcon,
  DocsIcon,
  IntegrationsIcon,
  TutorialsIcon,
} from './icons';
import { getVersion } from '../../../lib/get-version';

export const DocsMainNav = () => {
  const pathname = usePathname();
  const segment = useSelectedLayoutSegment();
  const slug: string[] = segment ? segment.split('/') : [];
  const activeVersion = getVersion(slug);

  return (
    <nav className="flex flex-col gap-1.5 text-sm font-medium">
      <Line
        href="/docs"
        icon={<DocsIcon />}
        isActive={
          pathname.startsWith('/docs') && !pathname.startsWith('/docs/api')
        }
        label="Documentation"
      />
      {Number(activeVersion.id) >= 7 ? (
        <Line
          href="/docs/api"
          icon={<APIIcon />}
          isActive={pathname.startsWith('/docs/api')}
          label="API"
        />
      ) : null}
      <Line
        href="/tutorials"
        icon={<TutorialsIcon />}
        isActive={pathname === '/tutorials'}
        label="Tutorials"
      />
      <Line
        href="/integrations"
        icon={<IntegrationsIcon />}
        isActive={false}
        label="Addons"
      />
      <Line
        href="/releases"
        icon={<ChangelogIcon />}
        isActive={pathname.startsWith('/releases')}
        label="Changelog"
      />
    </nav>
  );
};

const Line: FC<{
  isActive: boolean;
  href: string;
  icon: ReactNode;
  label: string;
}> = ({ isActive, href, label, icon }) => (
  <Link
    className={cn(
      'flex h-8 items-center gap-3 px-2 font-bold transition-colors hover:text-blue-500',
      isActive && 'text-blue-500',
    )}
    href={href}
  >
    {icon}
    {label}
  </Link>
);
