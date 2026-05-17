import { Navbar } from "@/components/Navbar"
import { ThemeToggle } from "@/components/ThemeToggle"
import { StarBackground } from '@/components/StarBackground'
import { HeroSection } from "@/components/HeroSection"
import { AboutMeSection } from "@/components/AboutMeSection"
import { SkillsSection } from "@/components/SkillsSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"

export const Home = () => {
  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/*TOGGLE THEME*/}
    <ThemeToggle />
    {/*BACKGROUND EFFECTS */}
    <StarBackground />
    {/*NAVBAR */}
    <Navbar />
    {/*MAIN CONTENT */}
    <main>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    
    {/*FOOTER */}
    <Footer />
  </div>
}