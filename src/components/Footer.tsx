import React from 'react';
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl">LeFaucon-SecuriTech</span>
            </div>
            <p className="text-gray-400 mb-6">
              Solutions de sécurité technologique avancées pour les particuliers et les entreprises. 
              Protection, fiabilité et tranquillité d'esprit garanties.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Liens Rapides</h3>
            <ul className="space-y-3">
              <li><a href="#accueil" className="text-gray-400 hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Nos Services</a></li>
              <li><a href="#a-propos" className="text-gray-400 hover:text-white transition-colors">À Propos</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#devis" className="text-gray-400 hover:text-white transition-colors">Demander un Devis</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Nos Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Caméras de Surveillance</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Visiophones</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Systèmes de Pointage</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Contrôle d'Accès</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Serrures Électroniques</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Infrastructure Réseau</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-blue-400 mr-3 flex-shrink-0 mt-1" />
                <span>123 Avenue de la Sécurité<br />15000 Dakar, Senegal</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-blue-400 mr-3 flex-shrink-0" />
                <a href="tel:+33123456789" className="hover:text-blue-400 transition-colors">+221 384 29 27</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-blue-400 mr-3 flex-shrink-0" />
                <a href="mailto:contact@lefaucon-securitech.fr" className="hover:text-blue-400 transition-colors">contact@lefaucon-securitech.tech</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} LeFaucon-SecuriTech. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Politique de confidentialité</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Conditions d'utilisation</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Mentions légales</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};