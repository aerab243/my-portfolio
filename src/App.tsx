import { useEffect, useState } from 'react';
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
  const [currentSection, setCurrentSection] = useState('home');

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

  // SEO: Update page title based on current section
  useEffect(() => {
    const sectionTitles = {
      home: 'Anna-el Gerard RABENANDRASANA - Développeur Full-Stack | Portfolio React TypeScript',
      about: 'À Propos - Anna-el Gerard RABENANDRASANA | Développeur Full-Stack',
      skills: 'Compétences Techniques - React, TypeScript, Node.js | Portfolio Anna-el',
      experience: 'Expérience Professionnelle - Développeur Full-Stack | Anna-el Gerard',
      projects: 'Projets - Portfolio Développeur Web | Anna-el Gerard RABENANDRASANA',
      certifications: 'Certifications - Développeur Full-Stack | Anna-el Gerard',
      contact: 'Contact - Anna-el Gerard RABENANDRASANA | Développeur Full-Stack'
    };

    document.title = sectionTitles[currentSection as keyof typeof sectionTitles] ||
                    'Anna-el Gerard RABENANDRASANA - Développeur Full-Stack | Portfolio React TypeScript';

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    const descriptions = {
      home: 'Portfolio professionnel d\'Anna-el Gerard RABENANDRASANA, développeur Full-Stack spécialisé en React, TypeScript, Node.js. Découvrez mes projets, compétences et expériences.',
      about: 'Découvrez le parcours d\'Anna-el Gerard RABENANDRASANA, développeur Full-Stack passionné par les technologies modernes et l\'innovation digitale.',
      skills: 'Compétences techniques d\'Anna-el Gerard RABENANDRASANA : React, TypeScript, Node.js, Tailwind CSS, et bien plus encore.',
      experience: 'Expérience professionnelle d\'Anna-el Gerard RABENANDRASANA en développement web et Full-Stack.',
      projects: 'Découvrez les projets développés par Anna-el Gerard RABENANDRASANA, développeur Full-Stack.',
      certifications: 'Certifications et formations d\'Anna-el Gerard RABENANDRASANA en développement web.',
      contact: 'Contactez Anna-el Gerard RABENANDRASANA pour vos projets de développement web.'
    };

    if (metaDescription) {
      metaDescription.setAttribute('content',
        descriptions[currentSection as keyof typeof descriptions] ||
        descriptions.home
      );
    }
  }, [currentSection]);

  // Intersection Observer for section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
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
