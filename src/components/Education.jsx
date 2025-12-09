import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Container,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import FadeInItem from './FadeInItem';
import education from '../data/education';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <Box id="education" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#030014' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box textAlign="center" mb={6}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }} 
            gutterBottom
            data-aos="fade-up"
          >
            Education
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {education.map((edu, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <FadeInItem delay={0.1 * idx}>
                <Box
                  sx={{
                    position: 'relative',
                    transform: hoveredCard === idx ? 'translateY(-20px)' : 'translateY(0)',
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-20px)',
                    },
                  }}
                >
                  <Card
                    elevation={hoveredCard === idx ? 8 : 3}
                    onMouseEnter={() => handleCardHover(idx)}
                    onMouseLeave={handleCardLeave}
                    sx={{
                      borderRadius: 3,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: "3rem",
                      height: '100%',
                      cursor: 'pointer',
                      padding:"10px",
                      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      transform: hoveredCard === idx ? 'scale(1.05)' : 'scale(1)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      color: '#fff',
                      border: '2px solid rgba(99, 102, 241, 0.3)',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)',
                        border: '2px solid rgba(168, 85, 247, 0.5)',
                        background: 'rgba(255, 255, 255, 0.08)',
                      },
                    }}
                  >
                    <CardContent>
                      <Stack 
                        direction="row" 
                        spacing={2} 
                        alignItems="center" 
                        mb={1}
                        sx={{
                          transition: 'all 0.4s ease-in-out',
                          transform: hoveredCard === idx ? 'translateY(-8px)' : 'translateY(0)',
                        }}
                      >
                        <Box
                          sx={{
                            transition: 'all 0.4s ease-in-out',
                            transform: hoveredCard === idx ? 'rotate(360deg) scale(1.2)' : 'rotate(0deg) scale(1)',
                          }}
                        >
                          <SchoolIcon 
                            sx={{
                              fontSize: hoveredCard === idx ? '2rem' : '1.5rem',
                              color: '#6366F1',
                              transition: 'all 0.4s ease-in-out',
                            }}
                          />
                        </Box>
                        <Box
                          sx={{
                            transition: 'all 0.4s ease-in-out',
                            transform: hoveredCard === idx ? 'translateY(-5px)' : 'translateY(0)',
                          }}
                        >
                          <Typography 
                            variant="h6" 
                            fontWeight={600}
                            sx={{
                              transition: 'all 0.4s ease-in-out',
                              color: hoveredCard === idx ? '#A855F7' : 'rgba(255, 255, 255, 0.9)',
                            }}
                          >
                            {edu.degree}
                          </Typography>
                          <Typography 
                            variant="subtitle2" 
                            sx={{
                              color: 'rgba(255, 255, 255, 0.7)',
                              transition: 'all 0.4s ease-in-out',
                              transform: hoveredCard === idx ? 'translateY(-3px)' : 'translateY(0)',
                            }}
                          >
                            {edu.institution}
                          </Typography>
                        </Box>
                      </Stack>
                      <Typography 
                        variant="body2" 
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          transition: 'all 0.4s ease-in-out',
                          transform: hoveredCard === idx ? 'translateY(-5px)' : 'translateY(0)',
                        }}
                      >
                        {edu.location}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        mt={1}
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          transition: 'all 0.4s ease-in-out',
                          transform: hoveredCard === idx ? 'translateY(-5px)' : 'translateY(0)',
                        }}
                      >
                        {edu.duration}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </FadeInItem>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Education;
