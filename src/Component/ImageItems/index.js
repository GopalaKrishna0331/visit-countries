import './index.css'

const ImageElement = props => {
  const {each, onClickRemoveButton} = props
  const {id, imageUrl, name} = each
  const removeButton = () => {
    onClickRemoveButton(id)
  }
  return (
    <li className="list-container-element">
      <img src={imageUrl} alt="thumbnail" className="visit-img" />
      <div className="visit-show">
        <p className="para">{name}</p>
        <button className="remove-button" type="button" onClick={removeButton}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default ImageElement
