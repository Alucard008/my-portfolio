import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SwirlCursor from './components/SwirlCursor';
import ChatbotButton from './components/Chatbot/ChatbotButton';
import AdminButton from './components/Admin/AdminButton';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366F1', // Indigo 500
      contrastText: '#fff',
    },
    secondary: {
      main: '#A855F7', // Purple 500
      contrastText: '#fff',
    },
    accent: {
      main: '#1DE782', // Green accent
      contrastText: '#000',
    },
    background: {
      default: '#030014', // Dark purple/black background
      paper: 'rgba(255, 255, 255, 0.05)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SwirlCursor />
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      <ChatbotButton />
      <AdminButton />
    </ThemeProvider>
  );
}

export default App;
