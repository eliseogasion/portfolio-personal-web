import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Estudio55Section from '@/components/Estudio55Section';
import RobloxSpotlight from '@/components/RobloxSpotlight';
import ProjectGallery from '@/components/ProjectGallery';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ContactFooter from '@/components/ContactFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050507] text-zinc-100 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Estudio55Section />
        <RobloxSpotlight />
        <ProjectGallery />
        <ExperienceSection />
        <SkillsSection />
      </main>
      <ContactFooter />
    </div>
  );
}
