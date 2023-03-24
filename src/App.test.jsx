import { render, screen } from '@testing-library/react'

import App from './App'

describe('App', () => {
  it('should render App title', () => {
    render(<App />)

    const titleElement = screen.getByRole('link', {
      name: /podcaster/i,
    })

    expect(titleElement).toBeInTheDocument
  })
})
