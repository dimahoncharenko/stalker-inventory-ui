import { testItems } from '../../lib/data'
import {
  calculateMaxCols,
  calculateMaxRows,
  canFit,
  createEmptyGrid,
  greedyInventoryPlacement,
  placeItem,
} from '../../lib/utils'

describe('Greedy algorithms for inventory placing', () => {
  test('correctly calculates cols', () => {
    expect(calculateMaxCols(100)).toEqual(6)
  })

  test('correctly calculates rows', () => {
    expect(calculateMaxRows(40)).toEqual(2)
  })

  test('correctly initiates a grid', () => {
    expect(createEmptyGrid(1, 2)).toEqual([[false, false]])
  })

  test('correctly decides whether an item fits to a position', () => {
    const grid = createEmptyGrid(5, 5)

    const colSpan = 5
    const rowSpan = 5
    const decreasedColSpan = colSpan - 3
    const decreasedRowSpan = rowSpan - 3

    expect(canFit(grid, 1, 1, colSpan, rowSpan)).not.toBeTruthy()
    expect(canFit(grid, 1, 1, decreasedColSpan, decreasedRowSpan)).toBeTruthy()
  })

  test('correctly places an item to the inventory', () => {
    let grid = createEmptyGrid(5, 5)

    grid = placeItem(grid, 1, 1, 1, 1)
    expect(grid[1][1]).toBeTruthy()
    expect(grid[0][0]).toBeFalsy()
  })

  test('successfully avoids overlaps', () => {
    let grid = createEmptyGrid(5, 5)
    const colSpan = 2
    const rowSpan = 2

    grid = placeItem(grid, 1, 1, 1, 1)

    expect(canFit(grid, 0, 0, colSpan, rowSpan)).not.toBeTruthy()
  })

  test('correctly sorts items in the inventory', () => {
    const compass = testItems[3] // 5 cells
    const akm = testItems[1] // 11 cells
    const ak = testItems[0] // 11 cells
    const exoskeleton = testItems[4] // 5.49 cells

    const items = [ak, akm, compass, exoskeleton]

    const arrangedItems = greedyInventoryPlacement(items)

    expect(arrangedItems[0].width).toEqual(ak.width)
    expect(arrangedItems[1].width).toEqual(akm.width)
    expect(arrangedItems[2].width).toEqual(compass.width)
    expect(arrangedItems[3].width).toEqual(exoskeleton.width)
  })
})
