// src/components/theme/ThemeProvider.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
    theme: "system",
    setTheme: () => null,
});

export function ThemeProvider({ children, defaultTheme = "system", storageKey = "vite-ui-theme" }) {
    const [theme, setThemeState] = useState(() => {
        if (typeof window !== "undefined") {
            try {
                const storedTheme = localStorage.getItem(storageKey);
                return storedTheme || defaultTheme;
            } catch (e) {
                console.error("Failed to access localStorage:", e);
                return defaultTheme;
            }
        }
        return defaultTheme;
    });

    useEffect(() => {
        if (typeof window === "undefined") return;
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");

        let currentTheme = theme;
        if (theme === "system") {
            currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        }
        root.classList.add(currentTheme);
    }, [theme]);

    const setTheme = (newTheme) => {
        if (typeof window !== "undefined") {
            try {
                localStorage.setItem(storageKey, newTheme);
            } catch (e) {
                console.error("Failed to write to localStorage:", e);
            }
        }
        setThemeState(newTheme);
    };

    const value = { theme, setTheme };
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
