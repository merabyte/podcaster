import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'

import { podcastDetails } from '../../../tests/mocks'
import { Episode } from './'

const podcastDetail = podcastDetails[0]
const episode = podcastDetail.episodes[0]
const podcastId = podcastDetail.id
const episodeId = episode.id
let router

vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual('react-router-dom')
  return {
    ...mod,
    useParams: () => ({
      podcastId,
      episodeId,
    }),
    useLoaderData: () => podcastDetail,
  }
})

describe('Episode', () => {
  beforeEach(() => {
    router = createMemoryRouter(
      [
        {
          path: '/podcast/:podcastId/episode/:episodeId',
          element: <Episode />,
        },
      ],
      { initialEntries: [`/podcast/${podcastId}/episode/${episodeId}`], initialIndex: 0 },
    )
  })

  afterEach(() => {
    router = null
  })

  it('should render the Episode details', () => {
    render(<RouterProvider router={router} />)

    const titleElement = screen.getByText(episode.title)
    const descriptionElement = screen.getByText(episode.description)

    expect(titleElement).toBeInTheDocument()
    expect(descriptionElement).toBeInTheDocument()
  })

  it('should render the audio player', () => {
    const { container } = render(<RouterProvider router={router} />)
    const audioElement = container.querySelector('audio')
    const sourceElement = audioElement.querySelector('source')

    expect(audioElement).toBeInTheDocument()
    expect(sourceElement).toHaveAttribute('src', episode.audioUrl)
  })
})
