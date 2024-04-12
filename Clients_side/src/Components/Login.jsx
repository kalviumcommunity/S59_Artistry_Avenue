import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import {useNavigate } from "react-router-dom";
import './Login.css'

const Login = ({ setIsLoggedIn }) => {
  const Navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [verified , setverified] = useState(false)
  const [error, setError] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  // for user authentication
  const signInUser = async () => {
    try {
      const response = await fetch('http://localhost:8001/api/login-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
      }
      
      const responseData = await response.json();
      console.log("logged in true")
      return responseData;
    } catch (error) {
      setError(error.message);
      throw new Error('Login failed');
    }
  };
  
  // for form submission and sets the cookie to successful login
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responseData = await signInUser(); 
      document.cookie = `username=${responseData.user.username}; path=/;`; 
      document.cookie = `token=${responseData.token}; path=/;`; ; 
      setverified(true)
      console.log('Login successful');
      
      setError('');
    } catch (error) {
      console.error('Login failed:', error.message);
      return
    }
    setIsLoggedIn(true); 
    Navigate('/')

  };

  return (
    <div className='container'>
      <div className="form-container">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit} className='form'>
          <input type='text' name='username' placeholder='Username' value={formData.username} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          <p className='signup-link'>New user? <Link to="/SignUp">Sign up</Link></p>
          <button type="submit" className='button'>Log In</button>
          {error && <p style={{ color:  'red' }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;