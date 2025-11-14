import React from 'react';
import {
  Box,
  Container,
  Typography,
  Chip,
  Stack,
  Paper,
  alpha,
} from '@mui/material';

/**
 * Seção Skills - Principais tecnologias e o que está estudando
 */
export const Skills: React.FC = () => {
  const primarySkills = [
    'Python',
    'PyTorch',
    'Pandas',
    'NumPy',
    'Django',
    'FastAPI',
    'Flask',
    'Java',
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Node.js',
    'Bootstrap',
    'MySQL',
    'SQL',
    'Git',
    'GitHub',
    'GDAL',
  ];

  const studyingSkills = [
    'Go',
    'TypeScript',
    '.NET',
    'C#',
  ];

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
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
              Habilidades
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              sx={{ mt: 1, fontWeight: 700 }}
            >
              Minhas Tecnologias
            </Typography>
          </Box>

          {/* Principais Tecnologias */}
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 3,
              border: 1,
              borderColor: 'divider',
              backgroundColor: (theme) =>
                alpha(theme.palette.background.default, 0.5),
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: 3,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: 'primary.main',
                }}
              />
              Principais Tecnologias
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1.5,
              }}
            >
              {primarySkills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  sx={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    px: 1,
                    py: 2.5,
                    backgroundColor: (theme) =>
                      alpha(theme.palette.primary.main, 0.1),
                    color: 'primary.main',
                    border: 1,
                    borderColor: (theme) =>
                      alpha(theme.palette.primary.main, 0.2),
                    '&:hover': {
                      backgroundColor: (theme) =>
                        alpha(theme.palette.primary.main, 0.2),
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </Box>
          </Paper>

          {/* Estudando Agora */}
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 3,
              border: 1,
              borderColor: 'divider',
              backgroundColor: (theme) =>
                alpha(theme.palette.background.default, 0.5),
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: 3,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: 'secondary.main',
                }}
              />
              Estudando Agora
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1.5,
              }}
            >
              {studyingSkills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  sx={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    px: 1,
                    py: 2.5,
                    backgroundColor: (theme) =>
                      alpha(theme.palette.secondary.main, 0.1),
                    color: 'secondary.main',
                    border: 1,
                    borderColor: (theme) =>
                      alpha(theme.palette.secondary.main, 0.2),
                    '&:hover': {
                      backgroundColor: (theme) =>
                        alpha(theme.palette.secondary.main, 0.2),
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </Box>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
};
