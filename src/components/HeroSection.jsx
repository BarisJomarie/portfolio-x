import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      }
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Jomarie</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Baris</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Hello, I am a BSIT student graduate from Eulogio "Amang" Rodriguez Institute of Science and Technology.
            I am passionate about web development and I am eager to learn and grow in this field. 
            I am always looking for new challenges and opportunities to improve my skills. 
            I am excited to share my projects and experiences with you through this portfolio website.
          </p>

          <div className="opacity-0 animate-fade-in-delay-4">
            <a 
              href="#projects"
              className="cosmic-button"
            >
              View My Projects
            </a>
          </div>
        </div>
      </div>

      <div className={cn(
        "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce",
        isScrolled ? "opacity-0 animate-fade-out duration-300" : "opacity-1 animate-fade-in duration-300"
      )}>
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
    );
}