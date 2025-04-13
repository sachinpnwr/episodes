'use client';

import { useEffect } from 'react';
import "./globals.css";
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <p>this is the navabr</p>
      </body>
    </html>
  );
}
