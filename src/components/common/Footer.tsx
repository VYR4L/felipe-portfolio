import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
  Divider,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteIcon from '@mui/icons-material/Favorite';

/**
 * Rodapé com links sociais e informações de contato
 */
export const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/VYR4L',
      icon: <GitHubIcon />,
      ariaLabel: 'Visite meu GitHub',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/felipe-kravec-zanatta-b365022a4/',
      icon: <LinkedInIcon />,
      ariaLabel: 'Visite meu LinkedIn',
    },
    {
      name: 'Email',
      url: 'mailto:fkz.zanatt@gmail.com',
      icon: <EmailIcon />,
      ariaLabel: 'Envie-me um e-mail',
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3} alignItems="center">
          {/* Social Links */}
          <Stack direction="row" spacing={2}>
            {socialLinks.map((link) => (
              <IconButton
                key={link.name}
                component="a"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: 'primary.main',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {link.icon}
              </IconButton>
            ))}
          </Stack>

          <Divider sx={{ width: '100%', maxWidth: 200 }} />

          {/* Copyright */}
          <Stack spacing={1} alignItems="center">
            <Typography variant="body2" color="text.secondary" align="center">
              © {new Date().getFullYear()} Felipe Kravec Zanatta
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              <Typography variant="body2" color="text.secondary">
                Feito com
              </Typography>
              <FavoriteIcon
                sx={{
                  fontSize: 16,
                  color: 'primary.main',
                }}
              />
              <Typography variant="body2" color="text.secondary">
                e React + TypeScript
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
