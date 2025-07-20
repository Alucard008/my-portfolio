import React from 'react';
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
  Grid,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FadeInItem from './FadeInItem';

const contactInfo = [
  {
    icon: <EmailIcon color="primary" />,
    label: 'Email',
    value: 'abdullahmasood163@gmail.com',
    link: 'mailto:abdullahmasood163@gmail.com',
  },
  {
    icon: <PhoneIcon color="primary" />,
    label: 'Phone',
    value: '+33-751-479-304',
    link: 'tel:+33751479304',
  },
  {
    icon: <LinkedInIcon color="primary" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/abdullah9202',
    link: 'https://linkedin.com/in/abdullah9202',
  },
  {
    icon: <GitHubIcon color="primary" />,
    label: 'GitHub',
    value: 'github.com/Alucard008',
    link: 'https://github.com/Alucard008',
  },
];

const inputStyles = {
  width: '100%',
  padding: '18px 22px',
  fontSize: '1rem',
  fontWeight: 500,
  color: '#1e293b',
  backgroundColor: '#ffffff',
  border: '2px solid #e2e8f0',
  borderRadius: '16px',
  outline: 'none',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  boxSizing: 'border-box',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
};

const inputHoverStyles = {
  border: '2px solid #1DE782',
  boxShadow: '0 6px 20px rgba(37, 99, 235, 0.15)',
  transform: 'translateY(-2px)',
  backgroundColor: '#ffffff',
};

const inputFocusStyles = {
  border: '2px solid #1DE782',
  boxShadow: '0 0 0 4px rgba(37, 99, 235, 0.1), 0 8px 25px rgba(37, 99, 235, 0.15)',
  transform: 'translateY(-1px)',
  backgroundColor: '#ffffff',
};

const labelStyles = {
  display: 'block',
  marginBottom: '10px',
  fontSize: '0.95rem',
  fontWeight: 600,
  color: '#64748b',
  transition: 'all 0.3s ease-in-out',
  letterSpacing: '0.5px',
  textTransform: 'uppercase',
  '&:hover': {
    color: '#2563eb',
  },
};

const inputContainerStyles = {
  position: 'relative',
  marginBottom: '20px',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-1px)',
  },
};


const Contact = () => {
  const handleInputHover = (e) => {
    Object.assign(e.target.style, inputHoverStyles);
  };

  const handleInputLeave = (e) => {
    Object.assign(e.target.style, inputStyles);
  };

  const handleInputFocus = (e) => {
    Object.assign(e.target.style, inputFocusStyles);
  };

  const handleInputBlur = (e) => {
    Object.assign(e.target.style, inputStyles);
  };

  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 12 }, minHeight: { xs: 'auto', md: '100vh' }, display: 'flex', alignItems: 'center', backgroundColor: '#fff' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, background: '#fff', py: { xs: 4, md: 8 }, border:"1px solid #1DE782",borderRadius: 4, boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}>
                  <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' },
              alignItems: { xs: 'center', lg: 'flex-start' },
              justifyContent: 'space-between',
              gap: { xs: 4, lg: 8 },
              maxWidth: '1400px',
              mx: 'auto',
            }}
          >
          {/* Left - Info Cards */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', lg: 'flex-start' },
              width: { xs: '100%', lg: '45%' },
              minWidth: { xs: '100%', lg: '400px' },
            }}
          >
            <Box textAlign="center" mb={6} sx={{ width: '100%' }}>
              <Typography variant="h3" sx={{ color: '#18181B', fontWeight: 700, mb: 2, fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' } }}>
                Get in Touch
              </Typography>
              <Typography variant="body1" sx={{ color: '#18181B', lineHeight: 1.6, textAlign: 'center', fontSize: { xs: '0.9rem', md: '1rem' } }}>
                Feel free to reach out for collaborations, job opportunities, or just a friendly chat.
              </Typography>
            </Box>

            <Stack spacing={3} sx={{ width: '100%' }}>
              {contactInfo.map((info, index) => (
                <FadeInItem key={info.label} delay={0.1 * index}>
                  <Card
                    elevation={0}
                    sx={{
                      width: '100%',
                      borderRadius: '20px',
                      background: '#fff',
                      border: '2px solid #18181B',
                      boxShadow: '0 2px 12px rgba(29,231,130,0.04)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-8px) scale(1.02)',
                        boxShadow: '0 20px 40px rgba(29,231,130,0.10), 0 8px 16px rgba(0, 0, 0, 0.08)',
                        border: '2px solid #18181B',
                        '& .click-text': {
                          opacity: 1,
                          transform: 'translateX(0)',
                        },
                        '& .contact-icon-btn': {
                          background: '#18181B',
                          color: '#1DE782',
                          border: '2px solid #1DE782',
                          transform: 'scale(1.15) rotate(5deg)',
                          boxShadow: '0 8px 25px rgba(29,231,130,0.15)',
                        },
                        '& .contact-icon-btn svg': {
                          color: '#1DE782',
                        },
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                        py: 4,
                        px: 5,
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Box
                          sx={{
                            position: 'absolute',
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: 'rgba(29,231,130,0.08)',
                            animation: 'pulse 2s infinite',
                            '@keyframes pulse': {
                              '0%, 100%': {
                                transform: 'scale(1)',
                                opacity: 0.5,
                              },
                              '50%': {
                                transform: 'scale(1.1)',
                                opacity: 0.8,
                              },
                            },
                          }}
                        />
                        <IconButton
                          href={info.link}
                          target="_blank"
                          sx={{
                            fontSize: '2.2rem',
                            background: '#fff',
                            color: '#1DE782',
                            borderRadius: '16px',
                            p: 2,
                            boxShadow: '0 4px 12px rgba(29,231,130,0.08)',
                            border: '2px solid black',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          }}
                          className="contact-icon-btn"
                        >
                          {React.cloneElement(info.icon, { style: { color: '#1DE782', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' } })}
                        </IconButton>
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography 
                          variant="h6" 
                          fontWeight={700} 
                          mb={1} 
                          sx={{
                            color: 'black',
                            fontSize: '1.1rem',
                            letterSpacing: '0.5px',
                            // textTransform: 'uppercase',
                          }}
                        >
                          {info.label}
                        </Typography>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            color: '#18181B',
                            wordBreak: 'break-word',
                            fontSize: '1rem',
                            lineHeight: 1.5,
                            fontWeight: 500,
                            opacity: 0.9,
                          }}
                        >
                          {info.value}
                        </Typography>
                      </Box>
                      <Box
                        className="click-text"
                        sx={{
                          opacity: 0,
                          transform: 'translateX(10px)',
                          transition: 'all 0.3s ease-in-out',
                        }}
                      >
                        <Typography
                          variant="caption"
                          sx={{
                            color: 'black',
                            fontWeight: 600,
                            fontSize: '0.8rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                          }}
                        >
                          Click
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </FadeInItem>
              ))}
            </Stack>
          </Box>

          {/* Right - Form */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: { xs: '100%', lg: '50%' },
              minWidth: { xs: '100%', lg: '500px' },
            }}
          >
            <Box display="flex" alignItems="center" flexDirection={{ xs: 'column', lg: 'column' }} mb={4}>
              <ContactMailIcon 
                sx={{ 
                  fontSize: '6.2rem', 
                  color: 'black',
                  opacity: 0.9,
                  animation: 'float 3s ease-in-out infinite, pulse 2s ease-in-out infinite',
                  '@keyframes float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                  },
                  '@keyframes pulse': {
                    '0%, 100%': { 
                      filter: 'drop-shadow(0 0 0 rgba(29,231,130,0))',
                      transform: 'scale(1)',
                    },
                    '50%': { 
                      filter: 'drop-shadow(0 0 20px rgba(29,231,130,0.3))',
                      transform: 'scale(1.05)',
                    },
                  },
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.1) rotate(5deg)',
                    filter: 'drop-shadow(0 0 25px rgba(29,231,130,0.4))',
                  },
                }} 
              />
              <Typography 
                variant="h4" 
                fontWeight={600}
                sx={{
                  color: '#18181B',
                  mt: 2,
                  animation: 'slideInUp 0.8s ease-out',
                  '@keyframes slideInUp': {
                    '0%': {
                      opacity: 0,
                      transform: 'translateY(20px)',
                    },
                    '100%': {
                      opacity: 1,
                      transform: 'translateY(0px)',
                    },
                  },
                }}
              >
                Let's Connect!
              </Typography>
            </Box>

            <Paper
              elevation={4}
              sx={{
                p: { xs: 4, md: 5 },
                borderRadius: 4,
                width: '100%',
                maxWidth: '600px',
                background: '#fff',
                border: '2px solid #18181B',
                boxShadow: '0 2px 12px rgba(29,231,130,0.04)',
              }}
            >
              <Typography variant="h5" sx={{ color: 'black', fontWeight: 700 }} mb={4} textAlign="center">
                Send Me a Message
              </Typography>
              <Box
                component="form"
                action="mailto:abdullahmasood163@gmail.com"
                method="POST"
                encType="text/plain"
                sx={{ width: '100%' }}
              >
                <Stack spacing={3}>
                  <Grid >
                    <Grid item xs={12} sm={6}>
                      <Box sx={inputContainerStyles}>
                        <label style={{ ...labelStyles, color: '#18181B' }}>Full Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="John Doe"
                          style={inputStyles}
                          onMouseEnter={handleInputHover}
                          onMouseLeave={handleInputLeave}
                          onFocus={handleInputFocus}
                          onBlur={handleInputBlur}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={inputContainerStyles}>
                        <label style={{ ...labelStyles, color: '#18181B' }}>Email Address</label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="john@example.com"
                          style={inputStyles}
                          onMouseEnter={handleInputHover}
                          onMouseLeave={handleInputLeave}
                          onFocus={handleInputFocus}
                          onBlur={handleInputBlur}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Box sx={inputContainerStyles}>
                    <label style={{ ...labelStyles, color: '#18181B' }}>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="Say hello or ask a question"
                      style={inputStyles}
                      onMouseEnter={handleInputHover}
                      onMouseLeave={handleInputLeave}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                  </Box>

                
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Box sx={inputContainerStyles}>
                    <label style={{ ...labelStyles, color: '#18181B' }}>Your Message</label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      placeholder="Type your message here..."
                      style={{
                        ...inputStyles,
                        resize: 'vertical',
                        minHeight: '120px',
                        lineHeight: 1.6,
                        fontFamily: 'inherit',
                      }}
                      onMouseEnter={handleInputHover}
                      onMouseLeave={handleInputLeave}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                  </Box>
                    </Grid>
                  </Grid>

                 

                  <Button
                    variant="contained"
                    type="submit"
                    size="large"
                    sx={{
                      borderRadius: 3,
                      fontWeight: 700,
                      py: 2,
                      fontSize: '1.1rem',
                      background: '#1DE782',
                      color: '#18181B',
                      boxShadow: '0 4px 12px rgba(29,231,130,0.15)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        background: '#18181B',
                        color: '#1DE782',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(29,231,130,0.25)',
                        border: '2px solid #1DE782',
                      },
                    }}
                  >
                    Send Message
                  </Button>
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
