import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const handleLogout = () => {
    document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';
    document.cookie = `username=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
    console.log("Logout successful");
    setIsLoggedIn(false);
  };

  return (
    <div className="nav_Section">
      <nav className="navbar">
        <div className="navbar_container">
          <div className="navbar_cont">
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
              <li className="navbar_item">
                <Link to="/AddArtist" className="navbar_pages add_btn">+</Link>
              </li>
              <li className="navbar_item">
                {isLoggedIn ? (
                  <button className="log_btn" onClick={handleLogout}>
                    Logout
                  </button>
                ) : (
                  <Link to="/login-user" className="navbar_button_link">
                    <button className="log_btn">Login</button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
