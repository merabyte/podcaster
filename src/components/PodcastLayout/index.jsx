import PropTypes from 'prop-types'
import PodcastCard from '../PodcastCard'

function PodcastLayout({ data, children }) {
  return (
    <div className="flex gap-x-12 items-start">
      {data && (
        <>
          <PodcastCard href={`/podcast/${data.id}`} {...data} />
          <div className="flex-1">{children}</div>
        </>
      )}
    </div>
  )
}

PodcastLayout.propTypes = {
  data: PropTypes.object,
  children: PropTypes.node,
}

export default PodcastLayout
