import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Logout({ setIsLoggedIn }) {
    const [logoutStatus, setLogoutStatus] = useState(null);

    const logout = () => {
        document.cookie = `username=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
        console.log("Logout successful");
        setLogoutStatus('success');
        setIsLoggedIn(false);
        console.log("logged in false")
    };

    return (
        <div className='container'>
            <div className='logout-container'>
                <h1>Do you want to log out?</h1>
                <button onClick={() => logout()}>Logout</button>
                {logoutStatus === 'success' && <p>Logout successful</p>}
                {logoutStatus === 'error' && <p>Logout unsuccessful</p>}
                <p>
                    <Link to="/sign-user">Sign in</Link> again
                </p>
            </div>
        </div>
    );
}

export default Logout;