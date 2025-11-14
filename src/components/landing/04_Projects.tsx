import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
  alpha,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import type { Project } from '../../types';

/**
 * Seção Projetos - Projetos em destaque
 */
export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      name: 'Facial Expression Recognizer',
      description:
        'CNN para reconhecimento de expressões faciais com interface desktop desenvolvida em PyQT6',
      technologies: ['Python', 'PyTorch', 'SkLearn', 'PyQT6'],
      githubUrl: 'https://github.com/VYR4L/Facial-Expression-Recognizer',
    },
    {
      name: 'Sensoriamento Remoto',
      description:
        'Sistema de fusão de imagens espaciais através da banda Pancromática utilizando GDAL',
      technologies: ['Python', 'GDAL', 'NumPy', 'CSS'],
      githubUrl: 'https://github.com/VYR4L/Sensoriamento-Remoto',
    },
    {
      name: 'Spotify Clone',
      description:
        'Clone do reprodutor do Spotify com funcionalidades de reprodução e gerenciamento de playlists',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      githubUrl: 'https://github.com/VYR4L/Spotify',
    },
    {
      name: 'Expense Tracker',
      description:
        'Painel moderno e completo para gerenciamento de gastos pessoais, com deashboards interativos e categorização detalhada',
      technologies: ['React', 'TypeScript', 'Material-UI'],
      githubUrl: 'https://github.com/VYR4L/frontend-expense-tracker',
    },
  ];

  return (
    <Box
      id="projects"
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
              Portfólio
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              sx={{ mt: 1, fontWeight: 700 }}
            >
              Projetos em Destaque
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mt: 2, maxWidth: 600, mx: 'auto' }}
            >
              Alguns dos projetos que desenvolvi, demonstrando minhas habilidades em
              backend, frontend e inteligência artificial
            </Typography>
          </Box>

          {/* Grid de projetos */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
              },
              gap: 3,
            }}
          >
            {projects.map((project, index) => (
              <Card
                key={index}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: (theme) =>
                      `0 12px 24px ${alpha(theme.palette.primary.main, 0.2)}`,
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{ fontWeight: 600, mb: 2 }}
                  >
                    {project.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 3, lineHeight: 1.7 }}
                  >
                    {project.description}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1,
                    }}
                  >
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: (theme) =>
                            alpha(theme.palette.primary.main, 0.1),
                          color: 'primary.main',
                          fontWeight: 600,
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    component="a"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<GitHubIcon />}
                    variant="outlined"
                    fullWidth
                    aria-label={`Ver ${project.name} no GitHub`}
                  >
                    Ver no GitHub
                  </Button>
                  {project.liveUrl && (
                    <Button
                      component="a"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<LaunchIcon />}
                      variant="contained"
                      fullWidth
                      aria-label={`Ver ${project.name} ao vivo`}
                    >
                      Ver Projeto
                    </Button>
                  )}
                </CardActions>
              </Card>
            ))}
          </Box>

          {/* CTA para ver mais projetos */}
          <Box textAlign="center" sx={{ pt: 4 }}>
            <Button
              component="a"
              href="https://github.com/VYR4L"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              size="large"
              startIcon={<GitHubIcon />}
              sx={{ px: 4 }}
            >
              Ver Todos os Projetos no GitHub
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
