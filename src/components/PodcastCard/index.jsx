import { Link } from 'react-router-dom'

function PodcastCard({ title, author, description, imageUrl, href }) {
  return (
    <div className="flex flex-col divide-y px-2 border-solid border border-gray-300 shadow-md w-64">
      <Link to={href} className="flex justify-center py-4">
        <img
          src={imageUrl}
          loading="lazy"
          alt={`${title} (${author})`}
          className="border-solid border border-gray-300 rounded"
        />
      </Link>
      <div className="py-4 flex flex-col">
        <Link to={href} className="text-sm font-semibold">
          {title}
        </Link>
        <Link to={href} className="text-xs italic">
          by {author}
        </Link>
      </div>
      <div className="py-4 text-xs">
        <div className="font-semibold mb-1">Description:</div>
        <div>{description}</div>
      </div>
    </div>
  )
}

export default PodcastCard
