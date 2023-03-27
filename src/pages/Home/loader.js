import { API_URLS, PODCAST_LIST_CACHE } from '../../utils/config'
import { fromAPIDataToPodcastList } from '../../utils/mappers'
import { apiRequest } from '../../utils/common'

export default async function loader({ request }) {
  return apiRequest(API_URLS.PODCAST_LIST, {
    signal: request.signal,
    cache: PODCAST_LIST_CACHE,
    mapper: fromAPIDataToPodcastList,
  })
}
