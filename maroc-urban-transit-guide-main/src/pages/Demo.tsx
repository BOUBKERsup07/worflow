
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Bus, Clock, Navigation, Star, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Demo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Découvrez MobiCity en Action
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Explorez toutes les fonctionnalités de notre plateforme de transport intelligent
              dans cette démonstration interactive.
            </p>
          </div>
        </section>

        {/* Demo Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Feature 1 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Géolocalisation en Temps Réel</h3>
                <p className="text-gray-600 mb-6">
                  Suivez la position exacte des bus et trams sur une carte interactive mise à jour en temps réel.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Essayer la Carte
                </Button>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Bus className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Planification d'Itinéraires</h3>
                <p className="text-gray-600 mb-6">
                  Calculez automatiquement le meilleur trajet avec correspondances et temps d'attente optimisés.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Planifier un Trajet
                </Button>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Horaires en Direct</h3>
                <p className="text-gray-600 mb-6">
                  Consultez les horaires actualisés et recevez des alertes en cas de retard ou modification.
                </p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Voir les Horaires
                </Button>
              </div>

              {/* Feature 4 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Navigation className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Navigation Guidée</h3>
                <p className="text-gray-600 mb-6">
                  Suivez les instructions pas-à-pas pour atteindre votre arrêt le plus proche.
                </p>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Démarrer Navigation
                </Button>
              </div>

              {/* Feature 5 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Star className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Système de Feedback</h3>
                <p className="text-gray-600 mb-6">
                  Notez vos trajets et consultez les avis de la communauté pour améliorer votre expérience.
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Donner un Avis
                </Button>
              </div>

              {/* Feature 6 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Communauté Active</h3>
                <p className="text-gray-600 mb-6">
                  Rejoignez une communauté d'utilisateurs qui partagent informations et conseils de transport.
                </p>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Rejoindre la Communauté
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Interface Interactive</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez l'interface utilisateur intuitive et moderne de MobiCity
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-green-50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-24 w-24 text-blue-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Démonstration Interactive</h3>
                  <p className="text-gray-600 mb-8 max-w-md">
                    Cliquez pour explorer l'interface complète de MobiCity en mode démo
                  </p>
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600">
                    Lancer la Démo Interactive
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Prêt à Révolutionner vos Déplacements ?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Rejoignez des milliers d'utilisateurs qui font confiance à MobiCity pour leurs transports quotidiens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                S'inscrire Maintenant
              </Button>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Télécharger l'App
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Demo;
