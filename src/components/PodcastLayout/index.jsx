import Loading from '../Loading'
import PodcastCard from '../PodcastCard'

function PodcastLayout({ data, loading, children }) {
  return (
    <div className="flex gap-x-12 items-start">
      {loading && (
        <div className="flex-1 flex justify-center">
          <Loading />
        </div>
      )}

      {!loading && data && (
        <>
          <PodcastCard href={`/podcast/${data.id}`} {...data} />
          <div className="flex-1">{children}</div>
        </>
      )}
    </div>
  )
}

export default PodcastLayout
