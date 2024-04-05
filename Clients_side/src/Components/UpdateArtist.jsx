import React, { useState } from "react";
import '../App.css'

async function handleUpdate(id, data, fetchData) {
    try {
        const response = await fetch(`http://localhost:8001/api/custom-artist/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Error updating an artist ${id}: ${response.statusText}`);
        }
        fetchData()
        console.log(`Update artist with ID: ${id}`);
        const responseData = await response.json();
    } catch (err) {
        console.error('Error while updating an artist:', err.message);
    }
}


function UpdateBtn({ id, name_of_the_artist, art_category, age, net_worth, famous_art, country, artSrc, fetchData }) {
    const [isUpdate, setIsUpdate] = useState(false);
    const [updateName, setUpdateName] = useState(name_of_the_artist || '');
    const [updateArtCategory, setUpdateArtCategory] = useState(art_category || '');
    const [updateAge, setUpdateAge] = useState(age || '');
    const [updateNetWorth, setUpdateNetWorth] = useState(net_worth || '');
    const [updateFamousArt, setUpdateFamousArt] = useState(famous_art || '');
    const [updateCountry, setUpdateCountry] = useState(country || '');
    const [updateArtSrc, setUpdateArtSrc] = useState(artSrc || '');


    const handleUserInput = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name_of_the_artist':
                setUpdateName(value);
                break;
            case 'art_category':
                setUpdateArtCategory(value);
                break;
            case 'age':
                setUpdateAge(value);
                break;
            case 'net_worth':
                setUpdateNetWorth(value);
                break;
            case 'famous_art':
                setUpdateFamousArt(value);
                break;
            case 'country':
                setUpdateCountry(value);
                break;
            case 'artSrc':
                setUpdateArtSrc(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = () => {
        const data = {
            name_of_the_artist: updateName,
            art_category: updateArtCategory,
            age: updateAge,
            net_worth: updateNetWorth,
            famous_art: updateFamousArt,
            country: updateCountry,
            artSrc: updateArtSrc
        };
        handleUpdate(id, data, fetchData);
        setIsUpdate(false);

    };

    const handleCloseBtn = () => {
        setIsUpdate(false);
    };

    const handleUpdateBtn = () => {
        setIsUpdate(true);
    };

    return (
        <div>
            {!isUpdate && (
                <button onClick={handleUpdateBtn} className="update_btn">Update</button>
            )}
            {isUpdate && (
                <div>
                    <form className="editform">
                        <label className="flex">
                            Name of the Artist:
                            <input type="text" name="name_of_the_artist" value={updateName} onChange={handleUserInput} />
                        </label>
                        <label className="flex">
                            Art Category:
                            <input type="text" name="art_category" value={updateArtCategory} onChange={handleUserInput} />
                        </label>
                        <label className="flex">
                            Age:
                            <input type="text" name="age" value={updateAge} onChange={handleUserInput} />
                        </label>
                        <label className="flex">
                            Net Worth:
                            <input type="text" name="net_worth" value={updateNetWorth} onChange={handleUserInput} />
                        </label>
                        <label className="flex">
                            Famous Art:
                            <input name="famous_art" type="text" value={updateFamousArt} onChange={handleUserInput} />
                        </label>
                        <label className="flex">
                            Country:
                            <input name="country" type="text" value={updateCountry} onChange={handleUserInput} />
                        </label>
                        <label className="flex">
                            Art Source:
                            <input name="artSrc" type="text" value={updateArtSrc} onChange={handleUserInput} />
                        </label>
                        <label className="flex">
                            <button type="button" onClick={handleSubmit}>Update</button>
                            <button type="button" onClick={handleCloseBtn}>Cancel</button>
                        </label>
                    </form>
                </div>
            )}
        </div>
    );
}

export default UpdateBtn;
