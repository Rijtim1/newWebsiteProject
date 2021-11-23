import React from 'react'
import PropTypes from 'prop-types'

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
        const url = BASE_URL + this.props.rover + '?api_key=' + API_KEY
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
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    {console.log(items)}
                    {this.props.selectRover}
                </div>
            )
        }
    }

}





//   render () {
//     return (
//             <div>
//                 <h3>Rover Data</h3>
//                 <p>Recieved this from Rover: {this.props.selectRover}</p>
//             </div>
//     )
//   }
// }

RoverData.propTypes = {
  roverName: PropTypes.string
}
