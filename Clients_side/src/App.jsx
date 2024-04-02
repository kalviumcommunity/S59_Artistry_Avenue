import React from 'react'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Artists from './Components/Artists'
import AddArtist from './Components/AddArtist'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/navbar" element={<Navbar/>} />
          {/* <Route path="/about" element={<About />} />
            <Route path="/categories" element={<Categories />} /> */}
          <Route path="/artists" element={<Artists />} />
          <Route path="/addArtist" element={<AddArtist />} />
        </Routes>
      </div>
    </>
  )
}

export default App



