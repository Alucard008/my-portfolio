import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton as MuiIconButton,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import MemoryIcon from '@mui/icons-material/Memory';
import LanguageIcon from '@mui/icons-material/Language';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseIcon from '@mui/icons-material/Close';
import FadeInItem from './FadeInItem';
import projectsData from '../data/projects';

const filters = [
  { label: 'All', value: 'all', icon: <CodeIcon fontSize="small" /> },
  { label: 'AI / ML', value: 'ai', icon: <MemoryIcon fontSize="small" /> },
  { label: 'Web', value: 'web', icon: <LanguageIcon fontSize="small" /> },
  { label: 'Mobile', value: 'mobile', icon: <PhoneIphoneIcon fontSize="small" /> },
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [videoModal, setVideoModal] = useState({ open: false, videoUrl: '' });

  const filteredProjects =
    filter === 'all' ? projectsData : projectsData.filter((project) => project.category === filter);

  const handleVideoOpen = (videoUrl) => setVideoModal({ open: true, videoUrl });
  const handleVideoClose = () => setVideoModal({ open: false, videoUrl: '' });

  return (
    <Box id="projects" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#F4F3F0' }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" sx={{ fontWeight: 600, color: 'text.primary', mb: 1.5 }}>
            Projects
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }} maxWidth="sm" mx="auto">
            A curated selection of AI/ML and full-stack projects reflecting my professional work.
          </Typography>
        </Box>

        <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center" mb={6} useFlexGap>
          {filters.map(({ label, value, icon }) => (
            <Chip
              key={value}
              label={label}
              icon={icon}
              onClick={() => setFilter(value)}
              sx={{
                px: 1,
                fontWeight: 500,
                border: '1px solid',
                borderColor: filter === value ? 'primary.main' : 'divider',
                bgcolor: filter === value ? 'primary.main' : 'background.paper',
                color: filter === value ? '#fff' : 'text.secondary',
                '& .MuiChip-icon': { color: filter === value ? '#fff' : 'text.secondary' },
                '&:hover': {
                  borderColor: 'primary.main',
                  bgcolor: filter === value ? 'primary.main' : 'rgba(181, 80, 46, 0.06)',
                },
              }}
            />
          ))}
        </Stack>

        <Grid container spacing={3} alignItems="stretch">
          {filteredProjects.map((project, idx) => (
            <Grid item xs={12} sm={6} lg={4} key={project.title} sx={{ display: 'flex' }}>
              <FadeInItem delay={0.06 * idx}>
                <Card
                  elevation={0}
                  sx={{
                    width: '100%',
                    height: { xs: 'auto', sm: '300px' },
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'background.paper',
                    overflow: 'hidden',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3, overflow: 'hidden' }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={1.5} mb={1.25}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: 'text.primary',
                          fontSize: '1.05rem',
                          minHeight: '2.6rem',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {project.title}
                      </Typography>

                      {(project.demoVideo || project.liveLink || project.githubLink) && (
                        <Stack direction="row" spacing={0.5} sx={{ flexShrink: 0 }}>
                          {project.demoVideo && (
                            <IconButton
                              size="small"
                              onClick={() => handleVideoOpen(project.demoVideo)}
                              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                            >
                              <PlayArrowIcon fontSize="small" />
                            </IconButton>
                          )}
                          {project.liveLink && (
                            <IconButton
                              size="small"
                              href={project.liveLink}
                              target="_blank"
                              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                            >
                              <VisibilityIcon fontSize="small" />
                            </IconButton>
                          )}
                          {project.githubLink && (
                            <IconButton
                              size="small"
                              href={project.githubLink}
                              target="_blank"
                              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                            >
                              <GitHubIcon fontSize="small" />
                            </IconButton>
                          )}
                        </Stack>
                      )}
                    </Stack>

                    <Box sx={{ flexGrow: 1, mb: 2, overflow: 'hidden' }}>
                      {project.description.slice(0, 2).map((line, i) => (
                        <Typography
                          key={i}
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            mb: 0.75,
                            lineHeight: 1.55,
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}
                        >
                          {line}
                        </Typography>
                      ))}
                    </Box>

                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ flexShrink: 0, height: '32px', overflow: 'hidden' }}>
                      {project.tech.slice(0, 4).map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: '#F4F3F0',
                            color: 'text.primary',
                            border: '1px solid',
                            borderColor: 'divider',
                            fontSize: '0.75rem',
                          }}
                        />
                      ))}
                      {project.tech.length > 4 && (
                        <Chip
                          label={`+${project.tech.length - 4}`}
                          size="small"
                          sx={{ bgcolor: 'transparent', color: 'text.secondary', fontSize: '0.75rem' }}
                        />
                      )}
                    </Stack>
                  </CardContent>
                </Card>
              </FadeInItem>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Dialog open={videoModal.open} onClose={handleVideoClose} maxWidth="md" fullWidth>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" fontWeight={600}>
            Project Demo
          </Typography>
          <MuiIconButton onClick={handleVideoClose}>
            <CloseIcon />
          </MuiIconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 0 }}>
          <Box sx={{ width: '100%', height: '60vh', minHeight: 400 }}>
            <iframe
              title="project demo video"
              src={videoModal.videoUrl.replace('/view', '/preview')}
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              style={{ border: 'none' }}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Projects;
