import '../App.css'
import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import Artists from './Artists';

function Home() {
  return (
    <>
    <div>
      <div id="navbar_left">
            <Link to="/">
              <img src='../../Navbar-logo.png' alt="Logo_img" className="navbar_image" />
            </Link>
            <div className="navbar_title">
              <Link to="/" className="navbar_logo">
                <h1>Artistry <br /> &nbsp; Avenue</h1>
              </Link>
              <p className="navbar_desc"> <span className="desc_one"> Dive into a platform dedicated to the artists across various mediums. Hover over singers, architects, painters, and others.</span> <br /> <br /> <span className="desc_two">Showcasing you the best, silly, and worst art of the artists.</span> </p>
            </div> 
          </div>
    </div>
    <Artists />
    </>
  )
}

export default Home
