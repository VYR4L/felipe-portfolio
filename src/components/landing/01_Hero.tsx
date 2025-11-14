import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme,
  alpha,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CodeIcon from '@mui/icons-material/Code';

interface HeroProps {
  onNavigate: (section: string) => void;
}

/**
 * Seção Hero - Apresentação inicial
 */
export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const theme = useTheme();

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: (theme) =>
          theme.palette.mode === 'light'
            ? `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(
                theme.palette.primary.light,
                0.1
              )} 100%)`
            : `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(
                theme.palette.background.default,
                0.95
              )} 100%)`,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center" textAlign="center">
          {/* Ícone decorativo */}
          <Box
            sx={{
              width: 80,
              height: 80,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              backgroundColor: alpha(theme.palette.primary.main, 0.1),
              animation: 'pulse 2s ease-in-out infinite',
              '@keyframes pulse': {
                '0%, 100%': {
                  transform: 'scale(1)',
                  opacity: 1,
                },
                '50%': {
                  transform: 'scale(1.05)',
                  opacity: 0.8,
                },
              },
            }}
          >
            <CodeIcon sx={{ fontSize: 40, color: 'primary.main' }} />
          </Box>

          {/* Saudação */}
          <Typography
            variant="h6"
            color="primary"
            sx={{
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}
          >
            Olá! Eu sou o
          </Typography>

          {/* Nome */}
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            Felipe Kravec Zanatta
          </Typography>

          {/* Subtítulo */}
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              maxWidth: 700,
              fontWeight: 500,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
            }}
          >
            Desenvolvedor Fullstack com foco em{' '}
            <Box
              component="span"
              sx={{
                color: 'primary.main',
                fontWeight: 700,
              }}
            >
              Backend
            </Box>
          </Typography>

          {/* Descrição */}
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 600,
              lineHeight: 1.8,
            }}
          >
            Estudante de Ciência da Computação na UNIOESTE, apaixonado por Python, Django, FastAPI
            e desenvolvimento de aplicações robustas. Transformo ideias em código eficiente.
          </Typography>

          {/* CTAs */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ mt: 4 }}
          >
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => onNavigate('projects')}
              sx={{
                px: 4,
                py: 1.5,
              }}
            >
              Ver Projetos
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => onNavigate('contact')}
              sx={{
                px: 4,
                py: 1.5,
              }}
            >
              Entre em Contato
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
