import { useLoaderData } from 'react-router-dom'

import PodcastLayout from '../../components/PodcastLayout'
import EpisodeList from '../../components/EpisodeList'

function Podcast() {
  const data = useLoaderData()

  return (
    <PodcastLayout data={data}>
      <EpisodeList episodes={data?.episodes} />
    </PodcastLayout>
  )
}

export default Podcast
