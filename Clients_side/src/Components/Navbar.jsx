import React from "react";
import { Link } from 'react-router-dom';
import '../App.css'

function Navbar() {
  return (
    <div className="nav_Section">
      <nav className="navbar">

        <div className="navbar_container">
          <div className="navbar_cont">
            <ul className="navbar_menu">
              <div className="list_one">
                <li className="navbar_item">
                  <Link to="/" className="navbar_pages">HOME</Link>
                </li>
                <li className="navbar_item">
                  <Link to="/about" className="navbar_pages">ABOUT</Link>
                </li>
                <li className="navbar_item">
                  <Link to="/categories" className="navbar_pages">CATEGORIES</Link>
                </li>
              </div>

              <div className="list_two">
                <li className="navbar_item">
                  <Link to="/AddArtist" className="navbar_pages add_btn">+</Link>
                </li>
              </div>

            </ul>
          </div>
        </div>

      </nav>
    </div>
  )
}

export default Navbar
