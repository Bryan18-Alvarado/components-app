import { useColorScheme } from '@/hooks/use-color-scheme'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from '@react-navigation/native'
import { Text, View } from 'react-native'
import 'react-native-reanimated'
import '../global.css'

export const unstable_settings = {
  anchor: '(tabs)'
}

export default function RootLayout() {
  const colorScheme = useColorScheme()

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View className="bg-light-background dark:bg-background flex-1 justify-center items-center">
        <Text className="mt-10 text-3xl text-light-text dark:text-dark-text font-bold">
          Hello World
        </Text>
      </View>
    </ThemeProvider>
  )
}
