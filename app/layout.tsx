import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Prashanth E - Cybersecurity Journey',
    description: 'Exploring the cybersecurity journey of Prashanth E, from QA to AppSec.',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        {/*
            Next.js will automatically create the <head> and populate it
            with metadata, fonts, and global CSS links.
            You usually don't need to write <head></head> here yourself
            unless adding very specific global tags.
          */}
        <body className={inter.className}> {/* Removed template literal just for className if only one variable */}
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}