import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Nexus Drive | Car Sharing Marketplace',
  description: 'Find the perfect car for your next adventure or share your vehicle to earn extra income',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/logos/nexus-drive-logo.png"
          as="image"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
} 