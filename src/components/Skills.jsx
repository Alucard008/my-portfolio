
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
          <Typography fontWeight={500} sx={{ color: '#18181B' }}>{name}</Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: '#18181B' }}>
          {animatedLevel}%
        </Typography>
      </Stack>
      <LinearProgress
        variant="determinate"
        value={animatedLevel}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: '#e0e7ef',
          transition: 'all 0.8s ease-in-out',
          '& .MuiLinearProgress-bar': {
            background: isHovered 
              ? 'linear-gradient(90deg, #6366F1 0%, #6366F1 100%)'
              : '#1DE782',
            transition: 'transform 0.8s ease-in-out',
          },
        }}
      />
    </Box>
  );
};

const Skills = () => {
  return (
    <FadeInSection>
      <Box id="skills" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#fff' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box textAlign="center" mb={6}>
            <Typography variant="h4" sx={{ color: '#18181B', fontWeight: 700 }} gutterBottom>
              Skills
            </Typography>
            <Typography variant="body1" sx={{ color: '#18181B' }} maxWidth="md" mx="auto">
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
                      backgroundColor: '#f8fafc',
                      height: { xs: 'auto', md: '500px' },
                      minHeight: { xs: '400px', md: '500px' },
                      display: 'flex',
                      width: '100%',
                      maxWidth: { xs: '100%', md: '400px' },
                      flexDirection: 'column',
                      border: '1px solid #e2e8f0',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                        borderColor: '#1DE782',
                      },
                    }}
                  >
                    <Typography variant="h6" sx={{ color: '#18181B', mb: 3, fontWeight: 600, textAlign: 'center' }}>
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
