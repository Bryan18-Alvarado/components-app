import { useColorScheme } from '@/hooks/use-color-scheme'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from '@react-navigation/native'

import { useThemeColor } from '@/hooks/use-theme-color'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import 'react-native-reanimated'
import '../global.css'

import { allRoutes } from '@/constants/Routes'
import { Stack } from 'expo-router'

export default function RootLayout() {
  const backgroundColor = useThemeColor({}, 'background')
  const colorScheme = useColorScheme()

  return (
    <GestureHandlerRootView
      style={{ backgroundColor: backgroundColor, flex: 1 }}
    >
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: backgroundColor
            },
            headerStyle: {
              backgroundColor: backgroundColor
            }
          }}
        >
          <Stack.Screen name="index" options={{ title: '' }} />

          {allRoutes.map((route) => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              options={{
                title: route.title
              }}
            />
          ))}
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}
