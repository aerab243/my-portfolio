import { useEffect, useRef, useState } from 'react';
import { Clock } from 'lucide-react';

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section title */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Mes Projets
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Coming soon message */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-12 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Clock className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Projets en Attente
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Je suis actuellement en train de développer de nouveaux projets passionnants.
                Cette section sera bientôt mise à jour avec mes dernières réalisations.
              </p>
              <div className="mt-8">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold">
                  <Clock size={18} />
                  Bientôt disponible
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
