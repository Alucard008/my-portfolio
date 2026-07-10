import React, { useRef, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Card,
  CardContent,
  IconButton,
  Button,
  Paper,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FadeInItem from './FadeInItem';
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    icon: <EmailIcon />,
    label: 'Email',
    value: 'abdullahmasood163@gmail.com',
    link: 'mailto:abdullahmasood163@gmail.com',
  },
  {
    icon: <PhoneIcon />,
    label: 'Phone',
    value: '+33 751 47 93 04',
    link: 'tel:+33751479304',
  },
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/abdullah9202',
    link: 'https://linkedin.com/in/abdullah9202',
  },
  {
    icon: <GitHubIcon />,
    label: 'GitHub',
    value: 'github.com/Alucard008',
    link: 'https://github.com/Alucard008',
  },
];

const fieldStyles = {
  width: '100%',
  padding: '14px 16px',
  fontSize: '0.95rem',
  fontWeight: 400,
  color: '#1A1A1A',
  backgroundColor: '#FFFFFF',
  border: '1px solid #E5E3DE',
  borderRadius: '8px',
  outline: 'none',
  transition: 'border-color 0.2s ease',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
};

const labelStyles = {
  display: 'block',
  marginBottom: '6px',
  fontSize: '0.85rem',
  fontWeight: 600,
  color: '#6B6A65',
};

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const SERVICE_ID = 'service_bpa8qwe';
  const TEMPLATE_ID = 'template_vgyeplp';
  const PUBLIC_KEY = 's5vX28yswTeaLfFBi';
  const TEMPLATE_ID_2 = 'template_wm9o3vb';

  const handleFocus = (e) => {
    e.target.style.borderColor = '#B5502E';
  };
  const handleBlur = (e) => {
    e.target.style.borderColor = '#E5E3DE';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setSuccess(null);

    const formData = form.current;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() =>
        emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID_2,
          {
            name: formData['name'].value,
            email: formData['email'].value,
            subject: formData['subject'].value,
            message: formData['message'].value,
            to_email: 'abdullahmasood163@gmail.com',
          },
          PUBLIC_KEY
        )
      )
      .then(() => {
        setSending(false);
        setSuccess(true);
        form.current.reset();
      })
      .catch(() => {
        setSending(false);
        setSuccess(false);
      });
  };

  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" sx={{ fontWeight: 600, color: 'text.primary', mb: 1.5 }}>
            Get in Touch
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }} maxWidth="sm" mx="auto">
            Feel free to reach out for collaborations, job opportunities, or just a friendly chat.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            gap: { xs: 4, lg: 6 },
            maxWidth: '1100px',
            mx: 'auto',
          }}
        >
          <Box sx={{ width: { xs: '100%', lg: '40%' } }}>
            <Stack spacing={2}>
              {contactInfo.map((info, index) => (
                <FadeInItem key={info.label} delay={0.08 * index}>
                  <Card
                    elevation={0}
                    sx={{
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                      '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                      },
                    }}
                  >
                    <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2.5, py: 2.5, px: 3 }}>
                      <IconButton
                        href={info.link}
                        target="_blank"
                        sx={{
                          bgcolor: '#F4F3F0',
                          color: 'primary.main',
                          border: '1px solid',
                          borderColor: 'divider',
                          borderRadius: '10px',
                        }}
                      >
                        {info.icon}
                      </IconButton>
                      <Box sx={{ minWidth: 0 }}>
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                          {info.label}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.primary', wordBreak: 'break-word', fontWeight: 500 }}>
                          {info.value}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </FadeInItem>
              ))}
            </Stack>
          </Box>

          <Box sx={{ width: { xs: '100%', lg: '60%' } }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary', mb: 3 }}>
                Send Me a Message
              </Typography>
              <Box component="form" ref={form} onSubmit={handleSubmit}>
                <Stack spacing={2.5}>
                  <Box>
                    <label style={labelStyles}>Full Name</label>
                    <input type="text" name="name" required placeholder="John Doe" style={fieldStyles} onFocus={handleFocus} onBlur={handleBlur} />
                  </Box>
                  <Box>
                    <label style={labelStyles}>Email Address</label>
                    <input type="email" name="email" required placeholder="john@example.com" style={fieldStyles} onFocus={handleFocus} onBlur={handleBlur} />
                  </Box>
                  <Box>
                    <label style={labelStyles}>Subject</label>
                    <input type="text" name="subject" required placeholder="Say hello or ask a question" style={fieldStyles} onFocus={handleFocus} onBlur={handleBlur} />
                  </Box>
                  <Box>
                    <label style={labelStyles}>Your Message</label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      placeholder="Type your message here..."
                      style={{ ...fieldStyles, resize: 'vertical', minHeight: '120px', lineHeight: 1.6 }}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </Box>

                  <Button variant="contained" type="submit" size="large" sx={{ py: 1.3 }} disabled={sending}>
                    {sending ? 'Sending...' : 'Send Message'}
                  </Button>
                  {success === true && (
                    <Typography color="success.main" align="center">
                      Message sent successfully!
                    </Typography>
                  )}
                  {success === false && (
                    <Typography color="error.main" align="center">
                      Failed to send message. Please try again later.
                    </Typography>
                  )}
                </Stack>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
