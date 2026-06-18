import ThemedButton from '@/presentation/shared/ThemedButton'
import ThemedView from '@/presentation/shared/ThemedView'
import { console } from 'react-native'

const Animation101Screen = () => {
  return (
    // 1. Usamos nuestro contenedor con margen
    <ThemedView margin>
      {/* 2. Botón 1 con margen inferior (mb-5) */}
      <ThemedButton className="mb-5" onPress={() => console.log('fadeIN')}>
        Fade In
      </ThemedButton>

      {/* 3. Botón 2 */}
      <ThemedButton className="mb-5" onPress={() => console.log('fadeOUT')}>
        FadeOut
      </ThemedButton>
    </ThemedView>
  )
}

export default Animation101Screen
