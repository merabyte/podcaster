import PropTypes from 'prop-types'

function Loading({ className }) {
  return (
    <div className={`lds-ellipsis ${className}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

Loading.propTypes = {
  className: PropTypes.string,
}

export default Loading
