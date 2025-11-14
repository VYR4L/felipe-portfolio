import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  alpha,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import FavoriteIcon from '@mui/icons-material/Favorite';

/**
 * Seção Sobre Mim - Biografia e informações pessoais
 */
export const AboutMe: React.FC = () => {
  const infoCards = [
    {
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      title: 'Formação',
      description: 'Estudante de Ciência da Computação na UNIOESTE',
    },
    {
      icon: <WorkIcon sx={{ fontSize: 40 }} />,
      title: 'Experiência',
      description: 'Desenvolvedor Fullstack com foco em Backend',
    },
    {
      icon: <FavoriteIcon sx={{ fontSize: 40 }} />,
      title: 'Paixão',
      description: 'Python, IA e Desenvolvimento de Soluções Robustas',
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6}>
          {/* Título da seção */}
          <Box textAlign="center">
            <Typography
              variant="overline"
              color="primary"
              sx={{ fontWeight: 700, letterSpacing: 2 }}
            >
              Sobre Mim
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              sx={{ mt: 1, fontWeight: 700 }}
            >
              Quem sou eu
            </Typography>
          </Box>

          {/* Biografia */}
          <Box sx={{ mx: 'auto' }}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                lineHeight: 1.8,
                textAlign: 'center',
                fontSize: '1.1rem',
              }}
            >
              Tenho 21 anos e sou estudante de Ciência da Computação na{' '}
              <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>
                Universidade Estadual do Oeste do Paraná (UNIOESTE)
              </Box>
              . Apesar de ser um desenvolvedor focado em backend, atuo como fullstack e estou sempre
              em busca de novos desafios e aprendizados.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                lineHeight: 1.8,
                textAlign: 'center',
                fontSize: '1.1rem',
                mt: 2,
              }}
            >
              Minha linguagem favorita é{' '}
              <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>
                Python
              </Box>
              , onde trabalho com frameworks como Django, FastAPI e Flask. Também desenvolvo
              aplicações desktop completas, incluindo software de fusão espacial com GDAL e NumPy,
              além de redes neurais usando PyTorch.
            </Typography>
          </Box>

          {/* Cards informativos */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(3, 1fr)',
              },
              gap: 3,
            }}
          >
            {infoCards.map((card, index) => (
              <Card
                key={index}
                sx={{
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: (theme) =>
                      `0 12px 24px ${alpha(theme.palette.primary.main, 0.2)}`,
                  },
                }}
              >
                <CardContent
                  sx={{
                    textAlign: 'center',
                    py: 4,
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      mx: 'auto',
                      mb: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      backgroundColor: (theme) =>
                        alpha(theme.palette.primary.main, 0.1),
                      color: 'primary.main',
                    }}
                  >
                    {card.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, mb: 1 }}
                  >
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
