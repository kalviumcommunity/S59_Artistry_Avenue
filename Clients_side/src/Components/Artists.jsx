import React, { useState, useEffect } from 'react';
import UpdateBtn from './UpdateArtist';
import DeleteBtn from './DeleteArtist';
import '../App.css';

const Artists = ({ scrollToArtists }) => {
    const [data, setData] = useState([])
    let [userdata, setUserData] = useState([])
    const [userNames, setUsernames] = useState([])
    const [filterdData, setFilteredData] = useState([])
    const [filterUserName, setFilter] = useState('All')

    useEffect(() => {
        fetchData();
        fetchUserData();
        fetchUserNames()
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
                setFilteredData(result)
                console.log(result[1])
                console.log(userdata)
            })
            .catch((err) => console.log(err));
    };

    const fetchUserNames = () => {
        fetch("http://localhost:8001/api/users")
            .then(response => response.json())
            .then(result => {
                console.log("HEy")
                console.log(result)
                setUsernames(result);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        if (filterUserName == 'All') {
            setFilteredData(userdata)

        }
        else {
            const data = userdata.filter(ele => ele.createdBy == filterUserName)
            setFilteredData(data)
        }
    }, [filterUserName])

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
            <select onChange={(e) => setFilter(e.target.value)}>
                <option>All</option>
                {userNames && userNames.map(ele => (
                    <option>{ele}</option>
                ))
                }
            </select>
            <div className="grid-container">
                {filterdData && filterdData.map(artist => (
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
                            <p className='desc_keys'>Created By: <span className='desc_values'>{artist.createdBy}</span> </p>
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
