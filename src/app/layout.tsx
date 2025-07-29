import Logo from '@/components/Logo';
import Sidebar from '@/components/Sidebar';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['300', '500', '700', '900'],
  fallback: ['sans-serif'],
});

export const metadata: Metadata = {
  title: 'MAXIUS',
  description: 'Maxius clone test interview',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased min-h-dvh w-dvw max-w-dvw relative`}
      >
        <Logo />
        <Sidebar />
        <main className="w-full h-dvh overflow-y-scroll snap-y snap-mandatory ">
          {children}
        </main>
      </body>
    </html>
  );
}
