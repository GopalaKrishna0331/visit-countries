import './index.css'

const VisitItem = props => {
  const {each, onClickVisitButton, index} = props
  const {id, name} = each
  const visitButton = () => {
    onClickVisitButton(id)
  }
  return (
    <li>
      <div className="list-container">
        <p className="para">{name}</p>
        {each.isVisited ? (
          <p className="visited-para">Visited</p>
        ) : (
          <button className="visit-button" type="button" onClick={visitButton}>
            Visit
          </button>
        )}
      </div>
      {index !== 9 ? <hr className="horizontal-line" /> : null}
    </li>
  )
}

export default VisitItem
