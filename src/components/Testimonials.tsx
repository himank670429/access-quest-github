
import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const testimonials = [
  {
    id: 1,
    quote: "The attention to detail is remarkable. It's refreshing to use a product where every aspect has been thoughtfully designed.",
    author: "Alex Johnson",
    role: "Design Director",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    id: 2,
    quote: "Elegant, intuitive, and just works. This is what technology should feel like - it disappears and lets you focus on what matters.",
    author: "Sarah Chen",
    role: "Product Manager",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    id: 3,
    quote: "I've never experienced such a seamless integration of form and function. The simplicity is deceptive - there's incredible power under the hood.",
    author: "Michael Rivera",
    role: "Tech Enthusiast",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 5
  },
  {
    id: 4,
    quote: "The minimalist approach doesn't compromise functionality. If anything, it enhances the experience by removing unnecessary distractions.",
    author: "Emily Tanaka",
    role: "UX Researcher",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      handleNext();
    }
    
    if (touchStart - touchEnd < -100) {
      handlePrev();
    }
  };
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, [activeIndex]);

  return (
    <section id="testimonials" className="py-24 relative bg-primary/5">
      <div className="container px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <div className="text-accent font-medium mb-3">Testimonials</div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">What People Are Saying</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our community has to say about our products.
            </p>
          </div>
        </ScrollAnimation>
        
        <div 
          ref={containerRef}
          className="relative max-w-4xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-background rounded-2xl p-8 md:p-10 glass-card">
                    <div className="flex items-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg md:text-xl font-medium mb-8 italic text-pretty">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author} 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                        loading="lazy"
                      />
                      <div>
                        <div className="font-medium">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full bg-background border border-border hover:bg-secondary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeIndex === index 
                      ? 'bg-accent w-8' 
                      : 'bg-accent/30 hover:bg-accent/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-background border border-border hover:bg-secondary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
