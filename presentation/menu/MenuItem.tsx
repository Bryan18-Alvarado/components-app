import { useThemeColor } from '@/hooks/use-theme-color'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Href, router } from 'expo-router'
import { Pressable, View } from 'react-native'
import ThemedText from '../shared/ThemedText'

interface Props {
  title: string
  icon: keyof typeof Ionicons.glyphMap
  name: string
  isFirst?: boolean
  isLast?: boolean
}

const MenuItem = ({
  title,
  icon,
  name,
  isFirst = false,
  isLast = false
}: Props) => {
  const [routeName] = name.split('/')

  const primaryColor = useThemeColor({}, 'primary')

  return (
    <Pressable
      onPress={() => router.push(routeName as Href)}
      className="bg-white dark:bg-black/15 px-5 py-5"
      style={{
        ...(isFirst && {
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          paddingTop: 20
        }),
        ...(isLast && {
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          paddingTop: 20
        })
      }}
    >
      <View className="flex-row items-center">
        <Ionicons name={icon} size={24} color={primaryColor} className="mr-5" />
        <ThemedText type="h2">{title}</ThemedText>
      </View>
    </Pressable>
  )
}

export default MenuItem
