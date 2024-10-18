import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
  Pressable,
  ScrollView,
} from 'react-native'
import React, { useCallback } from 'react'
import { images } from '@/constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import CategoryCard from '@/components/CategoryCard'
//className='flex flex-1 py-[70px] px-8 items-center
const CategoryScreen = () => {
  const router = useRouter()
  const handleLogout = useCallback(() => {
    router.push('/(auth)/log-in')
  }, [])
  return (
    <View className='flex-1'>
      <View className='flex flex-1 py-[70px] px-8 items-center'>
        <TouchableWithoutFeedback onPress={handleLogout}>
          <Image
            source={images.exit}
            className='w-[22px] h-[22px] absolute top-8 right-4'
          />
        </TouchableWithoutFeedback>
        <Text className='text-xl text-[#1E1E1E]'>Categories</Text>
        <Text className='text-[6px]'>
          Please select all the categories in which you perform the Pooja
        </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          className='w-full flex-1 flex gap-y-6 mt-6'
        >
          <View>
            <CategoryCard
              id=''
              categoryDescription='The Puja is performed by a Pandit ji by doing Ganesh puja, along
            with the Navagraha Jaaps.'
              categoryImage={images.category}
              categoryTitle='Graph Pravesh'
              categorySubtitle=' ( गृह प्रवेश)'
            />
          </View>
          <View>
            <CategoryCard
              id=''
              categoryDescription='The Puja is performed by a Pandit ji by doing Ganesh puja, along
            with the Navagraha Jaaps.'
              categoryImage={images.category}
              categoryTitle='Graph Pravesh'
              categorySubtitle=' ( गृह प्रवेश)'
            />
          </View>
          <View>
            <CategoryCard
              id=''
              categoryDescription='The Puja is performed by a Pandit ji by doing Ganesh puja, along
            with the Navagraha Jaaps.'
              categoryImage={images.category}
              categoryTitle='Graph Pravesh'
              categorySubtitle=' ( गृह प्रवेश)'
              onSelect={id => {}}
            />
          </View>
          <View>
            <CategoryCard
              id=''
              categoryDescription='The Puja is performed by a Pandit ji by doing Ganesh puja, along
            with the Navagraha Jaaps.'
              categoryImage={images.category}
              categoryTitle='Graph Pravesh'
              onSelect={id => {}}
              categorySubtitle=' ( गृह प्रवेश)'
            />
          </View>
          <View>
            <CategoryCard
              id=''
              categoryDescription='The Puja is performed by a Pandit ji by doing Ganesh puja, along
            with the Navagraha Jaaps.'
              categoryImage={images.category}
              categoryTitle='Graph Pravesh'
              onSelect={id => {}}
              categorySubtitle=' ( गृह प्रवेश)'
            />
          </View>
          <View>
            <CategoryCard
              id=''
              categoryDescription='The Puja is performed by a Pandit ji by doing Ganesh puja, along
            with the Navagraha Jaaps.'
              categoryImage={images.category}
              categoryTitle='Graph Pravesh'
              categorySubtitle=' ( गृह प्रवेश)'
              onSelect={id => {}}
            />
          </View>
        </ScrollView>
        <Pressable className=' absolute bottom-20 bg-[#E31A1A] w-[290px] justify-center h-8 rounded-lg'>
          <Text className='text-center font-bold text-white'>Next</Text>
        </Pressable>
        <ImageBackground
          className='absolute bottom-0 left-[0px] opacity-20 -z-10 w-[400px] h-[500px]'
          source={images.backgroundCircle}
        />
      </View>
    </View>
  )
}

export default CategoryScreen
