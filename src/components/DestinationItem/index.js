import './index.css'

const onePlace = props => {
  const {placeDetails} = props
  const {name, imgUrl} = placeDetails

  return (
    <li>
      <p>{name}</p>
      <img src={imgUrl} alt={name} />
    </li>
  )
}
export default onePlace
