import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function PodcastItem({ title, author, imageUrl, href, boxStyle }) {
  return (
    <Link to={href} className={'group relative pt-7 flex flex-col'}>
      <img
        src={imageUrl}
        loading="lazy"
        alt={`${title} (${author})`}
        className="absolute top-0 self-center rounded-full border-solid border border-gray-300 w-14 transition-all group-hover:scale-150"
      />

      <div
        style={boxStyle}
        className="flex-1 flex flex-col items-center pt-10 gap-y-2 p-2 border-solid border border-gray-300 shadow-md"
      >
        <div className="text-xs text-center uppercase">{title}</div>
        <div className="text-xs text-center text-gray-500">Author: {author}</div>
      </div>
    </Link>
  )
}

PodcastItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  href: PropTypes.string,
  boxStyle: PropTypes.object,
}

export default PodcastItem
