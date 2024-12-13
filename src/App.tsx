import React from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-900">P2Enjoy</h1>
            <div className="space-x-6">
              <a href="#services" className="text-gray-600 hover:text-blue-900">Services</a>
              <a href="#about" className="text-gray-600 hover:text-blue-900">À propos</a>
              <a href="#contact" className="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-800">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 P2Enjoy SAS. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;