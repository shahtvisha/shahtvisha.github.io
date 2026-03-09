import FloatingNav from "@/components/FloatingNav";
import OrbitalHero from "@/components/OrbitalHero";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import FooterSection from "@/components/FooterSection";
import ParallaxSection from "@/components/ParallaxSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <OrbitalHero />
      <ParallaxSection offset={50}>
        <AboutSection />
      </ParallaxSection>
      <ParallaxSection offset={40}>
        <ProjectsSection />
      </ParallaxSection>
      <ParallaxSection offset={30}>
        <SkillsSection />
      </ParallaxSection>
      <FooterSection />
    </div>
  );
};

export default Index;
