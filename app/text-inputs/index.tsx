import ThemedCard from '@/presentation/shared/ThemedCard'
import ThemedText from '@/presentation/shared/ThemedText'
import ThemedTextInput from '@/presentation/shared/ThemedTextInput'
import ThemedView from '@/presentation/shared/ThemedView'
import { useState } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'

const isIOS = Platform.OS === 'ios'

const TextInputsScreen = () => {
  // Estado único para todo el formulario
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  })

  return (
    // 1. Contenedor protector del teclado
    <KeyboardAvoidingView behavior={isIOS ? 'height' : undefined}>
      {/* 2. Área desplazable */}
      <ScrollView>
        <ThemedView margin>
          {/* Formulario */}
          <ThemedCard className="mb-5">
            <ThemedTextInput
              placeholder="Nombre Completo"
              autoCapitalize="words" // Capitaliza la primera letra de cada palabra
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
            <ThemedTextInput
              placeholder="Correo electrónico"
              autoCorrect={false}
              keyboardType="email-address" // Teclado especial con '@'
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
            <ThemedTextInput
              placeholder="Teléfono"
              autoCorrect={false}
              keyboardType="phone-pad" // Teclado numérico de llamadas
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemedCard>

          {/* Tarjetas de relleno para forzar el scroll */}
          <ThemedCard>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          {/* Input peligroso al final de la pantalla */}
          <ThemedCard>
            <ThemedTextInput
              placeholder="Teléfono (Final)"
              autoCorrect={false}
              keyboardType="phone-pad"
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemedCard>
        </ThemedView>

        {/* 3. Espaciador exclusivo para iOS para evitar que el teclado muerda el último input */}
        {isIOS && <View style={{ marginBottom: 100 }} />}
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
export default TextInputsScreen
