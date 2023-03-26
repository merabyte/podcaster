import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { formatTimeFromMilis } from '../../utils/common'

function EpisodeRow({ title, href, ISODate, durationMilis, className }) {
  const formattedDate = Intl.DateTimeFormat('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(
    new Date(ISODate),
  )
  const formattedDuration = formatTimeFromMilis(durationMilis)

  return (
    <div className={`flex p-1 ${className}`}>
      <Link to={href} className="flex-1 text-sky-600 hover:text-sky-800">
        {title}
      </Link>
      <div className="w-32">{formattedDate}</div>
      <div className="w-16 text-right">{formattedDuration}</div>
    </div>
  )
}

EpisodeRow.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
  ISODate: PropTypes.string,
  durationMilis: PropTypes.number,
  className: PropTypes.string,
}

EpisodeRow.defaultProps = {
  durationMilis: 0,
}

export default EpisodeRow
