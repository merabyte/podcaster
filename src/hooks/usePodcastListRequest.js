import { API_URLS, PODCAST_LIST_CACHE } from '../utils/config'
import { fromAPIDataToPodcastList } from '../utils/mappers'
import useRequest from './useRequest'

function usePodcastListRequest() {
  const { data, error, loading } = useRequest({
    url: API_URLS.PODCAST_LIST,
    cache: PODCAST_LIST_CACHE,
    mapper: fromAPIDataToPodcastList,
  })

  return { data, error, loading }
}

export default usePodcastListRequest
