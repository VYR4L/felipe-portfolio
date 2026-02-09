import React, { createContext, useState, useMemo, useEffect } from 'react';
import type { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createAppTheme } from '../theme/theme';
import type { TThemeScheme } from '../types/theme.types';
import { DEFAULT_THEME_MODE, DEFAULT_THEME_SCHEME, THEME_MODE_STORAGE_KEY, THEME_SCHEME_STORAGE_KEY } from '../theme/constants';

interface AppThemeContextType {
  mode: 'light' | 'dark';
  scheme: TThemeScheme;
  toggleTheme: () => void;
  setScheme: (scheme: TThemeScheme) => void;
}

export const AppThemeContext = createContext<AppThemeContextType>({
  mode: DEFAULT_THEME_MODE,
  scheme: DEFAULT_THEME_SCHEME,
  toggleTheme: () => {},
  setScheme: () => {},
});

interface AppThemeProviderProps {
  children: ReactNode;
}

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
  // Lê a preferência de mode do localStorage
  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    const savedMode = localStorage.getItem(THEME_MODE_STORAGE_KEY);
    return (savedMode === 'light' || savedMode === 'dark') ? savedMode : DEFAULT_THEME_MODE;
  });

  // Lê a preferência de scheme do localStorage
  const [scheme, setSchemeState] = useState<TThemeScheme>(() => {
    const savedScheme = localStorage.getItem(THEME_SCHEME_STORAGE_KEY) as TThemeScheme;
    const validSchemes = ['minimalist', 'neubrutalism', 'aurora', 'glassmorphism', 'claymorphism', 'bauhaus', 'organic-flow'];
    return savedScheme && validSchemes.includes(savedScheme) ? savedScheme : DEFAULT_THEME_SCHEME;
  });

  // Persiste as preferências no localStorage
  useEffect(() => {
    localStorage.setItem(THEME_MODE_STORAGE_KEY, mode);
  }, [mode]);

  useEffect(() => {
    localStorage.setItem(THEME_SCHEME_STORAGE_KEY, scheme);
  }, [scheme]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const setScheme = (newScheme: TThemeScheme) => {
    setSchemeState(newScheme);
  };

  // Memoiza o tema para evitar re-renders desnecessários
  const theme = useMemo(() => createAppTheme(mode, scheme), [mode, scheme]);

  // Memoiza o valor do contexto
  const contextValue = useMemo(
    () => ({
      mode,
      scheme,
      toggleTheme,
      setScheme,
    }),
    [mode, scheme]
  );

  return (
    <AppThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
};
