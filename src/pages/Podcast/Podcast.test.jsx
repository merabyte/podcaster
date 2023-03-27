import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'

import { podcastDetails } from '../../../tests/mocks'
import { Podcast, podcastLoader } from './'

const podcastDetail = podcastDetails[0]
const podcastId = podcastDetail.id
let router

vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual('react-router-dom')
  return {
    ...mod,
    useParams: () => ({
      podcastId,
    }),
    useLoaderData: () => podcastDetail,
  }
})

describe('Podcast', () => {
  beforeEach(() => {
    router = createMemoryRouter(
      [
        {
          path: '/podcast/:podcastId',
          element: <Podcast />,
        },
      ],
      { initialEntries: [`/podcast/${podcastId}`], initialIndex: 0 },
    )
  })

  afterEach(() => {
    router = null
  })

  it('should render the Podcast details', () => {
    render(<RouterProvider router={router} />)

    const titleElement = screen.getByText(podcastDetail.title)
    const descriptionElement = screen.getByText(podcastDetail.description)

    expect(titleElement).toBeInTheDocument()
    expect(descriptionElement).toBeInTheDocument()

    podcastDetail.episodes.forEach(episode => {
      const episodeTitle = screen.getByRole('link', {
        name: episode.title,
      })

      expect(episodeTitle).toBeInTheDocument()
    })
  })
})
