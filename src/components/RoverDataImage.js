import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import CarouselCaption from 'react-bootstrap/CarouselCaption';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import '../css/w3.css';
import '../css/RoverDataImage.css';
import 'bootstrap/dist/css/bootstrap.css';

class RoverDataImage extends Component {
  state = {
    error: null,
    isLoaded: false,
    photos: []
  };

  async componentDidMount() {
    const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';
    const API_KEY = 'XAWxBohE3aseeg93CbssMc8e7ckcLD7VvxOKgUBY';
    const url = `${BASE_URL}${this.props.roverName}/photos?api_key=${API_KEY}&sol=${this.props.solValue}`;

    try {
      const response = await fetch(url);
      const result = await response.json();

      this.setState({
        isLoaded: true,
        photos: result.photos
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error
      });
    }
  }

  handleResetClick = () => {
    window.location.reload();
  };

  render() {
    const { error, isLoaded, photos } = this.state;
    const { roverName, solValue } = this.props;

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
      <div>
        {photos.length > 0 ? (
          <div className="w3-grey">
            <Carousel>
              {photos.map((photo, index) => (
                <CarouselItem key={index}>
                  <a href={photo.img_src} target="_blank" rel="noreferrer">
                    <Image className="w3-image image-css" src={photo.img_src} fluid />
                  </a>
                  <CarouselCaption>
                    <div className="w3-black">
                      <h3>{photo.earth_date}</h3>
                      <h4>
                        {`${photo.camera.name} (${photo.camera.full_name})`}
                      </h4>
                    </div>
                  </CarouselCaption>
                </CarouselItem>
              ))}
            </Carousel>
          </div>
        ) : (
          <div>
            <Alert key={solValue} variant="info">
              No photos available for sol {solValue}
            </Alert>
          </div>
        )}

        <Button
          variant="secondary"
          className="w3-margin"
          onClick={this.handleResetClick}
        >
          Reset
        </Button>
      </div>
    );
  }
}

export default RoverDataImage;
