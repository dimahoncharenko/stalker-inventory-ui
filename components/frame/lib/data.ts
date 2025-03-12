import { LootItem } from '@/shared/types/loot'

export const testItems: LootItem[] = [
  {
    name: 'Test',
    quantity: 100,
    stackable: true,
    imageSource: require('../../../assets/images/ak.png'),
    weight: 1.5,
    width: 11,
    height: 4,
  },
  {
    name: 'Test',
    quantity: 3,
    stackable: true,
    imageSource: require('../../../assets/images/akm.png'),
    weight: 1.5,
    width: 11,
    height: 4,
  },
  {
    name: 'Test',
    quantity: 2,
    stackable: false,
    imageSource: require('../../../assets/images/compass-artifact.png'),
    weight: 2,
    width: 5,
    height: 5,
  },
  {
    name: 'Test',
    quantity: 1,
    stackable: false,
    imageSource: require('../../../assets/images/exoskeleton.png'),
    weight: 2,
    width: 6,
    height: 10,
  },
]

export const MAX_INVENTORY_WEIGHT = 100
export const CELL_SIZE = 16.7
export const MAX_CELLS_PER_ROW = 22
export const MAX_CELLS_PER_COLUMN = 46
