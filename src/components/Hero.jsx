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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FadeInItem from './FadeInItem';


const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [messageVisible, setMessageVisible] = useState(true);
  const [showCloud, setShowCloud] = useState(false);

  const messages = [
    "Hello! I'm Abdullah 👋",
    "AI Engineer & Full-Stack Developer",
    "Building the future with code",
    "Ready to create amazing things",
    "Enjoy your visit!"
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
          setMessageIndex(prev => prev + 1);
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
      <Container style={{maxWidth: '90%'}}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={8}
          alignItems="center"
          justifyContent="center"
        >
          <FadeInItem delay={0.1}>
            <Box flex={1}>
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
                sx={{ mb: 4, lineHeight: 1.6, maxWidth: '800px', fontSize: '1rem' }}
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
                sx={{ mb: 3 }}
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
              <Stack direction="row" spacing={2}>
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

          <FadeInItem delay={0.3}>
            <Box flex={1} display="flex" justifyContent="center">
              <Box 
                sx={{ 
                  position: 'relative', 
                  width: 500, 
                  height: 500,
                  cursor: 'pointer',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Original Picture with Blob Mask */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: isHovered ? 0 : 1,
                    transform: isHovered ? 'rotate(-360deg) scale(0.8)' : 'rotate(0deg) scale(1)',
                    transition: 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    zIndex: 2,
                  }}
                >
                  <svg
                    viewBox="0 0 479 467"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: '100%', height: '100%' }}
                  >
                    <mask id="blobMask" mask-type="alpha">
                      <path
                        d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#blobMask)">
                      <path
                        d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
                        fill="#2563eb"
                      />
                      <image
                        x="0"
                        y="0"
                        width="500"
                        height="500"
                        href="/picture.jpg"
                        preserveAspectRatio="xMidYMid slice"
                      />
                    </g>
                  </svg>
                </Box>

                {/* Ghibli Picture with Blob Mask */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? 'rotate(360deg) scale(1.1)' : 'rotate(0deg) scale(0.9)',
                    transition: 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    zIndex: 1,
                  }}
                >
                  <svg
                    viewBox="0 0 479 467"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: '100%', height: '100%' }}
                  >
                    <mask id="blobMaskGhibli" mask-type="alpha">
                      <path
                        d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#blobMaskGhibli)">
                      <path
                        d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
                        fill="#9333ea"
                      />
                      <image
                        x="0"
                        y="0"
                        width="500"
                        height="500"
                        href="/ghibli_pic.png"
                        preserveAspectRatio="xMidYMid slice"
                      />
                    </g>
                  </svg>
                </Box>

                {/* Beautiful Arrow Indicator */}
                {!isHovered && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -60,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      zIndex: 10,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'primary.main',
                        mb: 1,
                        textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                        letterSpacing: '0.5px',
                      }}
                    >
                      Hover Image
                    </Typography>
                    <KeyboardArrowDownIcon
                      sx={{
                        fontSize: '1.5rem',
                        color: '#2563eb',
                        animation: 'bounce 2s infinite',
                        '@keyframes bounce': {
                          '0%, 20%, 50%, 80%, 100%': {
                            transform: 'translateY(0)',
                          },
                          '40%': {
                            transform: 'translateY(8px)',
                          },
                          '60%': {
                            transform: 'translateY(4px)',
                          },
                        },
                      }}
                    />
                  </Box>
                )}

                {/* Glow Effect on Hover */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -20,
                    left: -20,
                    right: -20,
                    bottom: -20,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)',
                    filter: 'blur(20px)',
                    zIndex: 0,
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.6s ease-in-out',
                  }}
                />

                {/* Cloud Message */}
                {isHovered && showCloud && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -100,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 15,
                      animation: 'cloudFloat 0.8s ease-out',
                      '@keyframes cloudFloat': {
                        '0%': {
                          opacity: 0,
                          transform: 'translateX(-50%) translateY(20px)',
                        },
                        '100%': {
                          opacity: 1,
                          transform: 'translateX(-50%) translateY(0px)',
                        },
                      },
                    }}
                  >
                    {/* Cloud Shape */}
                    <Box
                      sx={{
                        position: 'relative',
                        background: 'white',
                        borderRadius: '20px',
                        padding: '10px 16px',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                        border: '2px solid #e0e7ef',
                        width: 'fit-content',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          bottom: '-8px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '8px solid transparent',
                          borderRight: '8px solid transparent',
                          // borderTop: '8px solid white',
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: '-10px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '8px solid transparent',
                          borderRight: '8px solid transparent',
                          borderTop: '8px solid #e0e7ef',
                        },
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: '1rem',
                          fontWeight: 600,
                          color: '#2563eb',
                          textAlign: 'center',
                          letterSpacing: '0.3px',
                          opacity: messageVisible ? 1 : 0,
                          transform: messageVisible ? 'translateY(0)' : 'translateY(-10px)',
                          transition: 'all 0.3s ease-in-out',
                          minHeight: '1.2rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {messages[messageIndex]}
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          </FadeInItem>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
