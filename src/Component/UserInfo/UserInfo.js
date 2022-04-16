import React from 'react';
import { useParams } from 'react-router-dom';
import useUsers from '../Hook/useUsers';
import SingleUser from '../SingleUser/SingleUser';

const UserInfo = () => {
    let {userId} = useParams();
    
    const allUsers = useUsers(`https://jsonplaceholder.typicode.com/users?id=${userId}`)


    return (
        <div className='container'>
            <SingleUser user={allUsers[0]}>
                {
                    {email: allUsers[0]?.email,
                    phone: allUsers[0]?.phone}
                }
            </SingleUser>
        </div>
    );
};

export default UserInfo;