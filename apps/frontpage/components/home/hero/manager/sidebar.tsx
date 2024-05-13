import { cn } from '@repo/utils';
import {
  BookmarkHollowIcon,
  ChevronSmallDownIcon,
  ChevronSmallRightIcon,
  CogIcon,
  ComponentIcon,
  DocumentIcon,
  ExpandAltIcon,
  FolderIcon,
  SearchIcon,
} from '@storybook/icons';
import type { FC } from 'react';
import { StorybookLogo } from "../../../logos/storybook";

export const Sidebar: FC<{ slide: number }> = ({ slide }) => {
  return (
    <div className="hidden sm:block w-[230px] h-full bg-[#F7F9FC] border-r border-r-[#D9E0E6] px-3">
      <div className="flex items-center justify-between pt-5 pb-4 pl-2">
        <StorybookLogo />
        <div className="flex items-center justify-center w-8 h-8">
          <CogIcon className="text-[#73828C]" />
        </div>
      </div>
      <div className="flex border border-[#D9E0E6] rounded h-8 w-full text-sm items-center px-2 gap-2 text-[#73828C] mb-4">
        <SearchIcon />
        Find components
      </div>
      <SidebarLine ic="docs" label="Introduction" />
      <SidebarLine ic="docs" label="Install and configure" />
      <SidebarLine ic="docs" label="Changelog" />
      <div className="text-[#73828C] text-[11px] uppercase font-bold tracking-wider pt-5 pb-2 flex items-center px-2 justify-between">
        <div className="flex gap-1">
          <ChevronSmallRightIcon className="text-[#73828C] group-hover:text-white" />
          Library
        </div>
        <ExpandAltIcon size={10} />
      </div>
      <SidebarLine ar="right" ic="group" label="Badges" />
      <SidebarLine ar="right" ic="group" label="Button" />
      <SidebarLine ar="down" ic="group" label="Charts" />
      <SidebarLine ar="right" ic="component" label="DatePicker" lvl={2} />
      <SidebarLine ar="right" ic="component" label="PieChart" lvl={2} />
      <SidebarLine ar="right" ic="component" label="RangeSlider" lvl={2} />
      <SidebarLine ar="right" ic="component" label="SparkLine" lvl={2} />
      <SidebarLine ar="right" ic="component" label="TimeFrame" lvl={2} />
      <SidebarLine active={slide === 2} ic="docs" label="Overview" lvl={3} />
      <SidebarLine
        active={slide === 1 || slide === 3 || slide === 4}
        ic="story"
        label="No selection"
        lvl={3}
      />
      <SidebarLine ic="story" label="Afternoon" lvl={3} />
      <SidebarLine ic="story" label="All day" lvl={3} />
      <SidebarLine ar="down" ic="group" label="Image" />
      <SidebarLine ar="down" ic="group" label="Interstitial" />
    </div>
  );
};

const SidebarLine: FC<{
  ic: 'docs' | 'story' | 'group' | 'component';
  label: string;
  ar?: 'down' | 'right';
  lvl?: 1 | 2 | 3;
  active?: boolean;
}> = ({ ic, label, ar, lvl = 1, active }) => {
  return (
    <div
      className={cn(
        'group flex items-center gap-1.5 rounded h-7 cursor-default select-none',
        lvl === 1 && 'pl-2 pr-2',
        lvl === 2 && 'pl-6 pr-2',
        lvl === 3 && 'pl-16 pr-2',
        active && 'bg-blue-500',
      )}
    >
      {ar === 'down' && (
        <ChevronSmallDownIcon
          className={cn('text-[#73828C]', active && 'text-white')}
        />
      )}
      {ar === 'right' && (
        <ChevronSmallRightIcon
          className={cn('text-[#73828C]', active && 'text-white')}
        />
      )}
      {ic === 'docs' && (
        <DocumentIcon
          className={cn('text-[#FFAE00]', active && 'text-white')}
        />
      )}
      {ic === 'component' && (
        <ComponentIcon
          className={cn('text-[#029CFD]', active && 'text-white')}
        />
      )}
      {ic === 'group' && (
        <FolderIcon className={cn('text-[#6F2CAC]', active && 'text-white')} />
      )}
      {ic === 'story' && (
        <BookmarkHollowIcon
          className={cn('text-[#37D5D3]', active && 'text-white')}
        />
      )}
      <div className={cn('text-black text-sm', active && 'text-white')}>
        {label}
      </div>
    </div>
  );
};
