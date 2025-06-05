import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { useRouter } from 'expo-router';
import { useTailwind } from 'tailwindcss-react-native';

const CommunitySection = () => {
  const router = useRouter();
  const tw = useTailwind();

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
    <ScrollView style={tw('bg-gradient-to-br from-gray-50 to-blue-50') as StyleProp<ViewStyle>}>
      <View style={tw('py-20 px-4') as StyleProp<ViewStyle>}>
        {/* Header */}
        <View style={tw('items-center mb-16') as StyleProp<ViewStyle>}>
          <Text style={tw('text-4xl font-bold text-gray-900 mb-6 text-center') as StyleProp<TextStyle>}>
            Une communauté
            <Text style={tw('block bg-gradient-to-r from-blue-600 to-green-500') as StyleProp<TextStyle>}>
              engagée
            </Text>
          </Text>
          <Text style={tw('text-xl text-gray-600 text-center max-w-3xl') as StyleProp<TextStyle>}>
            Rejoignez des milliers d'utilisateurs qui contribuent à améliorer l'expérience de transport pour tous.
          </Text>
        </View>

        {/* Stats */}
        <View style={tw('flex-row flex-wrap justify-between gap-4 mb-16') as StyleProp<ViewStyle>}>
          {stats.map((stat, index) => (
            <View key={index} style={tw('w-[48%] bg-white rounded-2xl p-6 shadow-lg') as StyleProp<ViewStyle>}>
              <Text style={tw('text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-green-500 mb-2') as StyleProp<TextStyle>}>
                {stat.number}
              </Text>
              <Text style={tw('text-gray-600 font-medium text-center') as StyleProp<TextStyle>}>
                {stat.label}
              </Text>
            </View>
          ))}
        </View>

        {/* Testimonials */}
        <View style={tw('gap-4 mb-16') as StyleProp<ViewStyle>}>
          {testimonials.map((testimonial, index) => (
            <View key={index} style={tw('bg-white rounded-xl p-8 shadow-lg') as StyleProp<ViewStyle>}>
              <View style={tw('flex-row items-center mb-4') as StyleProp<ViewStyle>}>
                <Text style={tw('text-4xl mr-4') as StyleProp<TextStyle>}>{testimonial.avatar}</Text>
                <View>
                  <Text style={tw('font-semibold text-gray-900') as StyleProp<TextStyle>}>{testimonial.name}</Text>
                  <Text style={tw('text-gray-600 text-sm') as StyleProp<TextStyle>}>{testimonial.role}</Text>
                </View>
              </View>
              
              <View style={tw('flex-row mb-4') as StyleProp<ViewStyle>}>
                {[...Array(5)].map((_, i) => (
                  <Text key={i} style={tw(`text-lg ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`) as StyleProp<TextStyle>}>
                    ⭐
                  </Text>
                ))}
              </View>
              
              <Text style={tw('text-gray-700 italic') as StyleProp<TextStyle>}>
                "{testimonial.comment}"
              </Text>
            </View>
          ))}
        </View>

        {/* Community features */}
        <View style={tw('bg-white rounded-3xl p-8 shadow-xl') as StyleProp<ViewStyle>}>
          <View style={tw('gap-8') as StyleProp<ViewStyle>}>
            <View>
              <Text style={tw('text-3xl font-bold text-gray-900 mb-6') as StyleProp<TextStyle>}>
                Participez à l'amélioration continue
              </Text>
              <View style={tw('gap-4') as StyleProp<ViewStyle>}>
                <View style={tw('flex-row items-start space-x-4') as StyleProp<ViewStyle>}>
                  <View style={tw('bg-blue-100 p-2 rounded-lg mt-1') as StyleProp<ViewStyle>}>
                    <Text>⭐</Text>
                  </View>
                  <View>
                    <Text style={tw('font-semibold text-gray-900') as StyleProp<TextStyle>}>Évaluez vos trajets</Text>
                    <Text style={tw('text-gray-600') as StyleProp<TextStyle>}>Partagez votre expérience pour aider les autres utilisateurs</Text>
                  </View>
                </View>
                
                <View style={tw('flex-row items-start space-x-4') as StyleProp<ViewStyle>}>
                  <View style={tw('bg-green-100 p-2 rounded-lg mt-1') as StyleProp<ViewStyle>}>
                    <Text>🚨</Text>
                  </View>
                  <View>
                    <Text style={tw('font-semibold text-gray-900') as StyleProp<TextStyle>}>Signalez les incidents</Text>
                    <Text style={tw('text-gray-600') as StyleProp<TextStyle>}>Informez la communauté des retards ou problèmes en temps réel</Text>
                  </View>
                </View>
                
                <View style={tw('flex-row items-start space-x-4') as StyleProp<ViewStyle>}>
                  <View style={tw('bg-purple-100 p-2 rounded-lg mt-1') as StyleProp<ViewStyle>}>
                    <Text>💡</Text>
                  </View>
                  <View>
                    <Text style={tw('font-semibold text-gray-900') as StyleProp<TextStyle>}>Proposez des améliorations</Text>
                    <Text style={tw('text-gray-600') as StyleProp<TextStyle>}>Vos suggestions façonnent l'avenir de MobiCity</Text>
                  </View>
                </View>
              </View>
            </View>
            
            <View style={tw('bg-gradient-to-br from-blue-600 to-green-500 rounded-2xl p-8') as StyleProp<ViewStyle>}>
              <Text style={tw('text-6xl text-center mb-4') as StyleProp<TextStyle>}>🤝</Text>
              <Text style={tw('text-2xl font-bold mb-4 text-white text-center') as StyleProp<TextStyle>}>
                Rejoignez-nous dès aujourd'hui
              </Text>
              <Text style={tw('text-white opacity-90 mb-6 text-center') as StyleProp<TextStyle>}>
                Devenez membre de la plus grande communauté de transport urbain au Maroc
              </Text>
              <TouchableOpacity 
                style={tw('bg-white py-4 rounded-xl') as StyleProp<ViewStyle>}
                onPress={() => router.push('./(auth)/register')}
              >
                <Text style={tw('text-blue-600 font-semibold text-lg text-center') as StyleProp<TextStyle>}>
                  Créer mon compte
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CommunitySection; 