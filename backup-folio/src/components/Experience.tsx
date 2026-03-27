import { useEffect, useRef, useState } from 'react';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
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
      id="experience"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Expérience Professionnelle
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Mon parcours professionnel et les réalisations marquantes
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 rounded-full"></div>

            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-1000 delay-${index * 100} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className={`md:flex md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                              {exp.position}
                            </h3>
                            <p className="text-lg font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
                              {exp.company}
                            </p>
                          </div>
                          <button
                            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                            className="text-purple-600 dark:text-purple-400 hover:scale-110 transition-transform"
                          >
                            <ChevronRight
                              size={24}
                              className={`transform transition-transform duration-300 ${
                                expandedIndex === index ? 'rotate-90' : ''
                              }`}
                            />
                          </button>
                        </div>

                        <div className="flex flex-wrap gap-3 mb-4">
                          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <Calendar size={16} />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <MapPin size={16} />
                            {exp.location}
                          </div>
                        </div>

                        {/* Achievements - expandable */}
                        <div
                          className={`overflow-hidden transition-all duration-500 ${
                            expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <ul className="space-y-2 mb-4">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li
                                key={achIndex}
                                className="flex items-start gap-2 text-slate-700 dark:text-slate-300"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 mt-2 flex-shrink-0"></div>
                                <span className="text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 text-cyan-700 dark:text-cyan-300 rounded-full text-xs font-medium border border-cyan-500/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 border-4 border-white dark:border-slate-900 shadow-lg"></div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block md:w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
