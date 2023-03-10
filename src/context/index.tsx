import { createContext, useContext } from 'react';

export interface ITheme {
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    darkMode: boolean;
}

const initialState = {
    darkMode: false,
    setDarkMode: () => {},
};

const ThemeContext = createContext<ITheme>(initialState);

// Setter
export const useThemeContext: () => ITheme = () => useContext(ThemeContext);

export default ThemeContext;
