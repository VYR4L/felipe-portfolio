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
  CircularProgress,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import type { ContactFormData } from '../../types';
import { sendContactMessage } from '../../assets/service/sendForm';

/**
 * Seção Contato - Formulário de contato e links sociais
 */
export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setShowError(false);
    
    try {
      await sendContactMessage(formData);
      
      // Mostrar mensagem de sucesso
      setShowSuccess(true);
      
      // Limpar o formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      // Esconder a mensagem após 5 segundos
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    } finally {
      setIsLoading(false);
    }
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
                Mensagem enviada com sucesso! Obrigado pelo contato, responderei em breve.
              </Alert>
            )}

            {showError && (
              <Alert severity="error" sx={{ mb: 3 }}>
                Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente ou entre em contato diretamente pelo e-mail.
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
                  disabled={isLoading}
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
                  disabled={isLoading}
                />
                <TextField
                  fullWidth
                  label="Telefone (opcional)"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  variant="outlined"
                  aria-label="Digite seu telefone"
                  disabled={isLoading}
                />
                <TextField
                  fullWidth
                  label="Assunto"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  aria-label="Digite o assunto"
                  disabled={isLoading}
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
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                  fullWidth
                  sx={{ py: 1.5 }}
                  disabled={isLoading}
                >
                  {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
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
