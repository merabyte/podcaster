import { Link } from 'react-router-dom'

const formatTime = milis => {
  const durationHoursFloat = milis / 1000 / 60 / 60
  const durationHours = Math.floor(durationHoursFloat)
  const remainingMinutes = durationHoursFloat - durationHours
  const durationMinutesFloat = remainingMinutes * 60
  const durationMinutes = Math.floor(durationMinutesFloat)
  const remainingSeconds = durationMinutesFloat - durationMinutes
  const durationSeconds = Math.round(remainingSeconds * 60)

  return (
    `${durationHours ? durationHours + ':' : ''}` +
    `${durationMinutes}`.padStart(2, '0') +
    ':' +
    `${durationSeconds}`.padStart(2, '0')
  )
}

function EpisodeRow({ title, href, ISODate, durationMilis, className }) {
  const formattedDate = Intl.DateTimeFormat('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(
    new Date(ISODate),
  )
  const formattedDuration = formatTime(durationMilis)

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

export default EpisodeRow
