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

interface InputFieldProps {
  routerName: string
  title: string
  inputValue: string
  setInputValue: (value: string) => void
}
const InputField = ({
  inputValue,
  routerName,
  setInputValue,
  title,
}: InputFieldProps) => {
  return (
    <View className='mt-12 flex '>
      <View>
        <Text>{title}</Text>
        <TextInput
          className='border mt-2 w-[272px] border-gray-300 p-2 rounded-lg'
          placeholder='Value'
          value={inputValue}
          onChangeText={setInputValue}
        />
      </View>

      <Text className='mt-4'>Don&apos;t have an account?</Text>
    </View>
  )
}

export default InputField
