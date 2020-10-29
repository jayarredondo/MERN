import React from 'react';

import UsersList from '../components/UsersList'

const Users = () => {

    const USERS = [{
        id: 'u1',
        name: 'Jay Arredondo', 
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fjustjayhimself%2Fstatus%2F677800411382747136&psig=AOvVaw1lSG08zLTjA_j-plFgDk-o&ust=1604072289093000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLi85omR2uwCFQAAAAAdAAAAABAD',
        places: 3
    }];


    return (
    <UsersList items={USERS} />
    );
}

export default Users;