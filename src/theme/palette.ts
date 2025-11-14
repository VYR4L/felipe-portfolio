import type { PaletteOptions } from '@mui/material/styles';

export const getPalette = (mode: 'light' | 'dark'): PaletteOptions => {
  return mode === 'light'
    ? {
        // Light Mode
        mode: 'light',
        primary: {
          main: '#6203fc',
          light: '#8235fd',
          dark: '#4a02bd',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#9D4BFF',
          light: '#b877ff',
          dark: '#7e3acc',
          contrastText: '#ffffff',
        },
        background: {
          default: '#FFFFFF',
          paper: '#F5F5F5',
        },
        text: {
          primary: '#212121',
          secondary: '#616161',
        },
        divider: 'rgba(0, 0, 0, 0.12)',
      }
    : {
        // Dark Mode
        mode: 'dark',
        primary: {
          main: '#9D4BFF',
          light: '#b877ff',
          dark: '#7e3acc',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#6203fc',
          light: '#8235fd',
          dark: '#4a02bd',
          contrastText: '#ffffff',
        },
        background: {
          default: '#121212',
          paper: '#1E1E1E',
        },
        text: {
          primary: '#E0E0E0',
          secondary: '#B0B0B0',
        },
        divider: 'rgba(255, 255, 255, 0.12)',
      };
};
