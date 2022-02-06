import React, { createContext, useState, useMemo, SetStateAction, Dispatch } from 'react';

export type ThemeValue = 'theme-default' | 'theme-dark' | 'theme-light';

const DEFAULT_THEME = 'theme-default';

export interface IThemeProviderProps {
    value?: ThemeValue;
}

export interface IThemeContext {
    theme: ThemeValue;
    setTheme: Dispatch<SetStateAction<ThemeValue>>;
}

export const ThemeContext = createContext<IThemeContext>({
    theme: DEFAULT_THEME,
    setTheme: () => {},
});

export const ThemeProvider: React.FC<IThemeProviderProps> = ({
    value,
    children,
}: React.PropsWithChildren<IThemeProviderProps>) => {
    const [theme, setTheme] = useState(value ?? DEFAULT_THEME);
    const contextValue = useMemo((): IThemeContext => ({ theme, setTheme }), [theme]);

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};
