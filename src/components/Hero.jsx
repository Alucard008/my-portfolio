import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Stack,
  Container,
  IconButton,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FadeInItem from './FadeInItem';
import ImageBlob from './ImageBlob';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [messageVisible, setMessageVisible] = useState(true);
  const [showCloud, setShowCloud] = useState(false);

  const messages = [
    "Hello! I'm Abdullah 👋",
    'AI Engineer & Full-Stack Developer',
    'Building the future with code',
    'Ready to create amazing things',
    'Enjoy your visit!',
  ];

  const handleMouseEnter = () => {
    setIsHovered(true);
    setMessageIndex(0);
    setMessageVisible(true);
    setShowCloud(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMessageIndex(0);
    setMessageVisible(false);
    setShowCloud(false);
  };

  // Cycle through messages every 3 seconds when hovered
  useEffect(() => {
    if (!isHovered) return;

    const interval = setInterval(() => {
      setMessageVisible(false);

      setTimeout(() => {
        if (messageIndex < messages.length - 1) {
          setMessageIndex((prev) => prev + 1);
          setMessageVisible(true);
        } else {
          // Hide cloud after "Enjoy your visit!" message
          setTimeout(() => {
            setShowCloud(false);
          }, 2000); // Show the final message for 2 seconds before hiding
        }
      }, 300); // Wait for fade out before changing message
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, messageIndex, messages.length]);

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f4f6fb 0%, #e0e7ef 100%)',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          spacing={{ xs: 4, md: 6, lg: 8 }}
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: { xs: '80vh', md: '70vh' } }}
        >
          <FadeInItem delay={0.1}>
            <Box
              sx={{
                flex: 1,
                textAlign: { xs: 'center', lg: 'left' },
                width: '100%',
              }}
            >
              <Typography variant="h5" color="primary" gutterBottom>
                Hello, I'm
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 'bold',
                  background:
                    'linear-gradient(135deg, #2563eb 0%, #2563eb 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: {
                    xs: '2rem',
                    sm: '2.8rem',
                    md: '3.2rem',
                    lg: '3.5rem',
                  },
                }}
              >
                Abdullah Bin Masood
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ mt: 2, mb: 3 }}
              >
                AI Engineer / Full-Stack Developer
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  mb: 4,
                  lineHeight: 1.6,
                  maxWidth: { xs: '100%', md: '600px', lg: '800px' },
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  mx: { xs: 'auto', lg: 0 },
                }}
              >
                I am an AI Engineer with 4 years of practical experience in
                Full-Stack development and applied machine learning. Skilled in
                integrating LLMs and NLP models into real-world applications,
                building efficient data pipelines, and delivering
                cross-functional solutions.
              </Typography>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{
                  mb: 3,
                  justifyContent: { xs: 'center', lg: 'flex-start' },
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  href="/Abdullah_Masood_Resume_Updated_AI.pdf"
                  target="_blank"
                  download
                  size="medium"
                  sx={{ fontSize: '1rem', px: 3, py: 1.2 }}
                >
                  Download Resume
                </Button>
                <Button
                  variant="outlined"
                  href="#contact"
                  size="medium"
                  sx={{ fontSize: '1rem', px: 3, py: 1.2 }}
                >
                  Contact Me
                </Button>
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                sx={{ justifyContent: { xs: 'center', lg: 'flex-start' } }}
              >
                <IconButton
                  href="mailto:abdullahmasood163@gmail.com"
                  target="_blank"
                  color="secondary"
                  sx={{ fontSize: '1.2rem', p: 1.5 }}
                >
                  <EmailIcon />
                </IconButton>
                <IconButton
                  href="tel:+33751479304"
                  target="_blank"
                  color="secondary"
                  sx={{ fontSize: '1.2rem', p: 1.5 }}
                >
                  <PhoneIcon />
                </IconButton>
                <IconButton
                  href="https://linkedin.com/in/abdullah9202"
                  target="_blank"
                  color="secondary"
                  sx={{ fontSize: '1.2rem', p: 1.5 }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  href="https://github.com/Alucard008"
                  target="_blank"
                  color="secondary"
                  sx={{ fontSize: '1.2rem', p: 1.5 }}
                >
                  <GitHubIcon />
                </IconButton>
              </Stack>
            </Box>
          </FadeInItem>

          <ImageBlob
            isHovered={isHovered}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            showCloud={showCloud}
            messageVisible={messageVisible}
            messageIndex={messageIndex}
            messages={messages}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
