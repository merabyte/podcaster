import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'

import { podcasts } from '../../../tests/mocks'
import PodcastItem from './'

const podcast = { ...podcasts[0], href: `/podcast/${podcasts[0].id}` }
let router

describe('PodcastItem', () => {
  beforeEach(() => {
    router = createMemoryRouter(
      [
        {
          path: '/',
          element: <PodcastItem {...podcast} />,
        },
      ],
      { initialEntries: ['/'], initialIndex: 0 },
    )
  })

  afterEach(() => {
    router = null
  })

  it('should render the correct image', () => {
    const { title, author, imageUrl } = podcast
    const imageName = `${title} (${author})`

    render(<RouterProvider router={router} />)

    const imgElement = screen.getByRole('img', {
      name: imageName,
    })

    expect(imgElement).toBeInTheDocument()
    expect(imgElement.src).toBe(imageUrl)
  })

  it('should render the correct title and author', () => {
    render(<RouterProvider router={router} />)

    const titleElement = screen.getByText(podcast.title)
    const authorElement = screen.getByText(`Author: ${podcast.author}`)

    expect(titleElement).toBeInTheDocument()
    expect(authorElement).toBeInTheDocument()
  })

  it('should link to the correct path', () => {
    render(<RouterProvider router={router} />)

    const linkElement = screen.getByRole('link')

    expect(linkElement).toBeInTheDocument()
    expect(linkElement.href).toContain(podcast.href)
  })
})
