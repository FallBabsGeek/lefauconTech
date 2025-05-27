import React from 'react';
import { Camera, PhoneCall, Fingerprint, Lock, Key, Network } from 'lucide-react';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
      <div className="p-3 bg-blue-100 rounded-full mb-4 text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Caméras de Surveillance",
      description: "Solutions de vidéosurveillance avancées pour sécuriser vos locaux, avec enregistrement et accès à distance.",
      icon: <Camera size={28} />
    },
    {
      id: 2,
      title: "Visiophones",
      description: "Systèmes de visiophone modernes permettant de voir et communiquer avec vos visiteurs avant de leur donner accès.",
      icon: <PhoneCall size={28} />
    },
    {
      id: 3,
      title: "Systèmes de Pointage",
      description: "Solutions de pointage par badge, biométrie ou code pour suivre les entrées et sorties de manière fiable.",
      icon: <Fingerprint size={28} />
    },
    {
      id: 4,
      title: "Contrôle d'Accès",
      description: "Systèmes sophistiqués pour gérer précisément l'accès à différentes zones de vos locaux.",
      icon: <Lock size={28} />
    },
    {
      id: 5,
      title: "Serrures Électroniques",
      description: "Serrures haute sécurité avec options de déverrouillage par carte, code, smartphone ou empreinte digitale.",
      icon: <Key size={28} />
    },
    {
      id: 6,
      title: "Infrastructure Réseau",
      description: "Installation et configuration de réseaux informatiques sécurisés pour connecter tous vos systèmes.",
      icon: <Network size={28} />
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            LeFaucon-SecuriTech vous propose une gamme complète de solutions de sécurité 
            adaptées à vos besoins spécifiques.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#devis" 
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 
            transition-colors inline-flex items-center"
          >
            Demander un devis personnalisé
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};