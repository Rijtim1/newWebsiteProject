import React from 'react'
import './css/App.css'
import Title from './components/Title'

function App () {
  const name = {
    title: 'Mars Rover',
    subtitle: 'Explore the surface of Mars'
  }
  return (
    <div className="App">
      <header className="App-header">
        <Title name={name} />
      </header>
    </div>
  )
}

export default App
