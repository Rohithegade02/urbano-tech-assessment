import { View, Text, ImageBackground, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { images } from '@/constants'
import { Image } from 'react-native'
import InputField from '@/components/InputField'
import { useRouter } from 'expo-router'
import Toast from 'react-native-toast-message'
import { Login, Otp } from '@/types'
import { OtpPost, panditLogin } from '@/api/login'
import AsyncStorage from '@react-native-async-storage/async-storage'

const OTP = () => {
  const [otp, setOtp] = useState<Login['otp']>('') // Assuming Otp['contact_number'] is a string
  const [contactNumber, setContactNumber] =
    useState<Login['contact_number']>('')
  const router = useRouter()
  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('contact_number')
        //   return jsonValue != null ? JSON.parse(jsonValue) : null
        setContactNumber(JSON.parse(jsonValue))
      } catch (e) {
        // error reading value
      }
    }
    getData()
  }, [])
  const handleSubmit = async () => {
    if (otp) {
      try {
        const res = await panditLogin({
          otp,
          contact_number: contactNumber,
        })
        // console.log((res.status = 201))
        if ((res.status = 201)) {
          // Success toast
          Toast.show({
            type: 'success',
            text1: res.message,
          })
          console.log('first')
          router.push('/(root)/category')
        } else {
          // Failure toast
          Toast.show({
            type: 'error',
            text1: res?.message || 'Failed to send OTP',
          })
        }
      } catch (error) {
        // Show error toast
        Toast.show({
          type: 'error',
          text1: 'Error sending OTP',
          // text2: error.message || 'Please try again later.',
        })
      }
    } else {
      // Show validation error
      Toast.show({
        type: 'error',
        text1: 'Please enter a valid email or mobile number',
      })
    }
  }

  return (
    <View className='flex flex-1 items-center   pt-20'>
      <View className='flex items-center gap-11'>
        <Image source={images.logo} className='w-[52px] h-[54px]' />
        <Text className='text-2xl font-bold'>Log in</Text>
      </View>
      <InputField
        title='OTP'
        inputValue={otp}
        setInputValue={setOtp}
        routerName='create'
      />
      <View className='h-12 ' />
      <View className='bg-[#E31A1A] flex justify-center w-[272px] rounded-lg h-10'>
        <Pressable onPress={handleSubmit} className='text-center text-white '>
          <Text className='text-center text-white '>Send OTP</Text>
        </Pressable>
      </View>
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

export default OTP
