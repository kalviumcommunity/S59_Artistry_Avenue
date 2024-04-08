import React from 'react';
import '../App.css'

function DeleteBtn({ id, fetchData }) {

    const handleClick = async () => {
        try {
            const response = await fetch(`https://s59-artistry-avenue-4.onrender.com/api/custom-artist/${id}`, {
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
