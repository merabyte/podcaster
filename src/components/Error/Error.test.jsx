import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'

import Error from './'

let router

describe('Error', () => {
  beforeEach(() => {
    router = createMemoryRouter(
      [
        {
          path: '/',
          element: <Error />,
        },
      ],
      { initialEntries: ['/'], initialIndex: 0 },
    )
  })

  afterEach(() => {
    router = null
  })

  it('should match snapshot', () => {
    const { container } = render(<RouterProvider router={router} />)
    expect(container).toMatchSnapshot()
  })
})
