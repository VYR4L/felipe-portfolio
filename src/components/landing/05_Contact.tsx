import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Paper,
  Alert,
  IconButton,
  alpha,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import type { ContactFormData } from '../../types';

/**
 * Seção Contato - Formulário de contato e links sociais
 */
export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construir o link mailto
    const subject = encodeURIComponent(`Contato de ${formData.name}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
    );
    const mailtoLink = `mailto:fkz.zanatt@gmail.com?subject=${subject}&body=${body}`;
    
    // Abrir o cliente de e-mail
    window.location.href = mailtoLink;
    
    // Mostrar mensagem de sucesso
    setShowSuccess(true);
    
    // Limpar o formulário
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    
    // Esconder a mensagem após 5 segundos
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/VYR4L',
      icon: <GitHubIcon sx={{ fontSize: 32 }} />,
      ariaLabel: 'Visite meu GitHub',
      color: '#333',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/felipe-kravec-zanatta-b365022a4/',
      icon: <LinkedInIcon sx={{ fontSize: 32 }} />,
      ariaLabel: 'Visite meu LinkedIn',
      color: '#0077b5',
    },
    {
      name: 'Email',
      url: 'mailto:fkz.zanatt@gmail.com',
      icon: <EmailIcon sx={{ fontSize: 32 }} />,
      ariaLabel: 'Envie-me um e-mail',
      color: '#ea4335',
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={6}>
          {/* Título da seção */}
          <Box textAlign="center">
            <Typography
              variant="overline"
              color="primary"
              sx={{ fontWeight: 700, letterSpacing: 2 }}
            >
              Entre em Contato
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              sx={{ mt: 1, fontWeight: 700 }}
            >
              Vamos Conversar
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mt: 2, maxWidth: 600, mx: 'auto' }}
            >
              Tem algum projeto em mente ou quer apenas bater um papo?
              Ficarei feliz em conversar com você!
            </Typography>
          </Box>

          {/* Links Sociais */}
          <Stack
            direction="row"
            spacing={3}
            justifyContent="center"
            sx={{ py: 2 }}
          >
            {socialLinks.map((link) => (
              <IconButton
                key={link.name}
                component="a"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                sx={{
                  width: 64,
                  height: 64,
                  backgroundColor: (theme) =>
                    alpha(theme.palette.primary.main, 0.1),
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                    transform: 'translateY(-4px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {link.icon}
              </IconButton>
            ))}
          </Stack>

          {/* Formulário de Contato */}
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 3,
              border: 1,
              borderColor: 'divider',
            }}
          >
            {showSuccess && (
              <Alert severity="success" sx={{ mb: 3 }}>
                Seu cliente de e-mail foi aberto. Obrigado pelo contato!
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  label="Nome"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  aria-label="Digite seu nome"
                />
                <TextField
                  fullWidth
                  label="E-mail"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  aria-label="Digite seu e-mail"
                />
                <TextField
                  fullWidth
                  label="Mensagem"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  multiline
                  rows={6}
                  variant="outlined"
                  aria-label="Digite sua mensagem"
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<SendIcon />}
                  fullWidth
                  sx={{ py: 1.5 }}
                >
                  Enviar Mensagem
                </Button>
              </Stack>
            </form>
          </Paper>

          {/* Informação adicional */}
          <Box textAlign="center">
            <Typography variant="body2" color="text.secondary">
              Ou envie um e-mail diretamente para{' '}
              <Box
                component="a"
                href="mailto:fkz.zanatt@gmail.com"
                sx={{
                  color: 'primary.main',
                  textDecoration: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                fkz.zanatt@gmail.com
              </Box>
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
