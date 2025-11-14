import { useContext } from 'react';
import { AppThemeContext } from '../providers/AppThemeProvider';

/**
 * Hook customizado para acessar o contexto de tema
 * @returns {Object} Objeto contendo o mode atual e a função toggleTheme
 */
export const useAppTheme = () => {
  const context = useContext(AppThemeContext);
  
  if (!context) {
    throw new Error('useAppTheme must be used within an AppThemeProvider');
  }
  
  return context;
};
