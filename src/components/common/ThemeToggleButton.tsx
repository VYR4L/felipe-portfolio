import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useAppTheme } from '../../hooks/useAppTheme';

/**
 * Botão para alternar entre tema claro e escuro
 */
export const ThemeToggleButton: React.FC = () => {
  const { mode, toggleTheme } = useAppTheme();

  return (
    <Tooltip title={mode === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}>
      <IconButton
        onClick={toggleTheme}
        color="inherit"
        aria-label={mode === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
        sx={{ ml: 1 }}
      >
        {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </Tooltip>
  );
};
