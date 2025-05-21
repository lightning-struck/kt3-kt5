import { ABeeZee, Geist, Geist_Mono } from 'next/font/google';

export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const abeezee = ABeeZee({
  weight: ['400'],
  style: ['normal'],
  variable: '--font-abeezee',
});

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
