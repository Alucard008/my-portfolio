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

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography 
        variant="h6" 
        component="a" 
        href="#home" 
        sx={{ 
          color: '#2563eb', 
          textDecoration: 'none', 
          fontWeight: 'bold' 
        }}
      >
        Abdullah<span style={{ color: '#2563eb' }}> Bin Masood</span>
      </Typography>
      <List>
        {navItems.map((item, index) => (
          <FadeInItem key={item.text} delay={index * 0.1}>
            <ListItem button component="a" href={item.href}>
              <ListItemText primary={item.text} />
            </ListItem>
          </FadeInItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'rgba(15, 23, 42, 0.95)' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component="a"
            href="#home"
            sx={{
              color: '#2563eb',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Abdullah<span style={{ color: '#2563eb' }}> Bin Masood</span>
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
                    color="secondary"
                    sx={{
                      fontWeight: 500,
                      '&:hover': { color: 'primary.main' },
                    }}
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
