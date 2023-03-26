import { renderHook } from '@testing-library/react-hooks'

import { podcasts } from '../../../tests/mocks'
import useRequest from '../useRequest'
import usePodcastListRequest from '../usePodcastListRequest'

vi.mock('../useRequest')

describe.only('usePodcastListRequest', () => {
  it('should return data from API', async () => {
    useRequest.mockImplementation(() => ({
      data: podcasts,
      loading: false,
      error: null,
    }))

    const { result } = renderHook(() => usePodcastListRequest())

    expect(result.current.data).toHaveLength(podcasts.length)
  })

  it('should return error when the request fails', async () => {
    useRequest.mockImplementation(() => ({
      data: null,
      loading: false,
      error: new Error('Network error'),
    }))

    const { result } = renderHook(() => usePodcastListRequest())

    expect(result.current.data).toBe(null)
    expect(result.current.error).toBeInstanceOf(Error)
  })
})
