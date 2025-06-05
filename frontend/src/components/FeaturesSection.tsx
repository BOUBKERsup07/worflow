
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Search, Calendar } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Géolocalisation intelligente",
      description: "Trouvez automatiquement les arrêts les plus proches et naviguez facilement jusqu'à votre destination.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Temps réel",
      description: "Suivez vos bus et trams en direct avec des estimations précises des temps d'arrivée.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Planification d'itinéraires",
      description: "Calculez les meilleurs trajets avec correspondances optimisées et filtres personnalisés.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Horaires détaillés",
      description: "Consultez tous les horaires de passage même sans connexion internet.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="transport" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Fonctionnalités
            <span className="block bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              révolutionnaires
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment MobiCity transforme votre expérience de transport urbain avec des outils modernes et intuitifs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Prêt à révolutionner vos trajets ?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Rejoignez des milliers d'utilisateurs qui font confiance à MobiCity pour leurs déplacements quotidiens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-lg">
                Télécharger l'app
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg">
                Version web
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
