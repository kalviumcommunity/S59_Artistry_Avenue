import { useState, useEffect } from 'react';
import '../App.css'

const Artists = () => {
    const [data, setData] = useState([])

    const fetchData = () => {
        fetch("https://s59-artistry-avenue-4.onrender.com/api")
            .then(response => response.json())
            .then(result => setData(result))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
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
    )
}

export default Artists