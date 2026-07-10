import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box sx={{ py: 4, borderTop: '1px solid', borderColor: 'divider' }}>
      <Container>
        <Stack direction="column" alignItems="center" spacing={2}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
            Abdullah Bin Masood
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton
              href="mailto:abdullahmasood163@gmail.com"
              target="_blank"
              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
            >
              <EmailIcon />
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

          <Typography variant="body2" sx={{ color: 'text.secondary' }} align="center">
            © {new Date().getFullYear()} Abdullah Bin Masood. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
