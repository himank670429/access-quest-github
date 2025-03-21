
import { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left - width / 2) / 20;
      const y = (clientY - top - height / 2) / 20;
      
      const elements = heroRef.current.querySelectorAll('.parallax');
      elements.forEach((el: Element) => {
        if (el instanceof HTMLElement) {
          const speedX = el.dataset.speedX ? parseFloat(el.dataset.speedX) : -0.2;
          const speedY = el.dataset.speedY ? parseFloat(el.dataset.speedY) : -0.2;
          el.style.transform = `translate(${x * speedX}px, ${y * speedY}px)`;
        }
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-16 pb-20 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Floating elements */}
      <div className="parallax absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-accent/30 opacity-20" data-speed-x="0.5" data-speed-y="0.8"></div>
      <div className="parallax absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full border border-accent/20 opacity-20" data-speed-x="-0.6" data-speed-y="-0.3"></div>
      
      <div className="container px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollAnimation>
            <div className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Introducing the future of design
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation className="mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
              <span className="block">Beauty in simplicity.</span>
              <span className="block mt-2">Elegance in every detail.</span>
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation className="mb-12">
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Experience the perfect harmony of form and function. A carefully crafted design 
              that enhances your life without getting in the way.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#products"
                className="inline-flex items-center justify-center text-white bg-primary hover:bg-primary/90 transition-colors px-8 py-3.5 rounded-full font-medium group"
              >
                Explore Products
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center bg-secondary hover:bg-secondary/70 transition-colors px-8 py-3.5 rounded-full font-medium"
              >
                Learn More
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      
      {/* Animated gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </div>
  );
};

export default Hero;
