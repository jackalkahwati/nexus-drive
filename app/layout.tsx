import './globals.css';
import type { Metadata } from 'next';
import React from 'react';

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
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
} 