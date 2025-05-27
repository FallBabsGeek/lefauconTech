import React from 'react';
import banImage from '../assets/ban.webp';

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="accueil" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-blue-900 to-gray-900 text-white"
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url(${banImage})`,
      //  backgroundImage: "url('https://images.pexels.com/photos/3760810/pexels-photo-3760810.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundBlendMode: "overlay"
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Sécurité Technologique <br />
            <span className="text-blue-400">de Confiance</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            LeFaucon-SecuriTech vous propose des solutions de sécurité avancées pour protéger 
            vos biens, votre entreprise et vos proches avec des technologies de pointe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#services" 
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors text-center"
            >
              Découvrir nos services
            </a>
            <a 
              href="#devis" 
              className="px-6 py-3 bg-white text-blue-900 font-medium rounded-md hover:bg-gray-100 transition-colors text-center"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};