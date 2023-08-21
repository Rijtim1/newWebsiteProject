import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RoverDataImage from './RoverDataImage';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.css';

const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/manifests/';
const API_KEY = 'XAWxBohE3aseeg93CbssMc8e7ckcLD7VvxOKgUBY';

class RoverData extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
    value: '',
    submitted: false
  };

  componentDidMount() {
    const { selectRover } = this.props;
    const url = `${BASE_URL}${selectRover}?api_key=${API_KEY}`;

    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.photo_manifest
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ submitted: true });
  };

  handleResetClick = () => {
    window.location.reload();
  };

  renderManifestInfo() {
    const { items } = this.state;
    return (
      <div>
        <h2>{items.name}</h2>
        <p><strong>Landing Date: </strong>{items.landing_date}</p>
        <p><strong>Launch Date: </strong>{items.launch_date}</p>
        <p><strong>Status: </strong>{items.status}</p>
        <p><strong>Total Photos: </strong>{items.total_photos}</p>
        <p><strong>Max Date: </strong>{items.max_date}</p>
        <p><strong>Max Sol: </strong>{items.max_sol}</p>
      </div>
    );
  }

  render() {
    const { error, isLoaded, submitted, value } = this.state;
    const { selectRover } = this.props;

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (!isLoaded) {
      return (
        <div>
          <Spinner animation="border" role="status" />
        </div>
      );
    }

    return (
      <div className="w3-container w3-mobile w3-animate-opacity">
        {submitted ? null : this.renderManifestInfo()}

        <div className="w3-container w3-mobile w3-margin w3-animate-bottom">
          {submitted ? (
            <RoverDataImage roverName={selectRover} solValue={value} />
          ) : (
            <form onSubmit={this.handleSubmit}>
              <label>
                Enter Sol:
                <input
                  type="number"
                  value={value}
                  onChange={this.handleChange}
                  name="enteredSol"
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
          )}
        </div>

        {/* <Button variant="secondary" className="w3-margin" onClick={this.handleResetClick}>
          Reset
        </Button> */}
      </div>
    );
  }
}

RoverData.propTypes = {
  selectRover: PropTypes.string
};

export default RoverData;
