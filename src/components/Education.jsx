import { Box, Typography, Grid, Card, CardContent, Stack, Container } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import FadeInItem from './FadeInItem';
import education from '../data/education';

const Education = () => {
  return (
    <Box id="education" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" sx={{ fontWeight: 600, color: 'text.primary' }}>
            Education
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {education.map((edu, idx) => (
            <Grid item xs={12} sm={10} md={6} key={idx}>
              <FadeInItem delay={0.1 * idx}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Stack direction="row" spacing={2} alignItems="flex-start" mb={1.5}>
                      <SchoolIcon sx={{ color: 'primary.main', fontSize: '1.6rem', mt: 0.3 }} />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
                          {edu.degree}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {edu.institution}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {edu.location} · {edu.duration}
                        </Typography>
                      </Box>
                    </Stack>
                    {edu.description && (
                      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1.5, lineHeight: 1.6 }}>
                        {edu.description}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </FadeInItem>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Education;
