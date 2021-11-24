import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from 'react-bootstrap/esm/CarouselItem'
import CarouselCaption from 'react-bootstrap/esm/CarouselCaption'
import '../css/w3.css'
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.css';
import '../css/RoverDataImage.css'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

export default class RoverDataImage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            photos: []
        }
        // this.handleClick = this.handleClick.bind(this)
    }

    onClick = () => {
        window.location.reload()
    }

    componentDidMount () {
        const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/'
        const API_KEY = 'XAWxBohE3aseeg93CbssMc8e7ckcLD7VvxOKgUBY'
        const url = BASE_URL + this.props.roverName + '/photos?api_key=' + API_KEY + '&sol=' + this.props.solValue
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        photos: result.photos
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render () {
        const { error, isLoaded, photos } = this.state        
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div><Spinner animation="border" role="status">
            </Spinner></div>
        } else {
            return (
                <div>
                    {/* <p>Images loaded: {photos.length}</p> */}
                    {photos.length > 0 ? 
                    <div className="w3-grey">
                    <Carousel>
                        {photos.map(photo => (
                            <CarouselItem>
                                <a href={photo.img_src} target="_blank" rel="noreferrer">
                                    <Image className={"w3-image image-css"} src={photo.img_src} fluid />
                                </a>
                                <CarouselCaption>
                                    <div className="w3-black">
                                        <h3>{photo.earth_date}</h3>
                                        <h4>{photo.camera.name + " (" + photo.camera.full_name + ")"} </h4>
                                    </div>
                                </CarouselCaption>
                            </CarouselItem>
                        ))}
                    </Carousel>
                </div>
                : <div> <Alert key={this.props.solValue} variant="info">No photos available for sol {this.props.solValue} </Alert></div>}

                <Button variant="secondary" className="w3-margin" onClick={this.onClick}>Reset</Button>

                </div>                
            )                        
        }
    }
}


// make the text more visible