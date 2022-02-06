import { useContext } from 'react';
import { IThemeContext, ThemeContext } from './theme-provider';

export const useTheme = (): IThemeContext => {
    return useContext(ThemeContext);
};
