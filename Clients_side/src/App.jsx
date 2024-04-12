import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Artists from './Components/Artists';
import AddArtist from './Components/AddArtist';
import SignUp from './Components/Signup';
import Login from './Components/Login';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login-user" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/navbar" element={<Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/addArtist" element={<AddArtist />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
