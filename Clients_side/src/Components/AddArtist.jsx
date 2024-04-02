import React, { useState } from 'react'
import './AddArtist.css'

function AddArtist() {

  const [artistName, setartistName] = useState("");
  const [artCategory, setartCategory] = useState("");
  const [age, setage] = useState("");
  const [netWorth, setnetWorth] = useState("");
  const [famousArt, setfamousArt] = useState("");
  const [country, setcountry] = useState("");
  const [artSrc, setartSrc] = useState("");

  const [data, setData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'artistName':
        setartistName(value);
        break;
      case 'artCategory':
        setartCategory(value);
        break;
      case 'age':
        setage(value);
        break;
      case 'netWorth':
        setnetWorth(value);
        break;
      case 'famousArt':
        setfamousArt(value);
        break;
      case 'country':
        setcountry(value);
        break;
      case 'artSrc':
        setartSrc(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    const postData = { name_of_the_artist: artistName, art_category: artCategory, age: age, net_worth: netWorth, famous_art: famousArt, country: country, artSrc: artSrc }
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8001/api/new-item", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      });

      if (response.ok) {
        const responseData = await response.json();
        setData(responseData);
      }
      if (!response.ok) {
        console.log("failed")
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className='playground'>
        <h2 className='title'>Add your own Artist below:</h2>
        <div className='form-container'>
          <form onSubmit={handleSubmit} action="" className='form'>
            <input type="text" name='artSrc' placeholder="Add Image's Link" className='form_el' onChange={handleChange} />
            <input type="text" name='artistName' placeholder="Enter Artist's name" className='form_el' onChange={handleChange} />
            <input type="text" name='age' placeholder="Enter Artist's age" className='form_el' onChange={handleChange} />
            <input type="text" name='country' placeholder="Enter Artist's country" className='form_el' onChange={handleChange} />
            <input type="text" name='netWorth' placeholder="Enter Artist's net worth" className='form_el' onChange={handleChange} />
            <select name="artCategory" className='form_el' onChange={handleChange}>
              <option selected disabled value="Art Category">Choose Art Category</option>
              <option value="music">Music</option>
              <option value="architect">Architect</option>
              <option value="sculptor">Sculptor</option>
              <option value="painter">Painter</option>
              <option value="fashion designer">Fashion Designer</option>
              <option value="photographer">Photographer</option>
            </select>
            <button type='submit' className='addArtist_btn'>Add Artist</button>
          </form>

        </div>
      </div>

      {data && (
        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default AddArtist
