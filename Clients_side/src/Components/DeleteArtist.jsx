import React from 'react';
import '../App.css'

function DeleteBtn({ id, fetchData }) {

    const handleClick = async () => {
        try {
            const response = await fetch(`http://localhost:8001/api/custom-artist/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                } 
            });

            if (response.ok) {
                console.log("Deleted")
                fetchData();
            }

        } catch (err) {
            console.error('Error deleting artist:', err.message);
        }
    };

    return (
        <button onClick={handleClick} className='delete_btn'>
            Delete
        </button>
    );
}

export default DeleteBtn;
