import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
  useScrollTrigger,
} from '@mui/material';
import { ThemeToggleButton } from './ThemeToggleButton';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

/**
 * Header principal com navegação e toggle de tema
 */
export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const menuItems = [
    { label: 'Início', section: 'hero' },
    { label: 'Sobre', section: 'about' },
    { label: 'Skills', section: 'skills' },
    { label: 'Projetos', section: 'projects' },
    { label: 'Contato', section: 'contact' },
  ];

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={trigger ? 4 : 0}
      sx={{
        backdropFilter: 'blur(20px)',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? 'rgba(245, 245, 245, 0.9)'
            : 'rgba(30, 30, 30, 0.9)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 70 } }}>
          {/* Logo/Nome */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 0,
              fontWeight: 700,
              background: (theme) =>
                `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              cursor: 'pointer',
              mr: 4,
            }}
            onClick={() => onNavigate('hero')}
          >
            FKZ
          </Typography>

          {/* Menu de navegação - Desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {menuItems.map((item) => (
              <Button
                key={item.section}
                onClick={() => onNavigate(item.section)}
                sx={{
                  color: 'text.primary',
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Theme Toggle */}
          <ThemeToggleButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
