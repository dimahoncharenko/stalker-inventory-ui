import { View } from 'react-native'
import { Frame } from '@/components/frame'
import { arrangedLoot } from '@/components/frame/lib/utils'

export const StoreScreen = () => {
  return (
    <View>
      <Frame loot={arrangedLoot} />
    </View>
  )
}
