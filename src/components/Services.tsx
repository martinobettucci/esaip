import React from 'react';
import { Brain, GraduationCap, Laptop } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: "Intégration d'IA",
    description: "Nous programmons l'usage des IA dans vos processus d'entreprise pour optimiser vos opérations et augmenter votre productivité."
  },
  {
    icon: GraduationCap,
    title: "Formation",
    description: "Formations personnalisées pour maîtriser les outils d'IA, adaptées à vos besoins spécifiques et à votre niveau."
  },
  {
    icon: Laptop,
    title: "Ateliers Pratiques",
    description: "Expérimentez concrètement les technologies d'IA lors de sessions pratiques sur ordinateur, guidées par nos experts."
  }
];

export function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <service.icon size={48} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}