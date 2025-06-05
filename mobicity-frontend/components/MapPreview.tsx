import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StyleProp, ViewStyle, TextStyle, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { useTailwind } from 'tailwindcss-react-native';
import { MapPin, Clock, Search } from 'lucide-react-native';

const MapPreview = () => {
  const router = useRouter();
  const tw = useTailwind();

  return (
    <ScrollView style={tw('bg-white') as StyleProp<ViewStyle>}>
      <View style={tw('py-20 px-4') as StyleProp<ViewStyle>}>
        <View style={tw('gap-12') as StyleProp<ViewStyle>}>
          {/* Left column - Content */}
          <View style={tw('gap-8') as StyleProp<ViewStyle>}>
            <View>
              <Text style={tw('text-4xl font-bold text-gray-900 mb-6') as StyleProp<TextStyle>}>
                Navigation
                <Text style={tw('block bg-gradient-to-r from-blue-600 to-green-500') as StyleProp<TextStyle>}>
                  intelligente
                </Text>
              </Text>
              <Text style={tw('text-xl text-gray-600') as StyleProp<TextStyle>}>
                Explorez les réseaux de transport de votre ville avec une carte interactive en temps réel. 
                Planifiez vos trajets et suivez vos véhicules préférés.
              </Text>
            </View>

            <View style={tw('gap-4') as StyleProp<ViewStyle>}>
              <View style={tw('flex-row items-center space-x-4 p-4 bg-blue-50 rounded-xl') as StyleProp<ViewStyle>}>
                <View style={tw('bg-blue-500 p-2 rounded-lg') as StyleProp<ViewStyle>}>
                  <MapPin size={20} color="white" />
                </View>
                <View>
                  <Text style={tw('font-semibold text-gray-900') as StyleProp<TextStyle>}>Localisation précise</Text>
                  <Text style={tw('text-gray-600') as StyleProp<TextStyle>}>GPS intégré pour une navigation optimale</Text>
                </View>
              </View>
              
              <View style={tw('flex-row items-center space-x-4 p-4 bg-green-50 rounded-xl') as StyleProp<ViewStyle>}>
                <View style={tw('bg-green-500 p-2 rounded-lg') as StyleProp<ViewStyle>}>
                  <Clock size={20} color="white" />
                </View>
                <View>
                  <Text style={tw('font-semibold text-gray-900') as StyleProp<TextStyle>}>Temps d'attente réel</Text>
                  <Text style={tw('text-gray-600') as StyleProp<TextStyle>}>Informations actualisées en permanence</Text>
                </View>
              </View>
              
              <View style={tw('flex-row items-center space-x-4 p-4 bg-purple-50 rounded-xl') as StyleProp<ViewStyle>}>
                <View style={tw('bg-purple-500 p-2 rounded-lg') as StyleProp<ViewStyle>}>
                  <Search size={20} color="white" />
                </View>
                <View>
                  <Text style={tw('font-semibold text-gray-900') as StyleProp<TextStyle>}>Recherche avancée</Text>
                  <Text style={tw('text-gray-600') as StyleProp<TextStyle>}>Filtres intelligents et suggestions</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity 
              style={tw('bg-gradient-to-r from-blue-600 to-green-500 px-8 py-4 rounded-xl') as StyleProp<ViewStyle>}
              onPress={() => router.push('./map')}
            >
              <Text style={tw('text-white text-lg text-center font-semibold') as StyleProp<TextStyle>}>
                Explorer la carte
              </Text>
            </TouchableOpacity>
          </View>

          {/* Right column - Map simulation */}
          <View>
            <View style={tw('overflow-hidden rounded-xl shadow-2xl') as StyleProp<ViewStyle>}>
              <View style={tw('bg-gradient-to-r from-blue-600 to-green-500 p-4') as StyleProp<ViewStyle>}>
                <View style={tw('flex-row items-center space-x-2') as StyleProp<ViewStyle>}>
                  <MapPin size={20} color="white" />
                  <Text style={tw('text-white font-semibold') as StyleProp<TextStyle>}>Carte de Casablanca</Text>
                </View>
              </View>
              
              <View style={tw('h-96 bg-gradient-to-br from-blue-100 to-green-100 relative') as StyleProp<ViewStyle>}>
                {/* Simulated map background */}
                <View style={tw('absolute inset-0 opacity-30') as StyleProp<ViewStyle>}>
                  <View style={tw('absolute top-4 left-4 w-64 h-2 bg-blue-500 rounded') as StyleProp<ViewStyle>} />
                  <View style={tw('absolute top-12 left-8 w-48 h-2 bg-green-500 rounded') as StyleProp<ViewStyle>} />
                  <View style={tw('absolute top-20 left-12 w-56 h-2 bg-purple-500 rounded') as StyleProp<ViewStyle>} />
                  <View style={tw('absolute bottom-16 right-8 w-40 h-2 bg-orange-500 rounded') as StyleProp<ViewStyle>} />
                  <View style={tw('absolute bottom-8 right-4 w-32 h-2 bg-red-500 rounded') as StyleProp<ViewStyle>} />
                </View>

                {/* Animated transport icons */}
                <View style={tw('absolute top-8 left-16') as StyleProp<ViewStyle>}>
                  <View style={tw('bg-blue-500 p-2 rounded-full') as StyleProp<ViewStyle>}>
                    <Text style={tw('text-white') as StyleProp<TextStyle>}>🚌</Text>
                  </View>
                  <Text style={tw('text-xs bg-white px-2 py-1 rounded mt-1') as StyleProp<TextStyle>}>Bus 10</Text>
                </View>

                <View style={tw('absolute top-24 right-20') as StyleProp<ViewStyle>}>
                  <View style={tw('bg-green-500 p-2 rounded-full') as StyleProp<ViewStyle>}>
                    <Text style={tw('text-white') as StyleProp<TextStyle>}>🚋</Text>
                  </View>
                  <Text style={tw('text-xs bg-white px-2 py-1 rounded mt-1') as StyleProp<TextStyle>}>Tram 1</Text>
                </View>

                <View style={tw('absolute bottom-20 left-20') as StyleProp<ViewStyle>}>
                  <View style={tw('bg-purple-500 p-2 rounded-full') as StyleProp<ViewStyle>}>
                    <Text style={tw('text-white') as StyleProp<TextStyle>}>🚌</Text>
                  </View>
                  <Text style={tw('text-xs bg-white px-2 py-1 rounded mt-1') as StyleProp<TextStyle>}>Bus 5</Text>
                </View>

                {/* Search overlay */}
                <View style={tw('absolute top-4 left-4 right-4') as StyleProp<ViewStyle>}>
                  <View style={tw('bg-white rounded-xl shadow-lg p-4') as StyleProp<ViewStyle>}>
                    <View style={tw('flex-row items-center space-x-3') as StyleProp<ViewStyle>}>
                      <Search size={20} color="#9CA3AF" />
                      <TextInput 
                        placeholder="Rechercher une destination..."
                        style={tw('flex-1 text-gray-700') as StyleProp<TextStyle>}
                      />
                    </View>
                  </View>
                </View>

                {/* Info cards */}
                <View style={tw('absolute bottom-4 left-4 right-4') as StyleProp<ViewStyle>}>
                  <View style={tw('bg-white rounded-xl shadow-lg p-4') as StyleProp<ViewStyle>}>
                    <View style={tw('flex-row items-center justify-between mb-2') as StyleProp<ViewStyle>}>
                      <Text style={tw('text-sm font-medium') as StyleProp<TextStyle>}>Prochains départs</Text>
                      <Text style={tw('text-xs text-green-600') as StyleProp<TextStyle>}>En temps réel</Text>
                    </View>
                    <View style={tw('gap-1') as StyleProp<ViewStyle>}>
                      <View style={tw('flex-row justify-between') as StyleProp<ViewStyle>}>
                        <Text style={tw('text-sm') as StyleProp<TextStyle>}>Bus 10 → Ain Diab</Text>
                        <Text style={tw('text-sm text-green-600') as StyleProp<TextStyle>}>3 min</Text>
                      </View>
                      <View style={tw('flex-row justify-between') as StyleProp<ViewStyle>}>
                        <Text style={tw('text-sm') as StyleProp<TextStyle>}>Tram 1 → Sidi Moumen</Text>
                        <Text style={tw('text-sm text-blue-600') as StyleProp<TextStyle>}>7 min</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MapPreview; 