import { useParams } from 'react-router-dom'

import { usePodcastDetailRequest } from '../../hooks'
import PodcastLayout from '../../components/PodcastLayout'
import EpisodeList from '../../components/EpisodeList'

function Podcast() {
  const { podcastId } = useParams()
  const { data, loading } = usePodcastDetailRequest({ podcastId })

  return (
    <PodcastLayout data={data} loading={loading}>
      <EpisodeList episodes={data?.episodes} />
    </PodcastLayout>
  )
}

export default Podcast
