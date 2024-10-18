import { View, Text, ImageBackground, TextInput, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'

const Create = () => {
  return (
    <SafeAreaView className='flex-1 items-center px-7 pt-16 '>
      <View className='gap-[26px]'>
        <Text className='text-xl font-bold'>Your Profile</Text>
        <View className='h-28 w-28 rounded-full bg-slate-300'></View>
      </View>
      <View className='h-10 ' />
      <View className='flex w-full  flex-1'>
        <InputField />
        <View className='h-[18px]' />
        <InputField />
        <View className='h-[18px]' />
        <InputField />
        <View className='h-[18px]' />
        <Pressable className='bg-[#E31A1A] text-white flex items-center justify-center h-10 rounded-lg '>
          <Text className='text-[#F5F5F5] text-base font-semibold'>Save</Text>
        </Pressable>
      </View>
      <ImageBackground
        className='absolute bottom-0 left-[0px] opacity-20 -z-10 w-[400px] h-[500px]'
        source={images.backgroundCircle}
      />
    </SafeAreaView>
  )
}

const InputField = () => {
  return (
    <View className='flex w-full gap-2'>
      <Text>First Name</Text>
      <TextInput
        value=''
        onChangeText={() => {}}
        placeholder='Value'
        className='border h-10 w-80 rounded-lg px-5 border-[#D9D9D9]'
      />
    </View>
  )
}
export default Create
