import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  ImageBackground,
} from 'react-native'
import React, { useCallback, useState } from 'react'
import { useRouter } from 'expo-router'

const InputField = ({ routerName }: { routerName: string }) => {
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const handleRoute = useCallback(() => {
    return router.push(`/(profile)/${routerName}`)
  }, [])
  return (
    <View className='mt-12 flex '>
      <View>
        <Text>Email/Mobile No.</Text>
        <TextInput
          className='border mt-2 w-[272px] border-gray-300 p-2 rounded-lg'
          placeholder='Value'
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View className='h-12 ' />
      <View
        //   color={'#E31A1A'}

        className='bg-[#E31A1A] flex justify-center w-[272px] rounded-lg h-10'
      >
        <Button
          title='Send OTP'
          onPress={handleRoute}
          className='text-center text-white '
        />
      </View>
      <Text className='mt-4'>Don&apos;t have an account?</Text>
    </View>
  )
}

export default InputField
