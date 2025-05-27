import React from 'react';
import { Shield, Award, Clock, Users } from 'lucide-react';
import tccImage from '../assets/tcc.webp';

type ValueCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex items-start p-4">
      <div className="p-2 bg-blue-100 rounded-full mr-4 text-blue-600 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export const AboutSection: React.FC = () => {
  const values = [
    {
      id: 1,
      title: "Fiabilité",
      description: "Nous utilisons uniquement des équipements de haute qualité et des technologies éprouvées pour garantir la fiabilité de nos installations.",
      icon: <Shield size={24} />
    },
    {
      id: 2,
      title: "Expertise",
      description: "Notre équipe d'experts certifiés possède plus de 7 ans d'expérience dans le domaine de la sécurité technologique.",
      icon: <Award size={24} />
    },
    {
      id: 3,
      title: "Réactivité",
      description: "Nous intervenons rapidement en cas de besoin, avec un service d'assistance disponible 24h/24 et 7j/7 pour nos clients.",
      icon: <Clock size={24} />
    },
    {
      id: 4,
      title: "Personnalisation",
      description: "Chaque solution est personnalisée selon vos besoins spécifiques, votre budget et la configuration de vos locaux.",
      icon: <Users size={24} />
    }
  ];

  return (
    <section id="a-propos" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
              src={tccImage}
               // src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Équipe LeFaucon-SecuriTech" 
                className="rounded-lg shadow-lg w-full object-cover"
                style={{ maxHeight: '500px' }}
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-md hidden md:block">
                <p className="font-bold text-lg">7+ ans</p>
                <p className="text-sm">d'expertise</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">À Propos de Nous</h2>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            <p className="text-lg text-gray-600 mb-6">
              LeFaucon-SecuriTech est une entreprise spécialisée dans les solutions de sécurité technologique, 
              fondée en 2018 avec la mission de rendre les technologies de sécurité avancées accessibles 
              aux particuliers et aux entreprises.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Nos techniciens certifiés travaillent avec précision et professionnalisme pour vous garantir 
              une installation parfaite et un fonctionnement optimal de vos systèmes de sécurité.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {values.map((value) => (
                <ValueCard 
                  key={value.id}
                  title={value.title}
                  description={value.description}
                  icon={value.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};