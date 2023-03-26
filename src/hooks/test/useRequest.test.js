import { renderHook } from '@testing-library/react-hooks'

import { request, setCacheData, getCacheData } from '../../utils/common'
import { API_URLS, PODCAST_LIST_CACHE } from '../../utils/config'
import { fromAPIDataToPodcastList } from '../../utils/mappers'

import { podcasts, podcastsAPI } from '../../../tests/mocks'
import useRequest from '../useRequest'

vi.mock('../../utils/common')

describe('useRequest', () => {
  it('should return data from API', async () => {
    request.mockImplementation(() => Promise.resolve(podcastsAPI))
    setCacheData.mockImplementation(() => null)
    getCacheData.mockImplementation(() => null)

    const { result, waitForNextUpdate } = renderHook(() =>
      useRequest({
        url: API_URLS.PODCAST_LIST,
        cache: PODCAST_LIST_CACHE,
        mapper: fromAPIDataToPodcastList,
      }),
    )

    await waitForNextUpdate()

    expect(result.current.data).toHaveLength(podcastsAPI.feed.entry.length)
  })

  it('should return error when API is not available', async () => {
    request.mockImplementation(() => {
      throw new Error('Network error')
    })
    setCacheData.mockImplementation(() => null)
    getCacheData.mockImplementation(() => null)

    const { result } = renderHook(() =>
      useRequest({
        url: API_URLS.PODCAST_LIST,
        cache: PODCAST_LIST_CACHE,
        mapper: fromAPIDataToPodcastList,
      }),
    )

    expect(result.current.data).toBe(null)
    expect(result.current.error).toBeInstanceOf(Error)
  })

  it('should return data from cache', async () => {
    request.mockImplementation(() => null)
    setCacheData.mockImplementation(() => null)
    getCacheData.mockImplementation(() => podcasts)

    const { result } = renderHook(() =>
      useRequest({
        url: API_URLS.PODCAST_LIST,
        cache: PODCAST_LIST_CACHE,
        mapper: fromAPIDataToPodcastList,
      }),
    )

    expect(result.current.data).toHaveLength(podcasts.length)
  })
})
