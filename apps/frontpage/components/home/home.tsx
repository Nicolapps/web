'use client';

import { Header, Footer } from '@repo/ui';
import { useMemo, useRef } from 'react';
import { useInView } from 'framer-motion';
import { cn, container } from '@repo/utils';
import { Hero } from './hero';
import { Develop } from './develop/develop';
import { StickyNav } from './sticky-nav/sticky-nav';
import { Test } from './test/test';
import { Document } from './document/document';
import { Share } from './share/share';
import { Automate } from './automate/automate';
import { SocialValidation } from './social-validation/social-validation';

interface HomeProps {
  githubCount: number;
  npmDownloads: string;
  contributorCount: string;
  discordMembers: string;
}

export function Home({
  githubCount,
  npmDownloads,
  contributorCount,
  discordMembers,
}: HomeProps) {
  const developRef = useRef(null);
  const developInView = useInView(developRef, { margin: '0px 0px -100% 0px' });

  const testRef = useRef(null);
  const testInView = useInView(testRef);

  const documentRef = useRef(null);
  const documentInView = useInView(documentRef);

  const shareRef = useRef(null);
  const shareInView = useInView(shareRef);

  const automateRef = useRef(null);
  const automateInView = useInView(automateRef);

  const whoRef = useRef(null);
  const whoInView = useInView(whoRef);

  const activeSection = useMemo(() => {
    if (whoInView) return 'who';
    if (automateInView) return 'automate';
    if (shareInView) return 'share';
    if (documentInView) return 'document';
    if (testInView) return 'test';
    if (developInView) return 'develop';
    return null;
  }, [
    developInView,
    testInView,
    documentInView,
    shareInView,
    automateInView,
    whoInView,
  ]);

  return (
    <div className="relative bg-homeBackground" id="page-top">
      <div className="relative z-10">
        <Header githubCount={githubCount} variant="home" />
        <Hero contributorCount={contributorCount} npmDownloads={npmDownloads} />
        <StickyNav activeSection={activeSection} isVisible={Boolean(activeSection)} />
        <div id="develop" ref={developRef} style={{ contain: 'paint' }}>
          <Develop />
        </div>
        <div id="test" ref={testRef}>
          <Test />
        </div>
        <div id="document" ref={documentRef}>
          <Document />
        </div>
        <div id="share" ref={shareRef}>
          <Share />
        </div>
        <div id="automate" ref={automateRef} style={{ contain: 'paint' }}>
          <Automate />
        </div>
        <div id="who" ref={whoRef}>
          <SocialValidation
            contributorCount={contributorCount}
            discordMembers={discordMembers}
          />
        </div>
        <Footer variant="home" />
      </div>

      {/* Background circles and texture */}
      <div className="absolute top-0 left-0 z-0 w-full h-full overflow-hidden">
        <div className={cn(container, 'h-full relative')}>
          <div className="absolute rounded-full bg-[radial-gradient(closest-side_at_50%_50%,_rgba(255,71,133,1),_rgba(255,71,133,0)),url('/home/texture.svg')] w-[500px] h-[500px] top-[-300px] left-[-160px] z-[2] min-[600px]:w-[700px] min-[600px]:h-[700px] min-[960px]:w-[928px] min-[960px]:h-[928px] min-[960px]:top-[-500px] min-[960px]:left-[-100px] min-[1440px]:w-[1400px] min-[1440px]:h-[1400px] min-[1440px]:top-[-720px] min-[1440px]:left-[-20%]" />

          <div className="absolute rounded-full bg-[radial-gradient(closest-side_at_50%_50%,_rgba(252,81,31,1),_rgba(252,81,31,0)),url('/home/texture.svg')] opacity-80 w-[400px] h-[400px] top-[-220px] left-[200px] z-[1] min-[600px]:w-[600px] min-[600px]:h-[600px] min-[600px]:top-[-260px] min-[600px]:left-[360px] min-[960px]:w-[900px] min-[960px]:h-[900px] min-[960px]:top-[-420px] min-[960px]:left-[480px] min-[1440px]:left-[34%]" />

          <div className="absolute rounded-full bg-[radial-gradient(closest-side_at_50%_50%,_rgba(71,145,255,1),_rgba(252,81,31,0)),url('/home/texture.svg')] opacity-90 w-[600px] h-[600px] top-[160px] right-[200px] z-[1] min-[600px]:top-[220px] min-[600px]:right-[400px] min-[960px]:w-[1400px] min-[960px]:h-[1400px] min-[960px]:top-[260px] min-[960px]:right-[0px] min-[1440px]:right-[-16%]" />
        </div>
      </div>
    </div>
  );
}
