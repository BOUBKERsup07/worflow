
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Search } from 'lucide-react';

const MapPreview = () => {
  return (
    <section id="itineraires" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Navigation
                <span className="block bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                  intelligente
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Explorez les réseaux de transport de votre ville avec une carte interactive en temps réel. 
                Planifiez vos trajets et suivez vos véhicules préférés.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Localisation précise</h4>
                  <p className="text-gray-600">GPS intégré pour une navigation optimale</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl">
                <div className="bg-green-500 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Temps d'attente réel</h4>
                  <p className="text-gray-600">Informations actualisées en permanence</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl">
                <div className="bg-purple-500 p-2 rounded-lg">
                  <Search className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Recherche avancée</h4>
                  <p className="text-gray-600">Filtres intelligents et suggestions</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-8 py-4 h-auto text-lg">
              Explorer la carte
            </Button>
          </div>

          {/* Right column - Map simulation */}
          <div className="relative">
            <Card className="overflow-hidden shadow-2xl border-0">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-green-500 text-white">
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Carte de Casablanca</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-96 bg-gradient-to-br from-blue-100 to-green-100 relative overflow-hidden">
                  {/* Simulated map background */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-4 left-4 w-64 h-2 bg-blue-500 rounded transform rotate-12"></div>
                    <div className="absolute top-12 left-8 w-48 h-2 bg-green-500 rounded transform -rotate-6"></div>
                    <div className="absolute top-20 left-12 w-56 h-2 bg-purple-500 rounded transform rotate-3"></div>
                    <div className="absolute bottom-16 right-8 w-40 h-2 bg-orange-500 rounded transform -rotate-12"></div>
                    <div className="absolute bottom-8 right-4 w-32 h-2 bg-red-500 rounded transform rotate-6"></div>
                  </div>

                  {/* Animated transport icons */}
                  <div className="absolute top-8 left-16">
                    <div className="bg-blue-500 text-white p-2 rounded-full animate-pulse">
                      🚌
                    </div>
                    <div className="text-xs bg-white px-2 py-1 rounded mt-1 shadow">Bus 10</div>
                  </div>

                  <div className="absolute top-24 right-20">
                    <div className="bg-green-500 text-white p-2 rounded-full animate-pulse delay-500">
                      🚋
                    </div>
                    <div className="text-xs bg-white px-2 py-1 rounded mt-1 shadow">Tram 1</div>
                  </div>

                  <div className="absolute bottom-20 left-20">
                    <div className="bg-purple-500 text-white p-2 rounded-full animate-pulse delay-1000">
                      🚌
                    </div>
                    <div className="text-xs bg-white px-2 py-1 rounded mt-1 shadow">Bus 5</div>
                  </div>

                  {/* Search overlay */}
                  <div className="absolute top-4 left-4 right-4">
                    <div className="bg-white rounded-xl shadow-lg p-4">
                      <div className="flex items-center space-x-3">
                        <Search className="h-5 w-5 text-gray-400" />
                        <input 
                          type="text" 
                          placeholder="Rechercher une destination..."
                          className="flex-1 border-0 focus:outline-none text-gray-700"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Info cards */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white rounded-xl shadow-lg p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Prochains départs</span>
                        <span className="text-xs text-green-600">En temps réel</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Bus 10 → Ain Diab</span>
                          <span className="text-green-600">3 min</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Tram 1 → Sidi Moumen</span>
                          <span className="text-blue-600">7 min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapPreview;
