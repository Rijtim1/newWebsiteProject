import React from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'

export default class Rover extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectRover: ''
    }
  }

  onClick (roverName) {
    this.setState({
      selectRover: roverName
    })
  }

  render () {
    return (
        <Container>
            <div className="w3-center w3-animate-bottom w3-mobile w3-yellow">
                {this.props.rovers.map((rover, index) => {
                  return (
                        <button key={index} className="w3-margin">{rover}</button>
                  )
                })}
            </div>
        </Container>
    )
  }
}

Rover.propTypes = {
  rovers: PropTypes.array
}
