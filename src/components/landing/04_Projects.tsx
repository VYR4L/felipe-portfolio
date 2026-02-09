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
      name: 'Todo List',
      description:
      'Um aplicativo de lista de tarefas moderno e escalonável desenvolvido com Next.js 15, TypeScript, Material UI v6, seguindo a arquitetura MVVM e os princípios do Atomic Design.',
      technologies: ['Next.js', 'TypeScript', 'Material UI', 'MVVM', 'Atomic Design'],
      githubUrl: 'https://github.com/VYR4L/todo-list-nextjs',
      liveUrl: 'https://todo-list-nextjs-liart.vercel.app/',
    },
    {
      name: 'PID Tools - Processamento de Imagens Digitais',
      description:
      'Projeto de processamento digital de imagens composto por uma API REST em FastAPI e uma interface web moderna em React. Oferece algoritmos clássicos como detecção de bordas, segmentação, filtragem e análise de contornos, acessíveis via uma UI minimalista e intuitiva.',
      technologies: ['Python', 'FastAPI', 'React', 'Material-UI', 'OpenCV'],
      githubFrontendUrl: 'https://github.com/VYR4L/filter-applyer-frontend',
      githubBackendUrl: 'https://github.com/VYR4L/filter-applyer-backend',
      liveUrl: 'https://pid-tools.vercel.app/',
    },
    {
      name: 'Expense Tracker',
      description:
        'Painel moderno e completo para gerenciamento de gastos pessoais, com dashboards interativos e categorização detalhada',
      technologies: ['React', 'TypeScript', 'Material-UI', 'FastAPI', 'MySQL'],
      githubFrontendUrl: 'https://github.com/VYR4L/frontend-expense-tracker',
      githubBackendUrl: 'https://github.com/VYR4L/backend-expense-tracker',
      liveUrl: 'https://vyral-expense-tracker.netlify.app',
    },
    {
      name: 'Little Ideas',
      description:
      'Treinamento de modelos de linguagem customizados com LoRA, usando Unsloth, PyTorch e HuggingFace Transformers. Foco em fine-tuning o projeto brinca com o termo "Poucas ideia" — alguém com pavio curto, direto e sem paciência.',
      technologies: ['Python', 'PyTorch', 'HuggingFace', 'LoRA'],
      githubUrl: 'https://github.com/VYR4L/train-little-ideas',
    },
    {
      name: 'Dead By Daylight Hardcore Killer',
      description:
      'Um sistema abrangente de gerenciamento de desafios Dead by Daylight construído com React, TypeScript e Material UI. Acompanhe suas hardcore killer runs de Ash IV a Iridescent I com estatísticas detalhadas, gerenciamento de killers e rastreamento financeiro.',
      technologies: ['React', 'TypeScript', 'Material-UI'],
      githubUrl: 'https://github.com/VYR4L/DBD-hardcore-killer',
      liveUrl: 'https://dbd-hardcore-killer.vercel.app/',
    },
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
                <CardActions sx={{ p: 2, pt: 0, gap: 1 }}>
                  {/* Botão único do GitHub (quando não há separação frontend/backend) */}
                  {project.githubUrl && !project.githubFrontendUrl && !project.githubBackendUrl && (
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
                  )}

                  {/* Botão dividido diagonalmente (quando há frontend E backend) */}
                  {project.githubFrontendUrl && project.githubBackendUrl && (
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        height: 42,
                        overflow: 'hidden',
                        borderRadius: (theme) => `${theme.shape.borderRadius}px`,
                        borderWidth: (theme) => {
                          const radius = typeof theme.shape.borderRadius === 'number' ? theme.shape.borderRadius : 8;
                          // Neubrutalism tem borderRadius 0
                          if (radius === 0) return '3px';
                          // Bauhaus tem borderRadius 2 (ou próximo de 0)
                          if (radius <= 4) return '2px';
                          return '1px';
                        },
                        borderStyle: 'solid',
                        borderColor: (theme) => {
                          const radius = typeof theme.shape.borderRadius === 'number' ? theme.shape.borderRadius : 8;
                          if (radius <= 4) return theme.palette.divider;
                          return theme.palette.primary.main;
                        },
                        boxShadow: (theme) => {
                          const radius = typeof theme.shape.borderRadius === 'number' ? theme.shape.borderRadius : 8;
                          if (radius === 0) return '3px 3px 0px rgba(0, 0, 0, 0.3)';
                          return 'none';
                        },
                        background: (theme) => `
                          linear-gradient(
                            to bottom right,
                            transparent calc(50% - 0.5px),
                            ${theme.palette.divider} calc(50% - 0.5px),
                            ${theme.palette.divider} calc(50% + 0.5px),
                            transparent calc(50% + 0.5px)
                          )
                        `,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {/* Frontend Button (Parte superior esquerda) */}
                      <Box
                        component="a"
                        href={project.githubFrontendUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver frontend de ${project.name} no GitHub`}
                        sx={{
                          position: 'absolute',
                          top: 2,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                          backgroundColor: 'transparent',
                          display: 'flex',
                          alignItems: 'flex-start',
                          justifyContent: 'flex-start',
                          paddingLeft: 1,
                          textDecoration: 'none',
                          color: 'text.primary',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.08),
                          },
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                            fontSize: '0.875rem',
                            fontWeight: 600,
                          }}
                        >
                          <GitHubIcon sx={{ fontSize: '1rem' }} />
                          <span>Frontend</span>
                        </Box>
                      </Box>

                      {/* Backend Button (Parte inferior direita) */}
                      <Box
                        component="a"
                        href={project.githubBackendUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver backend de ${project.name} no GitHub`}
                        sx={{
                          position: 'absolute',
                          top: 5,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                          backgroundColor: 'transparent',
                          display: 'flex',
                          alignItems: 'flex-end',
                          justifyContent: 'flex-end',
                          padding: 1,
                          textDecoration: 'none',
                          color: 'text.primary',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.08),
                          },
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                            fontSize: '0.875rem',
                            fontWeight: 600,
                          }}
                        >
                          <GitHubIcon sx={{ fontSize: '1rem' }} />
                          <span>Backend</span>
                        </Box>
                      </Box>
                    </Box>
                  )}

                  {/* Botões individuais (quando há apenas um) */}
                  {project.githubFrontendUrl && !project.githubBackendUrl && (
                    <Button
                      component="a"
                      href={project.githubFrontendUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<GitHubIcon />}
                      variant="outlined"
                      fullWidth
                      aria-label={`Ver frontend de ${project.name} no GitHub`}
                    >
                      Ver Frontend
                    </Button>
                  )}
                  {project.githubBackendUrl && !project.githubFrontendUrl && (
                    <Button
                      component="a"
                      href={project.githubBackendUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<GitHubIcon />}
                      variant="outlined"
                      fullWidth
                      aria-label={`Ver backend de ${project.name} no GitHub`}
                    >
                      Ver Backend
                    </Button>
                  )}

                  {/* Botão Live Demo */}
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
