import { Link, Mail, Map, MapPin, Phone, Send } from "lucide-react";
import {cn} from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useState } from "react";

export const ContactSection = () => {
  const {toast} = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: 'Message did not sent!',
        description: "This function is still under maintenance. Sorry!",
      });

      setIsSubmitting(false);
    }, 1500);
  };


  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

          <div className="space-y-6 justify-center text-start">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary"/>
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a 
                  href="mailto:jomarie.baris@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  jomarie.baris@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary"/>
              </div>
              <div>
                <h4 className="font-medium">Phone Number</h4>
                <a 
                  href="tel:+639204260825"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +63 920 426 0825
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary"/>
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <a 
                  href="#" //google maps
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Catmon Malabon City, <br/> Metro Manila 1470
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h4 className="font-medium mb-4">Connect With Me</h4>
            <div className="px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 text-middle gap-4">
                <a 
                  href="https://www.facebook.com/jomarie.baris.92"
                  target="__blank"
                  className={cn(
                    "px-2 py-1 text-sm rounded-full bg-secondary text-foreground border",
                    "hover:bg-primary transition-all duration-300"
                  )}
                >
                  Facebook
                </a>
                <a 
                  href="https://x.com/pgnover9000"
                  target="__blank"
                  className={cn(
                    "px-2 py-1 text-sm rounded-full bg-secondary text-foreground border",
                    "hover:bg-primary transition-all duration-300"
                  )}
                >
                  X
                </a>
                <a 
                  href="https://www.instagram.com/ychjcyaqftjb/"
                  target="__blank"
                  className={cn(
                    "px-2 py-1 text-sm rounded-full bg-secondary text-foreground border",
                    "hover:bg-primary transition-all duration-300"
                  )}
                >
                  Instagram
                </a>
                <a 
                  href="https://www.linkedin.com/in/jomarie-baris-3214283b0/"
                  target="__blank"
                  className={cn(
                    "px-2 py-1 text-sm rounded-full bg-secondary text-foreground border",
                    "hover:bg-primary transition-all duration-300"
                  )}
                >
                  LinkedIn
                </a>
              </div>  
            </div>
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg shadow-xs">
          <h3 className="text-2xl font-semibold mb-6">Send a message</h3>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label 
                htmlFor="name"
                className="block text-sm font-medium mb-2"
              >
                Your Name
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className={cn(
                  "w-full px-4 py-3 rounded-md border border-input bg-background",
                  "focus:outline-none focus:ring-1 focus:ring-primary/50"
                )}
                placeholder="Jomarie Baris..."
              />
            </div>
            <div>
              <label 
                htmlFor="name"
                className="block text-sm font-medium mb-2"
              >
                Your Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className={cn(
                  "w-full px-4 py-3 rounded-md border border-input bg-background",
                  "focus:outline-none focus:ring-1 focus:ring-primary/50"
                )}
                placeholder="example@gmail.com"
              />
            </div>
            <div>
              <label 
                htmlFor="name"
                className="block text-sm font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message" 
                name="message" 
                required 
                className={cn(
                  "w-full px-4 py-3 rounded-md border border-input bg-background resize-none",
                  "focus:outline-none focus:ring-1 focus:ring-primary/50"
                )}
                placeholder="Dear Charo..."
              />
            </div>

            <button 
              type="submit"
              className={cn(
                "cosmic-button w-full flex items-center justify-center gap-2",
              )}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending" : "Send your Message"}
              <Send size={16}/> 
            </button>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
};