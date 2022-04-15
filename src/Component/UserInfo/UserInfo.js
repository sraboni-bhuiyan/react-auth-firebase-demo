import React from 'react';
import { useParams } from 'react-router-dom';

const UserInfo = () => {
    let params = useParams();
    console.log(params);
    return (
        <div>
            user
        </div>
    );
};

export default UserInfo;