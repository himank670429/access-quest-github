
import { Check, BarChart3, Layers, Lightbulb, Maximize2 } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const features = [
  {
    icon: <Lightbulb className="h-6 w-6 text-accent" />,
    title: "Intuitive Design",
    description: "Every interaction has been carefully considered to feel natural and effortless."
  },
  {
    icon: <Layers className="h-6 w-6 text-accent" />,
    title: "Premium Materials",
    description: "Crafted with high-quality materials that look beautiful and are built to last."
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-accent" />,
    title: "Enhanced Performance",
    description: "Optimized for speed and efficiency to handle any task with ease."
  },
  {
    icon: <Maximize2 className="h-6 w-6 text-accent" />,
    title: "Seamless Integration",
    description: "Works perfectly with your existing ecosystem of devices and services."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative bg-secondary/50">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-60"></div>
      
      <div className="container px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <div className="text-accent font-medium mb-3">Why Choose Us</div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Thoughtfully Designed</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We obsess over the details so you don't have to. Every feature serves a purpose, creating a cohesive experience.
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollAnimation key={index}>
              <div className="bg-background rounded-xl p-8 h-full glass-card hover:translate-y-[-4px] transition-transform">
                <div className="p-3 bg-accent/10 rounded-lg inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
        
        <ScrollAnimation className="mt-20">
          <div className="bg-primary rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-12 flex flex-col justify-center">
                <h3 className="text-white text-2xl md:text-3xl font-medium mb-6">
                  Designed for what matters
                </h3>
                <p className="text-white/80 mb-8">
                  We've reimagined what technology can be when it's thoughtfully designed 
                  around human needs and desires.
                </p>
                <ul className="space-y-4">
                  {['Phenomenal attention to detail', 'Sustainable materials', 'Lifetime support'].map((item, i) => (
                    <li key={i} className="flex items-center text-white/90">
                      <span className="flex items-center justify-center bg-accent w-6 h-6 rounded-full mr-3">
                        <Check className="h-3.5 w-3.5 text-white" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative min-h-[300px]">
                <img 
                  src="https://images.unsplash.com/photo-1606170033648-5d55a3edf715?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Product showcase" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Features;
