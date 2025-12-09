
import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  LinearProgress,
  Stack,
} from '@mui/material';
import FadeInSection from './FadeInSection';
import FadeInItem from './FadeInItem';
import skillsData from '../data/skills';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SkillBar = ({ name, icon, level, index }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevel(level);
    }, index * 100);
    return () => clearTimeout(timer);
  }, [level, index]);

  return (
    <Box 
      mb={3} 
      sx={{ width: '100%' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={0.5}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Box
            sx={{
              transform: isHovered ? 'rotate(360deg)' : 'rotate(0deg)',
              transition: 'transform 0.6s ease-in-out',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {icon}
          </Box>
          <Typography fontWeight={500} sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>{name}</Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          {animatedLevel}%
        </Typography>
      </Stack>
      <LinearProgress
        variant="determinate"
        value={animatedLevel}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          transition: 'all 0.8s ease-in-out',
          '& .MuiLinearProgress-bar': {
            background: isHovered 
              ? 'linear-gradient(90deg, #6366F1 0%, #A855F7 100%)'
              : 'linear-gradient(90deg, #6366F1 0%, #A855F7 100%)',
            transition: 'transform 0.8s ease-in-out',
          },
        }}
      />
    </Box>
  );
};

const Skills = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  return (
    <FadeInSection>
      <Box id="skills" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#030014' }}>
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
              Skills
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ color: 'rgba(255, 255, 255, 0.7)' }} 
              maxWidth="md" 
              mx="auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              A comprehensive overview of my technical expertise and proficiency levels across various domains, including programming languages, web development, artificial intelligence, and other technologies.
            </Typography>
          </Box>
          <Grid container spacing={3} justifyContent="center">
            {Object.entries(skillsData).map(([category, items], index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={category}>
                <FadeInItem delay={index * 0.1}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: { xs: 3, md: 4 },
                      borderRadius: 3,
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      height: { xs: 'auto', md: '500px' },
                      minHeight: { xs: '400px', md: '500px' },
                      display: 'flex',
                      width: '100%',
                      maxWidth: { xs: '100%', md: '400px' },
                      flexDirection: 'column',
                      border: '1px solid rgba(99, 102, 241, 0.2)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 30px rgba(99, 102, 241, 0.3)',
                        borderColor: 'rgba(168, 85, 247, 0.5)',
                        background: 'rgba(255, 255, 255, 0.08)',
                      },
                    }}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        mb: 3, 
                        fontWeight: 600, 
                        textAlign: 'center' 
                      }}
                    >
                      {category}
                    </Typography>
                    <Box sx={{ flex: 1, overflow: 'hidden' }}>
                      <Box sx={{ 
                        height: '100%', 
                        overflowY: 'auto',
                        pr: 1,
                        '&::-webkit-scrollbar': {
                          width: '4px',
                        },
                        '&::-webkit-scrollbar-track': {
                          background: '#f1f1f1',
                          borderRadius: '2px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                          background: '#c1c1c1',
                          borderRadius: '2px',
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                          background: '#a8a8a8',
                        },
                      }}>
                        {items.map((skill, skillIndex) => (
                          <SkillBar key={skill.name} {...skill} index={skillIndex} />
                        ))}
                      </Box>
                    </Box>
                  </Paper>
                </FadeInItem>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </FadeInSection>
  );
};

export default Skills;
