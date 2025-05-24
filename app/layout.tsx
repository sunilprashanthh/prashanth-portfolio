import type { Metadata } from "next";
import { Inter } from "next/font/google"; // A good default font
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Prashanth E - Application Security Engineer", // Updated title
    description: "Portfolio of Prashanth E, an Application Security Engineer with expertise in SAST, DAST, and Secure Code Review.", // Updated description
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${inter.className} bg-gray-900`}> {/* Optional: Set a default body background */}
        {children}
        </body>
        </html>
    );
}