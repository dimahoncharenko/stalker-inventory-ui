import { Dimensions } from 'react-native'

import { LootItem } from '@/shared/types/loot'
import { CELL_SIZE, testItems } from './data'

const SCREEN_WIDTH = Dimensions.get('screen').width
const SCREEN_HEIGHT = Dimensions.get('screen').height

interface PositionedLootItem extends LootItem {
  position: { x: number; y: number }
}

// 🟢 Auto-calculate number of columns dynamically based on screen width
export function calculateMaxCols(width = SCREEN_WIDTH): number {
  return Math.floor(width / CELL_SIZE)
}

// 🟢 Auto-calculate max rows based on screen height
export function calculateMaxRows(height = SCREEN_HEIGHT): number {
  return Math.floor(height / CELL_SIZE)
}

export function createEmptyGrid(rows: number, cols: number): boolean[][] {
  return Array.from({ length: rows }, () => Array(cols).fill(false))
}

// ✅ Checks if an item fits at a specific grid position
export function canFit(
  grid: boolean[][],
  row: number,
  col: number,
  width: number,
  height: number,
): boolean {
  if (row + height > grid.length || col + width > grid[0].length) return false
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[row + i][col + j]) return false
    }
  }
  return true
}

export function placeItem(
  grid: boolean[][],
  row: number,
  col: number,
  width: number,
  height: number,
) {
  const copy = [...grid]

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      copy[row + i][col + j] = true
    }
  }

  return copy
}

// 🟢 Greedy algorithm for inventory placement
export function greedyInventoryPlacement(
  items: LootItem[],
): PositionedLootItem[] {
  const maxCols = calculateMaxCols()
  const maxRows = calculateMaxRows()

  let grid = createEmptyGrid(maxRows, maxCols)
  const placedItems: PositionedLootItem[] = []

  // Sort items by largest area first (to fit big items first)
  items.sort((a, b) => b.width * b.height - a.width * a.height)

  for (const item of items) {
    let placed = false
    for (let row = 0; row < maxRows && !placed; row++) {
      for (let col = 0; col < maxCols && !placed; col++) {
        if (canFit(grid, row, col, item.width, item.height)) {
          grid = placeItem(grid, row, col, item.width, item.height)
          placedItems.push({ ...item, position: { x: col, y: row } })
          placed = true
        }
      }
    }

    if (!placed) console.warn(`Could not place item: ${item.name}`)
  }

  return placedItems
}

export const arrangedLoot = greedyInventoryPlacement(testItems)
