'use client';

import type { ReactNode } from 'react';

import { ThemeProvider } from '@/lib/components/theme-provider';
import { usePathname } from 'next/navigation';

import { Footer } from './components/footer';
import { Header } from './components/header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const hideHeader = pathname === '/login';

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex min-h-screen flex-col bg-white">
        {!hideHeader && <Header />}
        <main className="">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
