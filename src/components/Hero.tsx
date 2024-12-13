import React from 'react';
import { Brain, GraduationCap, Laptop } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-6">
          Votre Partenaire en Intelligence Artificielle
        </h1>
        <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
          P2Enjoy SAS accompagne votre transformation numérique avec expertise en IA, 
          formation et innovation technologique.
        </p>
      </div>
    </div>
  );
}