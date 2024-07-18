/* eslint-disable no-nested-ternary -- TODO */
import { type DocsVersion, latestVersion } from '@repo/utils';
import Link from 'next/link';
import type { FC, ReactNode } from 'react';

interface AProps {
  activeVersion?: DocsVersion;
  children?: ReactNode;
  href?: string;
  indexPagePath?: string[] | null;
}

/**
 * ['8.1'] to 'docs' (when latestVersion is '8.1')
 * ['8.2'] to '8.2' (when '8.2' is pre-release)
 * ['7.6'] to '7'
 * [ '8.1', 'configure' ] to 'configure'
 * [ '8.1', 'writing-tests', 'snapshot-testing'] to 'snapshot-testing'
 */
function getParentPartOfPath(
  indexPagePath: string[],
  activeVersion: DocsVersion,
) {
  return indexPagePath.length === 1
    ? activeVersion.id === latestVersion.id
      ? 'docs'
      : (activeVersion.inSlug ?? activeVersion.id)
    : indexPagePath[indexPagePath.length - 1];
}

export const A: FC<AProps> = ({
  children,
  href: hrefIn,
  indexPagePath,
  activeVersion = latestVersion,
  ...rest
}) => {
  const isExternal = hrefIn?.startsWith('http');
  if (isExternal ?? !hrefIn) {
    return (
      <a className="ui-text-blue-500" href={hrefIn} {...rest}>
        {children}
      </a>
    );
  }

  let href = hrefIn
    // eslint-disable-next-line prefer-named-capture-group -- TODO: Fix regex with new eslint rules
    ?.replace(/^((?!http).*)\.mdx/, '$1')
    .replace(/\/index$/, '')
    // ../../release-7-6/docs/migration-guide.mdx#major-breaking-changes -> ../../docs/7/migration-guide#major-breaking-changes
    // eslint-disable-next-line prefer-named-capture-group -- TODO: Fix regex with new eslint rules
    .replace(/^((?!http).*)(?:release-)(\d+)-\d+\/docs(.*)/, '$1docs/$2$3');

  if (indexPagePath && href?.startsWith('./')) {
    href = href.replace(
      './',
      `./${getParentPartOfPath(indexPagePath, activeVersion)}/`,
    );
  } else if (indexPagePath && href?.startsWith('../')) {
    href = href.replace('../', './');
  }

  return (
    <Link className="ui-text-blue-500" href={href} {...rest}>
      {children}
    </Link>
  );
};
