export interface Project {
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  githubFrontendUrl?: string;
  githubBackendUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  icon?: string;
  category: 'primary' | 'studying';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// Re-export theme types
export type { TThemeScheme, TThemeMode, IThemeConfig, IThemeTokens, IThemeSchemeDefinition } from './theme.types';
