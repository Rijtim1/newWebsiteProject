import React from 'react'
import PropTypes from 'prop-types'
import '../css/w3.css'
import Container from 'react-bootstrap/Container'
export default class Title extends React.Component {
  render () {
    return (
      <Container fluid className="w3-mobile">
        <div className='w3-teal w3-center w3-animate-top w3-padding-32'>
          <h1 className={'w3-center'}>{this.props.title}</h1>
          <h2 className={'w3-center'}>{this.props.subtitle}</h2>
        </div>
      </Container>
    )
  }
}

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}
