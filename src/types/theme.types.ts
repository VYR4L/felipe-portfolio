/**
 * Theme Type Definitions
 * Supporting 7 design systems: Minimalist, Neubrutalism, Aurora, 
 * Glassmorphism, Claymorphism, Bauhaus, Organic Flow
 */

export type TThemeScheme =
  | 'minimalist'
  | 'neubrutalism'
  | 'aurora'
  | 'glassmorphism'
  | 'claymorphism'
  | 'bauhaus'
  | 'organic-flow';

export type TThemeMode = 'light' | 'dark';

export interface IThemeConfig {
  scheme: TThemeScheme;
  mode: TThemeMode;
}

export interface IThemeTokens {
  // Color palette
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  error: string;
  success: string;
  warning: string;
  info: string;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };

  // Elevation & Effects
  elevation: {
    low: string;
    medium: string;
    high: string;
  };

  // Border properties
  borderRadius: {
    small: number;
    medium: number;
    large: number;
  };
  borderWidth: number;
  borderColor: string;

  // Effects (for glassmorphism, claymorphism)
  backdropFilter?: string;
  boxShadow?: {
    inner?: string;
    outer?: string;
  };
}

export interface IThemeSchemeDefinition {
  name: string;
  description: string;
  tokens: {
    light: IThemeTokens;
    dark: IThemeTokens;
  };
}
