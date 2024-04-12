import React, { useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        try {
            const response = await fetch('http://localhost:8001/api/sign-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            if (!response.ok) {
                throw new Error('Sign-up failed');
            }
            
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div className="main-container">
            <h2 className='signup'>Sign Up</h2>
            <form onSubmit={handleSubmit} className='form'>
                <div className='input-div'>
                    <label htmlFor="name" className='label'>Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className='input'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='input-div'>
                    <label htmlFor="email" className='label'>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className='input'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='input-div'>
                    <label htmlFor="username" className='label'>Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className='input'
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='input-div'>
                    <label htmlFor="password" className='label'>Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className='input'
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="button">Sign Up</button>
            </form>
            <div className="signup-link">
                <p>Already have an account? <Link to="/login-user">Log In</Link></p>
            </div>
        </div>
    );
};

export default SignUp;
