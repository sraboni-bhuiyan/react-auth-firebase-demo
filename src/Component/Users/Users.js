import React, { useState } from 'react';
import useUsers from '../Hook/useUsers';
import SingleUser from '../SingleUser/SingleUser';

const Users = () => {

    const allUser = useUsers('https://jsonplaceholder.typicode.com/users')


    return (
        <div className='container'>
            <div className="row">
            {
                allUser?.map(user => <SingleUser key={user.id} user={user}></SingleUser>)
            }
            </div>
        </div>
    );
};

export default Users;