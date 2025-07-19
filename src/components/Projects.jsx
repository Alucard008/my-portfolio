import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Chip,
  IconButton,
  Paper,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton as MuiIconButton,
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import MemoryIcon from '@mui/icons-material/Memory';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseIcon from '@mui/icons-material/Close';
import FadeInItem from './FadeInItem';
import projectsData from '../data/projects';

const filters = [
  { label: 'All Projects', value: 'all', icon: <CodeIcon /> },
  { label: 'Web Projects', value: 'web', icon: <LanguageIcon /> },
  { label: 'AI/ML Projects', value: 'ai', icon: <MemoryIcon /> },
  { label: 'Mobile Apps', value: 'mobile', icon: <PhoneIphoneIcon /> },
  { label: 'General Projects', value: 'general', icon: <CodeIcon /> },
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [videoModal, setVideoModal] = useState({ open: false, videoUrl: '' });

  const filteredProjects =
    filter === 'all'
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const handleVideoOpen = (videoUrl) => {
    setVideoModal({ open: true, videoUrl });
  };

  const handleVideoClose = () => {
    setVideoModal({ open: false, videoUrl: '' });
  };

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 12, md: 16 },
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      }}
    >
      <Container style={{ maxWidth: '100%' }}>
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h3"
            color="primary"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3rem' },
              background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Projects
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            maxWidth="md"
            mx="auto"
            sx={{
              lineHeight: 1.6,
              fontSize: { xs: '1rem', md: '1.1rem' },
            }}
          >
            A curated list of full-stack, AI/ML, and embedded systems projects
            that reflect my professional journey and problem-solving skills.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
          <Paper
            elevation={0}
            sx={{
              p: 1,
              borderRadius: 4,
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(37, 99, 235, 0.1)',
            }}
          >
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {filters.map(({ label, value, icon }) => (
                <Chip
                  key={value}
                  label={label}
                  icon={icon}
                  color={filter === value ? 'primary' : 'default'}
                  onClick={() => setFilter(value)}
                  sx={{
                    px: 2,
                    fontWeight: 600,
                    borderRadius: 2,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(37, 99, 235, 0.15)',
                    },
                    '&.MuiChip-colorPrimary': {
                      background:
                        'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                      color: 'white',
                      boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
                    },
                  }}
                />
              ))}
            </Stack>
          </Paper>
        </Box>

        <Box
          display="flex"
          flexWrap="wrap"
          gap={3}
          justifyContent="center"
          alignItems="stretch"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            justifyContent: 'center',
          }}
        >
          {filteredProjects.map((project, idx) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              xl={4}
              key={idx}
              sx={{ display: 'flex', height: '100%' }}
            >
              <FadeInItem delay={0.1 * idx}>
                <Card
                  elevation={0}
                  onMouseEnter={() => handleCardHover(idx)}
                  onMouseLeave={handleCardLeave}
                  sx={{
                    width: '500px',
                    borderRadius: '20px',
                    background:
                      'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%)',
                    border: '2px solid rgba(37, 99, 235, 0.08)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '500px',
                    minHeight: '520px',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        'linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, transparent 100%)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                    },
                    '&:hover': {
                      transform: 'translateY(-12px) scale(1.02)',
                      boxShadow:
                        '0 25px 50px rgba(37, 99, 235, 0.15), 0 12px 24px rgba(0, 0, 0, 0.1)',
                      border: '2px solid rgba(37, 99, 235, 0.2)',
                      '&::before': {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  {/* Project Image or Placeholder */}
                  <Box
                    sx={{
                      position: 'relative',
                      height: '300px',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background:
                        'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                    }}
                  >
                    {project.image ? (
                      <Box
                        sx={{
                          width: 120,
                          height: 120,
                          borderRadius: '50%',
                          overflow: 'hidden',
                          border: '4px solid rgba(37, 99, 235, 0.1)',
                          boxShadow: '0 8px 32px rgba(37, 99, 235, 0.1)',
                          transition: 'all 0.4s ease-in-out',
                          transform:
                            hoveredCard === idx ? 'scale(1.1)' : 'scale(1)',
                          '&:hover': {
                            border: '4px solid rgba(37, 99, 235, 0.3)',
                            boxShadow: '0 12px 40px rgba(37, 99, 235, 0.2)',
                          },
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={project.image}
                          alt={project.title}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                          }}
                        />
                      </Box>
                    ) : (
                      <Box
                        sx={{
                          width: 120,
                          height: 120,
                          borderRadius: '50%',
                          background:
                            'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '4px solid rgba(37, 99, 235, 0.1)',
                          boxShadow: '0 8px 32px rgba(37, 99, 235, 0.1)',
                          transition: 'all 0.4s ease-in-out',
                          transform:
                            hoveredCard === idx ? 'scale(1.1)' : 'scale(1)',
                          '&:hover': {
                            border: '4px solid rgba(37, 99, 235, 0.3)',
                            boxShadow: '0 12px 40px rgba(37, 99, 235, 0.2)',
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.9)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                          }}
                        >
                          <CodeIcon
                            sx={{
                              fontSize: 30,
                              color: '#2563eb',
                              transition: 'all 0.3s ease-in-out',
                            }}
                          />
                        </Box>
                      </Box>
                    )}

                    {/* Overlay with action buttons */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0, 0, 0, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2,
                        opacity: hoveredCard === idx ? 1 : 0,
                        transition: 'opacity 0.3s ease-in-out',
                      }}
                    >
                      {project.demoVideo && (
                        <IconButton
                          onClick={() => handleVideoOpen(project.demoVideo)}
                          sx={{
                            background: 'rgba(255, 255, 255, 0.9)',
                            color: '#2563eb',
                            '&:hover': {
                              background: '#2563eb',
                              color: 'white',
                              transform: 'scale(1.1)',
                            },
                            transition: 'all 0.3s ease-in-out',
                          }}
                        >
                          <PlayArrowIcon />
                        </IconButton>
                      )}

                      {project.liveLink && (
                        <IconButton
                          href={project.liveLink}
                          target="_blank"
                          sx={{
                            background: 'rgba(255, 255, 255, 0.9)',
                            color: '#2563eb',
                            '&:hover': {
                              background: '#2563eb',
                              color: 'white',
                              transform: 'scale(1.1)',
                            },
                            transition: 'all 0.3s ease-in-out',
                          }}
                        >
                          <VisibilityIcon />
                        </IconButton>
                      )}

                      {project.githubLink && (
                        <IconButton
                          href={project.githubLink}
                          target="_blank"
                          sx={{
                            background: 'rgba(255, 255, 255, 0.9)',
                            color: '#2563eb',
                            '&:hover': {
                              background: '#2563eb',
                              color: 'white',
                              transform: 'scale(1.1)',
                            },
                            transition: 'all 0.3s ease-in-out',
                          }}
                        >
                          <GitHubIcon />
                        </IconButton>
                      )}
                    </Box>
                  </Box>

                  <CardContent
                    sx={{
                      flexGrow: 1,
                      p: 3,
                      pt: 2,
                      position: 'relative',
                      zIndex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                    }}
                  >
                    <Typography
                      variant="h5"
                      fontWeight={700}
                      gutterBottom
                      sx={{
                        color: 'primary.main',
                        mb: 2,
                        textAlign: 'center',
                        fontSize: '1.25rem',
                        transition: 'all 0.3s ease-in-out',
                        transform:
                          hoveredCard === idx
                            ? 'translateY(-2px)'
                            : 'translateY(0)',
                      }}
                    >
                      {project.title}
                    </Typography>

                    <Box sx={{ flexGrow: 1, mb: 2 }}>
                      {Array.isArray(project.description) ? (
                        project.description.map((line, i) => (
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            key={i}
                            sx={{
                              lineHeight: 1.5,
                              mb: 0.8,
                              fontSize: '0.875rem',
                              transition: 'all 0.3s ease-in-out',
                              transform:
                                hoveredCard === idx
                                  ? 'translateY(-1px)'
                                  : 'translateY(0)',
                            }}
                          >
                            • {line}
                          </Typography>
                        ))
                      ) : (
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            lineHeight: 1.5,
                            fontSize: '0.875rem',
                            transition: 'all 0.3s ease-in-out',
                            transform:
                              hoveredCard === idx
                                ? 'translateY(-1px)'
                                : 'translateY(0)',
                          }}
                        >
                          {project.description}
                        </Typography>
                      )}
                    </Box>

                    <Box sx={{ mt: 'auto' }}>
                      <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                        {project.tech.map((tech, i) => (
                          <Chip
                            label={tech}
                            key={i}
                            size="small"
                            sx={{
                              background: 'rgba(37, 99, 235, 0.1)',
                              color: 'primary.main',
                              fontWeight: 600,
                              fontSize: '0.75rem',
                              borderRadius: 2,
                              height: '24px',
                              transition: 'all 0.3s ease-in-out',
                              '&:hover': {
                                background: 'rgba(37, 99, 235, 0.2)',
                                transform: 'scale(1.05)',
                              },
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  </CardContent>
                </Card>
              </FadeInItem>
            </Grid>
          ))}
        </Box>
      </Container>

      {/* Video Modal */}
      <Dialog
        open={videoModal.open}
        onClose={handleVideoClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '2px solid rgba(37, 99, 235, 0.1)',
          },
        }}
      >
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pb: 1,
            background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
            color: 'white',
            borderRadius: '12px 12px 0 0',
          }}
        >
          <Typography variant="h6" fontWeight={600}>
            Project Demo Video
          </Typography>
          <MuiIconButton
            onClick={handleVideoClose}
            sx={{
              color: 'white',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <CloseIcon />
          </MuiIconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          <Box
            sx={{
              width: '100%',
              height: '60vh',
              minHeight: 400,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <iframe
              title="project demo video"
              src={videoModal.videoUrl.replace('/view', '/preview')}
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              style={{
                border: 'none',
                borderRadius: '0 0 12px 12px',
              }}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Projects;
