import { Stack } from 'expo-router'
import Toast from 'react-native-toast-message'

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name='otp' options={{ headerShown: false }} />
      <Stack.Screen name='log-in' options={{ headerShown: false }} />
      <Stack.Screen name='log-out' options={{ headerShown: false }} />
      <Toast />
    </Stack>
  )
}

export default Layout
