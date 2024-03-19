import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Who is Sehoon',
  description: '김세훈 프론트엔드 포트폴리오'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
