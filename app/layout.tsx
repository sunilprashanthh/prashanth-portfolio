import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Or any other font you prefer
import './globals.css';

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
        <html lang="en" className="scroll-smooth">
        <body className={`${inter.className} bg-gray-900 text-gray-200`}>
        {children}
        </body>
        </html>
    );
}