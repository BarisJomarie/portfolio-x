import {cn} from "@/lib/utils";
import { Briefcase, Code, User } from "lucide-react";
import { useToast } from '@/hooks/use-toast';
import { useState } from "react";

export const AboutMeSection = () => {
  const {toast} = useToast();

  const handleDownloadCV = () => {
    toast({
      title: 'CV did not download!',
      description: "This function is still under maintenance. Sorry!",
    });
  };
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
            <p className="text-muted-foreground">
              So far my experience in web development is creating a full time website application for our school project.
              I don't have any real work experience yet,
              but I am still growing and improving my skills in web development.
              Use what I learned in school and apply it to my future projects.
            </p>
            <p className="text-muted-foreground">
              What i'm passionate about in web development is creating a beautiful and functional website.
              Easy to use and navigate, and responsive to different devices.
              By exploring different technologies and frameworks,
              I can create a website that is not only visually appealing but also provides a great user experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in touch
              </a>

              <a 
                download
                href="/cv_baris_jomarie.pdf"
                className={cn(
                  "px-6 py-2 rounded-full border border-primary text-primary",
                  "hover:bg-primary/70 transition-colors duration-300"
                )}
              >
                Download My CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Create responsive websites and web applications with modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Design intuitive and visually appealing user interfaces and experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Professional Experience</h4>
                  <p className="text-muted-foreground">
                    Gain valuable experience through internships and freelance projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};