import React, { useState, useEffect } from 'react';
import UpdateBtn from './UpdateArtist';
import DeleteBtn from './DeleteArtist';
import '../App.css';

const Artists = ({ scrollToArtists }) => {
    const [data, setData] = useState([]);
    const [userdata, setUserData] = useState([]);



    useEffect(() => {
        fetchData();
        fetchUserData();
        if (scrollToArtists) {
            const exploreArtistsSection = document.querySelector('.explore_Desc');
            if (exploreArtistsSection) {
                exploreArtistsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [scrollToArtists]);

    const fetchData = () => {
        fetch("http://localhost:8001/api")
            .then(response => response.json())
            .then(result => {
                setData(result);
            })
            .catch((err) => console.log(err));
    };

    const fetchUserData = () => {
        fetch("http://localhost:8001/api/user-artists")
            .then(response => response.json())
            .then(result => {
                setUserData(result);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <div className="grid-container">
                {data.map(artist => (
                    <div key={artist._id} className='main_container'>
                        <div className='container_one'>
                            <img src={artist.artSrc} alt={artist.famous_art} className='img_artSrc' />
                            <div className='desc'>
                                <p className='art_name'>{artist.famous_art}</p>
                                <p className='artist_name'>{artist.name_of_the_artist}</p>
                            </div>
                        </div>

                        <div className='items'>
                            <p className='desc_keys'>Age: <span className='desc_values'>{artist.age}</span> </p>
                            <p className='desc_keys'>Country: <span className='desc_values'>{artist.country}</span> </p>
                            <p className='desc_keys'>Net Worth: <span className='desc_values'>{artist.net_worth}</span> </p>
                            <p className='desc_keys'>Art Category: <span className='desc_values'>{artist.art_category}</span> </p>
                        </div>
                    </div>
                ))}

            </div>
            <h1 className='explore_Desc'>Explore Artists our Users Love !</h1>
            <div className="grid-container">
                {userdata.map(artist => (
                    <div key={artist._id} className='main_container explore_Artists'>
                        <div className='container_one'>
                            <img src={artist.artSrc} alt={artist.famous_art} className='img_artSrc' />
                            <div className='desc'>
                                <p className='art_name'>{artist.famous_art}</p>
                                <p className='artist_name'>{artist.name_of_the_artist}</p>
                            </div>
                        </div>

                        <div className='items'>
                            <p className='desc_keys'>Age: <span className='desc_values'>{artist.age}</span> </p>
                            <p className='desc_keys'>Country: <span className='desc_values'>{artist.country}</span> </p>
                            <p className='desc_keys'>Net Worth: <span className='desc_values'>{artist.net_worth}</span> </p>
                            <p className='desc_keys'>Art Category: <span className='desc_values'>{artist.art_category}</span> </p>
                        </div>

                        <div className='flex'>
                            <UpdateBtn id={artist._id} name_of_the_artist={artist.name_of_the_artist} art_category={artist.art_category} age={artist.age} net_worth={artist.net_worth} famous_art={artist.famous_art} country={artist.country} artSrc={artist.artSrc} fetchData={fetchData} />
                            <DeleteBtn id={artist._id} fetchData={fetchData} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Artists;
