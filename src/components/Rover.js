import React from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import RoverData from './RoverData'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css';

export default class Rover extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectRover: '',
      data: []
    }
  }

  onClick (roverName) {
    this.setState({
      selectRover: roverName.toLowerCase()
    })
  }

  render () {
    return (
            <Container className="">
                <div className="w3-center w3-animate-bottom w3-mobile">
                    {this.state.selectRover === '' ? 
                    <div>
                        <h3 className="w3-margin">Select a Rover </h3>
                        {
                                this.props.rovers.map((rover, index) => 
                                {
                                    return (
                                        <Button key={index} variant="primary" className="w3-margin" onClick={() => this.onClick(rover)}>{rover}</Button>
                                    )
                                }
                            )
                        }
                    </div>
                    : 
                    <div>
                        <RoverData selectRover={this.state.selectRover}/>
                    </div>
                    }
                </div>
            </Container>
    )
  }
}

Rover.propTypes = {
  rovers: PropTypes.array
}
