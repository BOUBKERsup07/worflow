import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { useRouter } from 'expo-router';
import { useTailwind } from 'tailwindcss-react-native';
import { MapPin, Clock, Search, Calendar } from 'lucide-react-native';

const FeaturesSection = () => {
  const router = useRouter();
  const tw = useTailwind();

  const features = [
    {
      icon: <MapPin size={32} color="white" />,
      title: "Géolocalisation intelligente",
      description: "Trouvez automatiquement les arrêts les plus proches et naviguez facilement jusqu'à votre destination.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Clock size={32} color="white" />,
      title: "Temps réel",
      description: "Suivez vos bus et trams en direct avec des estimations précises des temps d'arrivée.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Search size={32} color="white" />,
      title: "Planification d'itinéraires",
      description: "Calculez les meilleurs trajets avec correspondances optimisées et filtres personnalisés.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Calendar size={32} color="white" />,
      title: "Horaires détaillés",
      description: "Consultez tous les horaires de passage même sans connexion internet.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <ScrollView style={tw('bg-gray-50') as StyleProp<ViewStyle>}>
      <View style={tw('py-20 px-4') as StyleProp<ViewStyle>}>
        {/* Header */}
        <View style={tw('items-center mb-16') as StyleProp<ViewStyle>}>
          <Text style={tw('text-4xl font-bold text-gray-900 mb-6 text-center') as StyleProp<TextStyle>}>
            Fonctionnalités
            <Text style={tw('block bg-gradient-to-r from-blue-600 to-green-500') as StyleProp<TextStyle>}>
              révolutionnaires
            </Text>
          </Text>
          <Text style={tw('text-xl text-gray-600 text-center max-w-3xl') as StyleProp<TextStyle>}>
            Découvrez comment MobiCity transforme votre expérience de transport urbain avec des outils modernes et intuitifs.
          </Text>
        </View>

        {/* Features Grid */}
        <View style={tw('flex-row flex-wrap justify-between gap-4') as StyleProp<ViewStyle>}>
          {features.map((feature, index) => (
            <View 
              key={index} 
              style={tw('w-full md:w-[48%] bg-white rounded-xl p-8 shadow-lg') as StyleProp<ViewStyle>}
            >
              <View style={tw(`p-4 rounded-2xl bg-gradient-to-r ${feature.color} items-center mb-6`) as StyleProp<ViewStyle>}>
                {feature.icon}
              </View>
              <Text style={tw('text-xl font-bold text-gray-900 mb-4 text-center') as StyleProp<TextStyle>}>
                {feature.title}
              </Text>
              <Text style={tw('text-gray-600 text-center') as StyleProp<TextStyle>}>
                {feature.description}
              </Text>
            </View>
          ))}
        </View>

        {/* Call to action */}
        <View style={tw('mt-16') as StyleProp<ViewStyle>}>
          <View style={tw('bg-gradient-to-r from-blue-600 to-green-500 rounded-3xl p-8') as StyleProp<ViewStyle>}>
            <Text style={tw('text-3xl font-bold mb-4 text-white text-center') as StyleProp<TextStyle>}>
              Prêt à révolutionner vos trajets ?
            </Text>
            <Text style={tw('text-xl text-white opacity-90 mb-8 text-center') as StyleProp<TextStyle>}>
              Rejoignez des milliers d'utilisateurs qui font confiance à MobiCity pour leurs déplacements quotidiens.
            </Text>
            <View style={tw('flex-row justify-center gap-4') as StyleProp<ViewStyle>}>
              <TouchableOpacity 
                style={tw('bg-white px-8 py-4 rounded-xl') as StyleProp<ViewStyle>}
                onPress={() => router.push('./(auth)/register')}
              >
                <Text style={tw('text-blue-600 font-semibold text-lg') as StyleProp<TextStyle>}>
                  Télécharger l'app
                </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={tw('border-2 border-white px-8 py-4 rounded-xl') as StyleProp<ViewStyle>}
                onPress={() => router.push('./demo')}
              >
                <Text style={tw('text-white font-semibold text-lg') as StyleProp<TextStyle>}>
                  Version web
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default FeaturesSection; 