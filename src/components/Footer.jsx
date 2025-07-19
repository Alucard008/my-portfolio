
import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import FadeInSection from './FadeInSection';
import FadeInItem from './FadeInItem';

const Footer = () => {
  return (
    <FadeInSection>
      <Box sx={{ backgroundColor: '#1e293b', py: 4, mt: 10 }}>
        <Container>
          <Stack direction="column" alignItems="center" spacing={2}>
            <FadeInItem delay={0}>
              <Typography variant="h6" color="white">
                Abdullah Bin Masood
              </Typography>
            </FadeInItem>

            <FadeInItem delay={0.2}>
              <Stack direction="row" spacing={2}>
                <IconButton
                  href="mailto:abdullahmasood163@gmail.com"
                  target="_blank"
                  sx={{ color: 'white' }}
                >
                  <EmailIcon />
                </IconButton>
                <IconButton
                  href="https://linkedin.com/in/abdullah9202"
                  target="_blank"
                  sx={{ color: 'white' }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  href="https://github.com/Alucard008"
                  target="_blank"
                  sx={{ color: 'white' }}
                >
                  <GitHubIcon />
                </IconButton>
              </Stack>
            </FadeInItem>

            <FadeInItem delay={0.4}>
              <Typography variant="body2" color="white" align="center">
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
