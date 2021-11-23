import React from 'react'
import PropTypes from 'prop-types'
import { FadingBalls } from 'react-cssfx-loading/lib/FadingBalls'

export default class RoverData extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        error: null,
        isLoaded: false,
        items: []
    }
  }

    componentDidMount () {
        const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/manifests/'
        const API_KEY = 'XAWxBohE3aseeg93CbssMc8e7ckcLD7VvxOKgUBY'
        console.log("RoverData: " + this.props.selectRover)
        const url = BASE_URL + this.props.selectRover + '?api_key=' + API_KEY
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.photo_manifest
                    })
                    console.log(result.photo_manifest)
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
        const { error, isLoaded, items } = this.state
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>
                Loading...
                   </div>
        } else {
            return (
                <div>  
                    <h2>{items.name}</h2>
                    <p><strong>Landing Date: </strong>{items.landing_date}</p>
                    <p><strong>Launch Date: </strong>{items.launch_date}</p>
                    <p><strong>Status: </strong>{items.status}</p>
                    <p><strong>Total Photos: </strong>{items.total_photos}</p>
                    <p><strong>Max Date: </strong>{items.max_date}</p>
                </div>
            )
        }
    }

}

RoverData.propTypes = {
  roverName: PropTypes.string
}
