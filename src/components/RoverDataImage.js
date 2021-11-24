import React from 'react'
// import Carousel from 'react-bootstrap/Carousel'
// import CarouselItem from 'react-bootstrap/esm/CarouselItem'
// import CarouselCaption from 'react-bootstrap/esm/CarouselCaption'
import '../css/w3.css'

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
                    this.setState({
                        isLoaded: true,
                        items: result.photos
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
                <div className="w3-mobile">
                    {photos}
                    <p>The FUCKING IMAGE WONT LOAD AND I DONT UNDERSTAND WHY HELP!!!!!! IM LOSING BRAIN CELLS</p>
                    <p>There should be images below this if my logic is right, but idk im pretty fucking stupid</p>
                </div>
                
            )
                        
        }
    }
}