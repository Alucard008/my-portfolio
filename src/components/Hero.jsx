import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Stack,
  Container,
  IconButton,
  Fab,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GamesIcon from '@mui/icons-material/Games';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FadeInItem from './FadeInItem';
import ImageBlob from './ImageBlob';
import SnakeGame from './SnakeGame';
import BackgroundSnake from './BackgroundSnake';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [messageVisible, setMessageVisible] = useState(true);
  const [showCloud, setShowCloud] = useState(false);
  const [showSnakeGame, setShowSnakeGame] = useState(false);

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

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      offset: 10,
    });
  }, []);

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
      {/* Background Gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          background: 'linear-gradient(135deg, #030014 0%, rgba(99,102,241,0.1) 50%, rgba(168,85,247,0.1) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Background Snake Game Animation */}
      <BackgroundSnake />
      
      {/* Snake Game Button */}
      <Fab
        onClick={() => setShowSnakeGame(true)}
        sx={{
          position: 'fixed',
          bottom: 80,
          right: 20,
          zIndex: 1200,
          background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)',
          color: 'white',
          boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
          '&:hover': {
            background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
            boxShadow: '0 6px 25px rgba(99, 102, 241, 0.5)',
            transform: 'scale(1.1)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        <GamesIcon />
      </Fab>

      {/* Snake Game Modal */}
      {showSnakeGame && (
        <Box
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowSnakeGame(false);
            }
          }}
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1999,
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <SnakeGame onClose={() => setShowSnakeGame(false)} />
        </Box>
      )}

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
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'white', 
                  fontWeight: 600,
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.9) 0%, rgba(168, 85, 247, 0.9) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }} 
                gutterBottom
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Hello, I'm
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0.9) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontSize: {
                    xs: '2rem',
                    sm: '2.8rem',
                    md: '3.2rem',
                    lg: '3.5rem',
                  },
                  textShadow: '0 2px 16px rgba(0,0,0,0.25)',
                }}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Abdullah Bin Masood
              </Typography>
              <Typography
                variant="h5"
                sx={{ 
                  mt: 2, 
                  mb: 3, 
                  background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 2px 8px rgba(0,0,0,0.18)' 
                }}
                data-aos="fade-up"
                data-aos-delay="600"
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
                  href="/Abdullah_Masood_Resume_Updated_AI.pdf"
                  target="_blank"
                  download
                  size="medium"
                  sx={{ 
                    fontSize: '1rem', 
                    px: 3, 
                    py: 1.2,
                    background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)',
                    color: 'white',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 20px rgba(99, 102, 241, 0.4)',
                      background: 'linear-gradient(135deg, #7C3AED 0%, #C084FC 100%)',
                    }
                  }}
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  Download Resume
                </Button>
                <Button
                  variant="outlined"
                  href="#contact"
                  size="medium"
                  sx={{ 
                    fontSize: '1rem', 
                    px: 3, 
                    py: 1.2,
                    border: '1px solid rgba(168, 85, 247, 0.5)',
                    color: '#A855F7',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      border: '1px solid rgba(168, 85, 247, 0.8)',
                      background: 'rgba(168, 85, 247, 0.1)',
                      transform: 'translateY(-2px)',
                    }
                  }}
                  data-aos="fade-up"
                  data-aos-delay="1000"
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
                    color: '#6366F1',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#A855F7',
                      transform: 'scale(1.1)',
                      boxShadow: '0 0 12px 2px rgba(99, 102, 241, 0.5)',
                    },
                  }}
                  data-aos="fade-up"
                  data-aos-delay="1200"
                >
                  <EmailIcon />
                </IconButton>
                <IconButton
                  href="tel:+33751479304"
                  target="_blank"
                  sx={{
                    fontSize: '1.2rem',
                    p: 1.5,
                    color: '#6366F1',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#A855F7',
                      transform: 'scale(1.1)',
                      boxShadow: '0 0 12px 2px rgba(99, 102, 241, 0.5)',
                    },
                  }}
                  data-aos="fade-up"
                  data-aos-delay="1400"
                >
                  <PhoneIcon />
                </IconButton>
                <IconButton
                  href="https://linkedin.com/in/abdullah9202"
                  target="_blank"
                  sx={{
                    fontSize: '1.2rem',
                    p: 1.5,
                    color: '#6366F1',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#A855F7',
                      transform: 'scale(1.1)',
                      boxShadow: '0 0 12px 2px rgba(99, 102, 241, 0.5)',
                    },
                  }}
                  data-aos="fade-up"
                  data-aos-delay="1600"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  href="https://github.com/Alucard008"
                  target="_blank"
                  sx={{
                    fontSize: '1.2rem',
                    p: 1.5,
                    color: '#6366F1',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#A855F7',
                      transform: 'scale(1.1)',
                      boxShadow: '0 0 12px 2px rgba(99, 102, 241, 0.5)',
                    },
                  }}
                  data-aos="fade-up"
                  data-aos-delay="1800"
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
