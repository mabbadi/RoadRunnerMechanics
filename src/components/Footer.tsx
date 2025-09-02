import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, label: 'Facebook', href: '#' },
    { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', href: '#' },
    { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', href: '#' },
  ];

  return (
    <footer className="bg-gradient-dark border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center font-bold text-primary-foreground">
                RR
              </div>
              <span className="font-bold text-xl">Roadrunner Mechanics</span>
            </div>
            <p className="text-muted-foreground">
              Your trusted partner for comprehensive automotive care across the Netherlands.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              {['home', 'services', 'about', 'testimonials', 'contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors capitalize"
                >
                  {t(link)}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Our Services</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Electric Vehicle Service</p>
              <p>Traditional Auto Repair</p>
              <p>Mobile Mechanics</p>
              <p>Car Consultation</p>
              <p>Vehicle Modification</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <a 
                href="tel:+31627437876"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+31 627437876</span>
              </a>
              <a 
                href="mailto:roadrunnermechanics@outlook.com"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors break-all"
              >
                <Mail className="w-4 h-4" />
                <span>roadrunnermechanics@outlook.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              {t('copyright')}
            </p>

            <div className="flex items-center space-x-1">
              <span className="text-muted-foreground text-sm mr-4">{t('follow_us')}</span>
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary hover:bg-primary/10"
                  onClick={() => window.open(social.href, '_blank')}
                >
                  {social.icon}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;