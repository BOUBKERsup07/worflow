
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CommunitySection = () => {
  const testimonials = [
    {
      name: "Amina El Fassi",
      role: "Étudiante à Casa",
      avatar: "👩‍🎓",
      rating: 5,
      comment: "MobiCity a révolutionné mes trajets quotidiens ! Plus jamais d'attente inutile aux arrêts."
    },
    {
      name: "Youssef Bennani",
      role: "Chef d'entreprise",
      avatar: "👨‍💼", 
      rating: 5,
      comment: "Interface intuitive et données toujours à jour. Parfait pour optimiser mes déplacements professionnels."
    },
    {
      name: "Fatima Alaoui",
      role: "Mère de famille",
      avatar: "👩‍👧‍👦",
      rating: 4,
      comment: "Très pratique avec les enfants. Les alertes de proximité sont un vrai plus !"
    }
  ];

  const stats = [
    { number: "50K+", label: "Utilisateurs actifs" },
    { number: "15", label: "Villes couvertes" },
    { number: "98%", label: "Satisfaction" },
    { number: "24/7", label: "Disponibilité" }
  ];

  return (
    <section id="communaute" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Une communauté
            <span className="block bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              engagée
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rejoignez des milliers d'utilisateurs qui contribuent à améliorer l'expérience de transport pour tous.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-lg ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                      ⭐
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community features */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Participez à l'amélioration continue
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    ⭐
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Évaluez vos trajets</h4>
                    <p className="text-gray-600">Partagez votre expérience pour aider les autres utilisateurs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    🚨
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Signalez les incidents</h4>
                    <p className="text-gray-600">Informez la communauté des retards ou problèmes en temps réel</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg mt-1">
                    💡
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Proposez des améliorations</h4>
                    <p className="text-gray-600">Vos suggestions façonnent l'avenir de MobiCity</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-green-500 rounded-2xl p-8 text-white text-center">
              <div className="text-6xl mb-4">🤝</div>
              <h4 className="text-2xl font-bold mb-4">Rejoignez-nous dès aujourd'hui</h4>
              <p className="opacity-90 mb-6">
                Devenez membre de la plus grande communauté de transport urbain au Maroc
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                Créer mon compte
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
