import React from 'react';

export function Contact() {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Prêt à Commencer?</h2>
          <a 
            href="#contact" 
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors duration-300"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
}