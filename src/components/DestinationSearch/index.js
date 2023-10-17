// Write your code here
import {Component} from 'react'
import OnePlace from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  gettingInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResult = destinationsList.filter(
      place =>
        place.location.toLowerCase().includes(searchInput.toLowerCase()) ||
        place.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <ul>
        <h1>Destination List</h1>
        <input type="search" onChange={this.gettingInput} />
        <div>
          {searchResult.map(place => (
            <OnePlace key={place.id} placeDetails={place} />
          ))}
        </div>
      </ul>
    )
  }
}

export default DestinationSearch
