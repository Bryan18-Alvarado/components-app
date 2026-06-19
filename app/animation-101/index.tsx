import { useAnimation } from '@/hooks/useAnimation'
import ThemedButton from '@/presentation/shared/ThemedButton'
import ThemedView from '@/presentation/shared/ThemedView'
import { Animated, Easing } from 'react-native'

const Animation101Screen = () => {
  // 2. Desestructuramos todo de nuestro hook, ¡qué limpio!
  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition
  } = useAnimation()

  return (
    <ThemedView margin className="justify-center items-center flex-1">
      <Animated.View
        className="bg-light-secondary dark:bg-dark-secondary rounded-xl"
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity,
          transform: [
            {
              translateY: animatedTop
            }
          ]
        }}
      />

      <ThemedButton
        className="my-5"
        onPress={() => {
          // 3. Aparecemos con valores por defecto
          fadeIn({})
          // 4. Movemos la caja indicándole a dónde ir y qué curva usar
          startMovingTopPosition({
            toValue: 0, // Posición de descanso
            easing: Easing.bounce, // El famoso rebote
            duration: 700
          })
        }}
      >
        Fade In
      </ThemedButton>

      <ThemedButton
        className="my-5"
        onPress={() => fadeOut({})} // Desaparecemos con valores por defecto
      >
        FadeOut
      </ThemedButton>
    </ThemedView>
  )
}
export default Animation101Screen
