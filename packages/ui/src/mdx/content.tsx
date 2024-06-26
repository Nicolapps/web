import { MDXRemote } from 'next-mdx-remote/rsc';
import type { ReactNode } from 'react';
import { mdxComponents } from './components';
import { MDXRemoteOptions } from './options';

interface MDXContentProps {
  components?: Record<string, React.ComponentType>;
  source?: string | null;
}

export function MDXContent({ components, source }: MDXContentProps): ReactNode {
  return source ? (
    <MDXRemote
      components={{ ...mdxComponents, ...components }}
      options={MDXRemoteOptions}
      source={source}
    />
  ) : null;
}
