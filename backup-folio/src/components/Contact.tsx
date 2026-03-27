import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Le sujet est requis';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        console.error('Erreur:', data.message);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Erreur de réseau:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Me Contacter
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Une question ? Un projet ? N'hésitez pas à me contacter
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Informations de contact
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Je suis toujours ouvert aux nouvelles opportunités et collaborations. N'hésitez pas à me contacter pour discuter de vos projets.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Email</h4>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Téléphone</h4>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-orange-600 flex items-center justify-center text-white flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Localisation</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Réseaux sociaux</h4>
                <div className="flex gap-4">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-white dark:bg-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-white hover:bg-gradient-to-br hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg border border-slate-200 dark:border-slate-700"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-white dark:bg-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-white hover:bg-gradient-to-br hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg border border-slate-200 dark:border-slate-700"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={personalInfo.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-white dark:bg-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-white hover:bg-gradient-to-br hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg border border-slate-200 dark:border-slate-700"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border ${
                      errors.name ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'
                    } text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors`}
                    placeholder="Votre nom"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border ${
                      errors.email ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'
                    } text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors`}
                    placeholder="votre@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border ${
                      errors.subject ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'
                    } text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors`}
                    placeholder="Sujet de votre message"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border ${
                      errors.message ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'
                    } text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors resize-none`}
                    placeholder="Votre message..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Envoyer le message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg">
                    Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-lg">
                    Une erreur est survenue. Veuillez réessayer.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
