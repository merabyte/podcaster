import { API_URLS, PODCAST_DETAIL_CACHE } from '../../utils/config'
import { fromAPIDataToPodcastDetail } from '../../utils/mappers'
import { apiRequest } from '../../utils/common'
import { homeLoader } from '../Home'

export default async function loader({ request, params }) {
  const { podcastId } = params
  const cache = {
    ...PODCAST_DETAIL_CACHE,
    name: `${PODCAST_DETAIL_CACHE.name}-${podcastId}`,
  }
  const baseUrl = new URL(API_URLS.PODCAST_DETAIL)

  baseUrl.searchParams.set('id', podcastId)

  const url = baseUrl.toString()
  const data = await apiRequest(url, {
    signal: request.signal,
    cache,
    mapper: fromAPIDataToPodcastDetail,
  })

  if (!data) {
    throw new Response('Not Found', { status: 404 })
  }

  const listData = await homeLoader({ request })

  const listItem = listData?.find(item => item.id === data?.id)
  if (listItem) data.description = listItem.description

  return data
}
