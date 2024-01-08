import { render } from '@testing-library/react-native'

import App from '../App'

describe('App testing', () => {
  it('should mount without error', () => {
    expect(() => render(<App />)).not.toThrow()
  })

  it('should unmount withou errors', () => {
    const { unmount } = render(<App />)
    expect(() => unmount()).not.toThrow()
  })
})
