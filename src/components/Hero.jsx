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
          setShowCloud(false);  // Immediately hide cloud
          clearInterval(interval); // stop the interval
        }
      }, 300);
    }, 3000);
  
    return () => clearInterval(interval);
  }, [isHovered, messageIndex, messages.length]);
  
  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        height: '100vh',
        minHeight: {xs:'160vh',md:'100vh'},
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background Video */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0,
          }}
          src="/background.mp4"
        />
        {/* Video Overlay for readability */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(20,30,48,0.45) 0%, rgba(36,37,42,0.35) 100%)',
            zIndex: 1,
          }}
        />
      </Box>

      {/* Context Overlay above video, below content */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          background: 'linear-gradient(120deg, rgba(30,41,59,0.38) 0%, rgba(30,41,59,0.32) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Main Content (above overlays and video) */}
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 3 }}>
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          spacing={{ xs: 4, md: 6, lg: 8 }}
          alignItems={{xs:"center",lg:"flex-start"}}
          justifyContent="center"
          sx={{ minHeight: { xs: '80vh', md: '70vh' }, mt: { xs: 4, md: 8 } }}
        >
          <FadeInItem delay={0.1}>
            <Box
              sx={{
                flex: 1,
                textAlign: { xs: 'center', lg: 'left' },
                width: '100%',
              }}
            >
              <Typography variant="h5" sx={{ color: 'white', fontWeight: 600 }} gutterBottom>
                Hello, I'm
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 'bold',
                  color: 'white',
                  fontSize: {
                    xs: '2rem',
                    sm: '2.8rem',
                    md: '3.2rem',
                    lg: '3.5rem',
                  },
                  textShadow: '0 2px 16px rgba(0,0,0,0.25)',
                }}
              >
                Abdullah Bin Masood
              </Typography>
              <Typography
                variant="h5"
                sx={{ mt: 2, mb: 3, color: 'white', opacity: 0.92, textShadow: '0 2px 8px rgba(0,0,0,0.18)' }}
              >
                AI Engineer / Full-Stack Developer
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'white',
                  opacity: 0.92,
                  mb: 4,
                  lineHeight: 1.6,
                  maxWidth: { xs: '100%', md: '600px', lg: '800px' },
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  mx: { xs: 'auto', lg: 0 },
                  textShadow: '0 2px 8px rgba(0,0,0,0.18)',
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
                  // color="primary"
                  href="/Abdullah_Masood_Resume_Updated_AI.pdf"
                  target="_blank"
                  download
                  size="medium"
                  sx={{ fontSize: '1rem', px: 3, py: 1.2 , backgroundColor:"#1DE782" , color:"black"}}
                >
                  Download Resume
                </Button>
                <Button
                  variant="outlined"
                  href="#contact"
                  size="medium"
                  sx={{ fontSize: '1rem', px: 3, py: 1.2  ,border:"1px solid #1DE782" , color:"#1DE782"}}
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
                  sx={{
                    fontSize: '1.2rem',
                    p: 1.5,
                    color: '#1DE782',
                    transition: 'box-shadow 0.3s, color 0.3s',
                    '&:hover': {
                      color: '#39FF14',
                      boxShadow: '0 0 12px 2px #39FF14AA',
                    },
                  }}
                >
                  <EmailIcon />
                </IconButton>
                <IconButton
                  href="tel:+33751479304"
                  target="_blank"
                  sx={{
                    fontSize: '1.2rem',
                    p: 1.5,
                    color: '#1DE782',
                    transition: 'box-shadow 0.3s, color 0.3s',
                    '&:hover': {
                      color: '#39FF14',
                      boxShadow: '0 0 12px 2px #39FF14AA',
                    },
                  }}
                >
                  <PhoneIcon />
                </IconButton>
                <IconButton
                  href="https://linkedin.com/in/abdullah9202"
                  target="_blank"
                  sx={{
                    fontSize: '1.2rem',
                    p: 1.5,
                    color: '#1DE782',
                    transition: 'box-shadow 0.3s, color 0.3s',
                    '&:hover': {
                      color: '#39FF14',
                      boxShadow: '0 0 12px 2px #39FF14AA',
                    },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  href="https://github.com/Alucard008"
                  target="_blank"
                  sx={{
                    fontSize: '1.2rem',
                    p: 1.5,
                    color: '#1DE782',
                    transition: 'box-shadow 0.3s, color 0.3s',
                    '&:hover': {
                      color: '#39FF14',
                      boxShadow: '0 0 12px 2px #39FF14AA',
                    },
                  }}
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
            
            size={{ xs: 280, sm: 320, md: 360, lg: 420 }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
