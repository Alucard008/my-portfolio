import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = [
  { text: 'Home', href: '#home' },
  { text: 'Skills', href: '#skills' },
  { text: 'Experience', href: '#experience' },
  { text: 'Projects', href: '#projects' },
  { text: 'Education', href: '#education' },
  { text: 'Contact', href: '#contact' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center', pt: 2 }}>
      <Typography
        variant="h6"
        component="a"
        href="#home"
        sx={{
          color: 'text.primary',
          textDecoration: 'none',
          fontWeight: 600,
        }}
        onClick={(e) => handleSmoothScroll(e, '#home')}
      >
        Abdullah Bin Masood
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} button component="a" href={item.href} onClick={(e) => handleSmoothScroll(e, item.href)}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(250, 250, 248, 0.9)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid',
          borderColor: 'divider',
          color: 'text.primary',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 3 } }}>
          <Typography
            variant="h6"
            component="a"
            href="#home"
            sx={{
              color: 'text.primary',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: { xs: '1rem', sm: '1.1rem' },
            }}
          >
            Abdullah Bin Masood
          </Typography>

          {isMobile ? (
            <>
              <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 4 }}>
              {navItems.map((item) => (
                <Link
                  key={item.text}
                  href={item.href}
                  underline="none"
                  sx={{
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    color: 'text.secondary',
                    transition: 'color 0.2s ease',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                >
                  {item.text}
                </Link>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;
