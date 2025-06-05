
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-green-500 p-2 rounded-lg">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              MobiCity
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Accueil
            </Link>
            <Link to="/demo" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Voir le Démo
            </Link>
            <a href="#transport" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Transport
            </a>
            <a href="#itineraires" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Itinéraires
            </a>
            <a href="#communaute" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Communauté
            </a>
            <Link to="/login">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                Connexion
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
                S'inscrire
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Accueil
              </Link>
              <Link to="/demo" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Voir le Démo
              </Link>
              <a href="#transport" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Transport
              </a>
              <a href="#itineraires" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Itinéraires
              </a>
              <a href="#communaute" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Communauté
              </a>
              <div className="pt-2 space-y-2">
                <Link to="/login">
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600">
                    Connexion
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white">
                    S'inscrire
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
