import React from 'react';
import { View, Text, Button, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { useRouter } from 'expo-router';
import { useTailwind } from 'tailwindcss-react-native';

export default function NotFoundScreen() {
  const router = useRouter();
  const tw = useTailwind();

  return (
    <View style={tw('flex-1 bg-gray-100 justify-center items-center p-4') as StyleProp<ViewStyle>}>
      <Text style={tw('text-6xl mb-4') as StyleProp<TextStyle>}>🚫</Text>
      <Text style={tw('text-4xl font-bold mb-2') as StyleProp<TextStyle>}>404</Text>
      <Text style={tw('text-xl text-gray-600 mb-6 text-center') as StyleProp<TextStyle>}>
        Oops! Page non trouvée
      </Text>
      <Button title="Retour à l'accueil" onPress={() => router.replace('/')} />
    </View>
  );
} 