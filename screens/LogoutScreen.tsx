import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Pressable,
} from 'react-native'
import React from 'react'
import { images } from '@/constants'

const LogoutScreen = () => {
  return (
    <SafeAreaView className='flex-1 '>
      <View className='flex-1 justify-center items-center gap-9 px-8'>
        <Text className='text-[#313642] text-[20px]'>
          Are you sure you want to log out?
        </Text>
        <View className='flex flex-row  gap-[29px] px-6'>
          <Pressable className='bg-[#E31A1A] h-10 flex-1 justify-center rounded-lg w-32'>
            <Text className='text-center text-[#F5f5f5]'>Yes</Text>
          </Pressable>
          <Pressable className='bg-[#313642] flex-1 justify-center rounded-lg h-10 w-32'>
            <Text className='text-center text-[#F5f5f5]'>Cancel</Text>
          </Pressable>
        </View>
      </View>
      <ImageBackground
        className='absolute bottom-0 left-[0px] opacity-20 -z-10 w-[400px] h-[500px]'
        source={images.backgroundCircle}
      />
    </SafeAreaView>
  )
}

export default LogoutScreen
