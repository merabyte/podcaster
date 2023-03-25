import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'

import { episodes } from '../../../tests/mocks'
import EpisodeList from './'

let router

describe('EpisodeList', () => {
  beforeEach(() => {
    router = createMemoryRouter(
      [
        {
          path: '/podcast/:id',
          element: <EpisodeList episodes={episodes} />,
        },
      ],
      { initialEntries: ['/podcast/1'], initialIndex: 0 },
    )
  })

  afterEach(() => {
    router = null
  })

  it('should render the correct number of episodes', () => {
    const titleRX = new RegExp(`episodes: ${episodes.length}`, 'i')
    render(<RouterProvider router={router} />)

    const titleElement = screen.getByRole('heading', {
      name: titleRX,
    })

    expect(titleElement).toBeInTheDocument()
  })

  it('should render the correct episode titles', () => {
    render(<RouterProvider router={router} />)

    episodes.forEach(episode => {
      const episodeTitle = screen.getByRole('link', {
        name: episode.title,
      })

      expect(episodeTitle).toBeInTheDocument()
    })
  })
})
