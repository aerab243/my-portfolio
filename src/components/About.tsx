import { useEffect, useRef, useState } from 'react';
import { Award, Briefcase, Code2, Users } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    technologies: 0
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setAnimatedStats({
          experience: Math.floor(personalInfo.stats.experience * progress),
          projects: Math.floor(personalInfo.stats.projects * progress),
          clients: Math.floor(personalInfo.stats.clients * progress),
          technologies: Math.floor(personalInfo.stats.technologies * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimatedStats(personalInfo.stats);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const stats = [
    {
      icon: <Award className="w-8 h-8" />,
      value: animatedStats.experience,
      label: "Années d'expérience",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      value: animatedStats.projects,
      label: "Projets réalisés",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: animatedStats.clients,
      label: "Clients satisfaits",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      value: animatedStats.technologies,
      label: "Technologies maîtrisées",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              À propos de moi
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Content grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Bio */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Passionné par la technologie et l'innovation
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600"></div>
                  <span className="text-slate-700 dark:text-slate-300">
                    <strong>Email:</strong> {personalInfo.email}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600"></div>
                  <span className="text-slate-700 dark:text-slate-300">
                    <strong>Téléphone:</strong> {personalInfo.phone}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600"></div>
                  <span className="text-slate-700 dark:text-slate-300">
                    <strong>Localisation:</strong> {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Parcours professionnel
              </h3>
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-cyan-500">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-cyan-500"></div>
                  <h4 className="font-bold text-slate-900 dark:text-white">01/2025 - Présent</h4>
                  <p className="text-slate-600 dark:text-slate-300">IT Manager</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">NEXUS-SARLU</p>
                </div>
                <div className="relative pl-8 border-l-2 border-purple-500">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                  <h4 className="font-bold text-slate-900 dark:text-white">10/2024 – 03/2025</h4>
                  <p className="text-slate-600 dark:text-slate-300">FREELANCER - MEDIA PROJECT</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">DCDMRESEARCH</p>
                </div>
                <div className="relative pl-8 border-l-2 border-pink-500">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-pink-500"></div>
                  <h4 className="font-bold text-slate-900 dark:text-white">08/2024 – 01/2025</h4>
                  <p className="text-slate-600 dark:text-slate-300">IT Administrator and Software Engineer</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Groupe Externalisation</p>
                </div>
                <div className="relative pl-8 border-l-2 border-orange-500">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-orange-500"></div>
                  <h4 className="font-bold text-slate-900 dark:text-white">07/2024 – 09/2024</h4>
                  <p className="text-slate-600 dark:text-slate-300">SUPERVISEUR PROJECT</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Groupe Externalisation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`relative group transition-all duration-1000 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                      {stat.value}+
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
