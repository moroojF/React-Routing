import React from 'react';

import { Link } from '@reach/router';

const PageThree = (props) => {
    return (
        <>
            <div className="mt-4 text-center text-capitalize">
                <h1 style={{ color: `${props.tColor}`, backgroundColor: `${props.bgColor}` }}>{props.word}</h1>
            </div>
            <div className="row mt-4">
                <div className="col-9"></div>
                <div className="col-3">
                    <Link to="/home">PageOne</Link>
                </div>
            </div>
        </>
    );
}

export default PageThree;