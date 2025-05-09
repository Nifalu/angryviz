// src/components/theme/ThemeToggle.jsx
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider'; // Ensure this path is correct

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [effectiveTheme, setEffectiveTheme] = useState(theme);

    useEffect(() => {
        if (theme === "system" && typeof window !== "undefined") {
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
            const updateEffectiveTheme = () => setEffectiveTheme(mediaQuery.matches ? "dark" : "light");

            updateEffectiveTheme();
            mediaQuery.addEventListener('change', updateEffectiveTheme);
            return () => mediaQuery.removeEventListener('change', updateEffectiveTheme);
        } else {
            setEffectiveTheme(theme);
        }
    }, [theme]);

    const toggleTheme = () => {
        if (effectiveTheme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };

    return (
        <div
            onClick={toggleTheme}
            role="button" // Makes it behave like a button for assistive technologies
            tabIndex={0}  // Makes the div focusable
            className="p-2 rounded-md cursor-pointer hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 focus:ring-offset-background"
            aria-label={`Switch to ${effectiveTheme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {effectiveTheme === "dark" ? (
                <Sun className="h-5 w-5" />
            ) : (
                <Moon className="h-5 w-5" />
            )}
        </div>
    );
}
