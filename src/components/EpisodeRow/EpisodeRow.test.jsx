import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'

import { episodes } from '../../../tests/mocks'
import EpisodeRow from './'

const episode = episodes[0]
let router

describe('EpisodeRow', () => {
  beforeEach(() => {
    router = createMemoryRouter(
      [
        {
          path: '/podcast/:id',
          element: <EpisodeRow {...episode} />,
        },
      ],
      { initialEntries: ['/podcast/:id'], initialIndex: 0 },
    )
  })

  afterEach(() => {
    router = null
  })

  it('should render the correct episode title', () => {
    render(<RouterProvider router={router} />)
    const episodeTitle = screen.getByRole('link', {
      name: episode.title,
    })

    expect(episodeTitle).toBeInTheDocument
  })

  it('should render the correct episode date', () => {
    const formattedDate = Intl.DateTimeFormat('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(
      new Date(episode.ISODate),
    )

    render(<RouterProvider router={router} />)
    const episodeDate = screen.getByText(formattedDate)

    expect(episodeDate).toBeInTheDocument
  })

  it('should render the correct episode duration', () => {
    const formattedDuration = '05:00'

    render(<RouterProvider router={router} />)
    const episodeDuration = screen.getByText(formattedDuration)

    expect(episodeDuration).toBeInTheDocument
  })
})
