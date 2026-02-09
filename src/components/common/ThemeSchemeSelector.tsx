import React, { useState } from 'react';
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemText,
  Box,
  Typography,
  Divider,
} from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import CheckIcon from '@mui/icons-material/Check';
import { useAppTheme } from '../../hooks/useAppTheme';
import type { TThemeScheme } from '../../types/theme.types';

interface SchemeOption {
  value: TThemeScheme;
  label: string;
  description: string;
}

const schemeOptions: SchemeOption[] = [
  {
    value: 'minimalist',
    label: 'Minimalista',
    description: 'Limpo e elegante',
  },
  {
    value: 'neubrutalism',
    label: 'Neubrutalism',
    description: 'Ousado e moderno',
  },
  {
    value: 'aurora',
    label: 'Aurora',
    description: 'Gradientes vibrantes',
  },
  {
    value: 'glassmorphism',
    label: 'Glassmorphism',
    description: 'Vidro fosco futurista',
  },
  {
    value: 'claymorphism',
    label: 'Claymorphism',
    description: 'Suave e tátil',
  },
  {
    value: 'bauhaus',
    label: 'Bauhaus',
    description: 'Geométrico e funcional',
  },
  {
    value: 'organic-flow',
    label: 'Organic Flow',
    description: 'Natural e fluido',
  },
];

export const ThemeSchemeSelector: React.FC = () => {
  const { scheme, setScheme } = useAppTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSchemeSelect = (selectedScheme: TThemeScheme) => {
    setScheme(selectedScheme);
    handleClose();
  };

  const currentScheme = schemeOptions.find((option) => option.value === scheme);

  return (
    <>
      <IconButton
        onClick={handleClick}
        sx={{
          ml: 1,
          color: 'inherit',
        }}
        aria-label="Selecionar esquema de tema"
        aria-controls={open ? 'theme-scheme-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <PaletteIcon />
      </IconButton>
      <Menu
        id="theme-scheme-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            minWidth: 280,
            maxWidth: 320,
            mt: 1,
          },
        }}
      >
        <Box sx={{ px: 2, py: 1.5 }}>
          <Typography variant="subtitle2" fontWeight={700}>
            Escolha o Tema
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {currentScheme?.label} - {currentScheme?.description}
          </Typography>
        </Box>
        <Divider />
        {schemeOptions.map((option) => (
          <MenuItem
            key={option.value}
            onClick={() => handleSchemeSelect(option.value)}
            selected={scheme === option.value}
            sx={{
              py: 1.5,
              px: 2,
            }}
          >
            <ListItemText
              primary={option.label}
              secondary={option.description}
              primaryTypographyProps={{
                variant: 'body2',
                fontWeight: scheme === option.value ? 700 : 500,
              }}
              secondaryTypographyProps={{
                variant: 'caption',
              }}
            />
            {scheme === option.value && (
              <CheckIcon
                sx={{
                  ml: 1,
                  fontSize: '1.2rem',
                  color: 'primary.main',
                }}
              />
            )}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
