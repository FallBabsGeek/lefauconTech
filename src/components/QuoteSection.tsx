import React, { useState } from 'react';
import { Camera, PhoneCall, Fingerprint, Lock, Key, Network, Check, ArrowRight, ArrowLeft, Send } from 'lucide-react';


type ServiceOption = {
  id: string;
  title: string;
  icon: React.ReactNode;
  questions: Question[];
};

type Question = {
  id: string;
  text: string;
  type: 'text' | 'number' | 'select' | 'radio' | 'textarea';
  options?: string[];
};

export const QuoteSection: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const services: ServiceOption[] = [
    {
      id: 'cameras',
      title: 'Caméras de Surveillance',
      icon: <Camera size={24} />,
      questions: [
        { id: 'cameras-count', text: 'Combien de caméras souhaitez-vous installer ?', type: 'number' },
        { id: 'cameras-area', text: 'Quelle est la superficie du lieu à surveiller (en m²) ?', type: 'number' },
        { id: 'cameras-location', text: 'Où seront installées les caméras ?', type: 'select', options: ['Intérieur', 'Extérieur', 'Les deux'] },
        { id: 'cameras-recording', text: 'Avez-vous besoin d\'un système d\'enregistrement ?', type: 'radio', options: ['Oui', 'Non', 'Je ne sais pas'] }
      ]
    },
    {
      id: 'visiophones',
      title: 'Visiophones',
      icon: <PhoneCall size={24} />,
      questions: [
        { id: 'visio-entrances', text: 'Combien d\'entrées souhaitez-vous équiper ?', type: 'number' },
        { id: 'visio-type', text: 'Quel type de visiophone préférez-vous ?', type: 'select', options: ['Filaire', 'Sans fil', 'Je ne sais pas'] }
      ]
    },
    {
      id: 'pointage',
      title: 'Systèmes de Pointage',
      icon: <Fingerprint size={24} />,
      questions: [
        { id: 'pointage-users', text: 'Combien d\'utilisateurs utiliseront le système ?', type: 'number' },
        { id: 'pointage-type', text: 'Quel type de pointage préférez-vous ?', type: 'select', options: ['Badge', 'Biométrie', 'Code', 'Plusieurs options'] }
      ]
    },
    {
      id: 'access',
      title: 'Contrôle d\'Accès',
      icon: <Lock size={24} />,
      questions: [
        { id: 'access-doors', text: 'Combien de portes souhaitez-vous équiper ?', type: 'number' },
        { id: 'access-users', text: 'Combien de personnes utiliseront ce système ?', type: 'number' }
      ]
    },
    {
      id: 'locks',
      title: 'Serrures Électroniques',
      icon: <Key size={24} />,
      questions: [
        { id: 'locks-count', text: 'Combien de serrures électroniques souhaitez-vous installer ?', type: 'number' },
        { id: 'locks-type', text: 'Quel type de déverrouillage préférez-vous ?', type: 'select', options: ['Code', 'Badge/Carte', 'Smartphone', 'Biométrie', 'Plusieurs options'] }
      ]
    },
    {
      id: 'network',
      title: 'Infrastructure Réseau',
      icon: <Network size={24} />,
      questions: [
        { id: 'network-size', text: 'Quelle est la taille approximative du réseau (nombre de points de connexion) ?', type: 'number' },
        { id: 'network-type', text: 'Quel type d\'infrastructure souhaitez-vous ?', type: 'select', options: ['Filaire', 'Sans fil', 'Hybride'] },
        { id: 'network-existing', text: 'Disposez-vous déjà d\'une infrastructure réseau ?', type: 'radio', options: ['Oui', 'Non', 'Partiellement'] }
      ]
    }
  ];

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId) 
        : [...prev, serviceId]
    );
  };

  const handleInputChange = (questionId: string, value: any) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission
    console.log('Selected services:', selectedServices);
    console.log('Answers:', answers);
    console.log('Contact info:', contactInfo);
    // Show success message or redirect
    setStep(4);
  };

  const renderServiceQuestions = () => {
    const relevantQuestions = services
      .filter(service => selectedServices.includes(service.id))
      .flatMap(service => service.questions);

    return (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Détails de votre projet</h3>
        {relevantQuestions.map(question => (
          <div key={question.id} className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">{question.text}</label>
            {question.type === 'text' && (
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={answers[question.id] || ''}
                onChange={(e) => handleInputChange(question.id, e.target.value)}
              />
            )}
            {question.type === 'number' && (
              <input
                type="number"
                min="0"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={answers[question.id] || ''}
                onChange={(e) => handleInputChange(question.id, parseInt(e.target.value))}
              />
            )}
            {question.type === 'select' && question.options && (
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={answers[question.id] || ''}
                onChange={(e) => handleInputChange(question.id, e.target.value)}
              >
                <option value="">Sélectionner</option>
                {question.options.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            )}
            {question.type === 'radio' && question.options && (
              <div className="space-y-2">
                {question.options.map(option => (
                  <div key={option} className="flex items-center">
                    <input
                      type="radio"
                      id={`${question.id}-${option}`}
                      name={question.id}
                      value={option}
                      checked={answers[question.id] === option}
                      onChange={() => handleInputChange(question.id, option)}
                      className="mr-2"
                    />
                    <label htmlFor={`${question.id}-${option}`}>{option}</label>
                  </div>
                ))}
              </div>
            )}
            {question.type === 'textarea' && (
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                rows={4}
                value={answers[question.id] || ''}
                onChange={(e) => handleInputChange(question.id, e.target.value)}
              />
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="devis" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Demande de Devis</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Obtenez un devis personnalisé pour vos besoins en sécurité. Suivez les étapes ci-dessous 
            pour nous fournir les informations nécessaires.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex justify-between p-4 bg-gray-100 border-b">
            <div className={`flex items-center ${step >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full mr-2 ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                1
              </div>
              <span className="hidden sm:inline">Services</span>
            </div>
            <div className={`flex items-center ${step >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full mr-2 ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                2
              </div>
              <span className="hidden sm:inline">Détails</span>
            </div>
            <div className={`flex items-center ${step >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full mr-2 ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                3
              </div>
              <span className="hidden sm:inline">Contact</span>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6">
            {step === 1 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Sélectionnez les services qui vous intéressent</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {services.map(service => (
                    <div 
                      key={service.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedServices.includes(service.id) 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => toggleService(service.id)}
                    >
                      <div className="flex items-center">
                        <div className={`p-2 rounded-full mr-3 ${
                          selectedServices.includes(service.id) ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {service.icon}
                        </div>
                        <span className="font-medium">{service.title}</span>
                        {selectedServices.includes(service.id) && (
                          <Check size={18} className="ml-auto text-blue-600" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {step === 2 && renderServiceQuestions()}
            
            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Vos coordonnées</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet*</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value={contactInfo.name}
                      onChange={handleContactChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value={contactInfo.email}
                      onChange={handleContactChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone*</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value={contactInfo.phone}
                      onChange={handleContactChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Entreprise</label>
                    <input
                      type="text"
                      name="company"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value={contactInfo.company}
                      onChange={handleContactChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message ou précisions supplémentaires</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={contactInfo.message}
                    onChange={handleContactChange}
                  />
                </div>
              </div>
            )}
            
            {step === 4 && (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Check size={32} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Demande envoyée avec succès !</h3>
                <p className="text-gray-600 mb-6">
                  Merci pour votre demande de devis. Un de nos conseillers vous contactera dans les plus brefs délais.
                </p>
                <a 
                  href="#accueil" 
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  Retour à l'accueil
                </a>
              </div>
            )}
            
            {step < 4 && (
              <div className="flex justify-between mt-6">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-4 py-2 flex items-center text-gray-700 font-medium hover:text-blue-600 transition-colors"
                  >
                    <ArrowLeft size={16} className="mr-1" /> Précédent
                  </button>
                ) : (
                  <div></div>
                )}
                
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={step === 1 && selectedServices.length === 0}
                    className={`px-6 py-2 bg-blue-600 text-white font-medium rounded-md flex items-center ${
                      step === 1 && selectedServices.length === 0 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-blue-700'
                    } transition-colors`}
                  >
                    Suivant <ArrowRight size={16} className="ml-1" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md flex items-center hover:bg-blue-700 transition-colors"
                  >
                    Envoyer <Send size={16} className="ml-1" />
                  </button>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};