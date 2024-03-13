import React from "react";
import { Link } from 'react-router-dom';
import '../App.css'

function Navbar() {
  return (
    <div>
      <nav className="navbar">

        <div className="navbar_container">
          <div id="navbar_left">
            <a href="/">
              <img src='../../Navbar-logo.png' alt="Logo_img" className="navbar_image" />
            </a>
            <div className="navbar_title">
              <Link to="/" className="navbar_logo">
                <h1>Artistry <br /> &nbsp; Avenue</h1>
              </Link>
              <p className="navbar_desc">Hey he reflwkjgnj e dmf vkl k ldjv kejv lkel vn ejvb sjkb s rbn ern vns erkn fefn lnbl sebnbi</p>
            </div>
          </div>

          <ul className="navbar_menu">
            <li className="navbar_item">
              <Link to="/" className="navbar_pages">HOME</Link>
            </li>
            <li className="navbar_item">
              <Link to="/about" className="navbar_pages">ABOUT</Link>
            </li>
            <li className="navbar_item">
              <Link to="/categories" className="navbar_pages">CATEGORIES</Link>
            </li>
          </ul>

        </div>

      </nav>
    </div>
  )
}

export default Navbar
