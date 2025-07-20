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
import FadeInItem from './FadeInItem';

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

  // Smooth scroll handler
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false); // close drawer if open
  };

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Typography 
        variant="h6" 
        component="a" 
        href="#home" 
        sx={{ 
          color: '#2563eb', 
          textDecoration: 'none', 
          fontWeight: 'bold' 
        }}
        onClick={e => handleSmoothScroll(e, '#home')}
      >
        Abdullah<span style={{ color: '#2563eb' }}> Bin Masood</span>
      </Typography>
      <List>
        {navItems.map((item, index) => (
          <FadeInItem key={item.text} delay={index * 0.1}>
            <ListItem button component="a" href={item.href} onClick={e => handleSmoothScroll(e, item.href)}>
              <ListItemText primary={item.text} />
            </ListItem>
          </FadeInItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'rgba(10, 17, 32, 0.95)', borderBottom:"1px solid #1DE782" ,borderLeft:"none",borderRight:"none", backdropFilter: 'blur(10px)' }}  style={{borderRadius: '0px'  , boxShadow:"none"}}>
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 3 } }}>
          <Typography
            variant="h6"
            component="a"
            href="#home"
            sx={{
              color: '#1DE782',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: { xs: '1rem', sm: '1.25rem' },
            }}
          >
            Abdullah<span style={{ color: '#1DE782' }}> Bin Masood</span>
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
            <Box sx={{ display: 'flex', gap: 3 }}>
              {navItems.map((item, index) => (
                <FadeInItem key={item.text} delay={index * 0.1}>
                  <Link
                    href={item.href}
                    underline="none"
                    color="inherit"
                    sx={{
                      fontWeight: 500,
                      color: '#1DE782',
                      transition: 'color 0.2s',
                      '&:hover': { color: '#059669' },
                    }}
                    onClick={e => handleSmoothScroll(e, item.href)}
                  >
                    {item.text}
                  </Link>
                </FadeInItem>
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
