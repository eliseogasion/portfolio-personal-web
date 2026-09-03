import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import RobloxSpotlight from '@/components/RobloxSpotlight';
import ProjectGallery from '@/components/ProjectGallery';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ContactFooter from '@/components/ContactFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <RobloxSpotlight />
        <ProjectGallery />
        <ExperienceSection />
        <SkillsSection />
      </main>
      <ContactFooter />
    </div>
  );
}
