import OrbitalHero from "@/components/OrbitalHero";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <OrbitalHero />
      <AboutSection />
      <SkillsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
