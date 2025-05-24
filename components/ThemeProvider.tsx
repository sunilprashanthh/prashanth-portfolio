// Fallback if ThemeProviderProps cannot be imported directly from 'next-themes'
// src/components/ThemeProvider.tsx
'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import React, { useEffect, useState } from 'react';

// Infer props from the library's component if its explicit Props type isn't available
type InferredProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: InferredProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <>{children}</>;
    }

    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}