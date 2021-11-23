import React from 'react'
import './css/App.css'
import Title from './components/Title'
import Rover from './components/Rover'
import Container from 'react-bootstrap/Container'

export default function App () {
  const name = {
    title: 'Mars Rover Photos',
    subtitle: 'Explore the surface of Mars through the eyes of a Rover'
  }
  // const rovers = ['Curiosity', 'Opportunity', 'Spirit']
  return (
    <Container fluid>
      <Title title={name.title} subtitle={name.subtitle} />
      <Rover rovers={['Curiosity', 'Opportunity', 'Spirit']}/>
    </Container>
  )
}
