
import { useEffect, useRef, useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

const products = [
  {
    id: 1,
    name: "Premium Device",
    description: "Sleek, powerful, and designed with precision.",
    image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    name: "Essential Accessory",
    description: "Complement your experience with our premium accessory.",
    image: "https://images.unsplash.com/photo-1593121925328-369cc8459c08?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    name: "Smart Solution",
    description: "Intelligent design for the modern lifestyle.",
    image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

const ProductDisplay = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  
  // Progressive image loading logic
  useEffect(() => {
    const images = imageRefs.current.filter(Boolean) as HTMLImageElement[];
    
    images.forEach((img) => {
      const actualSrc = img.dataset.src;
      if (!actualSrc) return;
      
      const tempImage = new Image();
      tempImage.src = actualSrc;
      tempImage.onload = () => {
        img.src = actualSrc;
        img.classList.add('loaded');
      };
    });
  }, []);
  
  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const scrollProgress = 1 - (rect.top + 300) / window.innerHeight;
      
      if (scrollProgress > 0 && scrollProgress < 1) {
        const translateY = Math.min(200, scrollProgress * 100);
        imageRefs.current.forEach((img, index) => {
          if (img) {
            const speedFactor = 0.8 + (index * 0.2);
            img.style.transform = `translateY(-${translateY * speedFactor}px)`;
          }
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="products" className="py-24 relative overflow-hidden" ref={containerRef}>
      <div className="container px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <div className="text-accent font-medium mb-3">Our Collection</div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Crafted with Purpose</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every product is designed with intention, precision, and a deep understanding of how people interact with technology.
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Selector */}
          <div className="lg:w-1/3">
            <ScrollAnimation stagger className="space-y-6">
              {products.map((product, index) => (
                <div 
                  key={product.id}
                  className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                    activeProduct === index 
                      ? 'bg-secondary border-l-4 border-accent' 
                      : 'hover:bg-secondary/50'
                  }`}
                  onClick={() => setActiveProduct(index)}
                >
                  <h3 className="font-medium text-xl mb-2">{product.name}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>
              ))}
            </ScrollAnimation>
          </div>
          
          {/* Product Display */}
          <div className="lg:w-2/3">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-xl">
              {products.map((product, index) => (
                <div 
                  key={product.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    activeProduct === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                  <img
                    ref={el => imageRefs.current[index] = el}
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmMWYxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjwvc3ZnPg=="
                    data-src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out"
                    style={{ transform: 'scale(1.1)' }}
                  />
                  <div className="absolute bottom-0 left-0 p-8 z-20">
                    <h4 className="text-white text-2xl font-medium mb-2">{product.name}</h4>
                    <p className="text-white/80">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
