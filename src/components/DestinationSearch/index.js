// Write your code here
import {Component} from 'react'
import OnePlace from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
    destinationDetails: this.props,
  }

  gettingInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationDetails, searchInput} = this.state
    const searchResult = destinationDetails.filter(
      place =>
        place.location.toLowerCase().includes(searchInput.toLowerCase()) ||
        place.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    console.log(searchResult)
    return (
      <ul>
        <h1>Destination List</h1>
        <input type="search" onChange={this.gettingInput} />
        <div>
          {destinationDetails.map(place => (
            <OnePlace key={place.id} placeDetails={place} />
          ))}
        </div>
      </ul>
    )
  }
}

export default DestinationSearch
