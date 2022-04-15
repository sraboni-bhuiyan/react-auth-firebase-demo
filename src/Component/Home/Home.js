import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useUsers from '../Hook/useUsers';
import SingleUser from '../SingleUser/SingleUser';

const Home = () => {
    
    const usersData = useUsers('https://jsonplaceholder.typicode.com/users')

    if(usersData.length){
        usersData.length = 4
    }

    return (
        <div className='container'>
            <p>Total users: {usersData.length}</p>
            <div className="row">
                {
                    usersData?.map(user => <SingleUser key={user.id} user={user}></SingleUser>)
                }
            </div>
            <Link to='/users'>Load more...</Link>
        </div>
    );
};

export default Home;