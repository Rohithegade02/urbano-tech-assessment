import { images } from '@/constants'
import { useLocalSearchParams, usePathname } from 'expo-router'
import {
  SafeAreaView,
  View,
  Pressable,
  ImageBackground,
  Text,
  TextInput,
  Image,
} from 'react-native'

const ProfileScreen = () => {
  const path = usePathname()
  return (
    <SafeAreaView className='flex-1 items-center px-7 pt-16 '>
      {path === '/edit' && (
        <Image
          source={images.exit}
          className='w-[22px] h-[22px] absolute top-8 right-4'
        />
      )}
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
        <View className='flex-1 flex-row  gap-10'>
          {path === '/edit' && (
            <Pressable className='bg-[#3360C3] flex-1 border border-[#E31A1A] text-white flex items-center justify-center h-10 rounded-lg '>
              <Text className='text-[#F5F5F5] text-base font-semibold'>
                Edit
              </Text>
            </Pressable>
          )}
          <Pressable className='bg-[#E31A1A] flex-1 text-white flex items-center justify-center h-10 rounded-lg '>
            <Text className='text-[#F5F5F5] text-base font-semibold'>Save</Text>
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
export default ProfileScreen
