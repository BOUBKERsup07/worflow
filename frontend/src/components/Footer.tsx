
import React from 'react';
import { MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-green-500 p-2 rounded-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                MobiCity
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Révolutionnez votre expérience de transport urbain avec MobiCity. 
              Navigation intelligente, temps réel et communauté active pour tous vos déplacements.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                📱 App Store
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                🤖 Google Play
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li><a href="#accueil" className="text-gray-300 hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#transport" className="text-gray-300 hover:text-white transition-colors">Transport</a></li>
              <li><a href="#itineraires" className="text-gray-300 hover:text-white transition-colors">Itinéraires</a></li>
              <li><a href="#communaute" className="text-gray-300 hover:text-white transition-colors">Communauté</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Confidentialité</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 MobiCity. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-gray-400">
              <span>🇲🇦 Maroc</span>
              <span>🌐 Français</span>
              <span>📍 Casablanca</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
