import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { ChevronDown, Menu, X, Globe } from 'lucide-react';
import logo from '@/assets/roadrunner-logo.jpeg';

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Roadrunner Mechanics Logo" className="w-12 h-12 object-contain" />
            <span className="font-bold text-xl">Roadrunner Mechanics</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {t('home')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {t('services')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {t('about')}
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {t('testimonials')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {t('contact')}
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-smooth"
              >
                <Globe className="w-4 h-4" />
                <span>{language.toUpperCase()}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-card border border-border rounded-lg shadow-card py-1">
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setIsLangOpen(false);
                    }}
                    className="block w-full px-4 py-2 text-left text-foreground hover:bg-muted transition-smooth"
                  >
                    {t('english')}
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('nl');
                      setIsLangOpen(false);
                    }}
                    className="block w-full px-4 py-2 text-left text-foreground hover:bg-muted transition-smooth"
                  >
                    {t('dutch')}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="py-4 space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-smooth"
              >
                {t('home')}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-smooth"
              >
                {t('services')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-smooth"
              >
                {t('about')}
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-smooth"
              >
                {t('testimonials')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-smooth"
              >
                {t('contact')}
              </button>
              
              <div className="px-4 py-2 border-t border-border mt-2">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-muted-foreground">{t('language')}:</span>
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setIsMenuOpen(false);
                    }}
                    className={`text-sm px-2 py-1 rounded ${language === 'en' ? 'bg-primary text-primary-foreground' : 'text-foreground hover:text-primary'} transition-smooth`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('nl');
                      setIsMenuOpen(false);
                    }}
                    className={`text-sm px-2 py-1 rounded ${language === 'nl' ? 'bg-primary text-primary-foreground' : 'text-foreground hover:text-primary'} transition-smooth`}
                  >
                    NL
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
