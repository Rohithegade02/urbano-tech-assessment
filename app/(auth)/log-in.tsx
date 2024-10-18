import { View, Text, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react'
import { images } from '@/constants'
import { Image } from 'react-native'
import InputField from '@/components/InputField'

const Login = () => {
  const [email, setEmail] = useState('')
  return (
    <View className='flex flex-1 items-center   pt-20'>
      <View className='flex items-center gap-11'>
        <Image source={images.logo} className='w-[52px] h-[54px]' />
        <Text className='text-2xl font-bold'>Log in</Text>
      </View>
      <InputField routerName='create' />
      <Text className='font-bold absolute bottom-[165px] left-10 text-xl'>
        पूजा पाठ हो या अनुष्ठान,
        {'\n'}
        <Text className='text-[#E0422F]'>पंडित</Text> मिलना हुआ आसान।{' '}
      </Text>

      <Image
        className='absolute bottom-0 right-0 z-40 w-80 h-80'
        source={images.panditImage}
      />
      <ImageBackground
        className='absolute -left-40 w-80 h-80 rotate-180'
        source={images.backgroundCircle}
      />
      <ImageBackground
        className='absolute bottom-0 right-0 w-80 h-80'
        source={images.backgroundCircle}
      />
    </View>
  )
}

export default Login
