import { Box, Container, Typography, Grid, Paper, Stack, Chip } from '@mui/material';
import FadeInItem from './FadeInItem';
import skillsData from '../data/skills';

const Skills = () => {
  return (
    <Box id="skills" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" sx={{ fontWeight: 600, color: 'text.primary', mb: 1.5 }}>
            Skills
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }} maxWidth="sm" mx="auto">
            Core areas of expertise across AI/LLM engineering and full-stack development.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {Object.entries(skillsData).map(([category, items], index) => (
            <Grid item xs={12} sm={6} md={4} key={category}>
              <FadeInItem delay={index * 0.08}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'background.paper',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                    },
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary', mb: 2, fontSize: '1.05rem' }}>
                    {category}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {items.map((skill) => (
                      <Chip
                        key={skill.name}
                        icon={skill.icon}
                        label={skill.name}
                        size="small"
                        sx={{
                          bgcolor: '#F4F3F0',
                          color: 'text.primary',
                          border: '1px solid',
                          borderColor: 'divider',
                          '& .MuiChip-icon': { color: 'primary.main', fontSize: '1rem' },
                        }}
                      />
                    ))}
                  </Stack>
                </Paper>
              </FadeInItem>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
