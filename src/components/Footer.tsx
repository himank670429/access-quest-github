
import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Products",
      links: [
        { name: "Featured", href: "#" },
        { name: "New Arrivals", href: "#" },
        { name: "Bestsellers", href: "#" },
        { name: "Special Offers", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Sustainability", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "FAQs", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Shipping Policy", href: "#" },
        { name: "Returns & Exchanges", href: "#" }
      ]
    }
  ];

  return (
    <footer id="contact" className="bg-primary text-white">
      <div className="container px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="font-bold text-xl mb-6">
              Aesthetic
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Where simplicity meets excellence. We craft products that enhance your life through thoughtful design 
              and uncompromising quality.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-accent mr-3 mt-0.5" />
                <div className="text-white/80">
                  123 Design Avenue<br />
                  Suite 456<br />
                  San Francisco, CA 94103
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-accent mr-3" />
                <a href="tel:+14155552671" className="text-white/80 hover:text-white transition-colors">
                  +1 (415) 555-2671
                </a>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-accent mr-3" />
                <a href="mailto:hello@aesthetic.com" className="text-white/80 hover:text-white transition-colors">
                  hello@aesthetic.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Footer Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-lg mb-6">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors flex items-center group"
                    >
                      <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/70 text-sm">
            © {currentYear} Aesthetic. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
