
import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import FadeInSection from './FadeInSection';
import FadeInItem from './FadeInItem';

const Footer = () => {
  return (
    <FadeInSection>
      <Box sx={{ backgroundColor: '#030014', py: 4, mt: 10, borderTop: '1px solid rgba(99, 102, 241, 0.3)' }}>
        <Container>
          <Stack direction="column" alignItems="center" spacing={2}>
            <FadeInItem delay={0}>
              <Typography 
                variant="h6" 
                sx={{
                  background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Abdullah Bin Masood
              </Typography>
            </FadeInItem>

            <FadeInItem delay={0.2}>
              <Stack direction="row" spacing={2}>
                <IconButton
                  href="mailto:abdullahmasood163@gmail.com"
                  target="_blank"
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#6366F1',
                      transform: 'scale(1.1)',
                    }
                  }}
                >
                  <EmailIcon />
                </IconButton>
                <IconButton
                  href="https://linkedin.com/in/abdullah9202"
                  target="_blank"
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#6366F1',
                      transform: 'scale(1.1)',
                    }
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  href="https://github.com/Alucard008"
                  target="_blank"
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#6366F1',
                      transform: 'scale(1.1)',
                    }
                  }}
                >
                  <GitHubIcon />
                </IconButton>
              </Stack>
            </FadeInItem>

            <FadeInItem delay={0.4}>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)' }} align="center">
                © {new Date().getFullYear()} Abdullah Bin Masood. All rights reserved.
              </Typography>
            </FadeInItem>
          </Stack>
        </Container>
      </Box>
    </FadeInSection>
  );
};

export default Footer;
