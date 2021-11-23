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

  render () {
    return (
            <div>
                <h1>Rover Data</h1>
                <p>Recieved this from Rover: {this.props.selectRover}</p>
            </div>
    )
  }
}

RoverData.propTypes = {
  roverName: PropTypes.string
}
