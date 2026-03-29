'use client';

import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { CertificationsSection } from '@/components/sections/CertificationsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Navigation } from '@/components/ui/Navigation';

// Lazy load 3D scene for better performance
const DynamicScene3D = dynamic(
  () => import('@/components/3d/Scene3D').then((mod) => mod.Scene3D),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#0a0a0f] to-[#12121a]" />
    ),
  }
);

export default function Home() {
  return (
    <>
      {/* 3D Background - lazy loaded */}
      <DynamicScene3D />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Anna-el Gerard RABENANDRASANA. Tous droits réservés. Créé avec Next.js & React
        </div>
      </footer>
    </>
  );
}
