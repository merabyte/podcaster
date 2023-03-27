import { useLoaderData, useParams } from 'react-router-dom'

import PodcastLayout from '../../components/PodcastLayout'

function Episode() {
  const { episodeId } = useParams()
  const data = useLoaderData()
  const episode = data?.episodes.find(item => `${item.id}` === episodeId) || {}

  return (
    <PodcastLayout data={data}>
      <div className="flex flex-col border-solid border border-gray-300 shadow-md p-4 text-sm">
        <div className="pb-4 border-b border-gray-300">
          <h3 className="text-lg font-bold mb-2">{episode.title}</h3>
          <div className="text-sm" dangerouslySetInnerHTML={{ __html: episode.description }} />
        </div>
        <div className="flex pt-4">
          <audio controls className="flex-1">
            <source src={episode.audioUrl} type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </PodcastLayout>
  )
}

export default Episode
