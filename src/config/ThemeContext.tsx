import React, { createContext, useContext, useState, useMemo } from 'react';
import { lightTheme, darkTheme } from './theme';

type ThemeType = typeof lightTheme;

type ThemeContextType = {
    theme: ThemeType;
    isDark: boolean;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
    theme: lightTheme,
    isDark: false,
    toggleTheme: () => { },
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => setIsDark((prev) => !prev);

    const theme = isDark ? darkTheme : lightTheme;

    const value = useMemo(() => ({ theme, isDark, toggleTheme }), [theme, isDark]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};