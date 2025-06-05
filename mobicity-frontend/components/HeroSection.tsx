import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Animated, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { useRouter } from 'expo-router';
import { useTailwind } from 'tailwindcss-react-native';
import { MapPin, Clock, Search } from 'lucide-react-native';

const HeroSection = () => {
  const router = useRouter();
  const tw = useTailwind();

  return (
    <ScrollView style={tw('flex-1 bg-gradient-to-br from-blue-600 via-purple-600 to-green-500') as StyleProp<ViewStyle>}>
      {/* Background animations */}
      <View style={tw('absolute inset-0 opacity-20') as StyleProp<ViewStyle>}>
        <Animated.View style={[tw('absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full') as StyleProp<ViewStyle>, styles.pulse]} />
        <Animated.View style={[tw('absolute top-3/4 right-1/4 w-24 h-24 bg-white rounded-full') as StyleProp<ViewStyle>, styles.pulseDelay]} />
        <Animated.View style={[tw('absolute bottom-1/4 left-1/2 w-16 h-16 bg-white rounded-full') as StyleProp<ViewStyle>, styles.pulseDelay2]} />
      </View>

      <View style={tw('px-4 py-20') as StyleProp<ViewStyle>}>
        <View style={tw('space-y-8') as StyleProp<ViewStyle>}>
          {/* Content */}
          <View style={tw('space-y-4') as StyleProp<ViewStyle>}>
            <Text style={tw('text-4xl font-bold text-white leading-tight') as StyleProp<TextStyle>}>
              La mobilité urbaine{'\n'}
              <Text style={tw('text-yellow-300') as StyleProp<TextStyle>}>réinventée</Text>
            </Text>
            <Text style={tw('text-xl text-white opacity-90 leading-relaxed') as StyleProp<TextStyle>}>
              Découvrez MobiCity, votre compagnon intelligent pour naviguer facilement dans les transports publics marocains.
            </Text>
          </View>

          {/* Buttons */}
          <View style={tw('flex-row gap-4') as StyleProp<ViewStyle>}>
            <TouchableOpacity 
              style={tw('bg-white px-8 py-4 rounded-lg') as StyleProp<ViewStyle>}
              onPress={() => router.push('./(auth)/register')}
            >
              <Text style={tw('text-blue-600 font-semibold text-lg') as StyleProp<TextStyle>}>Commencer maintenant</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={tw('border border-white px-8 py-4 rounded-lg') as StyleProp<ViewStyle>}
              onPress={() => router.push('./demo')}
            >
              <Text style={tw('text-white font-semibold text-lg') as StyleProp<TextStyle>}>Voir la démo</Text>
            </TouchableOpacity>
          </View>

          {/* Features highlights */}
          <View style={tw('flex-row flex-wrap justify-between gap-4 pt-8') as StyleProp<ViewStyle>}>
            <View style={tw('flex-row items-center space-x-3') as StyleProp<ViewStyle>}>
              <View style={tw('bg-white/20 p-3 rounded-lg') as StyleProp<ViewStyle>}>
                <MapPin size={24} color="white" />
              </View>
              <View>
                <Text style={tw('font-semibold text-white') as StyleProp<TextStyle>}>Temps réel</Text>
                <Text style={tw('text-sm text-white opacity-80') as StyleProp<TextStyle>}>Suivi en direct</Text>
              </View>
            </View>
            <View style={tw('flex-row items-center space-x-3') as StyleProp<ViewStyle>}>
              <View style={tw('bg-white/20 p-3 rounded-lg') as StyleProp<ViewStyle>}>
                <Search size={24} color="white" />
              </View>
              <View>
                <Text style={tw('font-semibold text-white') as StyleProp<TextStyle>}>Itinéraires</Text>
                <Text style={tw('text-sm text-white opacity-80') as StyleProp<TextStyle>}>Optimisés</Text>
              </View>
            </View>
            <View style={tw('flex-row items-center space-x-3') as StyleProp<ViewStyle>}>
              <View style={tw('bg-white/20 p-3 rounded-lg') as StyleProp<ViewStyle>}>
                <Clock size={24} color="white" />
              </View>
              <View>
                <Text style={tw('font-semibold text-white') as StyleProp<TextStyle>}>Hors-ligne</Text>
                <Text style={tw('text-sm text-white opacity-80') as StyleProp<TextStyle>}>Toujours accessible</Text>
              </View>
            </View>
          </View>

          {/* Search Preview */}
          <View style={tw('mt-8 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20') as StyleProp<ViewStyle>}>
            <View style={tw('bg-white rounded-2xl p-6 shadow-2xl') as StyleProp<ViewStyle>}>
              <View style={tw('space-y-4') as StyleProp<ViewStyle>}>
                <View style={tw('flex-row items-center justify-between') as StyleProp<ViewStyle>}>
                  <Text style={tw('text-lg font-semibold text-gray-800') as StyleProp<TextStyle>}>Recherche rapide</Text>
                  <View style={tw('w-3 h-3 bg-green-500 rounded-full') as StyleProp<ViewStyle>} />
                </View>
                
                <View style={tw('space-y-3') as StyleProp<ViewStyle>}>
                  <View style={tw('flex-row items-center space-x-3 p-3 bg-blue-50 rounded-lg') as StyleProp<ViewStyle>}>
                    <View style={tw('w-2 h-2 bg-blue-500 rounded-full') as StyleProp<ViewStyle>} />
                    <Text style={tw('flex-1 text-gray-700') as StyleProp<TextStyle>}>Casa-Port → Ain Diab</Text>
                    <Text style={tw('text-green-600 text-sm font-medium') as StyleProp<TextStyle>}>5 min</Text>
                  </View>
                  <View style={tw('flex-row items-center space-x-3 p-3 bg-green-50 rounded-lg') as StyleProp<ViewStyle>}>
                    <View style={tw('w-2 h-2 bg-green-500 rounded-full') as StyleProp<ViewStyle>} />
                    <Text style={tw('flex-1 text-gray-700') as StyleProp<TextStyle>}>Ligne 1 Tram</Text>
                    <Text style={tw('text-blue-600 text-sm font-medium') as StyleProp<TextStyle>}>2 min</Text>
                  </View>
                  <View style={tw('flex-row items-center space-x-3 p-3 bg-orange-50 rounded-lg') as StyleProp<ViewStyle>}>
                    <View style={tw('w-2 h-2 bg-orange-500 rounded-full') as StyleProp<ViewStyle>} />
                    <Text style={tw('flex-1 text-gray-700') as StyleProp<TextStyle>}>Bus 10 → Maarif</Text>
                    <Text style={tw('text-orange-600 text-sm font-medium') as StyleProp<TextStyle>}>8 min</Text>
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

const styles = StyleSheet.create({
  pulse: {
    opacity: 0.5,
    transform: [{ scale: 1 }],
  },
  pulseDelay: {
    opacity: 0.5,
    transform: [{ scale: 1 }],
  },
  pulseDelay2: {
    opacity: 0.5,
    transform: [{ scale: 1 }],
  },
});

export default HeroSection; 