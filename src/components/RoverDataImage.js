import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from 'react-bootstrap/esm/CarouselItem'
import CarouselCaption from 'react-bootstrap/esm/CarouselCaption'
import '../css/w3.css'
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.css';

export default class RoverDataImage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            photos: []
        }
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
                    console.log(result)
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
            return <div>Loading...</div>
        } else {
            return (
                <div className="w3-mobile w3-grey">
                    <Carousel>
                        {photos.map(photo => (
                            <CarouselItem>
                                <Image className={"w3-image"} src={photo.img_src} fluid />
                                <CarouselCaption>
                                    <h3>{photo.earth_date}</h3>
                                    <h4>{photo.camera.name + " (" + photo.camera.full_name + ")"} </h4>
                                </CarouselCaption>
                            </CarouselItem>
                        ))}
                    </Carousel>
                </div>
                
            )
                        
        }
    }
}