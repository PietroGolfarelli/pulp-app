import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import { ThemeProvider } from './src/config/ThemeContext';
import MainTabs from './src/components/MainTabs';
import { LanguageProvider } from './src/config/LanguangeProvider';

const Stack = createNativeStackNavigator();
import { useFonts, Oswald_700Bold } from '@expo-google-fonts/oswald';

export default function App() {
  const [fontsLoaded] = useFonts({
    Oswald_700Bold,
  });

  if (!fontsLoaded) return null;
  return (
    <LanguageProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="MainTabs" component={MainTabs} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </LanguageProvider>
  );
}