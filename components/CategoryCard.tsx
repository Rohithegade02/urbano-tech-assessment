import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Category } from '@/types'

const CategoryCard = ({
  categoryDescription,
  categoryImage,
  categorySubtitle,
  categoryTitle,
  id,
  onSelect,
}: Category & { onSelect: (id: string) => void }) => {
  return (
    <Pressable
      key={id}
      onPress={() => onSelect(id)} // Trigger the onSelect when the card is pressed
      className={`border w-full rounded-lg shadow-2xl px-4 py-2.5 h-[102px] ${
        onSelect ? 'border-2 border-[#E31A1A]' : 'border border-[#CECFD2]'
      }`}
    >
      <View className='flex-row gap-6'>
        <Image source={categoryImage} className='h-[80px] w-[98px]' />
        <View className='flex-1 gap-2'>
          <Text className='text-[10px] font-bold text-[#313642]'>
            {categoryTitle}
            <Text className='text-[10px] font-bold text-[#818181]'>
              {' '}
              {categorySubtitle}
            </Text>
          </Text>
          <View className='flex-1'>
            <Text className='text-[8px]'>{categoryDescription}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  )
}

export default CategoryCard
