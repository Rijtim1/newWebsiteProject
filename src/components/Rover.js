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
      data: [],
      loading: false, // To track loading state
    };
  }

  onClick = async (roverName) => {
    this.setState({
      loading: true,
      selectRover: roverName.toLowerCase(),
    });

    try {
      // Simulate fetching rover data from an API using async/await
      const response = await fetch(`API_URL/${roverName.toLowerCase()}`);
      const data = await response.json();

      this.setState({
        loading: false,
        data,
      });
    } catch (error) {
      console.error('Error fetching rover data:', error);
      this.setState({
        loading: false,
      });
    }
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
    const { selectRover, loading, data } = this.state;
    return (
      <Container className="">
        <div className="w3-center w3-animate-bottom w3-mobile">
          {loading ? (
            <p>Loading...</p>
          ) : selectRover === '' ? (
            this.renderRoverButtons()
          ) : (
            <RoverData selectRover={selectRover} data={data} />
          )}
        </div>
      </Container>
    );
  }
}

Rover.propTypes = {
  rovers: PropTypes.array,
};
