import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Switch, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { useRouter } from 'expo-router';
import { useTailwind } from 'tailwindcss-react-native';

export default function RegisterScreen() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
    newsletter: true,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const tw = useTailwind();

  const handleChange = (name: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setLoading(true);
    setError(null);
    setTimeout(() => {
      setLoading(false);
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
        setError('Veuillez remplir tous les champs.');
      } else if (formData.password !== formData.confirmPassword) {
        setError('Les mots de passe ne correspondent pas.');
      } else if (!formData.acceptTerms) {
        setError('Vous devez accepter les conditions d\'utilisation.');
      } else {
        // TODO: Appel API d'inscription ici
        router.replace('/');
      }
    }, 1000);
  };

  return (
    <View style={tw('flex-1 bg-white justify-center items-center p-4') as StyleProp<ViewStyle>}>
      <Text style={tw('text-2xl font-bold mb-6') as StyleProp<TextStyle>}>Inscription</Text>
      <View style={tw('w-full max-w-xs') as StyleProp<ViewStyle>}>
        <Text style={tw('mb-2 text-base font-semibold') as StyleProp<TextStyle>}>Prénom</Text>
        <TextInput
          style={tw('border border-gray-300 rounded-lg px-4 py-3 mb-4') as StyleProp<TextStyle>}
          placeholder="Votre prénom"
          value={formData.firstName}
          onChangeText={v => handleChange('firstName', v)}
        />
        <Text style={tw('mb-2 text-base font-semibold') as StyleProp<TextStyle>}>Nom</Text>
        <TextInput
          style={tw('border border-gray-300 rounded-lg px-4 py-3 mb-4') as StyleProp<TextStyle>}
          placeholder="Votre nom"
          value={formData.lastName}
          onChangeText={v => handleChange('lastName', v)}
        />
        <Text style={tw('mb-2 text-base font-semibold') as StyleProp<TextStyle>}>Adresse e-mail</Text>
        <TextInput
          style={tw('border border-gray-300 rounded-lg px-4 py-3 mb-4') as StyleProp<TextStyle>}
          placeholder="votre@email.com"
          autoCapitalize="none"
          keyboardType="email-address"
          value={formData.email}
          onChangeText={v => handleChange('email', v)}
        />
        <Text style={tw('mb-2 text-base font-semibold') as StyleProp<TextStyle>}>Mot de passe</Text>
        <TextInput
          style={tw('border border-gray-300 rounded-lg px-4 py-3 mb-4') as StyleProp<TextStyle>}
          placeholder="Créez un mot de passe"
          secureTextEntry={!showPassword}
          value={formData.password}
          onChangeText={v => handleChange('password', v)}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={tw('text-blue-600 mb-4') as StyleProp<TextStyle>}>
            {showPassword ? 'Masquer' : 'Afficher'} le mot de passe
          </Text>
        </TouchableOpacity>
        <Text style={tw('mb-2 text-base font-semibold') as StyleProp<TextStyle>}>Confirmer le mot de passe</Text>
        <TextInput
          style={tw('border border-gray-300 rounded-lg px-4 py-3 mb-4') as StyleProp<TextStyle>}
          placeholder="Confirmez votre mot de passe"
          secureTextEntry={!showConfirmPassword}
          value={formData.confirmPassword}
          onChangeText={v => handleChange('confirmPassword', v)}
        />
        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <Text style={tw('text-blue-600 mb-4') as StyleProp<TextStyle>}>
            {showConfirmPassword ? 'Masquer' : 'Afficher'} le mot de passe
          </Text>
        </TouchableOpacity>
        <View style={tw('flex-row items-center mb-2') as StyleProp<ViewStyle>}>
          <Switch
            value={formData.acceptTerms}
            onValueChange={v => handleChange('acceptTerms', v)}
          />
          <Text style={tw('ml-2 text-sm text-gray-600') as StyleProp<TextStyle>}>
            J'accepte les conditions d'utilisation
          </Text>
        </View>
        <View style={tw('flex-row items-center mb-4') as StyleProp<ViewStyle>}>
          <Switch
            value={formData.newsletter}
            onValueChange={v => handleChange('newsletter', v)}
          />
          <Text style={tw('ml-2 text-sm text-gray-600') as StyleProp<TextStyle>}>
            Je souhaite recevoir les actualités et offres MobiCity
          </Text>
        </View>
        {error && <Text style={tw('text-red-500 mb-2') as StyleProp<TextStyle>}>{error}</Text>}
        <Button title={loading ? 'Création...' : 'Créer mon compte'} onPress={handleSubmit} disabled={loading} />
        <TouchableOpacity onPress={() => router.push('./login')} style={tw('mt-6') as StyleProp<ViewStyle>}>
          <Text style={tw('text-center text-blue-600') as StyleProp<TextStyle>}>Déjà un compte ? Se connecter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 