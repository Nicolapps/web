'use client';

import { useEffect, useState, type FC } from 'react';
import type { CodeSnippetsProps } from '@repo/utils';
import type { DocsContextProps } from '../../../../app/docs/provider';
import { CodeWrapper } from './wrapper';
import { getFilters } from './utils/get-filters';
import { getActiveContent } from './utils/get-active-content';
import { Dropdown } from './dropdown';

interface CodeSnippetsClientProps {
  content: CodeSnippetsProps[];
  activeLanguage?: DocsContextProps['activeLanguage'];
  activePackageManager?: DocsContextProps['activePackageManager'];
  activeRenderer?: DocsContextProps['activeRenderer'];
  setLanguage: DocsContextProps['setLanguage'];
  setPackageManager: DocsContextProps['setPackageManager'];
}

export const CodeSnippetsComponent: FC<CodeSnippetsClientProps> = ({
  content,
  activeLanguage,
  activePackageManager,
  activeRenderer,
  setLanguage,
  setPackageManager,
}) => {
  const [lanLocal, setLanLocal] = useState<null | string>(null);
  const [pmLocal, setPmLocal] = useState<null | string>(null);
  const [rendererLocal, setRendererLocal] = useState<null | string>('common');

  console.log('content', content);

  // Get filters - If preformatted text, we don't need filters
  const filters = getFilters({ content, rendererLocal });

  useEffect(() => {
    if (activeLanguage) setLanLocal(activeLanguage);
    if (activePackageManager) {
      setPmLocal(activePackageManager);
    } else if (filters.packageManagers.length >= 1) {
      setPmLocal(filters.packageManagers[0].id);
    }
    if (activeRenderer) setRendererLocal(activeRenderer);
  }, [activeLanguage, activePackageManager, activeRenderer, filters]);

  const handleLanguage = (id: string) => {
    setLanLocal(id);
    setLanguage(id);
  };

  const handlePackageManager = (id: string) => {
    setPmLocal(id);
    setPackageManager(id);
  };

  // Get active content for the Code Snippets component
  const activeContent = getActiveContent({
    codeSnippetsContent: content,
    filters,
    activeLanguage: lanLocal,
    activePackageManager: pmLocal,
    activeRenderer: rendererLocal,
  });

  console.log(activeContent);

  return (
    <CodeWrapper
      options={
        <>
          {filters && filters.languages.length > 1 ? (
            <Dropdown
              action={handleLanguage}
              activeId={lanLocal}
              list={filters.languages}
              type="language"
            />
          ) : null}
          {filters && filters.packageManagers.length > 1 ? (
            <Dropdown
              action={handlePackageManager}
              activeId={pmLocal}
              list={filters.packageManagers}
              type="packageManager"
            />
          ) : null}
        </>
      }
      title={activeContent?.filename || ''}
    >
      {activeContent?.content ? (
        <section
          dangerouslySetInnerHTML={{
            __html: activeContent.content,
          }}
        />
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
