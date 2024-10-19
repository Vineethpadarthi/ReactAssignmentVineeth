import './index.css'

const DestinationItem = props => {
  const {destinationDetails, onDeleteTodo} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = destinationDetails

  const onDeleteHistory = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="destination-item">
      <div className="items">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="logo" alt="domain logo" />
        <p className="heading">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>
      <div>
        <button data-testid="delete" type="button" onClick={onDeleteHistory}>
          <img
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default DestinationItem
