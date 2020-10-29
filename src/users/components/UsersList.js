import React from 'react';

import './UsersList.css'
import UserItem from './UserItem'

const UsersList = props => {
    if (props.items.length === 0) {
        return (
            <div className="center">
                <h2> No users found.</h2>
            </div>
        )
    }

    return (
        //use curly braces to show hte result of a javascript expression in JSX code.
        <ul>
            {props.items.map(user => (
                 <UserItem 
                 key={user.id} 
                 id={user.id} 
                 image={user.image} 
                 name={user.name} 
                 placeCount={user.places} />
            ))}
        </ul>
    );
};

export default UsersList;