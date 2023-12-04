import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [UsersList, setUsersList] = useState([]);
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsersList(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);
    
    return (
        <div>
            {UsersList.map(user => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
};

export default UserList;