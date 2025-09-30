import { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';

function App() {
  useEffect(() => {
    console.log(`
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║   👋 Bonjour et bienvenue sur mon portfolio!                 ║
║                                                               ║
║   🚀 Développé avec React, TypeScript & Tailwind CSS         ║
║   💻 Par Anna-el Gerard RABENANDRASANA                       ║
║                                                               ║
║   🔗 Explorez mes projets et n'hésitez pas à me contacter!  ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
    `);
  }, []);

  return (
    <ThemeProvider>
      <Loader />
      <div className="min-h-screen">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
