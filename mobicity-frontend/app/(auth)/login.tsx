import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { useRouter } from 'expo-router';
import { useTailwind } from 'tailwindcss-react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const tw = useTailwind();

  const handleLogin = () => {
    setLoading(true);
    setError(null);
    // TODO: Appel API d'authentification ici
    setTimeout(() => {
      setLoading(false);
      if (email === '' || password === '') {
        setError('Veuillez remplir tous les champs.');
      } else {
        // Navigation ou gestion du token ici
        router.replace('/');
      }
    }, 1000);
  };

  return (
    <View style={tw('flex-1 bg-white justify-center items-center p-4') as StyleProp<ViewStyle>}>
      <Text style={tw('text-2xl font-bold mb-6') as StyleProp<TextStyle>}>Connexion</Text>
      <View style={tw('w-full max-w-xs') as StyleProp<ViewStyle>}>
        <Text style={tw('mb-2 text-base font-semibold') as StyleProp<TextStyle>}>Adresse e-mail</Text>
        <TextInput
          style={tw('border border-gray-300 rounded-lg px-4 py-3 mb-4') as StyleProp<TextStyle>}
          placeholder="votre@email.com"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={tw('mb-2 text-base font-semibold') as StyleProp<TextStyle>}>Mot de passe</Text>
        <TextInput
          style={tw('border border-gray-300 rounded-lg px-4 py-3 mb-4') as StyleProp<TextStyle>}
          placeholder="Votre mot de passe"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={tw('text-blue-600 mb-4') as StyleProp<TextStyle>}>
            {showPassword ? 'Masquer' : 'Afficher'} le mot de passe
          </Text>
        </TouchableOpacity>
        {error && <Text style={tw('text-red-500 mb-2') as StyleProp<TextStyle>}>{error}</Text>}
        <Button title={loading ? 'Connexion...' : 'Se connecter'} onPress={handleLogin} disabled={loading} />
        <TouchableOpacity onPress={() => router.push('./register')} style={tw('mt-6') as StyleProp<ViewStyle>}>
          <Text style={tw('text-center text-blue-600') as StyleProp<TextStyle>}>
            Pas encore de compte ? S'inscrire
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 