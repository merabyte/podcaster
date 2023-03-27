import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider, useNavigation } from 'react-router-dom'

import Layout from './'

let router

vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual('react-router-dom')
  return {
    ...mod,
    useNavigation: () => ({
      state: 'loading',
    }),
  }
})

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

    expect(titleElement).toBeInTheDocument()
  })

  it('should render the loading element', () => {
    render(<RouterProvider router={router} />)

    const headerElement = screen.getByRole('banner')
    const loadingElement = headerElement.querySelector('.blob')

    expect(loadingElement).toBeInTheDocument()
  })
})
