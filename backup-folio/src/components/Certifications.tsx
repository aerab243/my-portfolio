import { useEffect, useRef, useState } from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
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
      id="certifications"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Certifications & Formations
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Certifications professionnelles validant mes compétences techniques
            </p>
          </div>

          {/* Certifications grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                onMouseEnter={() => setFlippedIndex(index)}
                onMouseLeave={() => setFlippedIndex(null)}
              >
                <div className="relative h-80 perspective-1000">
                  <div
                    className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                      flippedIndex === index ? 'rotate-y-180' : ''
                    }`}
                  >
                    {/* Front */}
                    <div className="absolute inset-0 backface-hidden">
                      <div className="h-full bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center text-center">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg">
                          <Award className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                          {cert.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-2">
                          {cert.institution}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500">
                          <Calendar size={16} />
                          {cert.date}
                        </div>
                        <div className="mt-6 text-xs text-slate-500 dark:text-slate-500 italic">
                          Survolez pour plus de détails
                        </div>
                      </div>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180">
                      <div className="h-full bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center text-center text-white">
                        <Award className="w-16 h-16 mb-6" />
                        <h3 className="text-xl font-bold mb-4">
                          {cert.title}
                        </h3>
                        <div className="space-y-2 mb-6">
                          <p className="text-sm">
                            <strong>Institution:</strong><br />
                            {cert.institution}
                          </p>
                          <p className="text-sm">
                            <strong>Date d'obtention:</strong><br />
                            {cert.date}
                          </p>
                          <p className="text-sm font-mono text-xs">
                            <strong>ID:</strong><br />
                            {cert.credentialId}
                          </p>
                        </div>
                        <a
                          href="#"
                          className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink size={16} />
                          Vérifier
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional info */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-slate-100 dark:bg-slate-800 rounded-2xl">
              <Award className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              <p className="text-slate-700 dark:text-slate-300">
                Formation continue et veille technologique permanente
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
