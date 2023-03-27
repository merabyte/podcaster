import PropTypes from 'prop-types'

function Loading({ className }) {
  return <div className={`blob ${className || ''}`}></div>
}

Loading.propTypes = {
  className: PropTypes.string,
}

export default Loading
