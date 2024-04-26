import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddUserForm from './AddUser';

/**fetching data using useEffect  and setting  that data to the setUser and now displaying it in the return statement
 * next we want to add new user which uses addUser() and now posts the data of the new user collected from addUser.js
 * Again   we have deleteuser function which deletes a particular data
 * 
 * 
 */

function PostsList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch data from JSON Server when the component mounts
        fetch('http://localhost:3030/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []); // Empty dependency array ensures this effect runs only once on mount


    const addUser = async (userData) => {
        const maxId = users.length > 0 ? Math.max(...users.map(user => user.id)) : 0;
        const newUser = { ...userData, id: maxId + 1 };
        const response = await fetch('http://localhost:3030/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        const addUser = await response.json;
        setUsers(prevUsers => [...prevUsers, addUser])
    }


    const deleteUser = (id) => {
        fetch(`http://localhost:3030/users/${id}`, { method: 'DELETE' });
        setUsers(users.filter(user => user.id !== id));
    }


    return (
        <div>
            <AddUserForm addUser={addUser} />
            <h2>Posts</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <strong>{user.id}</strong>
                        <strong>{user.first_name}</strong>
                        <div><p>{user.email} , {user.country}</p></div>
                        <Link to={`/vehicles/${user.id}`}><button>read more</button></Link>
                        <button onClick={() => deleteUser(user.id)}>Delete</button>
                    </li>

                ))}
            </ul>
        </div>
    );
}

export default PostsList;
