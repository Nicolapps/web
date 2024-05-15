export interface Meta {
  path: string;
  title: string;
  shortTitle: string;
  segments: string[];
  isRoot: boolean;
  group: string | null;
  tab: string | null;
}

export interface TreeMetaProps {
  title: string;
  sidebar?: {
    title?: string;
    order?: number;
  };
  tab?: {
    title?: string;
    order?: number;
  };
  isTab?: boolean;
}

export interface TreeProps extends TreeMetaProps {
  name: string;
  slug: string;
  pathSegment: string;
  type: 'directory' | 'link' | 'tab';
  children?: TreeProps[];
}

export interface CodeSnippetsProps {
  filename?: string;
  option?: string;
  renderer?: string;
  packageManager?: string | null;
  language?: string;
  content: React.ReactNode;
}

export type CodeSnippetsFilter = { id: string; title: string } | undefined;

export interface CodeSnippetsFiltersProps {
  languages: CodeSnippetsFilter[];
  packageManagers: CodeSnippetsFilter[];
}