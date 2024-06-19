'use client';

import { useEffect, useState, type FC } from 'react';
import { cn, type CodeSnippetsProps } from '@repo/utils';
import { useDocs } from '../../../../app/docs/provider';
import { CodeWrapper } from './wrapper';
import { getFilters } from './utils/get-filters';
import { getActiveContent } from './utils/get-active-content';
import { Dropdown } from './dropdown';
import { InfoIcon } from '@storybook/icons';

interface CodeSnippetsClientProps {
  content: CodeSnippetsProps[];
}

export const CodeSnippetsClient: FC<CodeSnippetsClientProps> = ({
  content,
}) => {
  const {
    activeRenderer,
    activeLanguage,
    activePackageManager,
    setLanguage,
    setPackageManager,
  } = useDocs();
  const [activeTab, setTab] = useState<string | null>(null);

  // Get filters - If preformatted text, we don't need filters
  const filters = getFilters({ content, activeRenderer });

  const handleLanguage = (id: string) => {
    setLanguage(id);
  };

  const handlePackageManager = (id: string) => {
    setPackageManager(id);
  };

  const tabs = content
    .map((item) => item.tabTitle)
    .filter((title) => title !== undefined) as string[];

  useEffect(() => {
    if (tabs && tabs.length > 0) {
      setTab(tabs[0]);
    }
  }, []);

  // Get active content for the Code Snippets component
  const { activeContent, error } = getActiveContent({
    content,
    filters,
    activeLanguage,
    activePackageManager,
    activeRenderer,
    activeTab,
  });

  return (
    <CodeWrapper
      copy={activeContent?.raw || ''}
      top={
        tabs.length > 1 ? (
          <div className="flex gap-2">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={cn(
                  'flex h-7 items-center justify-center rounded border px-2 text-sm transition-colors',
                  activeTab === tab &&
                    'border-slate-500 bg-slate-500 text-white dark:border-slate-700 dark:bg-slate-700 dark:text-slate-400',
                  activeTab !== tab &&
                    'border-zinc-300 hover:border-blue-500 hover:text-blue-500 dark:border-slate-700 dark:text-slate-500 dark:hover:border-blue-500 dark:hover:text-blue-500',
                )}
                onClick={() => setTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        ) : null
      }
      options={
        <>
          {filters && filters.languages.length > 1 ? (
            <Dropdown
              action={handleLanguage}
              activeId={activeContent?.language || ''}
              list={filters.languages}
              type="language"
            />
          ) : null}
          {filters && filters.packageManagers.length > 1 ? (
            <Dropdown
              action={handlePackageManager}
              activeId={activeContent?.packageManager || ''}
              list={filters.packageManagers}
              type="packageManager"
            />
          ) : null}
        </>
      }
      title={activeContent?.filename || ''}
    >
      {activeContent?.content ? (
        <>
          {error && (
            <div className="mb-4 flex items-center gap-2 rounded border border-orange-300 bg-orange-100 px-4 py-3 text-orange-900 dark:border-orange-800 dark:bg-orange-950 dark:text-orange-400">
              <InfoIcon />
              {error}
            </div>
          )}
          <section
            dangerouslySetInnerHTML={{
              __html: activeContent.content,
            }}
          />
        </>
      ) : (
        <div>
          <div>Oh no! We could not find the code you are looking for.</div>
          <div>
            It would be great if you could report an issue on Github if you see
            that message.
          </div>
        </div>
      )}
    </CodeWrapper>
  );
};
