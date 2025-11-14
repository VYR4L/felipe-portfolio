import { Box } from '@mui/material';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Hero } from './components/landing/01_Hero';
import { AboutMe } from './components/landing/02_AboutMe';
import { Skills } from './components/landing/03_Skills';
import { Projects } from './components/landing/04_Projects';
import { Contact } from './components/landing/05_Contact';

function App() {
  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header onNavigate={handleNavigate} />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Hero onNavigate={handleNavigate} />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
