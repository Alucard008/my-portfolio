import { Box, Typography, Button, Stack, Container, IconButton, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ConstructionIcon from '@mui/icons-material/Construction';
import FadeInItem from './FadeInItem';
import ImageBlob from './ImageBlob';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: '92vh' },
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 14, md: 0 },
        pb: { xs: 10, md: 0 },
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          spacing={{ xs: 6, lg: 8 }}
          alignItems={{ xs: 'center', lg: 'center' }}
          justifyContent="space-between"
        >
          <FadeInItem delay={0.1}>
            <Box sx={{ textAlign: { xs: 'center', lg: 'left' }, width: '100%' }}>
              <Typography
                variant="subtitle1"
                sx={{ color: 'primary.main', fontWeight: 600, mb: 1.5 }}
              >
                Hello, I'm
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 600,
                  color: 'text.primary',
                  fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.25rem' },
                  letterSpacing: '-0.02em',
                  mb: 2,
                }}
              >
                Abdullah Bin Masood
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: 'text.secondary', fontWeight: 500, mb: 3 }}
              >
                AI Engineer / Fullstack Developer
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 3,
                  maxWidth: { xs: '100%', md: '640px' },
                  mx: { xs: 'auto', lg: 0 },
                  fontSize: '1.05rem',
                }}
              >
                AI Engineer with 5 years of experience shipping production LLM systems and
                full-stack SaaS products, with a focus on agentic AI workflows and RAG
                (Retrieval-Augmented Generation). Hands-on across Python and Node.js/TypeScript
                backends, React frontends, and AWS cloud infrastructure — owning the full AI
                feature lifecycle from research to production monitoring.
              </Typography>

              <Box sx={{ mb: 4, display: 'flex', justifyContent: { xs: 'center', lg: 'flex-start' } }}>
                <Chip
                  icon={<ConstructionIcon sx={{ fontSize: '1rem !important' }} />}
                  label="Currently exploring: Terraform / IaC"
                  variant="outlined"
                  sx={{
                    borderColor: 'divider',
                    color: 'text.secondary',
                    fontWeight: 500,
                    bgcolor: 'background.paper',
                  }}
                />
              </Box>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ mb: 4, justifyContent: { xs: 'center', lg: 'flex-start' } }}
              >
                <Button
                  variant="contained"
                  href="/Resume_Abdullah_Bin_Masood.pdf"
                  target="_blank"
                  download
                  size="large"
                  sx={{ px: 3.5, py: 1.2 }}
                >
                  Download Resume
                </Button>
                <Button
                  variant="outlined"
                  href="#contact"
                  size="large"
                  sx={{
                    px: 3.5,
                    py: 1.2,
                    borderColor: 'divider',
                    color: 'text.primary',
                    '&:hover': {
                      borderColor: 'primary.main',
                      backgroundColor: 'rgba(181, 80, 46, 0.04)',
                    },
                  }}
                >
                  Contact Me
                </Button>
              </Stack>

              <Stack direction="row" spacing={1} sx={{ justifyContent: { xs: 'center', lg: 'flex-start' } }}>
                <IconButton
                  href="mailto:abdullahmasood163@gmail.com"
                  target="_blank"
                  sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                >
                  <EmailIcon />
                </IconButton>
                <IconButton
                  href="tel:+33751479304"
                  target="_blank"
                  sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                >
                  <PhoneIcon />
                </IconButton>
                <IconButton
                  href="https://linkedin.com/in/abdullah9202"
                  target="_blank"
                  sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  href="https://github.com/Alucard008"
                  target="_blank"
                  sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                >
                  <GitHubIcon />
                </IconButton>
              </Stack>
            </Box>
          </FadeInItem>

          <ImageBlob size={{ xs: 240, sm: 280, md: 320, lg: 360 }} />
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
