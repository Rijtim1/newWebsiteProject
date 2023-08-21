import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import RoverData from './RoverData';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

export default class Rover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectRover: '',
      data: []
    };
  }

  onClick = (roverName) => {
    this.setState({
      selectRover: roverName.toLowerCase()
    });
  };

  renderRoverButtons() {
    return (
      <div>
        <h3 className="w3-margin">Select a Rover</h3>
        {this.props.rovers.map((rover, index) => (
          <Button
            key={index}
            variant="primary"
            className="w3-margin"
            onClick={() => this.onClick(rover)}
          >
            {rover}
          </Button>
        ))}
      </div>
    );
  }

  render() {
    const { selectRover } = this.state;
    return (
      <Container className="">
        <div className="w3-center w3-animate-bottom w3-mobile">
          {selectRover === '' ? this.renderRoverButtons() : <RoverData selectRover={selectRover} />}
        </div>
      </Container>
    );
  }
}

Rover.propTypes = {
  rovers: PropTypes.array
};
