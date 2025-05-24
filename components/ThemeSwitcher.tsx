// src/components/ThemeSwitcher.tsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

// Simple Sun and Moon icons as SVGs
const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-6.364-.386 1.591-1.591M3 12h2.25m.386-6.364 1.591 1.591" />
    </svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
    </svg>
);


export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // Or a skeleton loader
        return <div className="w-12 h-12"></div>;
    }

    const toggleTheme = () => {
        // If the current theme is light (or system preference resolves to light), switch to dark. Otherwise, switch to light.
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="p-2 rounded-full transition-colors duration-200
                 bg-gray-200 hover:bg-gray-300
                 dark:bg-gray-700 dark:hover:bg-gray-600
                 text-gray-800 dark:text-gray-200"
            onClick={toggleTheme}
        >
            {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
    );
}