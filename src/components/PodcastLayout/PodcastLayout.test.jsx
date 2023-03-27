import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'

import { podcasts } from '../../../tests/mocks'
import PodcastLayout from './'

const podcast = podcasts[0]

describe('PodcastLayout', () => {
  it('should render the PodcastCard component', () => {
    const router = createMemoryRouter(
      [
        {
          path: '/',
          element: <PodcastLayout data={podcast} />,
        },
      ],
      { initialEntries: ['/'], initialIndex: 0 },
    )

    render(<RouterProvider router={router} />)

    const titleElement = screen.queryByText(podcast.title)
    expect(titleElement).toBeInTheDocument()
  })
})
