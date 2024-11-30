import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Side from './components/Side'
import Map from './components/Map'

function App() {

  return (
    <div className='container'>  
    <div>
      <Header></Header>
      <Side></Side>
      </div>
      <div>
      <Map></Map>
      </div>
    </div>
  )
}

export default App
