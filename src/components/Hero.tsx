import { useEffect, useState } from 'react';
import { Github, Linkedin, Twitter, Mail, Download, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = personalInfo.title;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile image */}
            <div className="mb-8 inline-block">
            <div className="relative w-40 h-40 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-spin-slow blur-md"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800 dark:border-slate-900">
              <img
                src="../../public/assets/image/agr.jpg"
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
              </div>
            </div>
            </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white animate-fade-in-up">
            {personalInfo.name}
          </h1>

          {/* Typing animation title */}
          <div className="h-16 mb-6">
            <h2 className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 animate-fade-in-up animation-delay-200">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in-up animation-delay-400">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
            >
              Voir mes projets
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border-2 border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
            >
              Me contacter
            </button>
            <a
              href="#"
              className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-full font-semibold border-2 border-white/20 hover:bg-white/10 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={20} />
              Télécharger CV
            </a>
          </div>

          {/* Social links */}
          <div className="flex gap-6 justify-center animate-fade-in-up animation-delay-600">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20"
            >
              <Github size={24} />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={personalInfo.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20"
            >
              <Twitter size={24} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer hover:text-cyan-400 transition-colors"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};
