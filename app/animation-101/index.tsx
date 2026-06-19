import { useRef } from 'react'
// 1. Importamos Easing junto con Animated
import { Animated, Easing } from 'react-native'

import ThemedButton from '@/presentation/shared/ThemedButton'
import ThemedView from '@/presentation/shared/ThemedView'

const Animation101Screen = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current
  // 2. Posición inicial: 100px arriba
  const animatedTop = useRef(new Animated.Value(-100)).current

  const fadeIn = () => {
    // Animación 1: Aparecer
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start()

    // Animación 2: Caer rebotando
    Animated.timing(animatedTop, {
      toValue: 0, // Posición final (descanso)
      duration: 700,
      useNativeDriver: true,
      easing: Easing.bounce
    }).start() // ¡No olviden el start!
  }

  const fadeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true
    }).start(() => animatedTop.resetAnimation())
    // 3. Callback: Cuando termine de desaparecer, regresamos la caja a -100px
  }

  return (
    <ThemedView margin className="justify-center items-center flex-1">
      <Animated.View
        className="bg-light-secondary dark:bg-dark-secondary rounded-xl"
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity,
          // 4. Aplicamos el movimiento visual sin romper el Layout
          transform: [
            {
              translateY: animatedTop
            }
          ]
        }}
      />

      <ThemedButton className="my-5" onPress={fadeIn}>
        Fade In
      </ThemedButton>

      <ThemedButton className="my-5" onPress={fadeOut}>
        FadeOut
      </ThemedButton>
    </ThemedView>
  )
}
export default Animation101Screen
