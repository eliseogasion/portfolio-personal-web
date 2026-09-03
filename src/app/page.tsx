import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CinematicRenderShowcase from '@/components/CinematicRenderShowcase';
import ProjectGallery from '@/components/ProjectGallery';
import Estudio55Section from '@/components/Estudio55Section';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ContactFooter from '@/components/ContactFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050507] text-zinc-100 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CinematicRenderShowcase />
        <ProjectGallery />
        <Estudio55Section />
        <ExperienceSection />
        <SkillsSection />
      </main>
      <ContactFooter />
    </div>
  );
}
