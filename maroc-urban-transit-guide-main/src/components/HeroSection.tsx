
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-green-500 min-h-screen flex items-center overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-16 h-16 bg-white rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                La mobilité urbaine
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                  réinventée
                </span>
              </h1>
              <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
                Découvrez MobiCity, votre compagnon intelligent pour naviguer facilement dans les transports publics marocains.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4 h-auto"
              >
                Commencer maintenant
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold text-lg px-8 py-4 h-auto"
              >
                Voir la démo
              </Button>
            </div>

            {/* Features highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Temps réel</h3>
                  <p className="text-sm opacity-80">Suivi en direct</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Itinéraires</h3>
                  <p className="text-sm opacity-80">Optimisés</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Hors-ligne</h3>
                  <p className="text-sm opacity-80">Toujours accessible</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800">Recherche rapide</h3>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Casa-Port → Ain Diab</span>
                      <span className="text-green-600 text-sm font-medium">5 min</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Ligne 1 Tram</span>
                      <span className="text-blue-600 text-sm font-medium">2 min</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700">Bus 10 → Maarif</span>
                      <span className="text-orange-600 text-sm font-medium">8 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
