import React from 'react';
import {Link} from 'react-router-dom';

const PageNotFound = () => (
    <div>
        Page Not Found
        <Link to="/dashboard">Go home</Link>
    </div>
);

export default PageNotFound;