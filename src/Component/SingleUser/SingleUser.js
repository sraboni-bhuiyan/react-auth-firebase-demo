import React from 'react';
import { Link } from 'react-router-dom';

const SingleUser = ({user}) => {

    const {name, id} = user || {};


    return (
        <div className="col-4 gy-2">
            <div class="card shadow p-3 mb-5 bg-body rounded">
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{id}</h6>
                <Link to='/'>Link</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleUser;