import type { Metadata } from 'next';
import { cn, fetchGithubCount } from '@repo/utils';
import { Nunito_Sans as nunitoSans } from 'next/font/google';
import { Header, Footer, Container } from '@repo/ui';

import './globals.css';
import '@repo/ui/styles.css';

const fontSans = nunitoSans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { number: githubCount } = await fetchGithubCount();

  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-white font-sans antialiased dark:bg-slate-950',
          fontSans.variable,
        )}
      >
        <Header
          algoliaApiKey={process.env.NEXT_PUBLIC_ALGOLIA_API_KEY as string}
          githubCount={githubCount}
        />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
