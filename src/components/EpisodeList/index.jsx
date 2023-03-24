import { Link } from 'react-router-dom'
import EpisodeRow from '../EpisodeRow'

function EpisodeList({ episodes }) {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="border-solid border border-gray-300 shadow-md px-2 py-1 text-lg font-bold">
        Episodes: {episodes.length}
      </div>
      <div className="border-solid border border-gray-300 shadow-md p-2 divide-y text-sm">
        <div className="flex p-1 font-bold">
          <div className="flex-1">Title</div>
          <div className="w-32">Date</div>
          <div className="w-16 text-right">Duration</div>
        </div>
        <>
          {episodes.map((episode, i) => (
            <EpisodeRow
              key={episode.id}
              href={`/podcast/${episode.podcastId}/episode/${episode.id}`}
              className={i % 2 === 0 ? 'bg-gray-100' : ''}
              {...episode}
            />
          ))}
        </>
      </div>
    </div>
  )
}

export default EpisodeList
