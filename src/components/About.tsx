import React from 'react';

export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Qui sommes-nous?</h2>
          <p className="text-lg text-gray-700 mb-6">
            P2Enjoy SAS est un studio spécialisé dans l'accompagnement à l'innovation, 
            avec une forte éthique et un engagement envers l'intelligence artificielle 
            et le web3 (blockchain).
          </p>
          <p className="text-lg text-gray-700">
            Notre mission est de démocratiser ces technologies en aidant les industries 
            à adopter un monde décentralisé, responsable et accessible pour tous.
          </p>
        </div>
      </div>
    </section>
  );
}