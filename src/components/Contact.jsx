import React, { useRef, useState, useEffect } from 'react';
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
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
  color: '#fff',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  border: '2px solid rgba(99, 102, 241, 0.3)',
  borderRadius: '16px',
  outline: 'none',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  boxSizing: 'border-box',
  boxShadow: '0 2px 8px rgba(99, 102, 241, 0.1)',
};

const inputHoverStyles = {
  border: '2px solid rgba(168, 85, 247, 0.5)',
  boxShadow: '0 6px 20px rgba(99, 102, 241, 0.3)',
  transform: 'translateY(-2px)',
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
};

const inputFocusStyles = {
  border: '2px solid rgba(168, 85, 247, 0.7)',
  boxShadow: '0 0 0 4px rgba(99, 102, 241, 0.2), 0 8px 25px rgba(99, 102, 241, 0.3)',
  transform: 'translateY(-1px)',
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
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
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null); // null, true, or false

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  // Replace these with your actual EmailJS credentials
  const SERVICE_ID = 'service_bpa8qwe';
  const TEMPLATE_ID = 'template_vgyeplp';
  const PUBLIC_KEY = 's5vX28yswTeaLfFBi';
  const TEMPLATE_ID_2 = 'template_wm9o3vb';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setSuccess(null);
  
    const formData = form.current;
  
    // 1. Send confirmation email to the user (uses form data)
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        // 2. Send internal notification email to yourself
        return emailjs.send(SERVICE_ID, TEMPLATE_ID_2, {
          name: formData['name'].value,
          email: formData['email'].value,
          subject: formData['subject'].value,
          message: formData['message'].value,
          to_email: 'abdullahmasood163@gmail.com', // ✅ YOUR email
        }, PUBLIC_KEY);
      })
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
    <Box id="contact" sx={{ py: { xs: 8, md: 12 }, minHeight: { xs: 'auto', md: '100vh' }, display: 'flex', alignItems: 'center', backgroundColor: '#030014' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', py: { xs: 4, md: 8 }, border:"1px solid rgba(99, 102, 241, 0.3)",borderRadius: 4, boxShadow: '0 4px 24px rgba(99, 102, 241, 0.2)' }}>
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
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: 700, 
                  mb: 2, 
                  fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' },
                  background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                data-aos="fade-up"
              >
                Get in Touch
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)', 
                  lineHeight: 1.6, 
                  textAlign: 'center', 
                  fontSize: { xs: '0.9rem', md: '1rem' } 
                }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
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
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '2px solid rgba(99, 102, 241, 0.3)',
                      boxShadow: '0 2px 12px rgba(99, 102, 241, 0.1)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-8px) scale(1.02)',
                        boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3), 0 8px 16px rgba(0, 0, 0, 0.2)',
                        border: '2px solid rgba(168, 85, 247, 0.5)',
                        background: 'rgba(255, 255, 255, 0.08)',
                        '& .click-text': {
                          opacity: 1,
                          transform: 'translateX(0)',
                        },
                        '& .contact-icon-btn': {
                          background: 'rgba(99, 102, 241, 0.2)',
                          color: '#6366F1',
                          border: '2px solid rgba(168, 85, 247, 0.5)',
                          transform: 'scale(1.15) rotate(5deg)',
                          boxShadow: '0 8px 25px rgba(99, 102, 241, 0.3)',
                        },
                        '& .contact-icon-btn svg': {
                          color: '#A855F7',
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
                            background: 'rgba(255, 255, 255, 0.05)',
                            color: '#6366F1',
                            borderRadius: '16px',
                            p: 2,
                            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)',
                            border: '2px solid rgba(99, 102, 241, 0.3)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          }}
                          className="contact-icon-btn"
                        >
                          {React.cloneElement(info.icon, { style: { color: '#6366F1', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' } })}
                        </IconButton>
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography 
                          variant="h6" 
                          fontWeight={700} 
                          mb={1} 
                          sx={{
                            color: 'rgba(255, 255, 255, 0.9)',
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
                            color: 'rgba(255, 255, 255, 0.7)',
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
                            color: 'rgba(255, 255, 255, 0.7)',
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
              alignItems: 'stretch',
              width: { xs: '100%', lg: '50%' },
              minWidth: { xs: '100%', lg: '500px' },
            }}
          >
            <Box 
              display="flex" 
              alignItems="center" 
              flexDirection="column" 
              mb={3}
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <ContactMailIcon 
                sx={{ 
                  fontSize: { xs: '4rem', md: '5rem' }, 
                  background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  opacity: 0.9,
                  animation: 'float 3s ease-in-out infinite, pulse 2s ease-in-out infinite',
                  '@keyframes float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                  },
                  '@keyframes pulse': {
                    '0%, 100%': { 
                      filter: 'drop-shadow(0 0 0 rgba(99, 102, 241, 0))',
                      transform: 'scale(1)',
                    },
                    '50%': { 
                      filter: 'drop-shadow(0 0 20px rgba(99, 102, 241, 0.5))',
                      transform: 'scale(1.05)',
                    },
                  },
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.1) rotate(5deg)',
                    filter: 'drop-shadow(0 0 25px rgba(168, 85, 247, 0.6))',
                  },
                }} 
              />
              <Typography 
                variant="h4" 
                fontWeight={600}
                sx={{
                  mt: 2,
                  background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
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
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(99, 102, 241, 0.3)',
                boxShadow: '0 2px 12px rgba(99, 102, 241, 0.1)',
              }}
              data-aos="fade-left"
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }} 
                mb={4} 
                textAlign="center"
              >
                Send Me a Message
              </Typography>
              <Box
                component="form"
                ref={form}
                onSubmit={handleSubmit}
                sx={{ width: '100%' }}
              >
                <Stack spacing={3}>
                  <Box sx={inputContainerStyles}>
                    <label style={{ ...labelStyles, color: 'rgba(255, 255, 255, 0.8)' }}>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      style={{...inputStyles}}
                      className="contact-input"
                      onMouseEnter={handleInputHover}
                      onMouseLeave={handleInputLeave}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                  </Box>
                  
                  <Box sx={inputContainerStyles}>
                    <label style={{ ...labelStyles, color: 'rgba(255, 255, 255, 0.8)' }}>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      style={{...inputStyles}}
                      className="contact-input"
                      onMouseEnter={handleInputHover}
                      onMouseLeave={handleInputLeave}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                  </Box>
                  
                  <Box sx={inputContainerStyles}>
                    <label style={{ ...labelStyles, color: 'rgba(255, 255, 255, 0.8)' }}>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="Say hello or ask a question"
                      style={{...inputStyles}}
                      className="contact-input"
                      onMouseEnter={handleInputHover}
                      onMouseLeave={handleInputLeave}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                  </Box>
                  
                  <Box sx={inputContainerStyles}>
                    <label style={{ ...labelStyles, color: 'rgba(255, 255, 255, 0.8)' }}>Your Message</label>
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
                      className="contact-input"
                      onMouseEnter={handleInputHover}
                      onMouseLeave={handleInputLeave}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                  </Box>

                 

                  <Button
                    variant="contained"
                    type="submit"
                    size="large"
                    sx={{
                      borderRadius: 3,
                      fontWeight: 700,
                      py: 2,
                      fontSize: '1.1rem',
                      background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)',
                      color: '#fff',
                      boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #7C3AED 0%, #C084FC 100%)',
                        color: '#fff',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(99, 102, 241, 0.4)',
                      },
                    }}
                    disabled={sending}
                  >
                    {sending ? 'Sending...' : 'Send Message'}
                  </Button>
                  {success === true && (
                    <Typography color="success.main" mt={2} align="center">
                      Message sent successfully!
                    </Typography>
                  )}
                  {success === false && (
                    <Typography color="error.main" mt={2} align="center">
                      Failed to send message. Please try again later.
                    </Typography>
                  )}
                </Stack>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>
      <style jsx>{`
        .contact-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        .contact-input::-webkit-input-placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        .contact-input::-moz-placeholder {
          color: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        .contact-input:-ms-input-placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </Box>
  );
};

export default Contact;
