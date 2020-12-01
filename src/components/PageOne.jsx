import React from 'react';
import { Link } from '@reach/router';

const PageOne = () => {
    return (
        <>
            <div className="mt-4 text-center">
                <h1>Welcome</h1>
            </div>
            <div className="row mt-4">
                <div className="col-9"></div>
                <div className="col-3">
                    <Link to="/4">PageTwo</Link>
                </div>
            </div>
        </>
    );
}

export default PageOne;