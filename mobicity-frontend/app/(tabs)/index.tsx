import React from 'react';
import { StyleSheet, ScrollView, StyleProp, ViewStyle, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useTailwind } from 'tailwindcss-react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import HeroSection from '../../components/HeroSection';
import FeaturesSection from '../../components/FeaturesSection';
import MapPreview from '../../components/MapPreview';
import CommunitySection from '../../components/CommunitySection';

export default function HomeScreen() {
  const router = useRouter();
  const tw = useTailwind();

  console.log('HomeScreen is rendering');

  return (
    <ScrollView style={tw('flex-1 bg-white') as StyleProp<ViewStyle>}>
      <ThemedView style={styles.container}>
        <HeroSection />
        <FeaturesSection />
        <MapPreview />
        <CommunitySection />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
