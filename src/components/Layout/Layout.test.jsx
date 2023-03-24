import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'

import Layout from './'

let router

describe('Layout', () => {
  beforeEach(() => {
    router = createMemoryRouter(
      [
        {
          path: '/',
          element: <Layout />,
        },
      ],
      { initialEntries: ['/'], initialIndex: 0 },
    )
  })

  afterEach(() => {
    router = null
  })

  it('should render the correct title', () => {
    render(<RouterProvider router={router} />)

    const titleElement = screen.getByRole('link', {
      name: /podcaster/i,
    })

    expect(titleElement).toBeInTheDocument
  })
})
