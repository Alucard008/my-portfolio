import { Box, Typography, Container, Stack } from '@mui/material';
import FadeInItem from './FadeInItem';
import experiences from '../data/experience';

const Experience = () => {
  return (
    <Box id="experience" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#F4F3F0' }}>
      <Container maxWidth="md">
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" sx={{ fontWeight: 600, color: 'text.primary' }}>
            Experience
          </Typography>
        </Box>

        <Stack spacing={0}>
          {experiences.map((exp, idx) => (
            <FadeInItem key={idx} delay={0.08 * idx}>
              <Box
                sx={{
                  position: 'relative',
                  pl: 4,
                  pb: idx < experiences.length - 1 ? 5 : 0,
                  borderLeft: '2px solid',
                  borderColor: 'divider',
                  ml: 1,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: -7,
                    top: 4,
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                  },
                }}
              >
                <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', sm: 'baseline' }} spacing={0.5} mb={1}>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
                      {exp.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {exp.company} — {exp.location}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500, whiteSpace: 'nowrap' }}>
                    {exp.duration}
                  </Typography>
                </Stack>
                <Box component="ul" sx={{ pl: 2.5, m: 0 }}>
                  {exp.description.map((line, i) => (
                    <Typography key={i} component="li" variant="body2" sx={{ color: 'text.secondary', mb: 0.75 }}>
                      {line}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </FadeInItem>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Experience;
