import { createTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import { typography } from './typography';
import { themeSchemes } from './schemes/themeSchemes';
import type { TThemeScheme, IThemeTokens } from '../types/theme.types';

export const createAppTheme = (mode: 'light' | 'dark', scheme: TThemeScheme = 'minimalist'): Theme => {
  const schemeDefinition = themeSchemes[scheme];
  const tokens = schemeDefinition.tokens[mode];

  return createTheme({
    palette: {
      mode,
      primary: {
        main: tokens.primary,
        contrastText: '#ffffff',
      },
      secondary: {
        main: tokens.secondary,
        contrastText: '#ffffff',
      },
      error: {
        main: tokens.error,
      },
      success: {
        main: tokens.success,
      },
      warning: {
        main: tokens.warning,
      },
      info: {
        main: tokens.info,
      },
      background: {
        default: typeof tokens.background === 'string' && !tokens.background.startsWith('linear-gradient')
          ? tokens.background
          : mode === 'light' ? '#FFFFFF' : '#121212',
        paper: tokens.surface,
      },
      text: {
        primary: tokens.text.primary,
        secondary: tokens.text.secondary,
        disabled: tokens.text.disabled,
      },
      divider: tokens.borderColor,
    },
    typography,
    shape: {
      borderRadius: tokens.borderRadius.medium,
    },
    components: getComponentOverrides(scheme, tokens, mode),
  });
};

function getComponentOverrides(scheme: TThemeScheme, tokens: IThemeTokens, mode: 'light' | 'dark') {
  const baseOverrides: any = {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: tokens.borderRadius.small,
          padding: '10px 24px',
          textTransform: 'none',
          borderWidth: scheme === 'neubrutalism' || scheme === 'bauhaus' ? tokens.borderWidth : 0,
          borderStyle: 'solid',
          borderColor: scheme === 'neubrutalism' || scheme === 'bauhaus' ? tokens.borderColor : 'transparent',
          boxShadow: scheme === 'neubrutalism' ? tokens.elevation.medium : 'none',
        },
      },
      defaultProps: {
        disableElevation: scheme !== 'neubrutalism',
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: tokens.borderRadius.medium,
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          borderWidth: tokens.borderWidth,
          borderStyle: tokens.borderWidth > 0 ? 'solid' : 'none',
          borderColor: tokens.borderColor,
          boxShadow: tokens.elevation.medium,
          backdropFilter: tokens.backdropFilter || 'none',
          '&:hover': {
            transform: scheme === 'neubrutalism' ? 'translate(2px, 2px)' : 'translateY(-4px)',
            boxShadow: scheme === 'neubrutalism' ? tokens.elevation.low : tokens.elevation.high,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: tokens.borderRadius.medium,
          backdropFilter: tokens.backdropFilter || 'none',
          borderWidth: tokens.borderWidth,
          borderStyle: tokens.borderWidth > 0 ? 'solid' : 'none',
          borderColor: tokens.borderColor,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: scheme === 'neubrutalism' ? tokens.elevation.medium : 'none',
          borderBottom: tokens.borderWidth > 0 ? `${tokens.borderWidth}px solid ${tokens.borderColor}` : `1px solid ${mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)'}`,
          backdropFilter: scheme === 'glassmorphism' ? tokens.backdropFilter : 'blur(20px)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: tokens.borderRadius.small,
          fontWeight: 600,
          borderWidth: scheme === 'neubrutalism' || scheme === 'bauhaus' ? tokens.borderWidth : 0,
          borderStyle: 'solid',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: tokens.borderRadius.small,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: tokens.borderRadius.small,
            backdropFilter: scheme === 'glassmorphism' ? tokens.backdropFilter : 'none',
          },
        },
      },
    },
  };

  return baseOverrides;
}
