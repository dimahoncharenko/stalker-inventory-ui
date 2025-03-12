import { render } from '@testing-library/react-native'

import { CELL_SIZE, testItems } from '../../lib/data'
import { Frame } from '../../ui'

describe('<Frame/>', () => {
  test('Correctly renders weight', () => {
    const { getByText } = render(<Frame loot={[]} />)

    getByText('0.0 / 100.0 kg')
  })

  test('Correctly renders items', () => {
    const { getByTestId } = render(<Frame loot={testItems} />)

    testItems.forEach((_, index) => {
      getByTestId(`card-image-${index}`)
    })
  })

  test('Correctly sum up weights', () => {
    const { getByText } = render(<Frame loot={testItems} />)

    getByText('7.0 / 100.0 kg')
  })

  test("Correctly renders items' cards", () => {
    const { getByTestId, getByText } = render(<Frame loot={testItems} />)

    testItems.forEach((item, index) => {
      const cardImage = getByTestId(`card-image-${index}`)

      getByText(item.quantity.toString())

      expect(cardImage).toHaveProp('source', item.imageSource)
    })
  })

  test('Correctly renders sizes for items', () => {
    const { getByTestId } = render(<Frame loot={testItems} />)

    testItems.forEach((item, index) => {
      const lootItem = getByTestId(`loot-item-${index}`)

      expect(lootItem).toHaveStyle({
        width: CELL_SIZE * item.width,
        height: CELL_SIZE * item.height,
      })
    })
  })
})
