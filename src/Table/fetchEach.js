import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Posts() {
    const [users, setUsers] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        // Fetch data from JSON Server when the component mounts
        fetch(`http://localhost:3030/users/${id}`)
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [id]); // Empty dependency array ensures this effect runs only once on mount

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                <li>{users.id} </li>
                <li> {users.first_name}</li>
                <li>   {users.last_name}</li>
                <li> {users.email}</li>


                <Link to={'/vehicles'}>
                    <button>Back</button></Link>

            </ul>
        </div>
    );
}

export default Posts;
