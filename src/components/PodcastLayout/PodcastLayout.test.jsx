import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'

import { podcasts } from '../../../tests/mocks'
import PodcastLayout from './'

const podcast = podcasts[0]

describe('PodcastLayout', () => {
  it('should render the loading component', () => {
    const router = createMemoryRouter(
      [
        {
          path: '/',
          element: <PodcastLayout data={podcast} loading={true} />,
        },
      ],
      { initialEntries: ['/'], initialIndex: 0 },
    )

    const { container } = render(<RouterProvider router={router} />)
    const loadingElement = container.querySelector('.lds-ellipsis')
    const titleElement = screen.queryByText(podcast.title)

    expect(loadingElement).toBeInTheDocument()
    expect(titleElement).not.toBeInTheDocument()
  })

  it('should render the PodcastCard component', () => {
    const router = createMemoryRouter(
      [
        {
          path: '/',
          element: <PodcastLayout data={podcast} loading={false} />,
        },
      ],
      { initialEntries: ['/'], initialIndex: 0 },
    )

    render(<RouterProvider router={router} />)

    const titleElement = screen.queryByText(podcast.title)
    expect(titleElement).toBeInTheDocument()
  })
})
