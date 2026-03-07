import React, { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PaperProvider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { registerRootComponent } from 'expo';
// Contexts and Navigators
import { LanguageProvider } from './src/contexts/LanguageContext';
import { ThemeProvider, useTheme } from './src/contexts/ThemeContext';
import { AuthNavigator } from './src/navigation/AuthNavigator';
import OfflineIndicator from './src/components/OfflineIndicator';
import { navigationRef } from './src/navigation/RootNavigation';
import SplashScreen from './src/screens/SplashScreen';

// Create QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// Inner component that consumes the theme
function AppContent() {
  const { paperTheme, navigationTheme, isDark, colors } = useTheme();
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: colors.background }}>
      <PaperProvider theme={paperTheme}>
        <LanguageProvider>
          <NavigationContainer theme={navigationTheme} ref={navigationRef}>
            <StatusBar
              style={isDark ? "light" : "dark"}
              backgroundColor={colors.background}
            />
            <OfflineIndicator />
            <AuthNavigator />
            {showSplash && (
              <SplashScreen onFinish={handleSplashFinish} minDuration={2800} />
            )}
          </NavigationContainer>
        </LanguageProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <AppContent />
        </ThemeProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

registerRootComponent(App);
