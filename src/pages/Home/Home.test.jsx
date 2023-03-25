import { render, screen, fireEvent } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'

import { podcasts } from '../../../tests/mocks'
import Home from './'

let router

vi.mock('../../hooks', async () => {
  const mod = await vi.importActual('../../hooks')
  return {
    ...mod,
    usePodcastListRequest: () => ({
      data: podcasts,
      loading: false,
    }),
  }
})

describe('Home', () => {
  beforeEach(() => {
    router = createMemoryRouter(
      [
        {
          path: '/',
          element: <Home />,
        },
      ],
      { initialEntries: [`/`], initialIndex: 0 },
    )
  })

  afterEach(() => {
    router = null
  })

  it('should render the full podcast list', () => {
    render(<RouterProvider router={router} />)

    const resultsElement = screen.getByText(podcasts.length)
    expect(resultsElement).toBeInTheDocument()

    podcasts.forEach(podcast => {
      const titleElement = screen.getByText(podcast.title)
      expect(titleElement).toBeInTheDocument()
    })
  })

  it('should filter the podcast list when the user types a text', () => {
    render(<RouterProvider router={router} />)

    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()

    fireEvent.change(input, {
      target: {
        value: podcasts[0].title,
      },
    })
    expect(input.value).toBe(podcasts[0].title)

    const resultsElement = screen.getByText('1')
    expect(resultsElement).toBeInTheDocument()

    const noResultsQuery = 'No Results Query'
    fireEvent.change(input, {
      target: {
        value: noResultsQuery,
      },
    })
    expect(input.value).toBe(noResultsQuery)

    const noresultsElement = screen.getByText('0')
    expect(noresultsElement).toBeInTheDocument()
  })
})
