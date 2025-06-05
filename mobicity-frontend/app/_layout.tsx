import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { TailwindProvider } from 'tailwindcss-react-native';
import { Platform } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemeProvider, DarkTheme, DefaultTheme } from '@react-navigation/native';

export default function Layout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <TailwindProvider platform={Platform.OS}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </TailwindProvider>
    </ThemeProvider>
  );
}
