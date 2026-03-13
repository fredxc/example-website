import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-lg text-gray-900">Professional</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t('nav.contact')}
            </button>
          </nav>

          {/* Language Switcher & CTA */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1 bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setLanguage('pt')}
                className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                  language === 'pt'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                PT
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                  language === 'en'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('nl')}
                className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                  language === 'nl'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                NL
              </button>
            </div>

            <Button
              onClick={() => window.open('https://wa.me/31612345678', '_blank')}
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full px-6"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-600 hover:text-gray-900 transition-colors text-left"
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-gray-900 transition-colors text-left"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-gray-900 transition-colors text-left"
              >
                {t('nav.contact')}
              </button>
              
              {/* Mobile Language Switcher */}
              <div className="flex sm:hidden items-center gap-2 pt-2">
                <span className="text-sm text-gray-600">Idioma:</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLanguage('pt')}
                    className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                      language === 'pt'
                        ? 'bg-amber-500 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    PT
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                      language === 'en'
                        ? 'bg-amber-500 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage('nl')}
                    className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                      language === 'nl'
                        ? 'bg-amber-500 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    NL
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
