'use client';

import { Scene3D } from '@/components/3d/Scene3D';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Navigation } from '@/components/ui/Navigation';

export default function Home() {
  return (
    <>
      {/* 3D Background */}
      <Scene3D />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <BlogSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Portfolio. Créé avec Next.js & Three.js
        </div>
      </footer>
    </>
  );
}
