import './index.css'

const OnePlace = props => {
  const {placeDetails} = props
  const {name, imgUrl} = placeDetails

  return (
    <li>
      <p>{name}</p>
      <img src={imgUrl} alt={name} />
    </li>
  )
}
export default OnePlace
