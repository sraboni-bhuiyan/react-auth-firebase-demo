import React from 'react';
import { Link } from 'react-router-dom';

const SingleUser = ({user}) => {

    const {name, id} = user || {};


    return (
        <div className="col-4 gy-2">
            <div className="card shadow p-3 mb-5 bg-body rounded">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{id}</h6>
                <Link to={`/user/${id}`}>User Info</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleUser;