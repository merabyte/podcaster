import { renderHook } from '@testing-library/react-hooks'

import { podcasts, podcastDetails } from '../../../tests/mocks'
import useRequest from '../useRequest'
import usePodcastListRequest from '../usePodcastListRequest'
import usePodcastDetailRequest from '../usePodcastDetailRequest'

const podcastDetail = podcastDetails[0]

vi.mock('../useRequest')
vi.mock('../usePodcastListRequest')

describe.only('usePodcastDetailRequest', () => {
  it('should return data from API', async () => {
    useRequest.mockImplementation(() => ({
      data: podcastDetail,
      loading: false,
      error: null,
    }))

    usePodcastListRequest.mockImplementation(() => ({
      data: podcasts,
      loading: false,
      error: null,
    }))

    const { result } = renderHook(() => usePodcastDetailRequest({ podcastId: podcastDetail.id }))

    expect(result.current.data).not.toBe(null)
    expect(result.current.data.id).toBe(podcastDetail.id)
    expect(result.current.data.episodes).toHaveLength(podcastDetail.episodes.length)
  })

  it('should return error when the request fails', async () => {
    useRequest.mockImplementation(() => ({
      data: null,
      loading: false,
      error: new Error('Network error'),
    }))

    const { result } = renderHook(() => usePodcastDetailRequest({ podcastId: podcastDetail.id }))

    expect(result.current.data).toBe(null)
    expect(result.current.error).toBeInstanceOf(Error)
  })
})
