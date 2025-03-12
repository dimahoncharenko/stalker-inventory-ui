import { Text, View } from 'react-native'
import { Frame } from '@/components/frame'
import { testItems } from '@/components/frame/lib/data'

export const HomeScreen = () => {
  return (
    <View>
      <Frame loot={testItems} />
    </View>
  )
}
