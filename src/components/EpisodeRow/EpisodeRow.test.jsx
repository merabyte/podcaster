import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'

import { episodes } from '../../../tests/mocks'
import EpisodeRow from './'

const episode = { ...episodes[0], href: `/podcast/${episodes[0].podcastId}/episode/${episodes[0].id}` }
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
      { initialEntries: ['/podcast/1'], initialIndex: 0 },
    )
  })

  afterEach(() => {
    router = null
  })

  it('should render the correct episode title and link', () => {
    render(<RouterProvider router={router} />)
    const titleElement = screen.getByRole('link', {
      name: episode.title,
    })

    expect(titleElement).toBeInTheDocument()
    expect(titleElement.href).toContain(episode.href)
  })

  it('should render the correct episode date', () => {
    const formattedDate = '22/03/2023'

    render(<RouterProvider router={router} />)
    const dateElement = screen.getByText(formattedDate)

    expect(dateElement).toBeInTheDocument()
  })

  it('should render the correct episode duration', () => {
    const formattedDuration = '05:00'

    render(<RouterProvider router={router} />)
    const durationElement = screen.getByText(formattedDuration)

    expect(durationElement).toBeInTheDocument()
  })
})
