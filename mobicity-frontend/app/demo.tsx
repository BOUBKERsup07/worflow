import React from 'react';
import { ScrollView, View, Text, Button, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { useTailwind } from 'tailwindcss-react-native';
import { useRouter } from 'expo-router';

export default function DemoScreen() {
  const tw = useTailwind();
  const router = useRouter();

  return (
    <ScrollView style={tw('bg-gray-50') as StyleProp<ViewStyle>} contentContainerStyle={tw('pb-8') as StyleProp<ViewStyle>}>
      {/* Hero Section */}
      <View style={tw('bg-blue-600 p-8 items-center justify-center') as StyleProp<ViewStyle>}>
        <Text style={tw('text-3xl font-bold text-white mb-4') as StyleProp<TextStyle>}>
          Découvrez MobiCity en Action
        </Text>
        <Text style={tw('text-lg text-white text-center mb-4') as StyleProp<TextStyle>}>
          Explorez toutes les fonctionnalités de notre plateforme de transport intelligent dans cette démonstration interactive.
        </Text>
      </View>

      {/* Demo Features */}
      <View style={tw('p-4') as StyleProp<ViewStyle>}>
        <Text style={tw('text-2xl font-bold mb-6 text-center') as StyleProp<TextStyle>}>Fonctionnalités</Text>
        <View style={tw('flex flex-wrap flex-row justify-center') as StyleProp<ViewStyle>}>
          {/* Feature 1 */}
          <View style={tw('bg-white rounded-xl shadow-lg p-6 m-2 w-72') as StyleProp<ViewStyle>}>
            <Text style={tw('text-4xl mb-4 text-blue-600 text-center') as StyleProp<TextStyle>}>📍</Text>
            <Text style={tw('text-lg font-bold mb-2 text-center') as StyleProp<TextStyle>}>Géolocalisation en Temps Réel</Text>
            <Text style={tw('text-gray-600 mb-4 text-center') as StyleProp<TextStyle>}>
              Suivez la position exacte des bus et trams sur une carte interactive mise à jour en temps réel.
            </Text>
            <Button title="Essayer la Carte" onPress={() => {}} />
          </View>
          {/* Feature 2 */}
          <View style={tw('bg-white rounded-xl shadow-lg p-6 m-2 w-72') as StyleProp<ViewStyle>}>
            <Text style={tw('text-4xl mb-4 text-green-600 text-center') as StyleProp<TextStyle>}>🚌</Text>
            <Text style={tw('text-lg font-bold mb-2 text-center') as StyleProp<TextStyle>}>Planification d'Itinéraires</Text>
            <Text style={tw('text-gray-600 mb-4 text-center') as StyleProp<TextStyle>}>
              Calculez automatiquement le meilleur trajet avec correspondances et temps d'attente optimisés.
            </Text>
            <Button title="Planifier un Trajet" onPress={() => {}} />
          </View>
          {/* Feature 3 */}
          <View style={tw('bg-white rounded-xl shadow-lg p-6 m-2 w-72') as StyleProp<ViewStyle>}>
            <Text style={tw('text-4xl mb-4 text-purple-600 text-center') as StyleProp<TextStyle>}>⏰</Text>
            <Text style={tw('text-lg font-bold mb-2 text-center') as StyleProp<TextStyle>}>Horaires en Direct</Text>
            <Text style={tw('text-gray-600 mb-4 text-center') as StyleProp<TextStyle>}>
              Consultez les horaires actualisés et recevez des alertes en cas de retard ou modification.
            </Text>
            <Button title="Voir les Horaires" onPress={() => {}} />
          </View>
          {/* Feature 4 */}
          <View style={tw('bg-white rounded-xl shadow-lg p-6 m-2 w-72') as StyleProp<ViewStyle>}>
            <Text style={tw('text-4xl mb-4 text-orange-600 text-center') as StyleProp<TextStyle>}>🧭</Text>
            <Text style={tw('text-lg font-bold mb-2 text-center') as StyleProp<TextStyle>}>Navigation Guidée</Text>
            <Text style={tw('text-gray-600 mb-4 text-center') as StyleProp<TextStyle>}>
              Suivez les instructions pas-à-pas pour atteindre votre arrêt le plus proche.
            </Text>
            <Button title="Démarrer Navigation" onPress={() => {}} />
          </View>
          {/* Feature 5 */}
          <View style={tw('bg-white rounded-xl shadow-lg p-6 m-2 w-72') as StyleProp<ViewStyle>}>
            <Text style={tw('text-4xl mb-4 text-red-600 text-center') as StyleProp<TextStyle>}>⭐</Text>
            <Text style={tw('text-lg font-bold mb-2 text-center') as StyleProp<TextStyle>}>Système de Feedback</Text>
            <Text style={tw('text-gray-600 mb-4 text-center') as StyleProp<TextStyle>}>
              Notez vos trajets et consultez les avis de la communauté pour améliorer votre expérience.
            </Text>
            <Button title="Donner un Avis" onPress={() => {}} />
          </View>
          {/* Feature 6 */}
          <View style={tw('bg-white rounded-xl shadow-lg p-6 m-2 w-72') as StyleProp<ViewStyle>}>
            <Text style={tw('text-4xl mb-4 text-indigo-600 text-center') as StyleProp<TextStyle>}>👥</Text>
            <Text style={tw('text-lg font-bold mb-2 text-center') as StyleProp<TextStyle>}>Communauté Active</Text>
            <Text style={tw('text-gray-600 mb-4 text-center') as StyleProp<TextStyle>}>
              Rejoignez une communauté d'utilisateurs qui partagent informations et conseils de transport.
            </Text>
            <Button title="Rejoindre la Communauté" onPress={() => {}} />
          </View>
        </View>
      </View>

      {/* Interface Interactive Section */}
      <View style={tw('bg-gray-100 py-8 px-4') as StyleProp<ViewStyle>}>
        <Text style={tw('text-2xl font-bold mb-4 text-center') as StyleProp<TextStyle>}>Interface Interactive</Text>
        <Text style={tw('text-lg text-gray-600 mb-6 text-center') as StyleProp<TextStyle>}>
          Découvrez l'interface utilisateur intuitive et moderne de MobiCity
        </Text>
        <View style={tw('bg-white rounded-2xl shadow-2xl p-8 items-center') as StyleProp<ViewStyle>}>
          <Text style={tw('text-6xl text-blue-600 mb-4') as StyleProp<TextStyle>}>📍</Text>
          <Text style={tw('text-xl font-bold mb-2 text-center') as StyleProp<TextStyle>}>Démonstration Interactive</Text>
          <Text style={tw('text-gray-600 mb-4 text-center') as StyleProp<TextStyle>}>
            Cliquez pour explorer l'interface complète de MobiCity en mode démo
          </Text>
          <Button title="Lancer la Démo Interactive" onPress={() => {}} />
        </View>
      </View>

      {/* CTA Section */}
      <View style={tw('bg-blue-600 p-8 items-center justify-center mt-8') as StyleProp<ViewStyle>}>
        <Text style={tw('text-2xl font-bold text-white mb-4 text-center') as StyleProp<TextStyle>}>Prêt à Révolutionner vos Déplacements ?</Text>
        <Text style={tw('text-lg text-white mb-6 text-center') as StyleProp<TextStyle>}>
          Rejoignez des milliers d'utilisateurs qui font confiance à MobiCity pour leurs transports quotidiens.
        </Text>
        <View style={tw('flex-row gap-4 justify-center') as StyleProp<ViewStyle>}>
          <TouchableOpacity style={tw('border border-white rounded-lg px-6 py-3 mr-2') as StyleProp<ViewStyle>} onPress={() => router.push('./(auth)/register')}>
            <Text style={tw('text-white text-lg') as StyleProp<TextStyle>}>S'inscrire Maintenant</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw('bg-white rounded-lg px-6 py-3') as StyleProp<ViewStyle>} onPress={() => {}}>
            <Text style={tw('text-blue-600 text-lg') as StyleProp<TextStyle>}>Télécharger l'App</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
} 