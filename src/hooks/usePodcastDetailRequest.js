import { useMemo } from 'react'

import { API_URLS, PODCAST_DETAIL_CACHE } from '../utils/config'
import { fromAPIDataToPodcastDetail } from '../utils/mappers'
import { useRequest, usePodcastListRequest } from './'

function usePodcastDetailRequest({ podcastId }) {
  const cache = useMemo(
    () => ({
      ...PODCAST_DETAIL_CACHE,
      name: `${PODCAST_DETAIL_CACHE.name}-${podcastId}`,
    }),
    [podcastId],
  )
  const baseUrl = new URL(API_URLS.PODCAST_DETAIL)

  baseUrl.searchParams.set('id', podcastId)

  const url = baseUrl.toString()
  const { data, error, loading } = useRequest({
    url,
    cache,
    mapper: fromAPIDataToPodcastDetail,
  })

  // It would be better if the previous call returned the description
  // in order to avoid this request
  const { data: listData } = usePodcastListRequest()
  const listItem = listData?.find(item => item.id === data?.id)
  if (data && listItem) data.description = listItem.description

  return { data, error, loading }
}

export default usePodcastDetailRequest
