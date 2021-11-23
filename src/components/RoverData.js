import React from 'react'
import PropTypes from 'prop-types'

export default class RoverData extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectRover: '',
      roverData: [],
      roverPhotos: []
    }
  }

  componentDidMount () {
    this.getRoverData()
  }

  // getRoverData = () => {
  //     fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/?api_key=DEMO_KEY')
  //         .then(response => response.json())
  //         .then(data => {
  //             this.setState({
  //                 roverData: data.rovers
  //             })
  //         })
  // }

  // getRoverPhotos = (rover) => {
  //     fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?api_key=DEMO_KEY`)
  //         .then(response => response.json())
  //         .then(data => {
  //             this.setState({
  //                 roverPhotos: data.photos
  //             })
  //         })
  // }

  // handleChange = (event) => {
  //     this.setState({
  //         selectRover: event.target.value
  //     })
  // }

  // handleSubmit = (event) => {
  //     event.preventDefault()
  //     this.getRoverPhotos(this.state.selectRover)
  // }

  render () {
    return (
            <div>
                <h1>Rover Data</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Select Rover:
                        <select value={this.state.selectRover} onChange={this.handleChange}>
                            {this.state.roverData.map(rover => {
                              return <option key={rover.id} value={rover.name}>{rover.name}</option>
                            })}
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <h2>Photos</h2>
                <ul>
                    {this.state.roverPhotos.map(photo => {
                      return <li key={photo.id}>{photo.img_src}</li>
                    })}
                </ul>
            </div>
    )
  }
}

RoverData.propTypes = {
  roverName: PropTypes.string
}
