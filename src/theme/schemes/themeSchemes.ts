import type { IThemeSchemeDefinition } from '../../types/theme.types';

/**
 * Theme Schemes Collection
 * All schemes use #6203fc (purple) as primary color to maintain personality
 */

// 1. MINIMALIST - Clean and simple
export const minimalistScheme: IThemeSchemeDefinition = {
  name: 'Minimalist',
  description: 'Design limpo e minimalista',
  tokens: {
    light: {
      primary: '#6203fc',
      secondary: '#9D4BFF',
      background: '#FFFFFF',
      surface: '#F7FAFC',
      error: '#FC8181',
      success: '#68D391',
      warning: '#F6AD55',
      info: '#63B3ED',
      text: {
        primary: '#1A202C',
        secondary: '#718096',
        disabled: '#CBD5E0',
      },
      elevation: {
        low: '0 1px 3px rgba(98, 3, 252, 0.08)',
        medium: '0 4px 6px rgba(98, 3, 252, 0.12)',
        high: '0 10px 15px rgba(98, 3, 252, 0.15)',
      },
      borderRadius: {
        small: 4,
        medium: 8,
        large: 12,
      },
      borderWidth: 1,
      borderColor: '#E2E8F0',
    },
    dark: {
      primary: '#9D4BFF',
      secondary: '#6203fc',
      background: '#0A0A0F',
      surface: '#1A1A24',
      error: '#FC8181',
      success: '#68D391',
      warning: '#F6AD55',
      info: '#63B3ED',
      text: {
        primary: '#F7FAFC',
        secondary: '#CBD5E0',
        disabled: '#4A5568',
      },
      elevation: {
        low: '0 1px 3px rgba(157, 75, 255, 0.2)',
        medium: '0 4px 6px rgba(157, 75, 255, 0.25)',
        high: '0 10px 15px rgba(157, 75, 255, 0.3)',
      },
      borderRadius: {
        small: 4,
        medium: 8,
        large: 12,
      },
      borderWidth: 1,
      borderColor: '#2D3748',
    },
  },
};

// 2. NEUBRUTALISM - Bold and edgy
export const neubrutalismScheme: IThemeSchemeDefinition = {
  name: 'Neubrutalism',
  description: 'Design ousado com bordas fortes',
  tokens: {
    light: {
      primary: '#6203fc',
      secondary: '#FF6B9D',
      background: '#FAFAFA',
      surface: '#FFFFFF',
      error: '#FF3B3B',
      success: '#06D6A0',
      warning: '#FFB800',
      info: '#4CC9F0',
      text: {
        primary: '#000000',
        secondary: '#666666',
        disabled: '#AAAAAA',
      },
      elevation: {
        low: '4px 4px 0px rgba(98, 3, 252, 1)',
        medium: '6px 6px 0px rgba(98, 3, 252, 1)',
        high: '8px 8px 0px rgba(98, 3, 252, 1)',
      },
      borderRadius: {
        small: 0,
        medium: 0,
        large: 0,
      },
      borderWidth: 3,
      borderColor: '#000000',
    },
    dark: {
      primary: '#9D4BFF',
      secondary: '#FF6B9D',
      background: '#0F0F0F',
      surface: '#1A1A1A',
      error: '#FF3B3B',
      success: '#06D6A0',
      warning: '#FFB800',
      info: '#4CC9F0',
      text: {
        primary: '#FFFFFF',
        secondary: '#CCCCCC',
        disabled: '#666666',
      },
      elevation: {
        low: '4px 4px 0px rgba(157, 75, 255, 1)',
        medium: '6px 6px 0px rgba(157, 75, 255, 1)',
        high: '8px 8px 0px rgba(157, 75, 255, 1)',
      },
      borderRadius: {
        small: 0,
        medium: 0,
        large: 0,
      },
      borderWidth: 3,
      borderColor: '#FFFFFF',
    },
  },
};

// 3. AURORA - Vibrant gradients
export const auroraScheme: IThemeSchemeDefinition = {
  name: 'Aurora',
  description: 'Gradientes vibrantes e coloridos',
  tokens: {
    light: {
      primary: '#6203fc',
      secondary: '#B877FF',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      surface: 'rgba(255, 255, 255, 0.95)',
      error: '#F56565',
      success: '#48BB78',
      warning: '#ED8936',
      info: '#4299E1',
      text: {
        primary: '#2D3748',
        secondary: '#4A5568',
        disabled: '#A0AEC0',
      },
      elevation: {
        low: '0 2px 8px rgba(98, 3, 252, 0.15)',
        medium: '0 4px 12px rgba(98, 3, 252, 0.2)',
        high: '0 8px 20px rgba(98, 3, 252, 0.25)',
      },
      borderRadius: {
        small: 8,
        medium: 16,
        large: 24,
      },
      borderWidth: 1,
      borderColor: 'rgba(98, 3, 252, 0.2)',
    },
    dark: {
      primary: '#9D4BFF',
      secondary: '#B877FF',
      background: 'linear-gradient(135deg, #1e3a8a 0%, #312e81 100%)',
      surface: 'rgba(30, 30, 40, 0.95)',
      error: '#FC8181',
      success: '#68D391',
      warning: '#F6AD55',
      info: '#63B3ED',
      text: {
        primary: '#F7FAFC',
        secondary: '#E2E8F0',
        disabled: '#718096',
      },
      elevation: {
        low: '0 2px 8px rgba(157, 75, 255, 0.25)',
        medium: '0 4px 12px rgba(157, 75, 255, 0.3)',
        high: '0 8px 20px rgba(157, 75, 255, 0.35)',
      },
      borderRadius: {
        small: 8,
        medium: 16,
        large: 24,
      },
      borderWidth: 1,
      borderColor: 'rgba(157, 75, 255, 0.3)',
    },
  },
};

// 4. GLASSMORPHISM - Frosted glass effect
export const glassmorphismScheme: IThemeSchemeDefinition = {
  name: 'Glassmorphism',
  description: 'Efeito de vidro fosco moderno',
  tokens: {
    light: {
      primary: '#6203fc',
      secondary: '#9D4BFF',
      background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
      surface: 'rgba(255, 255, 255, 0.25)',
      error: '#EF4444',
      success: '#10B981',
      warning: '#F59E0B',
      info: '#3B82F6',
      text: {
        primary: '#1F2937',
        secondary: '#4B5563',
        disabled: '#9CA3AF',
      },
      elevation: {
        low: '0 4px 6px rgba(98, 3, 252, 0.1)',
        medium: '0 8px 16px rgba(98, 3, 252, 0.15)',
        high: '0 12px 24px rgba(98, 3, 252, 0.2)',
      },
      borderRadius: {
        small: 12,
        medium: 16,
        large: 24,
      },
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.3)',
      backdropFilter: 'blur(12px) saturate(180%)',
      boxShadow: {
        inner: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.5)',
        outer: '0 8px 32px rgba(98, 3, 252, 0.15)',
      },
    },
    dark: {
      primary: '#9D4BFF',
      secondary: '#B877FF',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      surface: 'rgba(30, 30, 45, 0.5)',
      error: '#F87171',
      success: '#34D399',
      warning: '#FBBF24',
      info: '#60A5FA',
      text: {
        primary: '#F9FAFB',
        secondary: '#E5E7EB',
        disabled: '#6B7280',
      },
      elevation: {
        low: '0 4px 6px rgba(0, 0, 0, 0.3)',
        medium: '0 8px 16px rgba(0, 0, 0, 0.4)',
        high: '0 12px 24px rgba(0, 0, 0, 0.5)',
      },
      borderRadius: {
        small: 12,
        medium: 16,
        large: 24,
      },
      borderWidth: 1,
      borderColor: 'rgba(157, 75, 255, 0.3)',
      backdropFilter: 'blur(12px) saturate(180%)',
      boxShadow: {
        inner: 'inset 0 1px 0 0 rgba(157, 75, 255, 0.2)',
        outer: '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
    },
  },
};

// 5. CLAYMORPHISM - Soft clay-like
export const claymorphismScheme: IThemeSchemeDefinition = {
  name: 'Claymorphism',
  description: 'Design suave com aparência de argila',
  tokens: {
    light: {
      primary: '#6203fc',
      secondary: '#9D4BFF',
      background: '#E8E4E0',
      surface: '#F5F1ED',
      error: '#E57373',
      success: '#81C784',
      warning: '#FFB74D',
      info: '#64B5F6',
      text: {
        primary: '#3E2723',
        secondary: '#6D4C41',
        disabled: '#BCAAA4',
      },
      elevation: {
        low: '8px 8px 16px #d1cdc9, -8px -8px 16px #ffffff',
        medium: '12px 12px 24px #d1cdc9, -12px -12px 24px #ffffff',
        high: '16px 16px 32px #d1cdc9, -16px -16px 32px #ffffff',
      },
      borderRadius: {
        small: 16,
        medium: 24,
        large: 32,
      },
      borderWidth: 0,
      borderColor: 'rgba(0, 0, 0, 0)',
      boxShadow: {
        inner: 'inset 4px 4px 8px #d1cdc9, inset -4px -4px 8px #ffffff',
        outer: '8px 8px 16px #d1cdc9, -8px -8px 16px #ffffff',
      },
    },
    dark: {
      primary: '#9D4BFF',
      secondary: '#B877FF',
      background: '#2C2C2C',
      surface: '#383838',
      error: '#EF5350',
      success: '#66BB6A',
      warning: '#FFA726',
      info: '#42A5F5',
      text: {
        primary: '#ECEFF1',
        secondary: '#CFD8DC',
        disabled: '#78909C',
      },
      elevation: {
        low: '8px 8px 16px #1f1f1f, -8px -8px 16px #393939',
        medium: '12px 12px 24px #1f1f1f, -12px -12px 24px #393939',
        high: '16px 16px 32px #1f1f1f, -16px -16px 32px #393939',
      },
      borderRadius: {
        small: 16,
        medium: 24,
        large: 32,
      },
      borderWidth: 0,
      borderColor: 'rgba(0, 0, 0, 0)',
      boxShadow: {
        inner: 'inset 4px 4px 8px #1f1f1f, inset -4px -4px 8px #393939',
        outer: '8px 8px 16px #1f1f1f, -8px -8px 16px #393939',
      },
    },
  },
};

// 6. BAUHAUS - Geometric and functional
export const bauhausScheme: IThemeSchemeDefinition = {
  name: 'Bauhaus',
  description: 'Design geométrico e funcional',
  tokens: {
    light: {
      primary: '#6203fc',
      secondary: '#FFC43D',
      background: '#FFFFFF',
      surface: '#F5F5F5',
      error: '#DC143C',
      success: '#00A878',
      warning: '#FF6B35',
      info: '#4A90E2',
      text: {
        primary: '#000000',
        secondary: '#4A4A4A',
        disabled: '#B0B0B0',
      },
      elevation: {
        low: '0 0 0 2px rgba(98, 3, 252, 0.2)',
        medium: '0 0 0 4px rgba(98, 3, 252, 0.3)',
        high: '0 0 0 6px rgba(98, 3, 252, 0.4)',
      },
      borderRadius: {
        small: 0,
        medium: 2,
        large: 4,
      },
      borderWidth: 2,
      borderColor: '#000000',
    },
    dark: {
      primary: '#9D4BFF',
      secondary: '#FFC43D',
      background: '#1A1A1A',
      surface: '#2A2A2A',
      error: '#FF6B6B',
      success: '#51CF66',
      warning: '#FF922B',
      info: '#5C7CFA',
      text: {
        primary: '#FFFFFF',
        secondary: '#C1C1C1',
        disabled: '#6C6C6C',
      },
      elevation: {
        low: '0 0 0 2px rgba(157, 75, 255, 0.3)',
        medium: '0 0 0 4px rgba(157, 75, 255, 0.4)',
        high: '0 0 0 6px rgba(157, 75, 255, 0.5)',
      },
      borderRadius: {
        small: 0,
        medium: 2,
        large: 4,
      },
      borderWidth: 2,
      borderColor: '#FFFFFF',
    },
  },
};

// 7. ORGANIC FLOW - Natural and flowing
export const organicFlowScheme: IThemeSchemeDefinition = {
  name: 'Organic Flow',
  description: 'Design orgânico e fluido',
  tokens: {
    light: {
      primary: '#6203fc',
      secondary: '#B877FF',
      background: '#FFF9F5',
      surface: '#FEFAF6',
      error: '#D32F2F',
      success: '#388E3C',
      warning: '#F57C00',
      info: '#1976D2',
      text: {
        primary: '#3E2723',
        secondary: '#5D4037',
        disabled: '#A1887F',
      },
      elevation: {
        low: '0 2px 12px rgba(98, 3, 252, 0.08)',
        medium: '0 4px 20px rgba(98, 3, 252, 0.12)',
        high: '0 8px 32px rgba(98, 3, 252, 0.16)',
      },
      borderRadius: {
        small: 20,
        medium: 28,
        large: 40,
      },
      borderWidth: 0,
      borderColor: 'rgba(0, 0, 0, 0)',
    },
    dark: {
      primary: '#9D4BFF',
      secondary: '#B877FF',
      background: '#1C1410',
      surface: '#2A221D',
      error: '#EF5350',
      success: '#66BB6A',
      warning: '#FFA726',
      info: '#42A5F5',
      text: {
        primary: '#FFF8E1',
        secondary: '#FFECB3',
        disabled: '#8D6E63',
      },
      elevation: {
        low: '0 2px 12px rgba(157, 75, 255, 0.2)',
        medium: '0 4px 20px rgba(157, 75, 255, 0.25)',
        high: '0 8px 32px rgba(157, 75, 255, 0.3)',
      },
      borderRadius: {
        small: 20,
        medium: 28,
        large: 40,
      },
      borderWidth: 0,
      borderColor: 'rgba(0, 0, 0, 0)',
    },
  },
};

// Export all schemes as a map
export const themeSchemes: Record<string, IThemeSchemeDefinition> = {
  minimalist: minimalistScheme,
  neubrutalism: neubrutalismScheme,
  aurora: auroraScheme,
  glassmorphism: glassmorphismScheme,
  claymorphism: claymorphismScheme,
  bauhaus: bauhausScheme,
  'organic-flow': organicFlowScheme,
};
