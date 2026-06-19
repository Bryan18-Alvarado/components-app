import { useRef } from 'react'
import { Animated, Easing } from 'react-native'

export const useAnimation = () => {
  // 1. Movemos el estado de la animación aquí
  const animatedOpacity = useRef(new Animated.Value(0)).current
  const animatedTop = useRef(new Animated.Value(0)).current

  // 2. Parametrizamos fadeIn con valores por defecto
  const fadeIn = ({
    duration = 300,
    toValue = 1,
    useNativeDrive = true,
    easing = Easing.linear,
    callback = () => {} // Función vacía por defecto
  }) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: useNativeDrive,
      easing: easing
    }).start(callback) // Disparamos el callback al terminar
  }

  // 3. Parametrizamos fadeOut
  const fadeOut = ({
    duration = 300,
    toValue = 0,
    useNativeDrive = true,
    easing = Easing.ease,
    callback = () => {}
  }) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: useNativeDrive,
      easing: easing
    }).start(callback)
  }

  // 4. Parametrizamos el movimiento físico
  const startMovingTopPosition = ({
    initialPosition = -100, // Por defecto, empieza 100px arriba
    duration = 700,
    toValue = 1, // En nuestro ejemplo de uso real, lo llevaremos a 0 (descanso)
    useNativeDrive = true,
    easing = Easing.ease,
    callback = () => {}
  }) => {
    // Truco clave: Reiniciamos la posición ANTES de animar
    animatedTop.setValue(initialPosition)

    Animated.timing(animatedTop, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: useNativeDrive,
      easing: easing
    }).start(callback)
  }

  // 5. Retornamos las variables y los métodos
  return {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition
  }
}
