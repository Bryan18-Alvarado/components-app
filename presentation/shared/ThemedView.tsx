import { useThemeColor } from '@/hooks/use-theme-color'
import React from 'react'
import { Text, View, ViewProps } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface Props extends ViewProps {
  className?: string
  margin?: boolean
  safe?: boolean
  bgColor?: string
}

const ThemedView = ({
  style,
  className,
  margin = false,
  safe = false,
  children,
  bgColor
}: Props) => {
  const themeBackgroundColor = useThemeColor({}, 'background')

  const backgroundColor = bgColor || themeBackgroundColor

  const safeArea = useSafeAreaInsets()
  return (
    <View
      style={[
        {
          backgroundColor: backgroundColor,
          flex: 1,
          paddingTop: safe ? safeArea.top : 0,
          marginHorizontal: margin ? 10 : 0
        },
        style
      ]}
      className={className}
    >
      <Text>{children}</Text>
    </View>
  )
}

export default ThemedView
