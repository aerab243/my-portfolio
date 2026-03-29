'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { certifications } from '@/data/certifications';

gsap.registerPlugin(ScrollTrigger);

export function CertificationsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cert-animate', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="certifications"
      ref={containerRef}
      className="min-h-screen py-32 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <p className="cert-animate text-sm font-mono text-accent mb-2 tracking-wider">
            04 — Certifications
          </p>
          <h2 className="cert-animate text-4xl md:text-5xl font-bold text-foreground mb-4">
            Certifications & Formations
          </h2>
          <p className="cert-animate text-foreground-muted max-w-2xl mx-auto">
            Certifications professionnelles validant mes compétences techniques
          </p>
        </div>

        <div className="grid gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="cert-animate group bg-background-secondary rounded-xl p-6 border border-border hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-foreground-muted text-sm">
                    {cert.institution} · {cert.year}
                  </p>
                  {cert.credentialId && (
                    <p className="text-foreground-muted/60 text-xs mt-2 font-mono">
                      ID: {cert.credentialId}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">Vérifié</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
