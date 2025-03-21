
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
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
  
  return (
    <section id="products" className="py-20 bg-white" ref={containerRef}>
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <div className="text-accent font-medium mb-3">Our Collection</div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Crafted with Purpose</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every product is designed with intention, precision, and a deep understanding of how people interact with technology.
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Product Selector */}
          <div className="lg:w-1/3 space-y-4">
            <ScrollAnimation stagger>
              {products.map((product, index) => (
                <div 
                  key={product.id}
                  className={`p-5 rounded-xl transition-all duration-300 cursor-pointer ${
                    activeProduct === index 
                      ? 'bg-secondary border-l-4 border-accent shadow-md' 
                      : 'hover:bg-secondary/50'
                  }`}
                  onClick={() => setActiveProduct(index)}
                >
                  <h3 className="font-medium text-xl mb-2">{product.name}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>
              ))}
            </ScrollAnimation>
            
            <div className="pt-4">
              <Button variant="default" className="w-full lg:w-auto">
                View All Products
              </Button>
            </div>
          </div>
          
          {/* Product Display */}
          <div className="lg:w-2/3">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl bg-white">
              {products.map((product, index) => (
                <div 
                  key={product.id}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    activeProduct === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
                      <h4 className="text-black text-2xl font-medium mb-2">{product.name}</h4>
                      <p className="text-gray-700">{product.description}</p>
                    </div>
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
