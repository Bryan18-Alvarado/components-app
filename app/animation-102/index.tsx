import { useRef } from 'react'
import { Animated, PanResponder, StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const Animation102Screen = () => {
  // 1. Inicializamos los valores X y Y en el centro (0,0)
  const pan = useRef(new Animated.ValueXY()).current

  // 2. Configuramos el reconocedor de gestos
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,

    // Mientras mueve el dedo, actualizamos las coordenadas X y Y
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // x e y son valores animados (Animated.Value)
          dy: pan.y
        }
      ],
      {
        useNativeDriver: false // ¡OBLIGATORIO PARA EVITAR EL CRASH!
      }
    ),

    // Cuando suelta el dedo
    onPanResponderRelease: () => {
      // Efecto resorte para regresar al origen
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false // ¡OBLIGATORIO TAMBIÉN AQUÍ!
      }).start()
    }
  })

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* 3. La caja animada */}
        <Animated.View
          // Inyectamos los manejadores del PanResponder
          {...panResponder.panHandlers}
          // pan.getLayout() convierte X e Y a left y top automáticamente
          style={[pan.getLayout(), styles.box]}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

// Estilos tradicionales para este componente aislado
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    backgroundColor: '#61dafb',
    width: 80,
    height: 80,
    borderRadius: 4
  }
})

export default Animation102Screen
