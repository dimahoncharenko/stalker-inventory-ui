import { ImageSourcePropType } from 'react-native'

export interface LootItem {
  name: string
  quantity: number
  stackable: boolean
  imageSource: ImageSourcePropType
  weight: number
  height: number
  width: number
}
