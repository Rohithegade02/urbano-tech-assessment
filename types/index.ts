import { ImageSourcePropType } from 'react-native'

export interface Otp {
  contact_number: string
}

export interface Login {
  contact_number: string
  otp: string
}

export interface Category {
  id: string
  categoryImage: ImageSourcePropType
  categoryTitle: string
  categorySubtitle: string
  categoryDescription: string
}
