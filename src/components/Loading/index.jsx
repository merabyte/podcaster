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

export default Loading
