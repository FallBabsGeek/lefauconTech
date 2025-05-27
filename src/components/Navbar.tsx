import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import logoImage from '../assets/logo.png'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6  p-0">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            
            <span className={`font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              <img src={logoImage} alt="logo" width={100} height={100} />
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#accueil" isScrolled={isScrolled}>Accueil</NavLink>
            <NavLink href="#services" isScrolled={isScrolled}>Services</NavLink>
            <NavLink href="#a-propos" isScrolled={isScrolled}>À Propos</NavLink>
            <NavLink href="#contact" isScrolled={isScrolled}>Contact</NavLink>
            <a 
              href="#devis" 
              className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
            >
              Demander un devis
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink href="#accueil" onClick={toggleMenu}>Accueil</MobileNavLink>
            <MobileNavLink href="#services" onClick={toggleMenu}>Services</MobileNavLink>
            <MobileNavLink href="#a-propos" onClick={toggleMenu}>À Propos</MobileNavLink>
            <MobileNavLink href="#contact" onClick={toggleMenu}>Contact</MobileNavLink>
            <a 
              href="#devis" 
              className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors text-center"
              onClick={toggleMenu}
            >
              Demander un devis
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
};

const NavLink: React.FC<NavLinkProps> = ({ href, children, isScrolled }) => (
  <a 
    href={href} 
    className={`font-medium hover:text-blue-600 transition-colors ${
      isScrolled ? 'text-gray-800' : 'text-white'
    }`}
  >
    {children}
  </a>
);

type MobileNavLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
};

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, children, onClick }) => (
  <a 
    href={href} 
    className="text-gray-800 font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
    onClick={onClick}
  >
    {children}
  </a>
);