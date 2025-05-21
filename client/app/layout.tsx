import './shared/styles/globals.css';
import './shared/styles/globals.scss';
import { Metadata, Viewport } from 'next';
import clsx from 'clsx';
import { Providers } from './providers';
import { siteConfig } from '@/config/site';
import { abeezee } from '@/config/fonts';
import Footer from './shared/components/layout/Footer/Footer';
import Header from './shared/components/layout/Header/Header';
import { Toaster } from 'sonner';
import { useLocalStorage } from './shared/hooks/useLocalStorage';
import { Auth } from './shared/components/layout/Auth/Auth';
// import { Toaster } from '@/components/ui/sonner';

// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   icons: {
//     // icon: '/favicon.ico',
//   },
// };

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={clsx('min-h-screen bg-background font-sans antialiased', /*abeezee.variable*/)}>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'white' }}>
          <Auth />
          <Header />
          <main>{children}</main>
          <Toaster />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
