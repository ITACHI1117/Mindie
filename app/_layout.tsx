import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { DataProvider } from "../context/DataContext";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <DataProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(OnboardingScreens)" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="Login" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="DailyAssessmentPage"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="QuestionTwo" options={{ headerShown: false }} />
          <Stack.Screen name="QuestionThree" options={{ headerShown: false }} />
          <Stack.Screen name="QuestionFour" options={{ headerShown: false }} />
          <Stack.Screen name="QuestionFive" options={{ headerShown: false }} />
          <Stack.Screen name="QuestionSix" options={{ headerShown: false }} />
          <Stack.Screen name="Read" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </DataProvider>
  );
}
