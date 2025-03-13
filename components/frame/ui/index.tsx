import { Image, ImageBackground, Text, View } from 'react-native'
import { useMemo } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { LootItem } from '@/shared/types/loot'
import { CELL_SIZE, MAX_INVENTORY_WEIGHT } from '../lib/data'
import { arrangedLoot } from '../lib/utils'

type Props = {
  loot: LootItem[]
}

export const Frame = ({ loot }: Props) => {
  const calculatedWeight = useMemo(() => {
    return loot.reduce((acc, curr) => acc + curr.weight, 0)
  }, [loot])

  return (
    <SafeAreaView className='relative' edges={['top']}>
      <ImageBackground
        className='h-[99.9%] flex-row flex-wrap gap-y-[2px] border-[14px] border-black py-[6.5px] pl-[9px]'
        source={require('../../../assets/images/grid.jpg')}
      >
        {arrangedLoot.map((item, index) => (
          <View
            testID={`loot-item-${index}`}
            className='relative border border-[#666666]'
            key={index}
            style={{
              width: CELL_SIZE * item.width,
              height: CELL_SIZE * item.height,
            }}
          >
            <Image
              testID={`card-image-${index}`}
              source={item.imageSource}
              className='h-full w-full'
            />
            <Text className='absolute bottom-0 right-1 text-white'>
              {item.quantity}
            </Text>
          </View>
        ))}
      </ImageBackground>
      <View className='absolute bottom-[16px] left-[14px] z-20 h-10 w-[calc(93%)] bg-black'>
        <Text className='px-4 py-2 text-right text-white'>{`${calculatedWeight.toFixed(1)} / ${MAX_INVENTORY_WEIGHT.toFixed(1)} kg`}</Text>
      </View>
    </SafeAreaView>
  )
}
