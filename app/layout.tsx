import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

// Load fonts
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hip-Hop Artist PWA',
  description: 'Website for a Hip-Hop Artist',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} bg-navy text-white h-full`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}