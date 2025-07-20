import { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Container,
} from '@mui/material';
import { 
  Timeline, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineConnector, 
  TimelineContent, 
  TimelineDot 
} from '@mui/lab';
import WorkIcon from '@mui/icons-material/Work';
import FadeInItem from './FadeInItem';
import experiences from '../data/experience';

const Experience = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <Box id="experience" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#18181B' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" sx={{ color: '#1DE782', fontWeight: 700 }} gutterBottom>
            Experience
          </Typography>
        </Box>

        {/* Mobile Layout - Simple Column */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', gap: 3 }}>
          {experiences.map((exp, idx) => (
            <FadeInItem key={idx} delay={0.1 * idx}>
              <Card
                elevation={hoveredCard === idx ? 8 : 3}
                onMouseEnter={() => handleCardHover(idx)}
                onMouseLeave={handleCardLeave}
                sx={{ 
                  borderRadius: 3, 
                  width: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  backgroundColor: '#232336',
                  color: '#fff',
                  border: '1.5px solid #6366F1',
                  '&:hover': {
                    boxShadow: '0 20px 40px #6366F144',
                    border: '2px solid #6366F1',
                    transform: 'translateY(-8px) scale(1.02)',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <WorkIcon 
                      sx={{
                        fontSize: '1.5rem',
                        mr: 2,
                        color: '#1DE782',
                        textShadow: '0 0 8px #1DE78299',
                        transition: 'all 0.4s ease-in-out',
                        transform: hoveredCard === idx ? 'rotate(360deg) scale(1.2)' : 'rotate(0deg) scale(1)',
                      }}
                    />
                    <Box>
                      <Typography 
                        variant="h6" 
                        fontWeight={600}
                        sx={{
                          transition: 'all 0.4s ease-in-out',
                          color: hoveredCard === idx ? '#6366F1' : '#fff',
                        }}
                      >
                        {exp.title}
                      </Typography>
                      <Typography 
                        variant="subtitle2" 
                        sx={{
                          color: '#A3A3A3',
                          transition: 'all 0.4s ease-in-out',
                        }}
                      >
                        {exp.company} &mdash; {exp.location}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography 
                    variant="body2" 
                    sx={{
                      color: '#A3A3A3',
                      mb: 2,
                      transition: 'all 0.4s ease-in-out',
                    }}
                  >
                    {exp.duration}
                  </Typography>
                  <Box 
                    component="ul" 
                    sx={{ 
                      pl: 2, 
                      m: 0,
                      transition: 'all 0.4s ease-in-out',
                    }}
                  >
                    {exp.description.map((line, i) => (
                      <li key={i}>
                        <Typography 
                          variant="body2" 
                          style={{ color: '#E5E5E5' }}
                          sx={{
                            transition: 'all 0.4s ease-in-out',
                            mb: 0.5,
                          }}
                        >
                          {line}
                        </Typography>
                      </li>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </FadeInItem>
          ))}
        </Box>

        {/* Desktop Layout - Timeline */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', flexWrap: 'wrap', gap: 4 }}>
          <Timeline position="alternate">
            {experiences.map((exp, idx) => (
              <TimelineItem key={idx} position={idx % 2 === 0 ? 'left' : 'right'} style={{display: 'flex', gap: '1rem'}}>
                <TimelineSeparator>
                  <TimelineDot 
                    sx={{
                      background: '#232336',
                      border: '2.5px solid #1DE782',
                      boxShadow: '0 0 12px #1DE78299',
                      transition: 'all 0.4s ease-in-out',
                      transform: hoveredCard === idx ? 'scale(1.3) rotate(360deg)' : 'scale(1) rotate(0deg)',
                    }}
                  >
                    <WorkIcon 
                      sx={{
                        fontSize: hoveredCard === idx ? '1.2rem' : '1rem',
                        color: '#1DE782',
                        textShadow: '0 0 8px #1DE78299',
                        transition: 'all 0.4s ease-in-out',
                      }}
                    />
                  </TimelineDot>
                  {idx < experiences.length - 1 && (
                    <TimelineConnector 
                      sx={{
                        transition: 'all 0.4s ease-in-out',
                        backgroundColor: hoveredCard === idx ? '#6366F1' : '#e0e7ef',
                        height: hoveredCard === idx ? '60px' : '40px',
                      }}
                    />
                  )}
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    display: 'flex',
                    justifyContent: idx % 2 === 0 ? 'flex-end' : 'flex-start',
                    textAlign: idx % 2 === 0 ? 'right' : 'left',
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: hoveredCard === idx ? 'translateY(-20px)' : 'translateY(0)',
                  }}
                >
                  <FadeInItem delay={0.1 * idx}>
                    <Box
                      sx={{
                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: hoveredCard === idx ? 'scale(1.05)' : 'scale(1)',
                      }}
                    >
                      <Card
                        elevation={hoveredCard === idx ? 8 : 3}
                        onMouseEnter={() => handleCardHover(idx)}
                        onMouseLeave={handleCardLeave}
                        sx={{ 
                          borderRadius: 3, 
                          minWidth: 320, 
                          maxWidth: 460, 
                          mb: 2,
                          padding:"10px",
                          cursor: 'pointer',
                          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                          backgroundColor: '#232336',
                          color: '#fff',
                          border: '1.5px solid #1DE782',
                          '&:hover': {
                            boxShadow: '0 20px 40px #6366F144',
                            border: '2px solid #6366F1',
                          },
                        }}
                      >
                        <CardContent>
                          <Typography 
                            variant="h6" 
                            fontWeight={600}
                            sx={{
                              transition: 'all 0.4s ease-in-out',
                              color: hoveredCard === idx ? '#6366F1' : '#fff',
                              transform: hoveredCard === idx ? 'translateY(-5px)' : 'translateY(0)',
                            }}
                          >
                            {exp.title}
                          </Typography>
                          <Typography 
                            variant="subtitle2" 
                            sx={{ color: '#A3A3A3', transition: 'all 0.4s ease-in-out' }}
                            style={{
                              transform: hoveredCard === idx ? 'translateY(-3px)' : 'translateY(0)',
                            }}
                          >
                            {exp.company} &mdash; {exp.location}
                          </Typography>
                          <Typography 
                            variant="body2" 
                            sx={{ color: '#A3A3A3', transition: 'all 0.4s ease-in-out' }}
                            mb={1}
                            style={{
                              transform: hoveredCard === idx ? 'translateY(-3px)' : 'translateY(0)',
                            }}
                          >
                            {exp.duration}
                          </Typography>
                          <Box 
                            component="ul" 
                            sx={{ 
                              pl: 2, 
                              m: 0,
                              transition: 'all 0.4s ease-in-out',
                              transform: hoveredCard === idx ? 'translateY(-8px)' : 'translateY(0)',
                            }}
                          >
                            {exp.description.map((line, i) => (
                              <li key={i}>
                                <Typography 
                                  variant="body2" 
                                  sx={{ color: '#E5E5E5', transition: 'all 0.4s ease-in-out' }}
                                  style={{
                                    transform: hoveredCard === idx ? 'translateY(-2px)' : 'translateY(0)',
                                  }}
                                >
                                  {line}
                                </Typography>
                              </li>
                            ))}
                          </Box>
                        </CardContent>
                      </Card>
                    </Box>
                  </FadeInItem>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
