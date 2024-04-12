import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Artists from './Artists';

function Home({ isLoggedIn, setIsLoggedIn }) {
    const exploreArtistsRef = useRef(null);
    const [scrollToArtists, setScrollToArtists] = useState(false);

    const scrollToExploreArtists = () => {
        setScrollToArtists(true);
        if (exploreArtistsRef.current) {
            exploreArtistsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <div id='home_page'>
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
                <div id='navbar_right'>
                    <img src="../../Navbar-logo2.png" alt="logo_img" className='explore_img' />
                    <button className='explore_btn' onClick={scrollToExploreArtists}>Explore Artists our Users Love ! 🤍</button>
                </div>
            </div>
            <Artists ref={exploreArtistsRef} scrollToArtists={scrollToArtists} />
        </>
    );
}

export default Home;
