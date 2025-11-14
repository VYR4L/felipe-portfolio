import React, { createContext, useState, useMemo, useEffect } from 'react';
import type { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createAppTheme } from '../theme/theme';

interface AppThemeContextType {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
}

export const AppThemeContext = createContext<AppThemeContextType>({
  mode: 'light',
  toggleTheme: () => {},
});

interface AppThemeProviderProps {
  children: ReactNode;
}

const THEME_STORAGE_KEY = 'felipe-portfolio-theme';

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
  // Lê a preferência do localStorage ou usa 'dark' como padrão
  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    return (savedTheme === 'light' || savedTheme === 'dark') ? savedTheme : 'dark';
  });

  // Persiste a preferência no localStorage
  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Memoiza o tema para evitar re-renders desnecessários
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  // Memoiza o valor do contexto
  const contextValue = useMemo(
    () => ({
      mode,
      toggleTheme,
    }),
    [mode]
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
