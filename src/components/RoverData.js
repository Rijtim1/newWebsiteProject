import React from 'react'
import PropTypes from 'prop-types'
import RoverDataImage from './RoverDataImage'
import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner'

export default class RoverData extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        error: null,
        isLoaded: false,
        items: [],
        value: '',
        submitted: false,
        // selectRover: this.props.selectRover
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

    handleChange (event) {
        this.setState({value: event.target.value})
    }

    handleSubmit (event) {
        event.preventDefault()
        this.setState({submitted: true})
    }

    componentDidMount () {
        const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/manifests/'
        const API_KEY = 'XAWxBohE3aseeg93CbssMc8e7ckcLD7VvxOKgUBY'
        const url = BASE_URL + this.props.selectRover + '?api_key=' + API_KEY
        // this.setState({selectRover: this.props.selectRover})
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.photo_manifest
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
        const { error, isLoaded, items } = this.state
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>
                {/* Loading... */}
                <Spinner animation="border" role="status">
                </Spinner>
                   </div>
        } else {
            return (
                <div className="w3-container w3-mobile w3-animate-opacity">  
                    
                    {this.state.submitted ? <div></div> :         
                    <div><h2>{items.name}</h2>
                    <p><strong>Landing Date: </strong>{items.landing_date}</p>
                    <p><strong>Launch Date: </strong>{items.launch_date}</p>
                    <p><strong>Status: </strong>{items.status}</p>
                    <p><strong>Total Photos: </strong>{items.total_photos}</p>
                    <p><strong>Max Date: </strong>{items.max_date}</p>
                    <p><strong>Max Sol: </strong>{items.max_sol}</p>
                    </div>}

                    <div className="w3-container w3-mobile w3-margin w3-animate-bottom">
                        {this.state.submitted ? <RoverDataImage roverName={this.props.selectRover} solValue={this.state.value} /> :                     
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Enter Sol:
                                <input type="number" value={this.state.value} onChange={this.handleChange} name="enteredSol" />
                            </label>
                            <input type="submit" value="Submit"/>
                        </form>
                        }
                    </div>
                
                </div>
            )
        }
    }

}

RoverData.propTypes = {
  roverName: PropTypes.string
}
